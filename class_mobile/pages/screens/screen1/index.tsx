import React, { useState } from "react";
import styled from "@emotion/native";
import {
  Alert,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export default function Screen1({ navigation }) {
  const [value, setValue] = useState("");
  const onChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    console.log(event.nativeEvent.text);
    setValue(event.nativeEvent.text);
  };

  const storeDate = () => {
    try {
      AsyncStorage.setItem("inputData", value);
      console.log("등록완료");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ViewContainer>
      <Title>프론트엔드 6기</Title>
      <SubTitle>리액트 네이티브 2일차</SubTitle>
      <Input onChange={onChangeInput} />
      <MoveScreen
        onPress={() => navigation.navigate("screen2", { isEdit: true })}
      >
        <TouchableTitle>스택 이동</TouchableTitle>
      </MoveScreen>
      <Storage onPress={storeDate}>
        <Text>스토리지 저장</Text>
      </Storage>
    </ViewContainer>
  );
}
