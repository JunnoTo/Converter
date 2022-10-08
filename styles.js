import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1
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
      marginLeft: 126
    },
    icon: {
      color: "#087f23",
      fontSize: 50,
      marginLeft: 10
    },
    input:{
        flex:1,
        paddingHorizontal:12,
        marginLeft:5,
        fontSize:20,
        borderWidth:0.5,
        marginRight:10,
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginRight:1,
        marginLeft: 1,
    },
    helpText: {
        marginTop:20,
        marginLeft:14,
        fontSize:16,
    },
    separator: {
        marginTop:80,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:10,
      paddingHorizontal:40,
      borderRadius:4,
      elevation:3,
      backgroundColor: '#80e27e',
      marginRight:5
    },
    btnText: {
      fontSize:15,
    }
  });
  
  