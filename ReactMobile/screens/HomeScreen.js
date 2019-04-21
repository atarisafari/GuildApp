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
  FlatList
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
import Post from '../components/Post'

var BUTTONS = [
  'Camera',
  'Choose from Photos',
  'Cancel',
];
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "What's going on",
  };

  state = {
    modalVisible: false,
    profile_pic_url: '',
  };


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>  

        {/*Modal*/}
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >

            <View style={{marginTop: 22}}>
              <View>
                <Input
                  placeholder="Add a post..." 
                  multiline={true}
          
                />
                
                {/*Camera and Album */}
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon name='photo-library' title="launchImageLibraryAsync" onPress={this.useLibraryHandler}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name='add-a-photo' title="launchCameraAsync" onPress={this.useCameraHandler}/>
                </TouchableOpacity>
                </View>
                <Text style={styles.paragraph}>
                  {JSON.stringify(this.state.profile_pic_url)}
                </Text>

                {/*Exit modal */}
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>

                  <Text>Cancel</Text>

                </TouchableHighlight>
                
              </View>
            </View>
          </Modal>

      
          {/*Add Post Header*/}
          <View style={styles.form} onTouchStart={() => {this.setModalVisible(true);}}>
            <Input
              placeholder="Add a post..." 
              multiline={true}
              editable={false}
              rightIcon={
                <MaterialIcons
                  name='camera-alt'
                  size={24}
                  color='black'
                />
              }
            />
          </View>

        </View>
        <View>
        
        
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
  },
  button: {
    marginBottom: 10,
    fontWeight: '500'
  }
});
