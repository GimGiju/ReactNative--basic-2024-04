import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
    backgroundColor: 'aqua',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginTop: 6, marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
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
          // onPress={() => {
          //   if (count < 10) {
          //     setCount(count + 1); 
          //   } else {
          //     setCount(1); 
          //   }
          // }} 
          onPress={() => setCount(count < 10 ? count + 1 : 1)}
        >
          <Text style={styles.buttonLabel}>{count<10 ? '증가' : '그만'}</Text>
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