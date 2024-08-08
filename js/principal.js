
$(document).ready(function(){  
    var token = localStorage.getItem("accessToken");
    if(token == null)
        $(location).prop('href', '/index.html');

    $("#botoncitoCerrarSesion").click(function(){
            jQuery.ajax({  
                url: 'http://localhost:8000/api/logout',  
                type: 'GET',
                headers: {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + token
                },
                success: function(resultado) {  
                    localStorage.removeItem("accessToken");
                    alert("Ta luego");
                    $(location).prop('href', '/index.html');    
                },
                
                error: function(resultado){
                    alert("Hubo un error");
                } 
                
            });  

        });

    
});  