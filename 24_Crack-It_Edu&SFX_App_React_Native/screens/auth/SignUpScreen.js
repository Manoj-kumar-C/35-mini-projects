import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log('Signing up with:', username, email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/auth/signup.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={handleSignUp}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    width: '100%', // Use 100% width to center the button
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    width: '80%',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
});

export default SignUpScreen;
