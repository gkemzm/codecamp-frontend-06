import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "@emotion/native";

const LoginBtn = styled.TouchableOpacity`
  width: 60%;
  height: 50;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextArea = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Div = styled.View`
  display: flex;
`;

const Input = styled.TextInput``;

export default function App() {
  const onChangeInput = (event: any) => {
    console.log(event.nativeEvent.text);
  };
  return (
    // <ScrollView>
    <View>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" /> */}
      {/* <Image style={{width: 200, heigth: 200}} source={require('./assets/icon.png')} /> */}
      <Text>
        reactNative<Text style={{ fontWeight: "800" }}>reactNative</Text>
      </Text>
      <Text>123</Text>
      <View style={{ width: "100%", flex: 1, backgroundColor: "black" }}></View>
      <View style={{ width: "100%", flex: 1, backgroundColor: "black" }}></View>
      <View
        style={{
          width: "100%",
          height: "80",
          flex: 1,
          backgroundColor: "yellow",
          paddingLeft: "15%",
        }}
      >
        <TextInput
          onChange={onChangeInput}
          style={{ width: "80%", backgroundColor: "white" }}
        >
          reactNative
        </TextInput>
      </View>
      <LoginBtn>
        <TextArea>로그인</TextArea>
      </LoginBtn>
    </View>
    // </ScrollView>
  );
}
