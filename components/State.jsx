import React, { useState } from "react";
import {View, Text, Button} from "react-native";

export default function State(name){
  const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
          <Text>
            I'm {name}, and I'm {isHungry ? 'hungry' : 'full'}!
          </Text>
          <Button 
            onPress={() => {setIsHungry(false);}}
            disabled={!isHungry}
            title={isHungry ? '제발 우유를 주세요(허리가 아파요 집가게 해주세요!!!!!)' : '감사합니다!'}
          />
        </View>
      );
}