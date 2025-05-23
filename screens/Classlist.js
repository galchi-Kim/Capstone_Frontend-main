import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import {
    StyledFormArea,
    ClassButton,
    ClassContainer,
    ClassButtonText,
    GridWrapper,
    ClassScreenContainer
} from './../components/styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const classData = [
    { id: '1', title: '초보자', screen: 'Beginner' },
    { id: '2', title: '중급자', screen: 'Intermediate' },
    { id: '3', title: '전문가', screen: 'Expert' },
    { id: '4', title: '자격증', screen: 'Certification' }

];

const Classlist = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { place } = route.params;

    // // 뒤로가기 버튼 숨기기
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => null, // 뒤로가기 버튼 제거
    //     });
    // }, [navigation]);

    return (
        <ClassScreenContainer>
            <StatusBar barStyle="dark-content" />
            <ClassContainer>
                <StyledFormArea>
                    <FlatList
                        data={classData}
                        renderItem={({ item }) => (
                            <ClassButton
                                onPress={() =>
                                    navigation.navigate(item.screen, {
                                        place: place,
                                        level: item.title
                                    })
                                }
                            >
                                <ClassButtonText>{item.title}</ClassButtonText>
                            </ClassButton>
                        )}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        columnWrapperStyle={GridWrapper}
                    />
                </StyledFormArea>
            </ClassContainer>
        </ClassScreenContainer>
    );
};

export default Classlist;
