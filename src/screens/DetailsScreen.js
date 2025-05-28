import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        
        <Text style={styles.title}>Details Screen</Text>

        {/* Botões de navegação entre as telas */}
        <TouchableOpacity style={styles.button} title="Go to Home" onPress={() => navigation.navigate('Home')}> 
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Go to Profile" onPress={() => navigation.navigate('Profile')}> 
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Go Back" onPress={() => navigation.goBack()}> 
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
    
      </View>
    </View>
  );
}

// estilização
const styles = StyleSheet.create({
  button: {
      backgroundColor: '#424242',
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      width: 220
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
    title: {
      fontSize: 25,
      marginTop: 40,
      marginBottom: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    formContainer: { 
      margin: 10,
      width: windowWidth * 0.8, 
      height: 370,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: '#848484',
    },
});
