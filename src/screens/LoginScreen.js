import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useState } from 'react';
// importando o AsyncStorage para armazenar os dados do cadastro e login localmente
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen ({ navigation }) {

  // desestruturação de array com useState para definir os estados e métodos que atualizam esses estados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // função assíncrona que executa o login do usuário com base no email e senha fornecidos por ele durante o cadastro 
  async function login(email, password) {
    try {

      // armazena o objeto user (que está armazenado localmente) em uma variável
      const userData = await AsyncStorage.getItem('user');
      
      // verifica se existe o objeto user
      if (!userData) {
        Alert.alert('Error', 'No registered user found.');
        return;
      }
      
      // converte o JSON user em um objeto javascript novamente
      const user = JSON.parse(userData);

      // verifica se os parametros passados na função (referentes aos estados do useState) são iguais aos dados que foram passados no cadastro
      if (email == user.email && password == user.password){
        Alert.alert('Success');
        // navega para a tela Home
        navigation.replace('Home')
      } 
      else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    } 
    // tratamento de erros
    catch (error) {
      Alert.alert('Error', 'Login failed.');
    }
  }


  return (
    <ImageBackground
          source={require('../../assets/backgroundIMG.png')}
          style={styles.background}
          resizeMode="cover">
    
      <View style={styles.container}>
          <View style={styles.formContainer}>
    
            <Text style={styles.title}>Welcome Back,</Text>
            <Text style={styles.subtitle}>Please Log In</Text>

            {/* Inputs para receber os dados do login */}
            <TextInput
              style={styles.input}
              onChangeText= {setEmail}
              value={email}
              placeholder="E-mail"
            />
            <TextInput
              style={styles.input}
              onChangeText= {setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
            />
            {/* Botão que quando clicado executa a função de realizar o login, passando os estados de email e senha como parâmetros */}
            <TouchableOpacity style={styles.button} onPress={() => login(email, password)}> 
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGoBack} title="Go Back" onPress={() => navigation.replace('Welcome')}> 
              <Text style={styles.buttonTextGoBack}>Go Back</Text>
            </TouchableOpacity>
    
          </View>
      </View>
    </ImageBackground>
    
  );
}

// estilização
const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      padding: 18,
      marginTop: 25,
      alignItems: 'center',
      width: 260,
      borderRadius: 15
    },
    background: {
      flex: 1,
      width: '100%',
      heigth: '100%',
    },
    button: {
      backgroundColor: '#424242',
      padding: 15,
      borderRadius: 15,
      marginTop: 40,
      width: 220
    },
    buttonGoBack: {
      padding: 15,
      borderRadius: 15,
      marginTop: 10,
      width: 220,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonTextGoBack: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      marginTop: 40,
      marginBottom: 10,
      fontWeight: 'bold',
      color: 'white',
    },
    subtitle: {
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center', 
      fontWeight: 'bold',
      color: 'white'
    },
    formContainer: { 
      margin: 10,
      width: windowWidth * 0.8, 
      height: 450,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: '#84848494',
    },
  });
  