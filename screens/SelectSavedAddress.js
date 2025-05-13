import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StyledButton, ButtonText } from '../components/styles';

const SelectSavedAddress = ({ route }) => {
    const navigation = useNavigation();
    const { userNum } = route.params;
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const res = await axios.get(`http://10.32.10.30:3000/api/user/location/${userNum}`);
            setLocations(res.data);
        } catch (err) {
            console.error('위치 불러오기 오류:', err);
        }
    };

    const handleLocationSelect = (loc1, loc2) => {
        const place = `${loc1} ${loc2}`;
        navigation.navigate('Classlist', { place });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>나의 위치</Text>

            {/* 버튼 가로 정렬 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <StyledButton
                    style={{ flex: 1, marginRight: 5 }}
                    onPress={() => navigation.navigate('SelectAddress', { userNum })}
                >
                    <ButtonText>위치 추가</ButtonText>
                </StyledButton>

                <StyledButton
                    style={{ flex: 1, marginLeft: 5 }}
                >
                    <ButtonText>위치 편집</ButtonText>
                </StyledButton>
            </View>

            <FlatList
                data={locations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleLocationSelect(item.userlocation1, item.userlocation2)}
                        style={{
                            padding: 16,
                            marginTop: 12,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: '#ccc',
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            {item.userlocation1} {item.userlocation2}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default SelectSavedAddress;
