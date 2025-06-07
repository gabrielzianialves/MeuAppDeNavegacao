import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        
        <Text style={styles.title}>Details Screen</Text>
                
        
          <View style={styles.buttonsContainer}>
            {/* botões de navegação entre as telas */}
            <TouchableOpacity style={styles.button} title="Go to Profile" onPress={() => navigation.replace('Profile')}>
              <Image
                source={require('../../assets/profile-icon.png')}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} title="Go to Home" onPress={() => navigation.replace('Home')}> 
              <Image
                source={require('../../assets/home-icon.png')}
                style={styles.mainIcon}
              />
            </TouchableOpacity>
                  
            {/* botão de logout para o usuário desconectar da conta */}
            <TouchableOpacity style={styles.button} title="Log Out" onPress={() => navigation.replace('Welcome')}> 
              <Image
                source={require('../../assets/logout-icon.png')}
                style={styles.icons}
              />
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
      alignItems: 'center',
    },
    icons: {
      marginTop: 10,
      width: 20,
      height: 20,
    },
    mainIcon: {
      marginTop: 9,
      width: 30,
      height: 30,
    },
    mainButton: {
      backgroundColor: '#424242',
      borderRadius: 80,
      marginTop: 20,
      margin: 10,
      width: 50,
      height: 50,
      alignItems: 'center',
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
