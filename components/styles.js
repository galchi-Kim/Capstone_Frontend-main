import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export const Colors = { 
    accountBackGroundColor: "#fbfff4", // 로그인 배경
    whiteColor: "#FFFFFF", 
    textColor: "#434343", // 기본 텍스트
    exTextColor: "#C0C0C0", //ID/PW 입력창 예시 텍스트
    logoColor: "#fff000", 
    loginButtonColor: "#EFEFEF", 
};
const { accountBackGroundColor, whiteColor, textColor, exTextColor, logoColor, loginButtonColor } = Colors;

// 상태 표시줄 높이 설정
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;  // 상태표시줄 높이

export const MainContainer = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: white;
`;

// 전체 컨테이너
export const StyledContainer = styled.View`
    flex: 1;
    padding-top: ${StatusBarHeight + 235}px;
    background-color: ${accountBackGroundColor};
`;

// 내부 컨테이너
export const InnerContainer = styled.View`
    flex: 1;
    top: -130px;
    align-items: center;

    /* border-color: orange; */
    /* border-width: 2px; */
`;

// 클래스 컨테이너
export const ClassContainer = styled.View`
    width: 100%;
    top: 100px;
    align-items: center;
    justify-content: center; 
    
    border-color: blue; 
    border-width: 2px; 
`;

// 클래스 선택 화면 컨테이너
export const ClassScreenContainer = styled.View`
    flex: 1;
    padding-top: ${StatusBarHeight + 120}px;
    background-color: ${whiteColor};

    /* border-color: pink; */
    /* border-width: 2px; */
`;

// 초보자 화면 컨테이너 
export const BeginnerScreenContainer = styled.View`
    flex: 1;
    background-color: ${whiteColor};
    
    /* border-color: blue; */
    /* border-width: 2px; */
`;

// 로고 
export const PageLogo = styled.Image`
    width: 300px;
    height: 260px;
`;
// 제목 
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${logoColor};
    padding: 10px;
`;

// 부제목
export const SubTitle = styled.Text`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: ${textColor};
    
`;

// 폼 영역
export const StyledFormArea = styled.View`
    width: 70%;
`;

// 입력 필드 
export const StyledTextInput = styled.TextInput`
    background-color: ${whiteColor};
    padding: 20px;
    padding-left: 20px;
    padding-right: 40px;
    border-radius: 10px;
    font-size: 15px;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${textColor};
    
    border-width: 2px;
    border-color: #b8d88a;
`;

// 입력 필드 라벨
export const StyledInputLabel = styled.Text`
    color: ${textColor};
    font-size: 15px;
    text-align: left;
`;

// 버튼
export const StyledButton = styled.TouchableOpacity`
    padding: 20px;
    width: 100%;
    background-color: #b8d88a;
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 60px;
    align-self: center;
`;
// 로그인 버튼
export const LoginButton = styled.TouchableOpacity`
    padding: 20px;
    width: 30%;
    background-color: ${loginButtonColor};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 0px;
    height: 60px;
    align-self: center;
`;
// 로그아웃 버튼
export const LogoutButton = styled.TouchableOpacity`
    padding: 15px;
    width: 40%; 
    background-color: ${loginButtonColor};
    justify-content: center;
    border-radius: 10px;
    height: 50px; 
    align-self: center;
`;

// 버튼 텍스트 
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    line-height: 18px;
`;


// 클래스 버튼 
export const ClassButton = styled.TouchableOpacity`
    padding: 40px;
    width: 48%;
    background-color: ${whiteColor};
    border-radius: 10px;
    margin-vertical: 10px; 
    align-items: center; 
    border-color: black;
    border-width: 3px;
`;
// 클래스 선택 버튼 텍스트
export const ClassButtonText = styled.Text`
    color: ${textColor};
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`;

// 도시 리스트 전체 (왼쪽)
export const CityList = styled.ScrollView`
    width: 30%;
    background-color: #f9f9f9;
`;

// 각 도시 항목
export const CityItem = styled.TouchableOpacity`
    padding: 16px 10px;
    border-bottom-width: 0.5px;
    border-color: #ccc;
`;

// 선택된 도시 (강조 회색 배경)
export const CityItemSelected = styled(CityItem)`
    background-color: #e0e0e0;
`;

// 도시 이름 텍스트
export const CityText = styled.Text`
    font-size: 16px;
    color: black;
`;

// 오른쪽 군구 리스트 영역
export const DistrictContainer = styled.View`
    width: 70%;
    padding: 10px;
`;

// 군구 항목 하나 (가로 30%, 세로 고정 높이)
export const DistrictBox = styled.TouchableOpacity`
    width: 30%;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-width: 0.5px;
    border-color: #ddd;
    border-radius: 8px;
    margin-bottom: 12px;
`;
export const DistrictBoxSelected = styled(DistrictBox)`
    background-color: #ccc;
`;
// 군구 텍스트
export const DistrictText = styled.Text`
    font-size: 14px;
    color: black;
`;

// 군구 리스트 줄(row) 정렬용 래퍼
export const DistrictRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

// 하단 내비게이션 텍스트
export const BottomNavigationText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${textColor}; 
`;

// FlatList 스타일 (2x2)
export const GridWrapper = {
    justifyContent: 'space-between'
};

// 회원가입 링크
export const TextLink = styled.TouchableOpacity`
    position: absolute;
    right: 30px;
    top: 40px;
`;

// 회원가입 링크 텍스트
export const TextLinkContent = styled.Text`
    color: ${textColor};
    font-size: 18px;
`;

// 강사로그인 링크
export const TextLink2 = styled.TouchableOpacity`
    position: absolute;
    right: 30px;
    top: 70px;
`;

// 강사로그인 링크 텍스트 
export const TextLinkContent2 = styled.Text`
    color: ${textColor};
    font-size: 18px;
`;

// 아이디/비번 찾기 링크
export const TextLink3 = styled.TouchableOpacity`
    position: absolute;
    right: 30px;
    top: 100px;
`;

// 아이디/비번 찾기 링크 텍스트
export const TextLinkContent3 = styled.Text`
    color: ${textColor};
    font-size: 15px;
`;

// 상단 커스텀헤더 
export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${logoColor};
    padding: 10px;
`;

// LessonDetail.js 레슨 상세 화면 컨테이너
export const LessonDetailContainer = styled.View`
    flex: 1;
    background-color: #fbfff4;
    justify-content: center;

    /* border-color: green; */
    /* border-width: 2px; */
`;

// LessonDetail.js 레슨 배경 이미지 + 강사 이미지 컨테이너
export const LessonHeaderContainer = styled.View`
    width: 100%;
    align-items: center;
`;

// LessonDetail.js 레슨 배경 이미지
export const LessonBackgroundImage = styled.Image`
    width: 100%;
    height: 200px;
    resize-mode: cover;
`;

// LessonDetail.js 강사 이미지
export const LessonProfileImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top: -50px;
    border-color: black;
    border-width: 2px;
`;

// LessonDetail.js 강사명 + 레슨명 + 가격 컨테이너
export const LessonDetailInfoContainer = styled.View`
    width: 100%;
    align-items: center;
    padding: 10px;
`;

// LessonDetail.js 강사명 스타일
export const InstructorName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
`;

// LessonDetail.js 레슨명(타원) 컨테이너 
export const LessonNameContainer = styled.View`
    padding: 10px 20px;
    border-radius: 20px;
    border-color: black;
    border-width: 2px;
    align-items: center;
    justify-content: center;
`;

// LessonDetail.js  레슨명(타원) 텍스트
export const LessonNameText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

// LessonDetail.js 가격 텍스트
export const LessonPrice = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: black;
    align-self: flex-end;
    margin-top: 15px;
    margin-right: 20px;
`;

// LessonDetail.js 시간(타원) 컨테이너
export const LessonTimeContainer = styled.View`
    padding: 10px 20px;
    border-radius: 20px;
    border-color: black;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

// LessonDetail.js 시간(타원) 텍스트
export const LessonTimeText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

// LessonDetail.js 회색 박스 컨테이너
export const LessonDetailsContainer = styled.View`
    width: 90%;
    margin-top: 20px;
`;

// LessonDetail.js 회색 박스 
export const LessonInfoBox = styled.View`
    background-color: #eae9eb;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

// LessonDetail.js 박스 제목
export const LessonInfoTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
    letter-spacing: 1px;      
    line-height: 34px;   
`;

// LessonDetail.js 박스 내부 내용 
export const LessonInfoText = styled.Text`
    font-size: 20px;
    color: black;
    letter-spacing: 1px;      
    line-height: 34px;   
`;

// Mypage.js 컨테이너
export const MypageContainer = styled.View`
    flex: 1;
    background-color: #fbfff4;
`;


// Mypage.js 프로필 컨테이너
export const ProfileWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    
    /* border-color: blue; */
    /* border-width: 2px; */
`;

// Mypage.js 프로필 이미지 
export const ProfileImage = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 50px;
    border: 3px solid gray;
    margin-right: 20px;
`;

// Mypage.js 프로필 컨테이너 내부의 userRole
export const RoleBox = styled.View`
    background-color: #fff53c;
    padding: 6px 15px;        
    border-radius: 6px;
    align-self: flex-start;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    margin-bottom: 6px;
`;

// Mypage.js 프로필 컨테이너 내부의 userRole text
export const RoleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

// Mypage.js 프로필 컨테이너 내부의 userName
export const NameBox = styled.View`
    background-color: #ccc;
    padding: 6px 12px;
    border-radius: 6px;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
`;

// Mypage.js 프로필 컨테이너 내부의 userName text
export const NameText = styled.Text`
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
`;

export const SectionTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

// Mypage.js 회색 박스
export const GrayBox = styled.View`
    background-color: #efefef;
    margin: 0 20px 20px 20px;
    padding: 15px;
    border-radius: 10px;
`;

// Mypage.js 열 
export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

// Mypage.js 텍스트버튼 리뷰관리, 프로필수정, 비밀번호 변경, 로그아웃, 회원탈퇴, 결제내역, 로그아웃
export const TextButton = styled.TouchableOpacity`

`;

// Mypage.js 텍스트버튼 리뷰관리, 프로필수정, 비밀번호 변경, 로그아웃, 회원탈퇴, 결제내역, 로그아웃
export const TextButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

// PwChange.js 컨테이너
export const PwChangeContainer = styled.View`
    flex: 1;
    background-color: #fbfff4;
    justify-content: center;
`;

// PwChange.js 회색 박스
export const PwCangeGrayBox = styled.View`
    margin: 0 20px 20px 20px;
    padding: 15px;
    border-radius: 10px;
`;

export const GenderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const GenderButton = styled.TouchableOpacity`
    background-color: ${props => props.selected ? "#ddff94" : "#EFEFEF"};
    padding: 10px 20px;
    border-radius: 8px;
    width: 48%;
    align-items: center;
`;

export const GenderText = styled.Text`
    color: ${textColor};
    font-size: 15px;
    font-weight: bold;
`;

// Signup.js 건강 정보 전체 버튼 묶음 컨테이너
export const HealthOptionsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

// Signup.js 개별 건강 항목 버튼 (흰 배경 → 노란 배경으로 토글)
export const HealthOptionButton = styled.TouchableOpacity`
    background-color: ${(props) => (props.selected ? '#FFE600' : '#FFFFFF')};
    padding: 12px 18px;
    border-radius: 10px;
    margin: 6px 8px 0 0;
`;

// Signup.js 버튼 내부 텍스트
export const HealthOptionText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: black;
`;

// Signup.js
export const HealthSelectContainer = styled.View`
    border: 2px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 20px;
`;

// Signup.js  개인정보 동의 영역 컨테이너
export const AgreementContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

// Signup.js  개인정보 동의 본문 텍스트
export const AgreementText = styled.Text`
    font-size: 13px;
    color: #333;
    line-height: 20px;
`;

// Signup.js  체크박스와 텍스트를 포함하는 행
export const CheckboxRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

// Searchinfo.js 컨테이너
export const SearchContainer = styled.View`
    flex: 1;
    background-color: #FFFCAF;
    padding-horizontal: 20px;
    justify-content: center;
`;


// instMain.js 상태 회색 박스
export const StatusBox = styled.View`
    background-color: #fff;
    border: 5px solid #ccc;
    border-radius: 10px;
    margin: 30px;
    padding: 10px 30px;
`;

// instMain.js 
export const StatusRow = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-vertical: 20px;
`;

// instMain.js 
export const StatusLabel = styled.View`
    flex-direction: column;
`;

// instMain.js 상태 텍스트
export const StatusLabelText = styled.Text`
    font-size: 20px;
    color: black;
    font-weight: bold;
`;

// instMain.js 상태 카운트 값
export const StatusValue = styled.Text`
    font-size: 30px;
    color: green;
    font-weight: bold;
`;

// instProfileEdit.js
export const CareerInput = styled.TextInput`
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    text-align-vertical: top;
    background-color: #fff;
`;

// instProfileEdit.js
export const InfoBox = styled.View`
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 10px 12px;
    margin-top: 6px;
    align-self: flex-start;
`;

// instProfileEdit.js
export const SaveCancelButton = styled.TouchableOpacity`
    background-color: ${(props) => props.bgColor || '#ccc'};
    padding: 10px 40px;
    border-radius: 10px;
`;

// instProfileEdit.js
export const SaveCancelText = styled.Text`
    font-weight: bold;
    color: black;
`;

// instProfileEdit.js
export const ProfileInputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
    padding: 0 35px;
`;

// instProfileEdit.js
export const ProfileNameInputBox = styled.View`
    margin-left: 10px;
    width: 61.5%;
`;

// instProfileEdit.js
export const ProfileInputLabel = styled.Text`
    font-weight: bold;
    margin-bottom: 5px;
`;

// instProfileEdit.js
export const ProfileInput = styled.TextInput`
    border-width: 1px;
    border-color: black;
    border-radius: 8px;
    padding: 8px;
`;

// instProfileEdit.js
export const CareerInputWrapper = styled.View`
    margin-bottom: 0px;
`;

// instProfileEdit.js
export const CareerInputLabel = styled.Text`
    font-weight: bold;
    margin-bottom: 5px;
`;

// instProfileEdit.js
export const CareerInputBox = styled.TextInput`
    border-width: 1px;
    border-color: black;
    border-radius: 8px;
    padding: 10px;
    text-align-vertical: top;
    min-height: 150px;
`;

// instState.js
export const ScrollTabContainer = styled.ScrollView`
    flex-direction: row;
    margin-top: 50px;
`;

// instState.js
export const ScrollTabButton = styled.TouchableOpacity`
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: ${(props) => (props.selected ? '#FFE600' : '#ffffff')};
    height: 45px;
`;

// instState.js
export const ScrollTabText = styled.Text`
    font-size: 15px;
    color: black;
`;

export const CartItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: #ccc;
    padding: 10px 0;
`;

export const CartItemInfo = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const TopBarContainer = styled.View`
    height: 60px;
    background-color: #FFF59D;
    justify-content: center;
    padding: 0 16px;
`;

export const LessonBoxContainer = styled.View`
    background-color: #F0F0F0;
    padding: 16px;
    border-radius: 8px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfoBox = styled.View`
    background-color: #FFF9C4;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const HealthInput = styled.TextInput`
    border-width: 1px;
    border-color: black;
    padding: 12px;
    border-radius: 8px;
    margin-top: 12px;
`;

// Quit.js
export const QuitContainer = styled.View`
    flex: 1;
    padding: 30px 20px;
    background-color: fbfff4;
`;

// Quit.js
export const QuitTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
`;

// Quit.js
export const QuitInfoText = styled.Text`
    font-size: 16px;
    color: black;
    margin-bottom: 12px;
`;

// Quit.js
export const QuitWarningText = styled.Text`
    font-size: 16px;
    color: gray;
    margin-bottom: 20px;
`;

// Quit.js
export const QuitDangerText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: red;
    margin-top: 10px;
`;

// Quit.js
export const QuitCheckboxRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

// Quit.js
export const QuitCheckboxText = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    color: black;
`;

// LessonDetail.js 찜 버튼
export const HeartButton = styled.TouchableOpacity`
    position: absolute;
    top: 200px;
    right: 20px;
    z-index: 10;
`;

// Credit.js 
export const CreditScreenContainer = styled.ScrollView`
    flex: 1;
    background-color: ${whiteColor};
`;

// Credit.js 
export const CreditHeader = styled.View`
    background-color: ${logoColor};
    padding: 16px;
    flex-direction: row;
    align-items: center;
`;

// Credit.js 
export const SectionLabel = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin: 20px;
`;

// Credit.js 
export const LessonInfoContainer = styled.View`
    flex-direction: row;
    padding: 0 20px;
`;

// Credit.js 
export const LessonThumbnail = styled.Image`
    width: 80px;
    height: 70px;
    background-color: #ccc;
    border-radius: 8px;
`;

// Credit.js 
export const LessonDetailTextContainer = styled.View`
    margin-left: 16px;
    flex: 1;
`;

// Credit.js 
export const InstructorPhoto = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #ddd;
`;

// Credit.js 
export const InstructorContainer = styled.View`
    align-items: center;
    margin-top: 30px;
`;

// Credit.js 
export const InstructorNameText = styled.Text`
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
`;

// Credit.js 
export const InstructorInfoBox = styled.View`
    background-color: #efefef;
    margin: 20px;
    padding: 10px;
    border-radius: 8px;
`;

// Credit.js 
export const InfoTitle = styled.Text`
    font-weight: bold;
    margin-bottom: 4px;
`;

// Credit.js 
export const PaymentAmountContainer = styled.View`
    padding: 0 20px;
`;

// Credit.js 
export const PaymentAmountText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 6px;
`;

// Credit.js 
export const PaymentMethodContainer = styled.View`
    padding: 0 20px;
    margin-top: 30px;
`;

// Credit.js 
export const PaymentButtonRow = styled.View`
    flex-direction: row;
    margin-top: 12px;
`;

// Credit.js 
export const PaymentMethodButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${(props) => (props.selected ? logoColor : '#efefef')};
    border-radius: 8px;
    margin-right: 10px;
`;

// Credit.js 
export const PaymentSubmitButton = styled.TouchableOpacity`
    background-color: ${logoColor};
    padding: 16px;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 8px;
`;

// Credit.js 
export const PaymentSubmitText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;

//승인대기화면
export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #fff;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const InfoText = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ButtonRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const RejectButton = styled.TouchableOpacity`
    background-color: #ddd;
    padding: 15px 25px;
    border-radius: 10px;
`;

export const ApproveButton = styled.TouchableOpacity`
    background-color: #fff000;
    padding: 15px 25px;
    border-radius: 10px;
`;

// InstApplicationList.js 신청 리스트 화면
export const AppListContainer = styled.View`
    flex: 1;
    background-color: white;
`;

export const AppCard = styled.TouchableOpacity`
    border-width: 1px;
    border-color: #ddd;
    border-radius: 8px;
    padding: 12px;
    margin: 12px 16px;
    background-color: #f9f9f9;
`;

export const AppCardRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AppProfileImg = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 12px;
`;

export const AppInfoBox = styled.View`
    flex: 1;
`;

export const AppName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const AppLocation = styled.Text`
    font-size: 14px;
    color: #555;
    margin-top: 2px;
`;

export const AppLesson = styled.Text`
    font-size: 14px;
    margin-top: 4px;
`;

export const AppStatus = styled.Text`
    font-size: 14px;
    margin-top: 2px;
    color: blue;
`;

// instState.js 신청 카드 스타일
export const StyledAppCard = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-bottom: 12px;
`;

export const StyledAppCardLeft = styled.View`
    flex: 1;
`;

export const StyledAppCardRight = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
`;

export const StyledAppCardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const StyledAppCardPlace = styled.Text`
    font-size: 14px;
    color: #555;
    margin-top: 4px;
`;

// 알림 전용 전체 컨테이너
export const AlarmContainer = styled.View`
    flex: 1;
    padding-top: 20px;
    background-color: ${accountBackGroundColor};
`;

// 알림 전용 내부 컨테이너
export const AlarmInner = styled.View`
    flex: 1;
    top: 0px;
    align-items: center;
`;

// InstApplicationDetail.js
export const InstInfoBox = styled.View`
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const InstInfoTitle = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    color: black;
`;

export const InstInfoText = styled.Text`
    font-size: 15px;
    color: black;
    margin-bottom: 4px;
`;

export const InstButtonRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`;

export const InstActionButton = styled.TouchableOpacity`
    flex: 1;
    padding-vertical: 12px;
    border-radius: 8px;
    align-items: center;
    background-color: ${(props) => props.bgColor || '#ccc'};
    margin-horizontal: 6px;
`;

export const InstActionText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: black;
`;

// LessonList.js
export const LessonListContainer = styled.View`
    flex: 1;
    background-color: white;
    padding-top: 10px;
`;

export const LessonListHeader = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: black;
    margin-bottom: 15px;
    padding-left: 15px;
`;

export const LessonItemContainer = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    align-items: center;
`;

export const LessonItemImage = styled.Image`
    width: 80px;
    height: 70px;
    margin-right: 20px;
    border-radius: 10px;
    background-color: #ddd;
`;

export const LessonItemTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const LessonItemRating = styled.Text`
    margin-top: 3px;
`;

export const LessonItemInfoRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LessonItemInfoLeft = styled.Text`
    flex: 1;
    text-align: left;
`;

export const LessonItemInfoRight = styled.Text`
    flex: 1;
    text-align: right;
`;

// 레슨 카드 스타일
export const LessonCard = styled.View`
    background-color: #f2f2f2;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
`;

export const LessonTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
`;

export const LessonMeta = styled.Text`
    font-size: 13px;
    color: #555;
`;

export const RedBorderTextInput = styled(StyledTextInput)`
    border-width: 2px;
    border-color: #b8d88a;
`;

// 로그인 버튼
export const WideLoginButton = styled.TouchableOpacity`
    padding: 20px;
    width: 100%;
    background-color: #7aae3e;
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 0px;
    height: 60px;
    align-self: center;
`;