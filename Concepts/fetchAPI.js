// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and 
//         used for interacting with API's to retrieve and send 
//         data asynchronously over the web 
//         fetch(url, {options})


/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {

    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error))
*/

fetchData();

async function fetchData(){

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }  const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);

    }
}