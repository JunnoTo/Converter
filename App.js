import { StyleSheet, View, Text, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.converter}>Converter</Text>
      </View>

      <Text style={styles.helpText}>Start by typing an amount on one of the input fields</Text>

      <View style={styles.separator}/>

      <View style={styles.inputView}>
      <FontAwesomeIcon name="euro" style={styles.icon}/>
      <TextInput style={styles.input} placeholder="Waiting for input.." keyboardType="numeric"/>
      </View>

      <View style={styles.separator}/>

      <View style={styles.inputView}>
      <FontAwesomeIcon name="gbp" style={styles.icon2}/>
      <TextInput style={styles.input} placeholder="Waiting for input.." keyboardType="numeric"/>
      </View>
      
      <View style={styles.separator}/>

      <View style={styles.inputView}>
      <FontAwesomeIcon name="dollar" style={styles.icon3}/>
      <TextInput style={styles.input} placeholder="Waiting for input.." keyboardType="numeric"/>
      </View>

    </View>
  );
}