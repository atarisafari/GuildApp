import React from 'react';
import { Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
import Post from '../components/Post';

const MainNavigator = createStackNavigator({
	Profile: {screen: Post},
  });
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };


	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			friendTime: false,
		};
	}

	getFriends = async() => {

		if(this.state.friendTime){
			return;
		}

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
					friendTime: this.state.friendTime,
					data: json
				});
				return;
			})
		}catch(e){
			console.log(e)
		}
	}

	//this should navigate to another screen for just the friend's posts
	//after should have a back button on that screen to navigate back to this screen
	onClick = () =>{

		this.setState({
			isLoading: false,
			friendTime: true,
			data: this.state.data
		});
		console.log("We'll make this work eventually")
	}

	//goes from friendTime to default screen
	onBackClick = () =>{
		this.setState({
			isLoading: false,
			friendTime: false,
			data: this.state.data
		});
	}

	render(){
		const {navigate} = this.props.navigation;
		let friends = this.getFriends();

		if(this.state.isLoading){
			return (
				<View style={styles.loading}>
					<ActivityIndicator size="large"/>
				</View>
			);
		}

		if(this.state.friendTime){
			return(
				<Button
        		title="Go to Jane's profile"
       			onPress={() => navigate('HomeScreen')}
      			/>
				
			)
		}

		//lists out our friends with nice little buttons
		return (
			<ScrollView>{
				this.state.data.map((stuff, i) => (
					<View>
						<TouchableOpacity
						style={styles.container}
						onPress={this.onClick}>
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
		padding: 10,
		margin: 5,
		borderColor: '#000000',
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderRadius: 25,
		textAlign: 'center'
	},
	loading:{
		paddingTop: 10,
	},
	text: {
		fontSize: 20,
	}
});
