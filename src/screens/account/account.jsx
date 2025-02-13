import {Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./account.style.js";
import { useState } from "react";
import icon from "../../constants/icon.js";
import Botao from "../../components/botao/botao.jsx";
import api from "../../constants/api.js";

function Account(props){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteAccount(){
    try {
      const response = await api.post("/users/register", { name, email, password });
      if(response.data){
        Alert.alert("Usuário criado com sucesso!");
        console.log(response.data);
      }

    } catch (error) {
      if (error.response?.data.error){
        Alert.alert(error.response.data.error);
      }else 
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.")
    }
  }

  return <View style={styles.container}>

    {/* Header */}
    <View>
      <Image source={icon.logo} style={styles.logo} /> 
    </View>

    {/* Formulário */}
    <View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Nome" 
          style={styles.input} 
          onChangeText={(texto) => setName(texto)}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="E-mail" 
          style={styles.input} 
          onChangeText={(texto) => setEmail(texto)}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Senha" 
          style={styles.input} 
          secureTextEntry={true}  // esconde a senha
          onChangeText={(texto) => setPassword(texto)}
        />
      </View>

      <Botao text="Criar conta" onPress={ExecuteAccount} />

    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <Text >Já tenho conta.</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.footerLink}> Fazer login.</Text>
      </TouchableOpacity>
    </View>
  </View>
}
export default Account;