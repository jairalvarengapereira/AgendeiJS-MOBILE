import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container:{
    backgroundColor: COLORs.white,
    flex: 1,
    padding: 12
  },

  item:{
    borderWidth: 1,
    borderColor: COLORs.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 12,
    borderRadius: 6,
  },

  title:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
    marginBottom: 4,
  },

  text:{
    fontSize: FONT_SIZE.md,
    color: COLORs.gray1,
  },


}