import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchLesson = ({ route }) => {
    const { selectedDistrict, userName, userRole, userImg } = route.params;
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        axios.get(`http://10.32.10.30:3000/api/lessons?district=${selectedDistrict}`)
            .then(res => setLessons(res.data))
            .catch(err => console.error('레슨 불러오기 실패:', err));
    }, [selectedDistrict]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 16,
                paddingHorizontal: 20,
            }}
            onPress={() => {}}
        >
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>{item.lesName}</Text>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 4 }}>{item.lesDetailPlace}</Text>
            <Text style={{ fontSize: 14 }}>⭐ {item.rating}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
                data={lessons}
                renderItem={renderItem}
                keyExtractor={(item) => item.lesNum.toString()}
                ListHeaderComponent={
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingHorizontal: 20,
                        paddingTop: 10,
                        paddingBottom: 6
                    }}>
                        {selectedDistrict} 레슨 목록
                    </Text>
                }
            />
        </View>
    );
};

export default SearchLesson;
