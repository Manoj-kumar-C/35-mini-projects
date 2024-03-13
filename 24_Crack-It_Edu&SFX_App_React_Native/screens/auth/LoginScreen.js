import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Image, Icon } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/auth/login.png')} style={styles.logo} />
        <Icon
          name='user'
          type='font-awesome'
          color='#517fa4'
          size={30}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
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
          title="Login"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={handleLogin}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.link}>Don't have an account? Sign Up here</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    paddingLeft: 50,
    borderRadius: 25,
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    width: '80%',
    paddingVertical: 15,
    shadowColor: '#3498db',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Ensure the text is centered
  },
  
  
  
  link: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
