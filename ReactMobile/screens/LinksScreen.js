import React from 'react';
import PrimarySearchAppBar from "../components/search"

import {
	ScrollView,
	StyleSheet,
	Button
} from 'react-native';
import {
	SecureStore
} from 'expo';
import search from '../components/search';

interface State {
	call: Bol
}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

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
					return json;
			})
		}catch(e){
			console.log(e)
		}
	}

	render() {

		let Friends = this.getFriends();
		console.log(Friends);

    return (

			<PrimarySearchAppBar/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});