let divData = document.getElementById("divData");
let card = document.getElementById("card")

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method:"GET"});
    promesa.then((response)=> {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema con el jason", error));
    }).catch((err)=> console.log("Existio un problema en la solicitud", err));
}// getData

function createCards(products){
    console.log(products.legth);
    console.log(products[0].name);

    products.forEach(prod => {
        divData.insertAdjacentHTML("beforeend",
            ` <div class="card col" >
            <img src="${prod.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${prod.name}</h5>
              <p class="card-text">${prod.description}</p>
              <a  class="btn btn-primary">Precio</a>
              <p class="card-text">${prod.price}</p>
            </div>
          </div>` 
          
        )
    });
 // crea una card por cada producto con sus datos esenciales   
 // de preferencia foreach: name, description, imge, price

}// createCards
getData();