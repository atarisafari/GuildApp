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
  KeyboardAvoidingView
} from 'react-native';
import {
	WebBrowser,
	SecureStore
} from 'expo';

import { MonoText } from '../components/StyledText';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import strings from "../config/strings";
import { Input, Icon, Button } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import logo from '../assets/images/logo.png';
import {Dimensions} from 'react-native'

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Post extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        showHide: false
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
    
      return (

        <View style={styles.MainContainer}>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardText} style={{fontWeight: 'bold'}}> Display name </Text>
              <Image style={styles.cardImage} source={require('../assets/images/logo.png')} style={styles.imageSize}/>
              <Text style={styles.cardText}> Hello </Text>
              {/*Icons*/}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{paddingLeft: 15, paddingRight: 20}}>
                  <Icon name='favorite-border' color={'#b20949'} size={28}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ShowHideTextComponentView} >
                  <Icon name='insert-comment' color={'#b20949'} size={28}/>
                </TouchableOpacity>
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

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image style={styles.cardImage} source={require('../assets/images/logo.png')} style={styles.imageSize}/>
              <Text style={styles.cardText}> Hello </Text>
              {/*Icons*/}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon name='favorite'/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name='insert-comment'/>
                </TouchableOpacity>
              </View>

            </View>


          </View>

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
  
