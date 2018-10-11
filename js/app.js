/**
 * Created by epichardo on 6/10/17.
 */
    // url:'http://127.0.0.1:8000/api/test',
    // url:'http://consults.vitam.do/api/test',
    // url:'http://portfolio.sdq.theoreminc.net/api/projects',
    // var server = 'http://127.0.0.1:8000/';

var server = 'http://consults.vitam.do/';
var client_ready = false;

$(function(){
    init();
});

function init()
{
    //This need it for authenticate API clients Info
    get_clients_info();
}

function logout()
{
    destroyToken();
}




