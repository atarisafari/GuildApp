import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  ActionSheetIOS,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  Button
} from 'react-native';
import {
	WebBrowser,
	SecureStore
} from 'expo';

import { MonoText } from '../components/StyledText';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import strings from "../config/strings";
import { Input, Icon } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import logo from '../assets/images/logo.png';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Post extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        showHide: false,
        title: 'Posts',
        isLoading: true
      }
  }

  getPosts = async() => {

		let token = await SecureStore.getItemAsync('secure_token');
    let username = await SecureStore.getItemAsync('secure_username');

		try{
			fetch('https://guild-app.com/php/grabAllPosts.php', {
				mode: 'cors',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
          token: token,
          username: username
        })
			})
      .then(response => response.json())
      .then((json) =>{
        console.log(json)
        this.setState({
          isLoading: false,
          data: json
        });
      })
		}catch(e){
			console.log("error", e)
		}
	}

  ShowHideTextComponentView = () =>{

    if(this.state.showHide == true)
    {
      this.setState({showHide: false})
    }
    else
    {
      this.setState({showHide: true})
    }
  }
  
  render() {
    let Posts = this.getPosts();
		const username = "123"; //SecureStore.getItemAsync('secure_username');
		if(this.state.isLoading){
			return (
				<View style={styles.loading}>
					<ActivityIndicator size="large"/>
				</View>
			);
		}
    
      return (

        <View style={styles.MainContainer}>{
				this.state.data.map((stuff, i) => (
        
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardText} style={{fontWeight: 'bold'}}>{username}</Text>
              <Image style={styles.cardImage} source={{uri: stuff.image_url}} style={styles.imageSize}/>
              <Text style={styles.cardText}> {stuff.content} </Text>
              {/*Icons*/}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{paddingLeft: 15, paddingRight: 20}}>
                  <Icon name='favorite-border' color={'#b20949'} size={28}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ShowHideTextComponentView} >
                  <Icon name='insert-comment' color={'#b20949'} size={28}/>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'col'}}>
                </View>
              {
                this.state.showHide ?
                  <View style={styles.commentContainner}>
                      <TextInput
                          placeholder="Make a comment..."
                          multiline={true}
                          style={styles.TextInputStyleClass}
                      />
                    <View style={{justifyContent:'space-between', paddingLeft: 12, paddingRight: 5}}>
                      <Button title="Comment" buttonStyle={styles.button}/>
                    </View>
                  </View>
                : null
              }
            </View>

          </View>
          ))
			}
      
  </View>

      );
    }

}
const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardContainer: {
      marginTop: 20,
      backgroundColor: '#F5FCFF',
    },
    cardImage: {
      width: '100%',
      height: 350,
      resizeMode: 'cover'
    },
    card: {
      backgroundColor: '#fff',
      marginTop: 10,
      marginLeft: '2%',
      width: '96%',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
        width: 3,
        height: 3
      }
    },
    cardText: {
      padding: 10,
      fontSize: 16
    },
    MainContainer :{

      // Setting up View inside content in Vertically center.
      justifyContent: 'center',
      flex:1,
      margin: 10
      },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    TextInputStyleClass: {
      flex: 1,
      textAlign: 'auto',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10
    },
    button: {
      backgroundColor: '#b20949',
      borderRadius: 10
   },
   commentContainner: {
      flex:2,
      flexDirection:"row",
      justifyContent:'space-between'
   },
   imageSize: {
    height: SCREEN_HEIGHT * 0.45,
    width: SCREEN_WIDTH * 0.9,
    marginRight: 2,
    marginLeft: 2
   }
});
  
