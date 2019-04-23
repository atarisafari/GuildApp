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
import {Dimensions} from 'react-native';

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