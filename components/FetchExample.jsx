import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList} from "react-native";


export default function FetchExample(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')            // 네트워크로 접속
      .then(res => res.json())            //res = response
      .then(obj => {
        // console.log(obj);     //{title, releaseYear}, postman으로 확인할 것!
        setData(obj.movies);
      })
      .catch(error => {console.log(error);})      // 에러를 받아서 콘솔에 찍어주라는 뜻
      .finally(setLoading(false));                // 끝났다는걸 표시
  }, []);
      return (
        <View style={{flex: 1, padding: 10}}>
          {isLoading ? (
            <ActivityIndicator />
          ) :(
            <FlatList
              data={data}
              keyExtractor={({id}) => id}
              renderItem={({item}) => (
                <Text>{item.title}, {item.releaseYear}</Text>
              )}
            />
          )}
        </View>
      );
}