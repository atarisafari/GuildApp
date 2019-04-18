export const login = async (username,password) => {
    try{
        let response = await fetch('http://157.230.66.35/php/login.php', {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
        })
        return response.text().then(function(text) {
            console.log(text);
            return text ? JSON.parse(text) : {}
        })
    }
    catch(e){
        console.log(e);
    }
}
