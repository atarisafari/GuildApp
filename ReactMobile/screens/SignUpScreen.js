import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
class SignUpScreen extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      display_name: '',
      password: '',
      confPassword: '',
      profile_pic_url: ''
    }
  }
  
  UserRegistrationFunction = () =>{
 
    const { username }  = this.state ;
    const { display_name }  = this.state ;
    const { password }  = this.state ;
    const { confPassword }  = this.state ;
    const { profile_pic_url }  = this.state ;
    
    fetch('https://guild-app.com/php/signup.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        username: username,
        password: password,
        display_name: display_name,
        profile_pic_url: profile_pic_url,
    
      })
    
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if(password !== confPassword){ //If passwords don't match then dont make the api call
          Alert.alert(
            'Oops',
            "Your passwords don't match, please try again.",
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
        else if(responseJson.error === ""){
          console.log("Sign up was successful");
          this.props.navigation.navigate('Auth');
        }
        else {
          Alert.alert(
            'Oops',
            JSON.stringify(responseJson.error),
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
      }).catch((error) => {
        console.error(error);
      });
  
  }

    render() {
      return (
 
        <View style={styles.MainContainer}>

                <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Create Account</Text>
        
                <TextInput
                  
                  placeholder="Display name:"
        
                  onChangeText={display_name => this.setState({display_name})}
        
                  underlineColorAndroid='transparent'
        
                  style={styles.TextInputStyleClass}
                />

                <TextInput
                  
                  placeholder="Username:"
        
                  onChangeText={username => this.setState({username})}
        
                  underlineColorAndroid='transparent'
        
                  style={styles.TextInputStyleClass}
                />
        
                <TextInput
                  
                  placeholder="Password:"
        
                  onChangeText={password => this.setState({password})}
        
                  underlineColorAndroid='transparent'
        
                  style={styles.TextInputStyleClass}

                  secureTextEntry={true}
                />

                <TextInput
                  
                  placeholder="Retype Password: :"
        
                  onChangeText={confPassword => this.setState({confPassword})}
        
                  underlineColorAndroid='transparent'
        
                  style={styles.TextInputStyleClass}

                  secureTextEntry={true}
                />
        
                <Button title="Sign Up" onPress={this.UserRegistrationFunction} color="#b8860b" />
              
      
        </View>
              
        );
      }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
    
    justifyContent: 'center',
    flex:1,
    margin: 10
  },
  
  TextInputStyleClass: {
  
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#b8860b',
    borderRadius: 5 ,
    
    
    borderRadius: 10 ,
  }
  
});
 

export default SignUpScreen;