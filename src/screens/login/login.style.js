import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container:{
    backgroundColor: COLORs.white,
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    padding: 50
  },

  containerLogo:{
    alignItems: "center",
  },

  containerInput:{
    marginBottom: 15,
    alignItems: "center",
  },

  logo:{
    width: 220,
    height: 70,
  },

  input:{
    backgroundColor: COLORs.gray5,
    padding:10,
    borderRadius:6,
  },

  footer:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 1
  },

  footerLink:{
    color: COLORs.blue2,
  }

}