 import React from 'react';
 import { ScrollView, StyleSheet } from 'react-native';
 import {
	Text,
	Button
} from 'react-native'
 
 export default class Authenticate extends React.Component{
	 
	 render(){
		 return(
			<ScrollView style={styles.container}>
				<Text>
					Welcome to Guild
				</Text>
				<Button
				title="Go to main"
				onPress={() => this.props.navigation.navigate('Main')}
				/>
			</ScrollView>
			 
		)
	}
	 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		alignItems: "center",
		justifyContent; "center"
		backgroundColor: '#fff',
	},
	
	butt: {
		
	}
});
