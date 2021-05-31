import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import theStore from './store/store';
import DrinkCard from './components/DrinkCard';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import { useFonts } from 'expo-font';

import { Nunito_200ExtraLight, Nunito_300Light, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import DrinkList from './components/DrinkList';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={theStore}>
      <View style={styles.container} stickyHeaderIndices={[0]}>
        <View style={{ paddingTop: 60, paddingBottom: 10, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 6, color: '#4a52a2', fontFamily: 'Nunito_600SemiBold' }}>Dranks</Text>
        </View>
        <DrinkList />

        <StatusBar style="auto" />
        {/* <Login></Login>
        <CreateAccount></CreateAccount> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    overflow: 'visible',
  },
  stickyHeader: {},
});
