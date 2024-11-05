// A better way to handle Promises
// 

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject("Error while registering user");
            console.log("Register ends here...#");
            //resolve('Bye!!');   
            const userData = { id: 1, name: "Usman" };   
            resolve(userData); 
        }, 2000);
    });
        
   }
   
   function sendEmail(userData) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {return reject("email problem")
            console.log("Sending email to :", userData.name);
            console.log("Email ends here...");
            resolve();        
        }, 1000);
    });
        
   }

   function login() {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("Login ends here...");
            resolve();      
        }, 2000);
    });      
   }

   function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("GetData ends here...");    
            resolve();   
        }, 1000);
    });    
   }

   function displayData () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("DisplayData ends here...");
            resolve();     
        }, 1000);
    });      
   }


//    register()
//    .then( (userData) =>
//     {
//         return sendEmail(userData)
//     })
//    .then(login)
//    .then(getData)
//    .then(displayData)
//    .catch( (err) => { // catch will be called after a return reject() call
//     console.log("Here is an error ... " + err) // err => Data passed to reject() function
//    });

async function authenticate() // This function with async keyword returns a Promise by default
{
    const userData = await register();
    await sendEmail(userData);
    await login();
    await getData();
    await displayData();
}

authenticate().then ( () => { // we can use then(), because async function returns a Promise by default
    console.log("Process Done!")
}).catch ( (err) => {
    console.log(err); // any error from reject()
})
;

   console.log("Remaining app code not dependent on above user regisration/login/display scenario");
   


