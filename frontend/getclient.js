

let getclientId = document.getElementById("getclientId")

  
//Validere om oplysniger er korrekte.
function getClient() {



//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
		{
            let userdata = {
                clientId : getclientId.value
            }
            console.log(getclientId.value)
        
            axios.get(`https://localhost:8080/clients?clientId=${getclientId.value}`)
            .then(function(response){
            console.log(response.data[0])
            document.getElementById("getfirstname").innerHTML = "First Name: " + response.data[0].firstName;
            document.getElementById("getlastname").innerHTML = "Last Name: " + response.data[0].lastname;
            document.getElementById("getstreetaddress").innerHTML = "Street Address: " + response.data[0].streetAddress;
            document.getElementById("getcity").innerHTML = "City: " + response.data[0].city;
            })
            .then(function(data){
                console.log(data)
            })
         alert("Brugeren er her");
		}
}