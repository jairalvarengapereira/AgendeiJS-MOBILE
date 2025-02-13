import { Alert, View, FlatList } from "react-native";
import { styles } from "./abacalendar.style";
import { useEffect, useState } from "react";
import Appointment from "../../components/appointments/appointment";
import api from "../../constants/api";

function AbaCalendar() {
  const [appointments, setAppointments] = useState([]);
  const [refresh, setRefresh] = useState(0);

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments");
      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      Alert.alert(error.response?.data.error || "Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  useEffect(() => {
    LoadAppointments();
  }, [refresh]);

  async function DeleteAppointment(id_appointment) {
    try {
      const response = await api.delete(`/appointments/${id_appointment}`);
      if (response.data?.id_appointment) {
        setAppointments(prev => prev.filter(appt => appt.id_appointment !== id_appointment));
      }
    } catch (error) {
      Alert.alert(error.response?.data.error || "Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  async function InserirAppointment(novoAppointment) {
    try {
      const response = await api.post("/appointments", novoAppointment);
      if (response.data) {
        setAppointments(prev => [...prev, response.data]);
      }
    } catch (error) {
      Alert.alert("Erro ao adicionar appointment.");
    }
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={appointments} 
        keyExtractor={(appoint) => appoint.id_appointment.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Appointment 
            id_appointment={item.id_appointment}
            service={item.service}
            doctor={item.doctor}
            specialty={item.specialty}
            bookingDate={item.booking_date}
            bookingHour={item.booking_hour}
            onPress={DeleteAppointment}
          />
        )}
      />
    </View>
  );
}

export default AbaCalendar;
