import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  doctor:{
    flex: 1,
    backgroundColor: COLORs.white,
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORs.gray4,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 6,
  },
  
  name:{
    fontSize: FONT_SIZE.md,
    color: COLORs.gray1,
    marginTop:10,
  },

  specialty:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
  },

  icon:{
    with:50,
    heeight:50,
    marginright: 8,
  },


}