import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  } 
    handleChange(){
      console.log(e)
      this.setState({
        amount: e
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TextInput
            style={styles.amount}
            placeholder= "Enter Bill Amount"
            placeholderTextColor = "#9A73EF"
            keyBoradType = "numeric"
            onChangeText = {this.handleChange}
          />
          <View>
          <Text>-for great service </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount:{
    margin:20,
    height:40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding:10
  }
});
