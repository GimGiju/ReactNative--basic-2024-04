import React from "react";
import {View, Text} from "react-native";

export default function HelloWorld(){
    return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Try editing me! 🎉</Text>
          <Text>안녕하시지~</Text>
          <Text>지금은 쉬는 시간</Text>
        </View>
      );
}