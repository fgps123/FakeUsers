async function generateFakeUser(){

    var qt = document.querySelector("#quantusers").value;
    var nat = document.querySelector("#natuser").value;
    var inputgender = document.getElementsByTagName("input");
    var gender = "";

    for(let input of inputgender){
        if(input.checked == true){
            gender = input.value;
        } 
    }

    var reply = await fetch(`https://randomuser.me/api/?results=${qt}&gender=${gender}&nat=${nat}`);

    var data = await reply.json();
   // console.log(data.results[0].email);
    
    for(let user of data.results){
        let userdiv = document.createElement("div")
        userdiv.classList.add("user");
        userdiv.innerHTML = `<img width="100" src="${user.picture.medium}">
            <div class="info">
                <span><b>Nome: ${user.name.first+ " " + user.name.last}</b></span>
                <span><b>Email: ${user.email}</b></span>
                <span><b>Cidade: ${user.location.city}</b></span>
                <span><b>Estado: ${user.location.state}</b></span>
                <span><b>Telefone: ${user.phone}</b></span>
                </div>`;

                document.querySelector(".AllUsers").appendChild(userdiv)
    }
}