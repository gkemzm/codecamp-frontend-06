import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import styled from "@emotion/native";
import Navigation from "./pages/navigation/index";

const ViewContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
`;

const SubTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  margin: 20px;
  padding: 10px;
`;

const MoveScreen = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Storage = styled.Pressable`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const TouchableTitle = styled.Text`
  color: white;
`;

export default function App() {
  const onChangeInput = (event: any) => {
    console.log(event.nativeEvent.text);
  };
  return (
    // <ViewContainer>
    //   <Title>프론트엔드 6기</Title>
    //   <SubTitle>리액트 네이티브 2일차</SubTitle>
    //   <Input onChange={onChangeInput} />
    //   <MoveScreen>
    //     <TouchableTitle>스택 이동</TouchableTitle>
    //   </MoveScreen>
    //   <Storage>
    //     <Text>스토리지 저장</Text>
    //   </Storage>
    // </ViewContainer>
    <Navigation />
  );
}
