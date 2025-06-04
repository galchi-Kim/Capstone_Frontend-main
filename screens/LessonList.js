import React, { useEffect, useState, useCallback } from 'react';
import { View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import {
    LessonListContainer,
    LessonListHeader,
    LessonItemContainer,
    LessonItemImage,
    LessonItemTitle,
    LessonItemRating,
    LessonItemInfoRow,
    LessonItemInfoLeft,
    LessonItemInfoRight
} from '../components/styles';
import { FlatList } from 'react-native-gesture-handler';

const LessonList = ({ navigation, route }) => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const { mode, instNum } = route.params || {};

    const fetchLessons = async () => {
        if (!instNum) {
            Alert.alert('오류', '강사 정보를 불러올 수 없습니다.');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.get(`http://192.168.45.169:5000/api/lesson-api/instructor/${instNum}`);
            setLessons(res.data);
        } catch (err) {
            console.error('레슨 조회 실패:', err);
            Alert.alert('레슨 목록을 불러올 수 없습니다.');
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchLessons();
        }, [instNum])
    );

    const deleteLesson = async (lesNum) => {
        try {
            await axios.delete(`http://192.168.45.169:5000/api/lesson-api/${lesNum}`);
            Alert.alert('레슨이 삭제되었습니다.');
            setLessons(prev => prev.filter(item => item.lesNum !== lesNum));
        } catch (err) {
            console.error('레슨 삭제 실패:', err.response?.status, err.message);
            Alert.alert('레슨 삭제에 실패했습니다.');
        }
    };

    const confirmDelete = (lesNum) => {
        Alert.alert(
            '삭제하시겠습니까?',
            '',
            [
                { text: '아니오' },
                {
                    text: '예',
                    onPress: () => {
                        Alert.alert(
                            '삭제 후에는 복구할 수 없습니다. 정말 삭제하시겠습니까?',
                            '',
                            [
                                { text: '아니오' },
                                { text: '예', onPress: () => deleteLesson(lesNum) }
                            ]
                        );
                    }
                }
            ]
        );
    };

    const handlePress = (item) => {
        if (mode === 'edit') {
            navigation.navigate('EditLesson', { lesNum: item.lesNum });
        } else if (mode === 'delete') {
            confirmDelete(item.lesNum);
        } else {
            navigation.navigate('LessonDetail', {
                lesson: {
                    ...item,
                    instImg: item.userImg,
                    instInfo: item.userinfo
                },
                fromOrder: true,
                userId: instNum
            });
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <LessonListContainer>
            <LessonListHeader>
                {mode === 'edit' ? '수정할 레슨 선택' :
                    mode === 'delete' ? '삭제할 레슨 선택' : '내 레슨 목록'}
            </LessonListHeader>

            <FlatList
                data={lessons}
                keyExtractor={item => item.lesNum.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <LessonItemContainer>
                            <LessonItemImage
                                source={{ uri: `http://192.168.45.169:5000/img/${item.lesThumbImg}` }}
                            />
                            <View style={{ flex: 1 }}>
                                <LessonItemTitle>{item.lesName}</LessonItemTitle>
                                <LessonItemRating>⭐ {item.rating}</LessonItemRating>
                                <LessonItemInfoRow>
                                    <LessonItemInfoLeft>{item.instName}</LessonItemInfoLeft>
                                    <LessonItemInfoRight>{item.lesDetailPlace}</LessonItemInfoRight>
                                </LessonItemInfoRow>
                            </View>
                        </LessonItemContainer>
                    </TouchableOpacity>
                )}
            />
        </LessonListContainer>
    );
};

export default LessonList;