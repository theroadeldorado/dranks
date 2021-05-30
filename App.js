import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import { Provider, useDispatch, useSelector } from 'react-redux';
import theStore from './store/store';
import CreateAccount from './components/CreateAccount';

export default function App() {
  return (
    <Provider store={theStore}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Login></Login>
        <CreateAccount></CreateAccount>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
