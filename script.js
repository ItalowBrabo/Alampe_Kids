let docTitle = document.title; //Mudar o titulo quando a pessoa sai da aba
window.addEventListener("blur",() =>{
    document.title = "Não vá! Fica mais um pouquinho 🥺";
})
window.addEventListener("focus",() =>{
    document.title = docTitle;
})
