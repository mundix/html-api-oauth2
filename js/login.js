/**
 * Created by epichardo on 6/10/17.
 */
$(function(){
   $(document).on('submit','form#sing-up',function(e){
       e.preventDefault();
        do_login();
   }) ;
});

function do_login()
{
    set_token($("#inputEmail").val(),$("#inputPassword").val());
}