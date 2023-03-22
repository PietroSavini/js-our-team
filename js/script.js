

//creazione nuova row indipendentemente dal click dell aggiungi nuovo utente
const row = document.querySelector(".row-container");

//funzionalità bottone in canvas
const newMember = document.querySelector(".my_btn-submit");
let newUser;
newMember.addEventListener("click", function(){
    //prendo valori al click del pulsante "crea nuovo membro"
    const file = document.getElementById("profile-img");
    const userName = document.getElementById("new-member-name").value;
    const userSurname = document.getElementById("new-member-surname").value;
    const userDescription = document.getElementById("new-member-description").value;
    let imageUrl;
    //controllo se lutente ha effettivamente caricato l immagine
    if (file.files.length > 0) {
        // il file è stato caricato, puoi continuare 
        imageUrl = URL.createObjectURL(file.files[0]);
        //immetto i valori nell oggetto js 
        newUser = {
        picture : imageUrl,
        name : userName,
        surname : userSurname,
        description : userDescription,
        }

        //pulizia dei campi di input
        document.getElementById("new-member-name").value = "";
        document.getElementById("new-member-surname").value = "";
        document.getElementById("new-member-description").value = "";
        document.getElementById("profile-img").value = "";

         //creazione nuova card in DOM 
        const newCard = document.createElement("div");
        newCard.classList.add("col-4");
        row.appendChild(newCard);
        const newCardHtml =`
        <div class="card">
        <div class="card-img-top d-flex align-items-center justify-content-center flex-column">
            <img src="${newUser.picture}" alt="">
        </div>
        <div class="card-body">
            <span class="me-2 ">${newUser.name}</span><span>${newUser.surname}</span>
            <p>${newUser.description}</p>
        </div>
    `
    newCard.insertAdjacentHTML("beforeend", newCardHtml);
    
    } else {
        alert("carica un immagine")
    }
    console.log(newUser);

   
})


