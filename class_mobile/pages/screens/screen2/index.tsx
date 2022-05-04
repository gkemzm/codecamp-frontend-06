import styled from "@emotion/native";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const ViewContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Screen2 = ({ route }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("inputData");
        if (value !== null) {
          console.log(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <ViewContainer>
      <Text>여기가 Screen2 입니다!!!</Text>
    </ViewContainer>
  );
};

export default Screen2;
