import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaHome from "../abahome/abahome.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { COLORs } from "../../constants/theme.js";
import icon from "../../constants/icon.js";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Main(){
  return <Tab.Navigator>
    <Tab.Screen name="Home" component={AbaHome} options={{
      headerTitleAlign: "center",
      headerTitle:() =>{
        return <Image 
          source={icon.logo}
          style={{ width: 170, height: 55}}
          >
        </Image>
      },
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => {
        return <Image 
          source={icon.home}
          style={{ 
            width: 35, 
            height: 35,
            opacity: focused ? 1 : .3
          }}>
        </Image>
      }
    }} />
    <Tab.Screen name="Meus Agendamentos" component={AbaCalendar} options={{
      headerTitleAlign: "center",
      headerTintColor: COLORs.blue2,
      tabBarShowLabel: false,
      unmountOnBlur: true,
      tabBarIcon: ({focused}) => {
        return <Image 
        source={icon.calendar}
        style={{ 
          width: 35, 
          height: 35,
          opacity: focused ? 1 : .3
        }}>
        </Image>
      }
      
    }}/>
    <Tab.Screen name="Meu Perfil" component={AbaProfile} options={{
      headerTitleAlign: "center",
      headerTintColor: COLORs.blue2,
      tabBarShowLabel: false,
      unmountOnBlur: true,
      tabBarIcon: ({focused}) => {
        return <Image 
        source={icon.profile}
        style={{ 
          width: 23, 
          height: 30,
          opacity: focused ? 1 : .3
        }}>
        </Image>
      }
    }}/>
  </Tab.Navigator>
}
export default Main;