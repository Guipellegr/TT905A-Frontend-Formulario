let url = "https://tt905-mensagem-guilherme-lucio.herokuapp.com/festas/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(festa){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'festa' : festa
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novaFesta){
      const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'festa' : novaFesta
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        }
    }
    await fetch(`${url}${id}`, options);
}

function submitPost(){
    const form = document.forms['postForm'];    
    const festa = form["festa"].value;
    callFetchWithPost(festa);
    return false; 
}

function submitPut(){
    const form = document.forms['putForm'];    
    const id = form["id"].value;
    const festa = form["festa"].value;
    callFetchWithPut(id, festa);
    return false; 
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}