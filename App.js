import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class App extends Component{
  state = {
    password: 'string',
    isPasswordVisible: Boolean,
    toggleText: String,
  }

  constructor(props = Props) {
    super(props);
    this.state = {
      password:'lsfmasmcas',
      isPasswordVisible: true,
      toggleText: 'Show',
    };
  }

  handleToggle = () => {
    const {isPasswordVisible} = this.state;

    if (isPasswordVisible) {
      this.setState ({isPasswordVisible: false});
      this.setState ({toggleText: 'Hide'});
    }

    else {
      this.setState ({isPasswordVisible: true});
      this.setState ({toggleText: 'Show'});
    }
  };

  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
          secureTextEntry = {this.state.isPasswordVisible}
          style = {{width: 400, height: 50, backgroundColor: '#a7a6a9', color: 'white', fontSize: 20 }}
        />

        <TouchableOpacity onPress= {this.handleToggle}>
          <Text style = {{fontSize:20}}>{this.state.toggleText}</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
