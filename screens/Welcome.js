import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../components/styles';

const Welcome = ({ route }) => {
    const navigation = useNavigation();
    const { userName, userRole, userImg } = route.params || {};

    useEffect(() => {
        if (!userName || !userRole || !userImg) {
            Alert.alert('오류', '사용자 정보가 올바르지 않습니다.');
        }
    }, []);

    const handleAddLocation = () => {
        navigation.navigate('SelectAddress', {
            userName,
            userRole,
            userImg
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{userName}님, 환영합니다</Text>
            <Text style={styles.subtitle}>{userRole === '강사' ? '강사 전용 홈' : '수강생 전용 홈'}</Text>

            <Image
                source={{ uri: userImg }}
                style={styles.profileImage}
            />

            {userRole === '수강생' && (
                <TouchableOpacity style={styles.addLocationButton} onPress={handleAddLocation}>
                    <Text style={styles.addLocationText}>위치 추가</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Welcome;
