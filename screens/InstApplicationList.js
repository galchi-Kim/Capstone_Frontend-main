import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../utils/userInfo';

const InstApplicationList = ({ route }) => {
    const navigation = useNavigation();
    const { status } = route.params;
    const [applications, setApplications] = useState([]);
    const [instNum, setInstNum] = useState(null);

    // 로그인된 강사의 번호 가져오기
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser();
                if (user?.userNum) {
                    setInstNum(user.userNum);
                }
            } catch (err) {
                console.error('getUser() 실패:', err);
            }
        };
        fetchUser();
    }, []);

    // 강사 번호와 상태값으로 신청 목록 조회
    useEffect(() => {
        if (!instNum) return;

        const fetchApplications = async () => {
            try {
                const encodedStatus = encodeURIComponent(status);
                const res = await axios.get(`http://192.168.45.169:5000/api/application/byStatus/${encodedStatus}/${instNum}`);
                setApplications(res.data);
            } catch (err) {
                console.error('레슨 리스트 불러오기 실패:', err);
            }
        };

        fetchApplications();
    }, [status, instNum]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 15,
                paddingLeft: 15
            }}>
                신청 레슨 목록
            </Text>

            <FlatList
                data={applications}
                keyExtractor={(item) => item.appId.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InstApplicationDetail', { appId: item.appId })}
                    >
                        <View style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={{
                                    uri: item.lesThumbImg
                                        ? `http://192.168.45.169:5000/img/${item.lesThumbImg}`
                                        : 'http://192.168.45.169:5000/img/default_lesThumbImg.png'
                                }}
                                style={{
                                    width: 80,
                                    height: 70,
                                    marginRight: 20,
                                    borderRadius: 10,
                                    backgroundColor: '#ddd'
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.lesName}</Text>
                                <Text>⭐ {item.rating}</Text>
                                <Text style={{ fontSize: 13, color: 'gray' }}>{item.lesDetailPlace}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default InstApplicationList;