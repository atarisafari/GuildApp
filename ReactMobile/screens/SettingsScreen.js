import React from 'react';
import Button from "../components/Button";
import {
	View,
	StyleSheet
} from 'react-native';
import {
	SecureStore
} from 'expo';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'app.json',
	};
	
  handleLogOut = () => {
	  //check to see if we get a token back
	  async function checkToken() {
		  let result = await SecureStore.deleteItemAsync('secure_token');
		  if(result === null){
			  return true;
		  }else{
			  return false;
		  }
	  }
	  
	  //if we get a token, log out
	  if(checkToken()){
		  this.props.navigation.navigate('Auth');
	  }
	  
  };
  
	render() {
		return (
			<View style={styles.form}>
				<Button 
				style={styles.button}
				label='Signout'
				onPress={this.handleLogOut}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		justifyContent: "center",
		width: "80%"
	},
	button: {
		color: "#841584"
	}
})
