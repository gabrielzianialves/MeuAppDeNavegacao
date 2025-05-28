import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { useState } from "react"
// importando o AsyncStorage para armazenar os dados do cadastro e login localmente
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get("window").width;

export default function RegisterScreen({ navigation }) {

  // desestruturação de array com useState para definir os estados e métodos que atualizam esses estados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  // função para validar se todos os campos estão preenchidos
  function isFormValid() {
    return name.trim() && email.trim() && telephone.trim() && password.trim();
  }

  // função para submeter os dados do cadastro
  function submitRegistration() {
    // verificação se todos os campos estão preenchidos
    if (!isFormValid()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    
    // utiliza a função de registrar usuário para armazenar esses dados
    registerUser(name, email, telephone, password).then(() => {
      Alert.alert('Success');
      navigation.navigate("Login");
    });
  }

  // função assincrona para registrar o usuário com os dados informados
  async function registerUser(name, email, telephone, password) {
    // criação de um objeto com os dados informados
    const user = { name, email, telephone, password };
    try {
      // salva o objeto user localmente e transforma em formato JSON
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } 
    catch (error) {
      // tratamento de erros
      Alert.alert('Error', 'Failed to save user data.');
    }

  }


  return (
    <ImageBackground
      source={require("../../assets/backgroundIMG.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register an account</Text>

          {/* Inputs para fornecer os dados do cadastro, passando as funções set do useState */}
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={setTelephone}
            value={telephone}
            placeholder="Telephone"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />

          {/* Botão que quando clicado executa a função de submeter o cadastro */}
          <TouchableOpacity
            style={styles.button}
            onPress={submitRegistration}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

// estilização
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 18,
    marginTop: 25,
    alignItems: "center",
    width: 260,
    borderRadius: 15,
  },
  background: {
    flex: 1,
    width: "100%",
    heigth: "100%",
  },
  button: {
    backgroundColor: "#424242",
    padding: 15,
    borderRadius: 15,
    marginTop: 40,
    width: 220,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    margin: 10,
    width: windowWidth * 0.8,
    height: 510,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#84848494",
  },
});
