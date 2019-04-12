class Welcome extends React.Component {
    state = {}

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        xhr.open("GET", "https://jsonplaceholder.typicode.com/photos/", true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var json_obj = JSON.parse(xhr.responseText);
                    status = true;
                    this.setState({ json_obj });
                } else {
                    console.error(xhr.statusText);
                }
            }
        }.bind(this);
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    }

    render() {
        return (
            <div>
                <img src= {this.state.json_obj ?  this.state.json_obj[0].url : 'loading...'}></img>
            </div>
        );
    }
}

ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
);


//--------------------------------------------------------------
//http://157.230.66.35/phpmyadmin/
//login: eef
//password: p34ch

fetch('http://157.230.66.35/php/signup.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: 'yourValue',
        password: 'yourOtherValue',
        display_name: '',
        profile_pic_url: '',
    })
})