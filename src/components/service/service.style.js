import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  service:{
    flex: 1,
    backgroundColor: COLORs.white,
    flexDirection:'row',
    padding: 12,
    borderWidth: 1,
    borderColor: COLORs.gray4,
  },

  containerText: {
    flex: 1,
  },
  
  containerButton:{
    width:100,
    marginTop:5,
  },

  description:{
    fontSize: FONT_SIZE.md,
    color: COLORs.gray3,
    marginTop: 5,
  },

  price:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.blue2,
    marginTop: 2,
  },



}