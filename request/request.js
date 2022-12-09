let url = "api_github.json";
let getBody = document.querySelector("body");
//  let Users = {};

function getUsername(username) {
    fetch(url)
    .then(res=> res.json())
    .then(data =>data.forEach(element => {
        if (element.login === username){
            let div = document.createElement("div");
            let user = document.querySelector("div.user");
            if (user) document.body.removeChild(user);
            getBody.append(div);
            div.classList.add("user");
            div.innerHTML = "<p>login:"+`${element.id}`+" Username:"+`${element.login}`+"</p>";
        }}
    )    
)}

export default getUsername;

