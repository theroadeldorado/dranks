import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import drinks from '../assets/drinks/drinks';
import DrinkCard from './DrinkCard';

const Item = ({ data }) => (
  <View>
    <Text>TEST</Text>
    <DrinkCard lightColor="#ffe7d4" darkColor="#8b6c52" drinkData={data}></DrinkCard>
  </View>
);

console.log(drinks);
function DrinkList(props) {
  const {} = props;
  const renderItem = ({ item }) => <Item data={drinks} />;
  return (
    <SafeAreaView>
      <FlatList data={drinks} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
}

export default DrinkList;
