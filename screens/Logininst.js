import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import { Formik } from "formik";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import axios from 'axios';
import { setUser } from "../utils/userInfo";


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    StyledFormArea,
    StyledInputLabel,
    StyledTextInput,
    ButtonText,
    SubTitle,
    Colors,
    TextLink2,
    TextLinkContent2,
    RedBorderTextInput,
    WideLoginButton
} from "../components/styles";

const { exTextColor } = Colors;

const Logininst = ({ navigation }) => {
    const [loginError, setLoginError] = useState(false);

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar barStyle="dark-content" />

                {/* 일반 회원 로그인 이동 */}
                <TextLink2 onPress={() => navigation.replace("Login")}>
                    <TextLinkContent2>회원 로그인</TextLinkContent2>
                </TextLink2>

                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require("../assets/img/logo.png")} />
                    <SubTitle>강사 로그인</SubTitle>
                    <View style={{ height: 50 }} />
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={async (values) => {
                            try {
                                const res = await axios.post('http://192.168.45.169:5000/api/login', {
                                    userEmail: values.email,
                                    userPw: values.password
                                });

                                const user = res.data.user;

                                if (user.userRole === "강사") {
                                    await setUser({
                                        userNum: user.userNum,
                                        userName: user.userName,
                                        userEmail: user.userEmail,
                                        userImg: user.userImg,
                                        userRole: user.userRole,
                                    });

                                    navigation.replace("instMain");
                                } else {
                                    setLoginError(true); // 일반 회원이면 로그인 실패 처리
                                }
                            } catch (err) {
                                console.error("로그인 실패:", err);
                                setLoginError(true);
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                {loginError && (
                                    <Text style={{ color: "red", textAlign: "center", marginBottom: 10 }}>
                                        이메일 또는 비밀번호가 올바르지 않거나 강사 계정이 아닙니다.
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
                                <WideLoginButton onPress={handleSubmit}>
                                    <ButtonText>로그인</ButtonText>
                                </WideLoginButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, ...props }) => (
    <View>
        <StyledInputLabel><Text>{label}</Text></StyledInputLabel>
        <StyledTextInput {...props} />
    </View>
);

export default Logininst;