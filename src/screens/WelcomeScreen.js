import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen ({ navigation }) {

  return (
    <ImageBackground
        source={require('../../assets/backgroundIMG.png')}
        style={styles.background}
        resizeMode="cover">

      <View style={styles.container}>
        <View style={styles.formContainer}>

          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.titleName}>YourGym+</Text>
          <Text style={styles.subtitle}>Stronger Every Day. Start Your Transformation Now.</Text>

            {/* Botões de Cadastro e Login que levam para suas respectivas telas */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}> 
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}> 
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}

// estilização
const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      heigth: '100%',
    },
    button: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      width: 220
    },
    buttonText: {
      color: '#424242',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      marginTop: 50,
      fontWeight: 'bold',
    },
    titleName: {
      fontSize: 40,
      marginBottom: 15,
      fontWeight: 'bold',
      color: 'white'
    },
    subtitle: {
      fontSize: 16,
      color: 'white',
      marginBottom: 20,
      marginTop: 10,
      textAlign: 'center', 
      fontWeight: 'bold',
    },
    formContainer: { 
      margin: 10,
      width: windowWidth * 0.8, 
      height: 400,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: '#84848494',
    },
  });
  