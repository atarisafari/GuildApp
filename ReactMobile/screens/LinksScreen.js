import React from 'react';
import {
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	ActivityIndicator,
	ListItem
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
	
	//this should navigate to another screen for just the friend's posts
	//after should have a back button on that screen to navigate back to this screen
	onClick = () =>{
		console.log("We'll make this work eventually")
	}
	
	render(){ 
		
		let friends = this.getFriends();
		
		if(this.state.isLoading){
			return (
				<View style={styles.loading}>
					<ActivityIndicator size="large"/>
				</View>
			);
		}
		
		//lists out our friends with nice little buttons
		return (
			<ScrollView>{
				this.state.data.map((stuff, i) => (
					<View>
						<TouchableOpacity
							style={styles.container}
							onPress={this.onClick}
						>
							<Text style={styles.text}>
								{stuff.username}
							</Text>
						</TouchableOpacity>
					</View>
					
				))	
			}</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30,
		margin: 5,
		borderColor: '#000000',
		borderWidth: 1,
		backgroundColor: '#ffffff'
	},
	loading:{
		paddingTop: 30,
	},
	text: {
		fontSize: 24,
	}
});
