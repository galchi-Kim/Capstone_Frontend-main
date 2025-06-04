import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, ScrollView } from 'react-native';
import {
    LessonDetailContainer,
    GrayBox,
    InstInfoBox,
    InstInfoTitle,
    InstInfoText,
    InstButtonRow,
    InstActionButton,
    InstActionText
} from '../components/styles';

const InstApplicationDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { appId } = route.params;

    const [application, setApplication] = useState(null);

    const formatGender = (gender) => {
        if (gender === 'male') return '남성';
        if (gender === 'female') return '여성';
        return '정보 없음';
    };

    const formatHealthInfo = (infoStr) => {
        if (!infoStr) return '정보 없음';
        try {
            const parsed = JSON.parse(infoStr);
            if (Array.isArray(parsed)) {
                return parsed.join(', ');
            }
            return infoStr;
        } catch (e) {
            return infoStr;
        }
    };

    const formatBirthKorean = (birthStr) => {
        if (!birthStr) return '정보 없음';
        const [y, m, d] = birthStr.split('T')[0].split('-');
        return `${y}년 ${parseInt(m)}월 ${parseInt(d)}일`;
    };

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await axios.get(`http://192.168.45.169:5000/api/application/${appId}`);
                setApplication(res.data);
                console.log('레슨 상태 확인:', res.data.status);
            } catch (err) {
                console.error('신청 상세 조회 실패:', err);
            }
        };
        fetchDetail();
    }, [appId]);

    const handleAction = (type) => {
        Alert.alert(type === 'approve' ? '승인하시겠습니까?' : '거절하시겠습니까?', '', [
            { text: '아니오', style: 'cancel' },
            {
                text: '예',
                onPress: async () => {
                    try {
                        await axios.put(`http://192.168.45.169:5000/api/application/${appId}/status`, {
                            status: type === 'approve' ? '승인완료진행예정' : '거절'
                        });
                        navigation.goBack();
                    } catch (err) {
                        console.error('처리 실패:', err);
                    }
                }
            }
        ]);
    };

    const handleComplete = () => {
        Alert.alert('레슨 완료 처리', '이 레슨을 완료로 변경하시겠습니까?', [
            { text: '아니오', style: 'cancel' },
            {
                text: '예',
                onPress: async () => {
                    try {
                        await axios.put(`http://192.168.45.169:5000/api/application/${appId}/status`, {
                            status: '레슨완료'
                        });
                        navigation.goBack();
                    } catch (err) {
                        console.error('레슨 완료 처리 실패:', err);
                    }
                }
            }
        ]);
    };

    return (
        <LessonDetailContainer>
            {application && (
                <GrayBox>
                    {/* 레슨 정보 */}
                    <InstInfoBox>
                        <InstInfoTitle>레슨 정보</InstInfoTitle>
                        <InstInfoText>레슨명: {application.lesName}</InstInfoText>
                        <InstInfoText>레슨시간: {application.lesTime}</InstInfoText>
                        <InstInfoText>레슨장소: {application.lesDetailPlace}</InstInfoText>
                    </InstInfoBox>

                    {/* 수강생 정보 */}
                    <InstInfoBox>
                        <InstInfoTitle>수강생 정보</InstInfoTitle>
                        <InstInfoText>이름: {application.studentName}</InstInfoText>
                        <InstInfoText>성별: {formatGender(application.userGender)}</InstInfoText>
                        <InstInfoText>생년월일: {formatBirthKorean(application.userBirth)}</InstInfoText>
                        <InstInfoText>건강상태: {formatHealthInfo(application.userHealthInfo)}</InstInfoText>
                    </InstInfoBox>

                    {/* 상태에 따라 버튼 다르게 */}
                    {application.status === '승인대기' && (
                        <InstButtonRow>
                            <InstActionButton bgColor="#7aae3e" onPress={() => handleAction('approve')} style={{ width: 120 }}>
                                <InstActionText>승인</InstActionText>
                            </InstActionButton>
                            <InstActionButton bgColor="#ccc" onPress={() => handleAction('reject')} style={{ width: 120 }}>
                                <InstActionText>거절</InstActionText>
                            </InstActionButton>
                        </InstButtonRow>
                    )}

                    {application.status === '승인완료진행예정' && (
                        <InstButtonRow style={{ justifyContent: 'center' }}>
                            <InstActionButton bgColor="#7aae3e" onPress={handleComplete} style={{ width: 140 }}>
                                <InstActionText>레슨 완료</InstActionText>
                            </InstActionButton>
                        </InstButtonRow>
                    )}
                </GrayBox>
            )}
        </LessonDetailContainer>
    );
};

export default InstApplicationDetail;