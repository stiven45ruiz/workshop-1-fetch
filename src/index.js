/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

//intl
//1-- dor formato a fechas
//2-- formato a monedas
const formatPrice = (price) =>{
    
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}

//web api
//Conectarnos al server 
window.fetch(`${urlBase}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
//JSON--> data--> renderizar info browser
.then((responseJson) => {
    const allItems = []
    responseJson.data.forEach(item => {
        //create imagen
        const image = document.createElement("img");
        image.src = `${urlBase}${item.image}`;
        image.className = "rounded-full";

        //create title
        const title = document.createElement("h2");
        title.textContent = item.name;
        title.className = "text-2xl fontTitle rounded";

        //create price
        const price = document.createElement("div");
        price.textContent = formatPrice(item.price);
        price.className = "text-lg text-gray-500";

        const bounce = document.createElement("svg");
        bounce.textContent = "👇🏽 Más";
        bounce.className = "animate-bounce  box";

        const description = document.createElement("div");
        description.textContent = item.attributes.description;
        description.className = "";

        const container = document.createElement("div");
        container.append(image, title, price, bounce);
        container.className = "target p-2";

        allItems.push(container)


    });
    appNode.append(...allItems);
});
