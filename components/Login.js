import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from '../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      await dispatch(signInWithEmailAndPassword(email, password));
      setEmail('');
      setPassword('');
      // navigation.navigate('TabNav');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Email"
          style={{ borderColor: '#333', borderWidth: 2, padding: 4 }}
          onChangeText={(text) => setEmail(text)}
          autoCompleteType="email"
          keyboardType="email-address"
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={{ borderColor: '#333', borderWidth: 2, padding: 4 }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCompleteType="password"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View>
        <TouchableOpacity style={{ borderColor: '#red', borderWidth: '2', padding: 4 }} onPress={submit} disabled={email === '' || password === ''}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
        // onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
