import {View, Text, TextInput, Pressable} from "react-native";
import styles from "./styles";
import {Picker} from"@react-native-picker/picker";
import React,{useEffect, useState} from "react";

export default function App() {

  const [array, setArray] = useState()
  const [select1, setSelect1] = useState('EUR');
  const [select2, setSelect2] = useState('USD');
  const [amount, setAmount] = useState('');
  const [outcome, setOutcome] = useState(0.00);
  const currencies =[
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'HKD',
    'NZD',
    'SEK',
  ];

  useEffect(() =>{
  const getData = async() =>{
    const result = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
    .then(response => response.json())
    .catch(error => console.error('error', error))
    .then(result => setArray(result.rates))
  }
  getData()
  console.log(array)
},[])

const calculate = () =>{
  let option1 = array[select1]
  console.log(option1)
  let option2 = array[select2]
  console.log(option2)
  
  let math = amount * option1 * option2
  setOutcome(math)
}

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
        <TextInput style={styles.input} value={amount} onChangeText={text =>setAmount(text)} keyboardType='number-pad' placeholder='0.00'/>
        <Pressable style={styles.button} onPress={() => calculate()}>
          <Text style={styles.btnText}>Calculate</Text>
        </Pressable>
        <Text style={styles.text}>Result:</Text>
        <Text style={styles.result}>{outcome.toFixed(2)}</Text>
    </View>
    </View>
  );
}
