import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
    
        <Text style={styles.title}>Home Screen</Text>

        <View style={styles.buttonsContainer}>
          {/* botões de navegação entre as telas */}
          <TouchableOpacity style={styles.button} title="Go to Details" onPress={() => navigation.replace('Details')}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton} title="Go to Profile" onPress={() => navigation.replace('Profile')}> 
          </TouchableOpacity>
          
          {/* botão de logout para o usuário desconectar da conta */}
          <TouchableOpacity style={styles.button} title="Log Out" onPress={() => navigation.replace('Welcome')}> 
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
}

// estilização
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#424242',
      borderRadius: 80,
      marginTop: 20,
      margin: 10,
      width: 40,
      height: 40,
    },
    profileButton: {
      backgroundColor: '#424242',
      borderRadius: 80,
      marginTop: 20,
      margin: 10,
      width: 50,
      height: 50,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonsContainer: {
      display: 'flex',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 8,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 500,
      borderRadius: 40,
      backgroundColor: '#84848450'

    },
    title: {
      fontSize: 35,
      marginTop: 40,
      marginBottom: 20,
      marginRight: 100,
      fontWeight: 'bold',
      color: '424242',
    },
    formContainer: { 
      margin: 10,
      width: windowWidth * 1, 
      height: 700,
      borderRadius: 20,
      alignItems: 'center',
    },
  });
  