function cubaXhr() {
    const startTime = (new Date()).getTime();
    console.log("Implementation with xhr");
    const xhr = new XMLHttpRequest();

    xhr.open("get", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = xhr.responseText;
            const json_data = JSON.parse(data);
            console.table(json_data);
        } else {
            console.info("Request failed with status: " + xhr.status);
        }
    };

    xhr.onerror = function () {
        console.log('XHR request encountered an error' + xhr.status);
    };

    xhr.onreadystatechange = function () {
        console.log('xhr.onreadystatechange', xhr.readyState);
        let endTime = (new Date()).getTime();
        console.log('diff time: ', (endTime-startTime));
    };

    xhr.send();
}
// Call the function
// cubaXhr();

$(document).ready(function () {
    // console.info("guna jquery ajax");
    function cubaXhr() {
        console.log("start calling");
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            method: 'GET',
            success: function (data) {
                console.table(data);
            },
            error: function (xhr, status, error) {
                console.error(`Request failed with status : ${xhr.status}`);
            }
        });
        console.log("end calling");
    }
    // Call the function
    // cubaXhr();

    function jqueryAjax2() {
        var userData = {
            name: "Johan Dolah",
            username: "johandolah",
            email: "jdolah@gmail.com"
        };
    
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(userData),
            success: function(response) {
                console.log(`New user created: ${JSON.stringify(response)} with generated id = ${response.id}`);
            },
            error: function(xhr, status, error) {
                console.error("Error creating user:", error);
            }
        });
    }
    // jqueryAjax2();

    function jqueryAjax3() {
        var userBaru = {
            name: "Johana Baru",
            email: "joh_bar@gmail.com",
            phone: "123-456-4355"
        };

        // User ID to be updated
        var userId = 1; // Example user ID bagi user Johan

        // Send PATCH request to update the user
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/" + userId,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify(userBaru),
            success: function(response) {
                console.info("User updated:", response);
            },
            error: function(xhr, status, error) {
                console.error("Error updating user:", error);
            }
        });
    }
    // jqueryAjax3();

    function jqueryAjax4() {
        // User ID to be deleted
        var userId = 1; 

        // Send DELETE request to remove the user
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/" + userId,
            method: "DELETE",
            success: function(response) {
                console.log("User deleted:", response);
            },
            error: function(xhr, status, error) {
                console.error("Error deleting user:", error);
            }
        });
    }
    // jqueryAjax4();
});

function promise1() {
    console.info("Implementation using promise");
    const promise = new Promise(function (resolve, reject) {
        // Simulasikan async guna setTimeout. dlm real sit, buat request ke jsonplaceholder
        setTimeout(function () {
            const randomNumber = Math.random(); //generate 1 random number
            if (randomNumber > 0.5) { //jika nilainya >0.5
                resolve(randomNumber); // Resolve the promise with the random number
                //dlm real situation, resolve dengan json data users
            } else {
                reject(`Random number is ${randomNumber} less than 0.5`); // Create object from Reject 
            }
        }, 2000); // pause 2 seconds before resolving or rejecting the promise
    });
    console.log('start');
    promise
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.error(err);
        });
    // console.log('num: ' + num);
    console.log('end');
}
// promise1();

function fetch1() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(users => {
            console.log('Users:', users); // Log the fetched users
        })
        .catch(error => {
            console.error('Error: ', error); // Log any errors
        });
}
// fetch1();

// Async/Await example
// console.log("Start Async/Await");
async function asyncExample() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    console.log("Async/Await data:", data);
    console.table(jsonData);
  } catch (error) {
    console.error("Async/Await error:", error);
  }
}
// asyncExample();
// console.log("End Async/Await");
