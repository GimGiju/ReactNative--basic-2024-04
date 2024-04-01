import React from "react";
import {FlatList, View, Text} from "react-native";

const styles = StyleSheet.create({
  container: {flex:1, paddingTop:20},
  secionHeader:{
    paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft:10,
    fontSize: 16, fontWeight: 'bold'
  },
  item: {padding:10, fontSize: 20, height:40}
})

export default function FlatListBasic({name}){
  const[text, setText] = useState('');
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 30, padding: 15, fontWeight: 4}}>내가 좋아하는 과일</Text>
            <FlatList
                data={[
                  {key:'Apple'},{key:'Banana'},{key:'Cherry'},{key:'Orange'},{key:'Mango'} 
                ]} 
                renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}/>
        </View>
      );
}