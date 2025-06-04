import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ClassScreenContainer } from '../components/styles';
import styled from 'styled-components/native';
import { getUser } from '../utils/userInfo';

const LessonManage = ({ navigation }) => {
    const [instNum, setInstNum] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            setInstNum(user?.userNum);
            setLoading(false);
        };
        fetchUser();
    }, []);

    if (loading) {
        return (
            <ClassScreenContainer>
                <ActivityIndicator size="large" color="#000" />
            </ClassScreenContainer>
        );
    }

    return (
        <ClassScreenContainer style={{ paddingTop: 85 }}>
            <View style={{ marginTop: 20, alignItems: 'center', gap: 15 }}>
                <Button onPress={() => navigation.navigate('AddLesson', { instNum })}>
                    <ButtonText>레슨 생성</ButtonText>
                </Button>
                <Button onPress={() => navigation.navigate('LessonList', { mode: 'edit', instNum })}>
                    <ButtonText>레슨 수정</ButtonText>
                </Button>
                <Button onPress={() => navigation.navigate('LessonList', { mode: 'delete', instNum })}>
                    <ButtonText>레슨 삭제</ButtonText>
                </Button>
                <Button onPress={() => navigation.navigate('LessonList', { instNum })}>
                    <ButtonText>레슨 조회</ButtonText>
                </Button>
            </View>
        </ClassScreenContainer>
    );
};

export default LessonManage;

const Button = styled.TouchableOpacity`
    background-color: #9dc658;
    padding: 22px;
    border-radius: 10px;
    margin-vertical: 20px;
    width: 60%;
    align-self: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`; 