import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center'
    },
    rect: {
      width: 403,
      height: 119,
      backgroundColor: "#4caf50",
      marginLeft: -5
    },
    converter: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: "rgba(0,0,0,1)",
      fontSize: 30,
      marginTop: 67,
      marginLeft: 140
    },
    picker:{
      width:100,
      marginLeft:50,
    },
    text: {
      fontSize:20,
      marginLeft:20,
    },
    pickContainer: {
      width: 200,
      flexDirection:'row',
      marginTop:50,
      marginHorizontal:90,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
    },
    inputField:{
      flexDirection:'column',
      alignItems: 'flex-start',
      marginTop:40,
    },
    input:{
      fontSize:40,
      borderWidth:0.5,
      marginTop:5,
      marginLeft:20,
    },
    result: {
      marginTop:5,
      fontSize:40,
      marginLeft:20,
    },
    button: {
      marginTop:40,
      marginBottom:40,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#087f23',
    },
    btnText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  
  