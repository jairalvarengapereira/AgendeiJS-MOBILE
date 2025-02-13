import { COLORs,FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  appointment:{
    flex: 1,
    backgroundColor: COLORs.white,
    borderColor: COLORs.gray4,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
  },

  name:{
    fontSize: FONT_SIZE.md,
    color: COLORs.gray1,
    marginBottom: 2,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
    marginBottom: 4,
  },

  container:{
    flexDirection: 'row',
  },

  icon:{
    width:25,
    height:25,
  },

  booking:{
    flexDirection: 'row',
  },

  bookingDate:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
    marginTop: 3,
    marginLeft: 5,
  },

  bookingHour:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
    marginTop: 3,
    marginLeft: 5,
  },

  containerBooking:{
    flex: 1,
  },

  containerButton:{
    fontSize: FONT_SIZE.sm,
    width:180,
    marginTop:5
  },

}