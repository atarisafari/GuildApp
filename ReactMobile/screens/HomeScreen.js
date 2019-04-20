import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Modal,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import { 
	WebBrowser,
	SecureStore
} from 'expo';

import { MonoText } from '../components/StyledText';
import FormTextInput from "../components/FormTextInput";
import { Input } from 'react-native-elements';
import strings from "../config/strings";
import { MaterialIcons } from '@expo/vector-icons';
import { Makiko } from 'react-native-textinput-effects';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "What's going on",
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleLogOut = () => {
    //check to see if we get a token back
		async function checkToken() {
			let result = await SecureStore.deleteItemAsync('secure_token');
			if(result === null){
				return true;
			}else{
				return false;
			}
		}
		
		//if we get a token, log out
		if(checkToken()){
			this.props.navigation.navigate('Auth');
		}
    
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
        {/*LOG OUT Button */}
        <Button 
          title={strings.LOGOUT}
          onPress={this.handleLogOut}
        />

        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
            >
              <Input
                placeholder='Add a post...'
                multiline={true}
                numberOfLines={1}
                inputStyle={{
                  height: null
                }}
                rightIcon={
                  <MaterialIcons name='camera-alt' size={33} color="#e9967a"/>
              }
            />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </KeyboardAvoidingView>
          </View>
        </Modal>

          
          {/*Add Post Header*/}
          <View style={styles.form} onTouchStart={() => {
            this.setModalVisible(true);
          }}>
          
          <Input
            placeholder='Add a post...'
            multiline={true}
            inputStyle={{
              height: null
            }}
            rightIcon={
              <MaterialIcons name='camera-alt' size={33} color="#e9967a"/>
            }
          />
          </View>
          
      </View>




        </ScrollView>

       
      </View>

      
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  form: {
		flex: 1,
		justifyContent: "center",
		width: "100%"
	}
});
