import React, { useState } from 'react';
import {
    Text,
    FlatList,
    ToastAndroid
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import {
    MainContainer,
    CityList,
    CityItem,
    CityItemSelected,
    CityText,
    DistrictContainer,
    DistrictBox,
    DistrictText,
} from '../components/styles';

const CITIES = [
    '서울', '경기', '인천', '강원', '대전', '충북', '충남', '광주',
    '전북', '전남', '대구', '경북', '경남', '부산', '울산', '제주'
];

const DAEGU_DISTRICTS = [
    '중구', '남구', '서구',
    '북구', '동구', '수성구',
    '달서구', '달성군', '군위군'
];

const SelectAddress = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { userNum } = route.params;

    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityPress = (city) => {
        if (city === '대구') {
            setSelectedCity(city);
        } else {
            ToastAndroid.show('서비스 준비 중입니다', ToastAndroid.SHORT);
            setSelectedCity(null);
        }
    };

    const handleDistrictPress = async (district) => {
        const place = `${selectedCity} ${district}`;
        try {
            await axios.post('http://10.32.10.30:3000/api/user/location', {
                userNum,
                userlocation1: selectedCity,
                userlocation2: district
            });
            navigation.navigate('Classlist', { place });
        } catch (error) {
            console.error('위치 저장 실패:', error);
            ToastAndroid.show('위치 저장에 실패했습니다', ToastAndroid.SHORT);
        }
    };

    const renderDistrictItem = ({ item }) => (
        <DistrictBox onPress={() => handleDistrictPress(item)}>
            <DistrictText>{item}</DistrictText>
        </DistrictBox>
    );

    return (
        <MainContainer>
            <CityList>
                {CITIES.map((city) => {
                    const isSelected = selectedCity === city;
                    const CityComponent = isSelected ? CityItemSelected : CityItem;
                    return (
                        <CityComponent key={city} onPress={() => handleCityPress(city)}>
                            <CityText>{city}</CityText>
                        </CityComponent>
                    );
                })}
            </CityList>

            <DistrictContainer>
                {selectedCity === '대구' && (
                    <FlatList
                        data={DAEGU_DISTRICTS}
                        renderItem={renderDistrictItem}
                        keyExtractor={(item) => item}
                        numColumns={3}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                    />
                )}
            </DistrictContainer>
        </MainContainer>
    );
};

export default SelectAddress;
