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
  ActivityIndicator
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
import AuthenticationScreen from '../screens/AuthenticationScreen'

export default class Post extends React.Component {
  /*
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true
        }
      }
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
   
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
        
        <View style={styles.MainContainer}>
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
        }
});
  