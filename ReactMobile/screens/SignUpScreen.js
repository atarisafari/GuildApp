import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class SignUpScreen extends React.Component {
    state = { username: '', password: '', confPassword: '', display_name: '', profile_pic_url: '' }
    handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Display Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={display_name => this.setState({ display_name })}
          value={this.state.display_name}
        />
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => this.setState({ displayusername_name })}
          value={this.state.username}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true} 
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Retype Password:"
          autoCapitalize="none"
          secureTextEntry={true} 
          style={styles.textInput}
          onChangeText={confPassword => this.setState({ confPassword })}
          value={this.state.confPassword}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Auth')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
