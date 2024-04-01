import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// export default function Counter() {
//   const [count, setCount] = useState(0);      // const [count, setCount] = useState(0);: useState 훅을 사용하여 count라는 상태 변수와 해당 상태를 업데이트하는 setCount 함수를 선언합니다.(0)으로 초기값으로 0을 설정합니다.
//   const handleClick = () => {       //const handleClick = () => { ... }: handleClick 함수를 정의합니다. 버튼이 클릭되었을 때 호출되며, setCount 함수를 사용하여 count 상태를 증가
//     // if (count < 5){
//     //   setCount((prevCount) => parseFloat((prevCount + 0.1).toFixed(1)));   // 0.1 씩 증가하는 코드
//     // }
//     setCount((count + 1 >= 5) ? 5 : count +1)   // 제일 간단한 방법  / 1씩 증가해서 5에서 멈추는 코드
//     // if (count < 5){
//     //   setCount(count + 1)
//     // }
//     // let newNumbers = [...numbers, count +1];
//     // setNumbers(newNumbers);          //  위 코드랑 세트 /이방법도 사용가능
//     // setNumbers(numbers => [...numbers, count + 1]);     // 새로운 객체를 참조하는 방법
//     // setNumbers(numbers.push(count + 1));     //이렇게 사용하면 에러
//     // numbers.push(count + 1);      // 권장하는 방법은 아니지만 잘 돌아가긴함
//   }
//   return (
//     <>    
//       <div style={{fontSize: '5rem'}}>{count}</div>
//       <button onClick={handleClick}>증가하기</button>     {/*<button onClick={handleClick}>증가하기</button>: 클릭 이벤트가 발생하면 */}
//     </>
//   );
// }


// parseFloat 함수는 문자열을 부동 소수점 숫자로 변환하는 JavaScript 내장 함수입니다. 이 함수는 문자열을 분석하고 부동 소수점 숫자로 변환합니다. 만약 변환이 실패하면 NaN을 반환합니다.
// 예를 들어, parseFloat("3.14")는 3.14로 평가됩니다.
// .toFixed() 메서드는 부동 소수점 숫자를 고정 소수점 표기법으로 반올림한 문자열로 변환합니다. 이 메서드는 소수점 이하의 숫자 자릿수를 지정하고 해당 자릿수까지 반올림합니다.
// 예를 들어, 3.141592653589793.toFixed(2)는 "3.14"로 평가됩니다.
// 따라서 위의 코드에서 parseFloat((prevCount + 0.1).toFixed(1)) 부분은 이전 카운트 값에 0.1을 더한 후에 소수점 이하 자릿수를 1자리로 고정한 뒤에 이를 부동 소수점 숫자로 변환하는 것입니다.

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8, marginBottom: 8,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginTop: 6, marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{padding:10, fontSize:50, fontWeight:'bold'}}>{count}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          key='1' style={styles.button} 
          onPress={() => setCount(count+1)} 
          disabled={count>=5}
        >
          <Text style={styles.buttonLabel}>{count<5 ? '증가' : '그만'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          key='2' style={styles.button}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonLabel}>리셋</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}