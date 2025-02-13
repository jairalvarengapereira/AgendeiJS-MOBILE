import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container:{
    flex: 1,
    backgroundColor: COLORs.white,
    paddingleft: 20,
    paddingright: 20,
    justifyContent: "space-between",
    marginBottom:20,
  },

  theme:{
    todayTextColor: COLORs.red,
    selectedDayBackgroundColor: COLORs.blue2,
    selectedDayTextColor: COLORs.white,
    arrowColor: COLORs.blue2
  },

  textHour:{
    fontSize: FONT_SIZE.lg,
    fontweight: "bold",
    color: COLORs.gray2,
    marginTop: 20,
    marginLeft: 15,
  },

  boxHour:{
    marginLeft: 15,
    marginRight: 15,
  },

  botao:{
    marginLeft: 15,
    marginRight: 15,
  }
}