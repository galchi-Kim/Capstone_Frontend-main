import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import {
    LessonDetailContainer,
    ScrollTabContainer,
    ScrollTabButton,
    ScrollTabText,
    StyledAppCard,
    StyledAppCardLeft,
    StyledAppCardRight,
    StyledAppCardTitle,
    StyledAppCardPlace
} from '../components/styles';

import { getUser } from '../utils/userInfo';

const CATEGORIES = [
    '승인대기',
    '승인완료진행예정',
    '입금대기',
    '레슨완료',
    '취소요청',
    '거절'
];

const InstState = () => {
    const nav = useNavigation();
    const route = useRoute();
    const scrollRef = useRef(null);

    const initialCategory = route.params?.category || '승인대기';
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [applications, setApplications] = useState([]);
    const [instNum, setInstNum] = useState(null);

    useEffect(() => {
        const fetchUserAndData = async () => {
            try {
                const user = await getUser();
                if (user?.userNum) {
                    setInstNum(user.userNum);

                    const res = await axios.get(`http://192.168.45.169:5000/api/application/instructor/${user.userNum}`);
                    setApplications(res.data);
                    console.log('📥 신청 목록 응답:', res.data.length, '개');
                } else {
                    console.warn('❗ 로그인 사용자 정보 없음');
                }
            } catch (err) {
                console.error('신청 목록 불러오기 실패:', err);
            }
        };

        fetchUserAndData();
    }, [selectedCategory]);

    useLayoutEffect(() => {
        nav.setOptions({
            headerTitle: '',
            headerBackTitleVisible: false,
        });

        const index = CATEGORIES.findIndex(cat => cat === selectedCategory);
        if (scrollRef.current && index !== -1) {
            scrollRef.current.scrollTo({ x: index * 110, animated: true });
        }
    }, [nav, selectedCategory]);

    const filteredList = applications.filter(app => app.status === selectedCategory);

    return (
        <LessonDetailContainer>
            <StatusBar barStyle="dark-content" />

            <ScrollTabContainer
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={scrollRef}
            >
                {CATEGORIES.map((category) => (
                    <ScrollTabButton
                        key={category}
                        selected={selectedCategory === category}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <ScrollTabText>{category}</ScrollTabText>
                    </ScrollTabButton>
                ))}
            </ScrollTabContainer>

            <FlatList
                data={filteredList}
                contentContainerStyle={{ padding: 16 }}
                keyExtractor={(item) => item.appId.toString()}
                renderItem={({ item }) => (
                    <StyledAppCard onPress={() => nav.navigate('InstApplicationDetail', { appId: item.appId })}>
                        <StyledAppCardLeft>
                            <StyledAppCardTitle>{item.lesName}</StyledAppCardTitle>
                            {item.lesDetailPlace ? (
                                <StyledAppCardPlace>{item.lesDetailPlace}</StyledAppCardPlace>
                            ) : null}
                        </StyledAppCardLeft>

                        {(item.lesDate || item.lesTime) && (
                            <StyledAppCardRight>
                                <StyledAppCardPlace>
                                    {item.lesDate || ''}
                                    {item.lesDate && item.lesTime ? ' / ' : ''}
                                    {item.lesTime || ''}
                                </StyledAppCardPlace>
                            </StyledAppCardRight>
                        )}
                    </StyledAppCard>
                )}
                ListEmptyComponent={
                    <StyledAppCardPlace style={{ textAlign: 'center', padding: 20 }}>
                        해당 상태의 신청이 없습니다.
                    </StyledAppCardPlace>
                }
            />
        </LessonDetailContainer>
    );
};

export default InstState;