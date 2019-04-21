import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Button,
	Text
} from 'react-native';
import {
	SecureStore
} from 'expo';

interface State {
	callDone: Boolean
}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

	//initially the call is not done
	state: State = {
		callDone: false
	}

	getFriends = async() => {


		let token = await SecureStore.getItemAsync('secure_token');

		try{
			fetch('https://guild-app.com/php/grabAllFriends.php', {
				mode: 'cors',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					token: token
				})
			})
				.then(response => response.json())
				.then(async function(json) {

					console.log(json);
					this.state.callDone = true;
					return json;
				})
		}catch(e){
			console.log(e)
		}
	}

	render() {

		let Friends = this.getFriends();



		if(!this.state.callDone){
			 return (<Text>dick</Text>);
		}else{
			return (
				<ScrollView style={styles.container}>
					<Text>Succ</Text>
				</ScrollView>
			);
		}
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
