import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword } from '../store/actions';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = async () => {
    if (!password) return;

    try {
      await dispatch(createUserWithEmailAndPassword(email, password, name));
      setEmail('');
      setPassword('');
      console.log('user Created');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="What name?"
          style={{ borderColor: '#333', borderWidth: 2, padding: 4 }}
          onChangeText={(text) => setName(text)}
          autoCompleteType="name"
          autoFocus={true}
          autoCorrect={false}
        />
      </View>
      <View>
        <TextInput
          style={{ borderColor: '#333', borderWidth: 2, padding: 4 }}
          placeholder="What's your email?"
          onChangeText={(text) => setEmail(text)}
          autoCompleteType="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          style={{ borderColor: '#333', borderWidth: 2, padding: 4 }}
          placeholder="What's your password?"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCompleteType="password"
          autoFocus={true}
          autoCapitalize="none"
        />
      </View>
      <View>
        <TouchableOpacity style={{ borderColor: '#red', borderWidth: '2', padding: 4 }} onPress={createAccount} disabled={password === ''}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
