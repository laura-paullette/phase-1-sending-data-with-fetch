// Add your code here
function submitData ( userName, userEmail){
    const formData = {
        name:userName,
        email:userEmail
    }

    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
           Accept : "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }

    return fetch("http://localhost:3000/users", config)
    .then(response => response.json())
    .then(json => {
        let p = document.createElement('p');
        p.textContent = json.id;
        document.querySelector("body").appendChild(p);
        console.log("id");
    })

    .catch((error) =>{
        let p = document.createElement('p');
        p.textContent = error.message;
        document.querySelector("body").appendChild(p);
    
    });

}