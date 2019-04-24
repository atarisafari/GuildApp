import React from 'react';
import {
	View,
	StyleSheet,
	Button,
	Text,
	TouchableOpacity
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
				<TouchableOpacity onPress={this.handleLogOut}>
					<Text style={styles.button}>Signout</Text>
				</TouchableOpacity>
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
		backgroundColor: "#428AF8",
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 12,
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		overflow: 'hidden',
		padding: 12,
		textAlign:'center',
		margin: 15,
	},
})
