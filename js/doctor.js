/**
 * Created by epichardo on 6/10/17.
 */
$(function(){
   $(document).on('click',"#get-doctors",function(e){
       e.preventDefault();
       get_all_doctors();
   }) ;
});

function get_all_doctors()
{
    var _url = server+'api/doctors/all';

    $.ajax({
        url:_url,
        type:'GET',
        dataType:'json',
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", localStorage.getItem('type')+' '+localStorage.getItem('token'));
        },
        success:function(data){
            // console.log(data);
            display_doctors(data.doctors);
            console.log("Done");
            // console.log(token_access);
        }
    });
}

function display_doctors(doctors)
{
    $("#doctors").append($("<h2>").text("Doctors Directory"));
    $("#doctors").append($("<ul>"));

    $(doctors).each(function(key,value){
        // console.log(value);
        $("#doctors ul").append($("<li>").text(value.first+" "+value.last));
    })
}