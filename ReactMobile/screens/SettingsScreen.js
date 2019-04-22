import React from 'react';
import {
	View,
	StyleSheet,
	Button
} from 'react-native';
import {
	SecureStore
} from 'expo';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
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
				title='Signout'
				onPress={this.handleLogOut}
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	form: {
		flexDirection: "column",
		paddingTop: 20
	},
	button: {
		width: 80,
		margin: 10
	}
})
