import Expo from 'expo' 
 
const Stor = async (key: string, value: string) => {
	 
	var json = ''
	
	if ("string" == typeof value) {
		console.log(key, value)
		Expo.SecureStore.setItemAsync(key, value)
		return '';
	}
	else {
		json = await Expo.SecureStore.getItemAsync(key)
		console.log(key, json)
		return json
	}

}
 
export default Stor
