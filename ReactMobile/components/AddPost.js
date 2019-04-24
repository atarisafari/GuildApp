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
        let image_url = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: false,
        });
        this.setState({ image_url });
    };

    useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let image_url = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: false,
        });
        this.setState({ image_url });
    };

    AddPostHandler = async() => {

        let token = await SecureStore.getItemAsync('secure_token');

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
            console.log(content)
            console.log(image_url)
        }).catch((error) => {
            console.error(error);
        });

        this.setModalVisible(!this.state.modalVisible);
    
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
                <View style={{flexDirection: 'column'}}>
                    
                    {/*Camera and Album */}
                    <View style={styles.photoButtons}>
						<TouchableOpacity style={styles.iconContainer}>
							<Icon 
								name='photo-library' 
								title="launchImageLibraryAsync" 
								color={'#b20949'} 
								size={35} 
								onPress={this.useLibraryHandler}
							/>
						</TouchableOpacity>
						
						<TouchableOpacity style={styles.iconContainer}>
							<Icon 
								name='add-a-photo' 
								title="launchCameraAsync" 
								color={'#b20949'} 
								size={35} 
								onPress={this.useCameraHandler}
							/>
						</TouchableOpacity>
                    </View>
                    
                    <View style={{justifyContent:'space-between'}}>
                    
						<TouchableOpacity onPress={this.AddPostHandler}>
							<Text style={styles.button}>Post</Text>
						</TouchableOpacity>
                            
						<TouchableOpacity onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}>
                            <Text style={styles.button}>Cancel</Text>
						</TouchableOpacity>
                            
                    </View>
                    
                    <View style={{justifyContent:'space-between'}}>
						
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
      margin: 15,
	  alignItems: "center",
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
		backgroundColor: "#428AF8",
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 12,
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		overflow: 'hidden',
		padding: 12,
		textAlign:'center',
		margin: 15,
	},
	photoButtons: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		margin: 15,
		padding: 20,
	}
  });
  
