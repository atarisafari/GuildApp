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
  Button,
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
import { Input, Icon } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import logo from '../assets/images/logo.png';

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
       /*
    GetItem (fruit_name) {

      Alert.alert(fruit_name);

      }



componentDidMount() {
    async function checkToken() {
        let token = await SecureStore.getItemAsync('secure_token');
        console.log(token);
    }

    return fetch('https://guild-app.com/php/grabAllPosts.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          username: username
        })

      }).then((response) => response.json())
        .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
*/
  render() {
      return (

        <View style={styles.MainContainer}>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardText} style={{fontWeight: 'bold'}}> Display name </Text>
              <Image style={styles.cardImage} source={require('../assets/images/logo.png')}/>
              <Text style={styles.cardText}> Hello </Text>
              {/*Icons*/}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon name='favorite'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ShowHideTextComponentView} >
                  <Icon name='insert-comment'/>
                </TouchableOpacity>
              </View>
              {
                this.state.showHide ?

                  <TextInput
                      placeholder="Make a comment..."
                      multiline={true}
                      style={styles.TextInputStyleClass}
                  />

                : null
              }
            </View>


          </View>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image style={styles.cardImage} source={require('../assets/images/logo.png')}/>
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
 {/*
 <ListView

   dataSource={this.state.dataSource}

   renderSeparator= {this.ListViewItemSeparator}

   renderRow={(rowData) => <Text style={styles.rowViewContainer}
   onPress={this.GetItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}

 />
*/}
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
      textAlign: 'auto',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
    }
    
});
  
