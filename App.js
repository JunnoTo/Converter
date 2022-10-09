import {View, Text, TextInput, Pressable} from "react-native";
import styles from './styles';
import {Picker} from'@react-native-picker/picker';
import React,{useState} from 'react';

export default function App() {

  const currencies =[
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "HKD",
    "NZD",
    "SEK",
  ];

  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();
  const [result, setResult] = useState(0.00);

  const handleValueChange=(itemValue, itemIndex) => {setSelect1(itemValue)}
  const handleValueChange2=(itemValue2, itemIndex) => {setSelect2(itemValue2)}
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.converter}>Converter</Text>
      </View>

      <View style={styles.pickContainer}>
        <Text style={styles.text}>From</Text>
        <Picker
          style={styles.picker}
          selectedValue={select1}
          onValueChange={handleValueChange}>
            {
              currencies.map(select1=> <Picker.Item key={select1} value={select1} label={select1}/>)
            }
          </Picker>
      </View>

      <View style={styles.pickContainer}>
        <Text style={styles.text}>To</Text>
        <Picker
          style={styles.picker}
          selectedValue={select2}
          onValueChange={handleValueChange2}>
            {
              currencies.map(select2=> <Picker.Item key={select2} value={select2} label={select2}/>)
            }
          </Picker>
      </View>
      
      <View style={styles.inputField}>
        <Text style={styles.text}>Enter amount:</Text>
        <TextInput style={styles.input} placeholder='0.00'/>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Calculate</Text>
        </Pressable>
        <Text style={styles.text}>Result:</Text>
        <Text style={styles.result}>{result.toFixed(2)}</Text>
    </View>
    </View>
  );
}
