import * as React from "react";
import {
	Image,
	KeyboardAvoidingView,
	StyleSheet,
	View
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";
import login from "../config/calls";

interface State {
	email: string;
	password: string;
	// We add a field that tracks if the user has already
	// touched the input...
	emailTouched: boolean;
	passwordTouched: boolean;
}

class LoginScreen extends React.Component<{}, State> {
	passwordInputRef = React.createRef<FormTextInput>();

	readonly state: State = {
		email: "",
		password: "",
		emailTouched: false,
		passwordTouched: false
	};

	handleEmailChange = (email: string) => {
		this.setState({ email: email });
	};

	handlePasswordChange = (password: string) => {
		this.setState({ password: password });
	};

	handleEmailSubmitPress = () => {
		if (this.passwordInputRef.current) {
			this.passwordInputRef.current.focus();
		}
	};

	// ...and we update them in the input onBlur callback
	handleEmailBlur = () => {
		this.setState({ emailTouched: true });
	};

	handlePasswordBlur = () => {
		this.setState({ passwordTouched: true });
	};

	handleLoginPress = () => {
		//
		//Need to add API calls here for validation n shit
		//in meantime, just go to the app

//     try{
//         let response = await fetch('http://157.230.66.35/php/signup.php', {
//         mode: 'cors',
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password,
//             display_name: display_name,
//             //profile_pic_url: profile_pic_url,
//         })
//         })
//         return response.text().then(function(text) {
//             console.log(text);
//             return text ? JSON.parse(text) : {}
//         })
//         //return data;
//     }
//     catch(e){
//         console.log(e);
//     }

		console.log(this.state.email);
		console.log(this.state.password)
		this.props.navigation.navigate('Main');
	};

	render() {
		const {
			email,
			password,
			emailTouched,
			passwordTouched
		} = this.state;
		// Show the validation errors only when the inputs
		// are empty AND have been blurred at least once
		const emailError =
		!email && emailTouched
		? strings.EMAIL_REQUIRED
		: undefined;
		const passwordError =
		!password && passwordTouched
		? strings.PASSWORD_REQUIRED
		: undefined;
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
			>
			<Image source={imageLogo} style={styles.logo} />
			<View style={styles.form}>
			<FormTextInput
				value={this.state.email}
				onChangeText={this.handleEmailChange}
				onSubmitEditing={this.handleEmailSubmitPress}
				placeholder={strings.EMAIL_PLACEHOLDER}
				autoCorrect={false}
				keyboardType="email-address"
				returnKeyType="next"
				autoCapitalize={"none"}
				onBlur={this.handleEmailBlur}
				error={emailError}
			/>
			<FormTextInput
				ref={this.passwordInputRef}
				value={this.state.password}
				onChangeText={this.handlePasswordChange}
				placeholder={strings.PASSWORD_PLACEHOLDER}
				secureTextEntry={true}
				returnKeyType="done"
				onBlur={this.handlePasswordBlur}
				error={passwordError}
			/>
			<Button
				label={strings.LOGIN}
				onPress={this.handleLoginPress}
				disabled={!email || !password}
			/>
			</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.WHITE,
		alignItems: "center",
		justifyContent: "space-between"
	},
	logo: {
		flex: 1,
		width: "90%",
		resizeMode: "contain",
		alignSelf: "center"
	},
	form: {
		flex: 1,
		justifyContent: "center",
		width: "80%"
	}
});

export default LoginScreen;
