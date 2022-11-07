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
      marginTop:30,
      marginHorizontal:90,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
    },
    inputField:{
      flexDirection:'column',
      alignItems: 'flex-start',
      marginTop:30,
    },
    input:{
      fontSize:40,
      borderWidth:0.5,
      marginTop:2,
      marginLeft:20,
    },
    result: {
      marginTop:2,
      fontSize:40,
      marginLeft:20,
      textDecorationLine:'underline',
    },
    button: {
      marginTop:30,
      marginBottom:30,
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
  
  