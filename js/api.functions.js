/**
 * Created by epichardo on 6/10/17.
 * Este metodo me da el token , con el usuario y el password
 */
function set_token(username,password)
{
    if(!client_ready)
    {
        console.log("Client Not Ready");
        return false;
    }

    var _url = server+'oauth/token';
    var data = {
        client_id:localStorage.getItem('client_id'),
        client_secret:localStorage.getItem('client_secret'),
        grant_type:'password',
        username: username,
        password: password
    };

    $.ajax({
        url:_url,
        type:'POST',
        dataType:'json',
        data:data,
        beforeSend:function(){
            console.log("Loading");
        },
        success:function(data){
            // console.log(data);
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('expiration',data.expires_in);
            localStorage.setItem('type',data.token_type);
            $("#login-form").hide();
            console.log("Done");
            // console.log(token_access);
        }
    });
}

function destroyToken()
{
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
}
function get_token()
{
    var token = localStorage.getItem('token');
    var expirantion = localStorage.getItem('expiration');

    if(!token || !expirantion)
        return false;

    if(Date.now() > parseInt(expirantion)){
        destroyToken();
        return null;
    }
    return token;
}
/**
 * Init Step #1
 * This method retrieve the client Secret and Client Id works
 * */
function get_clients_info()
{
    var _url = server + 'api/token/data';
    $.ajax({
        url:_url,
        type:'POST',
        dataType:'json',
        data:{action:'data'},
        beforeSend:function(){
            console.log("Getting Client Info");
        },
        success:function(data){
            // console.log(data);
            localStorage.setItem('client_id', data.client_id);
            localStorage.setItem('client_secret',data.client_secret);
            client_ready = true;
            console.log("Client Ready");
            // console.log(token_access);
        }
    });
}
