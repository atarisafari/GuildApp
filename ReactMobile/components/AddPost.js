import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Modal,
  TouchableHighlight,
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
import {Dimensions} from 'react-native';
import Stor from './Stor'

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false,
          keyboardSub: true,
          content: '',
          image_url: ''
        }
      }
    
    setModalVisible(visible) {
    this.setState({modalVisible: visible});
    }

    askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
    };

    useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let profile_pic_url = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
    });
    this.setState({ profile_pic_url });
    };

    useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let profile_pic_url = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
    });
    this.setState({ profile_pic_url });
    };

    AddPostHandler = () =>{

        const { content }  = this.state ;
        const { image_url }  = this.state ;
    
        fetch('https://guild-app.com/php/addPost.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            token: token,
            content: content,
            image_url: image_url,
    
          })
    
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
          }).catch((error) => {
            console.error(error);
          });
    
      }    

  
    render() {
    
        return (
  
            <View >

                {/*Add Post Container*/}
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

            {/*Modal*/}
            <View>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                >
                <View style={{flexDirection: 'row'}}>
                    
                    {/*Camera and Album */}
                    <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name='photo-library' title="launchImageLibraryAsync" color={'#b20949'} size={35} onPress={this.useLibraryHandler}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name='add-a-photo' title="launchCameraAsync" color={'#b20949'} size={35} onPress={this.useCameraHandler}/>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source={this.state.profile_pic_url} style={styles.imageSize}/>
                    </View>

                </View>
                    {/*Image url
                    <Text style={styles.paragraph}>
                            {JSON.stringify(this.state.profile_pic_url)}
                    </Text>
                */}
                    <View style={{marginTop: 30}}>
                    <Input
                        placeholder="Add a post..."
                        multiline={true}
                        inputStyle={{
                        height: null
                        }}
                        onChangeText={content => this.setState({content})}
                    />
                    </View>
                <View style={{flexDirection: 'row'}}>
                    {/*Exit modal */}
                    <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>

                    <Text>Cancel</Text>

                    </TouchableHighlight>

                    <View style={{justifyContent:'space-between', paddingLeft: 12, paddingRight: 5}}>
                        <Button title="POST" onPress={this.AddPostHandler} buttonStyle={styles.button}/>
                    </View>
                
                </View>
                
                </Modal>
                    

            </View>

            </View>
    
        );
      }
  }

  const styles = StyleSheet.create({
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
    },
    button: {
        backgroundColor: '#b20949',
        borderRadius: 10
     }
  });
  