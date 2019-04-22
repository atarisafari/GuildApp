import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Button,
	Text,
	View,
	ActivityIndicator,
} from 'react-native';
import {
	SecureStore
} from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };


	
	constructor(props: Props) { 
		super(props); 
		this.state = {
			isLoading: true,
		};
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
				.then((json) =>{
					this.setState({
						isLoading: false,
						data: json
					});
					return json
				})
		}catch(e){
			console.log(e)
		}
	}
	
	render(){ 
		
		let friends = this.getFriends();
		
		if(this.state.isLoading){
			return (
				<View style={styles.loading}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		//Do stuff that we want it to do 
		return this.state.data.map((stuff) => {
			return (
				<View><Text>{stuff.username}</Text></View>
			)
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
	loading:{
		paddingTop: 20,
	}
});
