
function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let waitamount = 50

async function oneclickrun() {
    //create client
    {
        let userdata = {
            clientId : "defaultclient",
            firstName : "placeholder",
            lastname : "placeholder",
            streetAddress : "placeholder",
            city : "placeholder"  
        }
        console.log(userdata)
   
    
        axios.post("https://localhost:8080/clients", userdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din bruger er nu oprettet");
    }
    //create reservation
    await wait(waitamount)
    {
        let reservationdata = {
            reservationID : "defaultreservation",
            clientID : "62ef8b79-57e4-4b4e-9f64-d1c850a990e7",
            date : Date.now(),
            hotelName : "defaulthotelName",
            price : 1000, 
            balance : 1000
        }
        console.log(reservationdata)
        axios.post("https://localhost:8080/clients/reservations", reservationdata)
        .then(function(response){})
    alert("Din reservation er nu oprettet")
    }
    // update client
    await wait(waitamount)
    {
        let userdata = {
            clientId : "defaultclient",
            firstName : "defaultupdated",
            lastname : "defaultupdated",
            streetAddress : "defaultupdated",
            city : "defaultupdated"  
        }
        console.log(userdata)
    
        axios.put("https://localhost:8080/clients", userdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din bruger er nu opdateret");
    }
    // update reservation
    await wait(waitamount)
    {
        let reservationdata = {
            reservationID : "defaultreservation",
            clientID : "62ef8b79-57e4-4b4e-9f64-d1c850a990e7",
            date : Date.now(),
            hotelName : "defaultupdated",
            price : 1000, 
            balance : 1000
        }


        console.log(reservationdata)
    
        axios.put("https://localhost:8080/clients/reservations", reservationdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din reservation er nu opdateret");
    }
    //get client
    await wait(waitamount)
    {
        
        let getclientId = "defaultclient"
    
        axios.get(`https://localhost:8080/clients?clientId=${getclientId}`)
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
    // get reservation
    await wait(waitamount)
    {
           
        let getreservationID = "defaultreservation"
    
        axios.get(`https://localhost:8080/clients/reservations?reservationID=${getreservationID}`)
        .then(function(response){
        console.log(response.data[0])
        document.getElementById("getclientID").innerHTML = "clientID: " + response.data[0].clientID;
        document.getElementById("getdate").innerHTML = "Date: " + response.data[0].date;
        document.getElementById("gethotelName").innerHTML = "Hotel Name: " + response.data[0].hotelName;
        document.getElementById("getprice").innerHTML = "Price: " + response.data[0].price;
        document.getElementById("getbalance").innerHTML = "Balance: " + response.data[0].balance;
        })
        .then(function(data){
        })
     alert("Reservationen er her");
    }
    // delete client
    await wait(waitamount)
    {
        let userdata = {
            clientId : "defaultclient"
        }
        console.log(userdata.clientId)
    
        axios.delete("https://localhost:8080/clients", { data: {userdata}})
        .then(function(response){
        console.log(response)
        })
     alert("Brugeren er nu slettet");
    }
    // delete reservation
    await wait(waitamount)
    {
        let userdata = {
            reservationID : "defaultreservation"
        }
        console.log(userdata.reservationID)
    
        axios.delete("https://localhost:8080/clients/reservations", { data: {userdata}})
        .then(function(response){
        console.log(response)
        })
     alert("Reservationen er nu slettet");
    }
}