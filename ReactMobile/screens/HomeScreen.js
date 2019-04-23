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
  KeyboardAvoidingView,
  Keyboard,
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
import Post from '../components/Post';
import AddPost from '../components/AddPost';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "What's going on",
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      profile_pic_url: '',
      keyboardSub: true
    }
  }

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

  componentDidMount() {
    if(Platform.OS === 'ios') {
      this.keyboardSub = Keyboard.addListener('keyboardWillShow', ()=> {
        this.scrollView.scrollToEnd({ animated: true })
      })
      console.log("OS: ios")
     }
     else {
      this.keyboardSub = Keyboard.addListener('keyboardDidShow', ()=> {
        this.scrollView.scrollToEnd({ animated: true })
      })
      console.log("OS: android")
    }
  }

  componentWillUnmount() {
    this.keyboardSub.remove()
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={{backgroundColor: '#f5f5f5', flex: 1}}
          ref={ref => this.scrollView = ref}>

          <View>
            <AddPost />

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
        width: "100%"
  },
  button: {
    marginBottom: 10,
    fontWeight: '500'
  },
  iconContainer: {
    marginLeft: 5,
    width: 80,
    marginTop: 57
  },
  imageSize: {
    height: SCREEN_HEIGHT * 0.2,
    width: SCREEN_WIDTH * 0.5,
   },
  imageContainer: {
    marginTop: 48,
    marginLeft: 40
  }
});
