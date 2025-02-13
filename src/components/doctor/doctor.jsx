import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./doctor.style";
import icon from "../../constants/icon";

function Doctor(props){
  return <TouchableOpacity style={styles.doctor} 
  onPress={() => props.onPress(props.id_doctor, props.name, props.specialty, props.icon)}>
    <Image source={props.icon == "M" ? icon.male : icon.female} style={styles.icon}></Image>

    <View>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.specialty}>{props.specialty}</Text>
    </View>
  </TouchableOpacity>
}
export default Doctor;