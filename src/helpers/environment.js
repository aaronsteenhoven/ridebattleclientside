let APIURL ='';

switch(window.location.hostname) {
    //running locally
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3000'
        break;
    //running on heroku
        case 'disney-stack-client.herokuapp.com':
            APIURL = 'https://disney-universal-server.herokuapp.com';
}

export default APIURL;