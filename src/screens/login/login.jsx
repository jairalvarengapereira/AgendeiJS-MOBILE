import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.js";
import icon from "../../constants/icon.js";
import Botao from "../../components/botao/botao.jsx";
import api from "../../constants/api.js";

function Login(props){

  const {setUser} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin(){
    try {
      const response = await api.post("/users/login", { email, password });
      if(response.data){
        api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
        setUser(response.data);
      }

    } catch (error) {
      if (error.response?.data.error){
        Alert.alert(error.response.data.error);
      }else 
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.")
    }
  }
  
  // Função para validar os dados do formulário
  return <View style={styles.container}>

    {/* Header */}
    <View>
      <Image source={icon.logo} style={styles.logo} /> 
    </View>

    {/* Formulário */}
    <View>
      <View style={styles.containerInput}>
        <TextInput 
          placeholder="E-mail" 
          style={styles.input} 
          onChangeText={(texto) => setEmail(texto)}
          keyboardType="email-address"  // força o teclado para um campo de entrada de email
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

      <Botao text="Acessar" onPress={ExecuteLogin}/> 

    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <Text>Não tenho conta.</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
        <Text style={styles.footerLink}> Criar conta agora.</Text>
      </TouchableOpacity>
    </View>

  </View>
}
export default Login;