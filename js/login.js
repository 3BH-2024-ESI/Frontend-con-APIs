
$(document).ready(function(){  
    var token = localStorage.getItem("accessToken");
    if(token != null)
        $(location).prop('href', '/principal.html');

    $("#botoncitoLogin").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        
        var data = {
            "username": username,
            "password": password,
            "grant_type" : "password",
            "client_id" : 1,
            "client_secret" : "5GtMgn5vXA2MJ3d8OgWilX05rhevBLocLdmiu7mD"
        }

        jQuery.ajax({  
            url: 'http://localhost:8000/oauth/token',  
            type: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            data: JSON.stringify(data),
            
            success: function(resultado) {  
                localStorage.setItem("accessToken", resultado.access_token);
                $(location).prop('href', '/principal.html');
            
                
            },
            
            error: function(resultado){
                if(resultado.responseJSON.error == "invalid_grant")
                    $("#mensaje").html(resultado.responseJSON.message);
                if(resultado.responseJSON.error == "invalid_request")
                    $("#mensaje").html(resultado.responseJSON.hint);
                
            } 
            
        });  
    });
    
});  