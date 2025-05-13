import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import { Formik } from "formik";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import axios from 'axios';
import { setUser } from '../utils/userInfo';

import {  
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledInputLabel,
    StyledTextInput,
    ButtonText,
    Colors,
    TextLink,
    TextLinkContent,
    TextLink2,
    TextLinkContent2,
    LoginButton,
    TextLink3,
    TextLinkContent3,
} from "../components/styles";

const { exTextColor } = Colors;

const Login = ({ navigation }) => {
    const [loginError, setLoginError] = useState(false);

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar barStyle="dark-content" />

                <TextLink onPress={() => navigation.navigate("Signup")}>
                    <TextLinkContent>회원가입</TextLinkContent>
                </TextLink>

                <TextLink2 onPress={() => navigation.replace("Logininst")}>
                    <TextLinkContent2>강사 로그인</TextLinkContent2>
                </TextLink2>

                <TextLink3 onPress={() => navigation.navigate("Searchinfo")}>
                    <TextLinkContent3>이메일/비밀번호 찾기</TextLinkContent3>
                </TextLink3>

                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require("../assets/img/logo.png")} />
                    <PageTitle>파크골프ON</PageTitle>
                    <SubTitle>회원 로그인</SubTitle>

                    <Pressable style={styles.button} onPress={() => {}}>
                        <Text style={styles.text}>카카오 로그인</Text>
                    </Pressable>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                            axios.post('http://10.32.10.30:3000/api/login', {
                                userEmail: values.email,
                                userPw: values.password
                            })
                            .then(res => {
                                const user = res.data.user;

                                if (user && user.userName && user.userRole) {
                                    setLoginError(false);

                                    setUser({
                                        userName: user.userName,
                                        userRole: user.userRole,
                                        userImg: user.userImg
                                    });

                                    if (user.userRole === '수강생') {
                                        navigation.navigate("SelectSavedAddress", {
                                            userNum: user.userNum
                                        });

                                    } else {
                                        navigation.navigate("TabNavigator", {
                                            screen: "Class",
                                        });
                                    }

                                } else {
                                    setLoginError(true);
                                }
                            })
                            .catch(err => {
                                console.error('로그인 실패:', err);
                                setLoginError(true);
                            });
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                {loginError && (
                                    <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
                                        이메일 또는 비밀번호가 올바르지 않습니다.
                                    </Text>
                                )}

                                <MyTextInput
                                    label="이메일"
                                    placeholder="example@gmail.com"
                                    placeholderTextColor={exTextColor}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    keyboardType="email-address"
                                />

                                <MyTextInput
                                    label="비밀번호"
                                    placeholder="* * * * * * *"
                                    placeholderTextColor={exTextColor}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    secureTextEntry={true}
                                />

                                <LoginButton onPress={handleSubmit}>
                                    <ButtonText>로그인</ButtonText>
                                </LoginButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, ...props }) => {
    return (
        <View> 
            <StyledInputLabel>
                <Text>{label}</Text>
            </StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FEE500",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Login;
