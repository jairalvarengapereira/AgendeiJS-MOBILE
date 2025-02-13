import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container:{
    backgroundColor: COLORs.white,
    flex: 1,
    // padding: 12
  },

  banner:{
    backgroundColor: COLORs.blue2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 25,
  },

  name:{
    fontSize: FONT_SIZE.md,
    color: COLORs.white,
    fontweight: 'bold',
    marginTop: 5,
  },

  specialty:{
    fontSize: FONT_SIZE.xsm,
    color: COLORs.white,
    marginTop: 2,
  },


}