import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as styles from './../components/styles';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

const LessonDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { lesson, userId, isFavorited, fromOrder } = route.params;
    const [isFavorite, setIsFavorite] = useState(isFavorited ?? false);

    const {
        lesNum,
        lesName,
        lesPrice,
        lesinfo,
        lesDetailPlace,
        lesTime,
        lesBackgroundImg,
        instName,
        userImg,
        userinfo,
        instImg,
        instInfo
    } = lesson;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!userId || !lesNum) return;

            axios.get(`http://192.168.45.169:5000/api/favorite/${userId}`)
                .then(res => {
                    const found = res.data.some(item => item.lessonId === lesNum);
                    setIsFavorite(found);
                })
                .catch(err => console.error('찜 상태 확인 실패:', err));
        });

        return unsubscribe;
    }, [navigation, userId, lesNum]);

    const handleAddToCart = async () => {
        try {
            const res = await axios.get(`http://192.168.45.169:5000/api/cart/${userId}`);
            const cartItems = res.data;
            const alreadyInCart = cartItems.some(item => item.lesName === lesName);

            if (alreadyInCart) {
                Toast.show('이미 장바구니에 담겨있습니다.', {
                    duration: 3000,
                    position: Toast.positions.BOTTOM,
                    backgroundColor: '#333',
                    textColor: '#fff',
                });
                return;
            }

            await axios.post('http://192.168.45.169:5000/api/cart', {
                userId: userId,
                lessonId: lesNum,
            });

            Toast.show('장바구니에 추가되었습니다.', {
                duration: 3000,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#333',
                textColor: '#fff',
            });

        } catch (err) {
            console.error('장바구니 추가 실패:', err);
        }
    };

    const handleFavorite = async () => {
        try {
            const res = await axios.post('http://192.168.45.169:5000/api/favorite', {
                userId,
                lessonId: lesNum
            });

            if (res.data.removed) {
                Toast.show('찜 취소 완료', {
                    duration: 3000,
                    position: Toast.positions.BOTTOM
                });
                setIsFavorite(false);
            } else {
                Toast.show('찜 추가 완료', {
                    duration: 3000,
                    position: Toast.positions.BOTTOM
                });
                setIsFavorite(true);
            }
        } catch (err) {
            console.error('찜 토글 실패:', err);
        }
    };

    return (
        <styles.LessonDetailContainer>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <styles.LessonHeaderContainer>
                    <styles.LessonBackgroundImage source={{ uri: `http://192.168.45.169:5000/img/${lesBackgroundImg}` }} />
                    <styles.LessonProfileImage source={{ uri: `http://192.168.45.169:5000/img/${userImg}` }} />
                </styles.LessonHeaderContainer>

                {isFavorited !== false && !fromOrder && (
                    <styles.HeartButton onPress={handleFavorite}>
                        <Icon name="heart" size={30} color={isFavorite ? 'red' : 'gray'} />
                    </styles.HeartButton>
                )}

                <styles.LessonDetailInfoContainer>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('instDetailProfile', {
                                instName: lesson.instName.replace(' 강사', '')
                            })
                        }
                    >
                        <styles.InstructorName>{lesson.instName}</styles.InstructorName>
                    </TouchableOpacity>

                    <styles.LessonNameContainer>
                        <styles.LessonNameText>{lesName}</styles.LessonNameText>
                    </styles.LessonNameContainer>
                    <styles.LessonPrice>{parseInt(lesPrice).toLocaleString()} 원</styles.LessonPrice>
                </styles.LessonDetailInfoContainer>

                <styles.LessonDetailsContainer>
                    <styles.LessonInfoBox>
                        <styles.LessonInfoTitle>레슨 설명</styles.LessonInfoTitle>
                        <styles.LessonInfoText>{lesinfo}</styles.LessonInfoText>
                    </styles.LessonInfoBox>

                    <styles.LessonInfoBox>
                        <styles.LessonInfoTitle>강사 경력 및 자격증</styles.LessonInfoTitle>
                        <styles.LessonInfoText>{userinfo}</styles.LessonInfoText>
                    </styles.LessonInfoBox>
                </styles.LessonDetailsContainer>

                <styles.LessonTimeContainer>
                    <styles.LessonTimeText>시간</styles.LessonTimeText>
                </styles.LessonTimeContainer>

                <styles.LessonDetailsContainer>
                    {fromOrder ? (
                        <styles.LessonInfoBox>
                            <styles.LessonInfoTitle>{lesTime}</styles.LessonInfoTitle>
                            <styles.LessonInfoText>{lesDetailPlace}</styles.LessonInfoText>
                        </styles.LessonInfoBox>
                    ) : (
                        <TouchableOpacity onPress={handleAddToCart}>
                            <styles.LessonInfoBox>
                                <styles.LessonInfoTitle>{lesTime}</styles.LessonInfoTitle>
                                <styles.LessonInfoText>{lesDetailPlace}</styles.LessonInfoText>
                            </styles.LessonInfoBox>
                        </TouchableOpacity>
                    )}
                </styles.LessonDetailsContainer>
            </ScrollView>
        </styles.LessonDetailContainer>
    );
};

export default LessonDetail;
