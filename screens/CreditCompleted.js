import React from 'react';
import axios from 'axios';
import { Text, View, ScrollView } from 'react-native';
import { useRoute, useNavigation  } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import {
    LessonInfoBox,
    LessonThumbnail,
    LessonInfoText,
    PaymentButtonRow,
    PaymentSubmitButton,
    PaymentSubmitText
} from '../components/styles';
import { getUser } from '../utils/userInfo';

const CreditCompleted = () => {
    
    const route = useRoute();
    const { lesson } = route.params || {};
    const navigation = useNavigation();
    const user = getUser();
    const userNum = user?.userNum;
    

    if (!lesson) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fbfff4' }}>
                <Text>레슨 정보가 없습니다.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fbfff4' }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, paddingBottom: 60 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 30 }}>
                결제가 완료되었습니다.
            </Text>

            <View style={{ height: 50 }} />

            <LessonInfoBox style={{ backgroundColor: '#efefef', alignItems: 'center', paddingVertical: 30, borderRadius: 10, width: '85%' }}>
                <LessonThumbnail
                    source={{ uri: `http://192.168.45.169:5000/img/${lesson.lesThumbImg}` }}
                    style={{ width: 100, height: 100, backgroundColor: '#ccc', marginBottom: 20 }}
                />
                <LessonInfoText style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 6 }}>{lesson.lesName}</LessonInfoText>
                <LessonInfoText style={{ fontSize: 20, marginBottom: 4 }}>{lesson.lesTime}</LessonInfoText>
                <LessonInfoText style={{ fontSize: 20, marginBottom: 4 }}>{lesson.instName}</LessonInfoText>
                <LessonInfoText style={{ fontSize: 20 }}>{lesson.lesDetailPlace}</LessonInfoText>
            </LessonInfoBox>

            <PaymentButtonRow style={{ justifyContent: 'space-around', marginTop: 40, width: '85%' }}>
                <PaymentSubmitButton
                    style={{ width: 130, backgroundColor: '#7aae3e' }}
                    onPress={() => navigation.navigate('TabNavigator', { screen: 'Order' })}
                >
                    <PaymentSubmitText>상세 정보</PaymentSubmitText>
                </PaymentSubmitButton>
            </PaymentButtonRow>
        </ScrollView>
    );
};

export default CreditCompleted;
