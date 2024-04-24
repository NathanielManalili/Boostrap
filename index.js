console.log("HEllos works")

let btnCreate =document.querySelector("#btnCreate");
btnCreate.onclick = function (){
    let floatingProductname = document.querySelector("#floatingProductname");
    let floatingPrice = document.querySelector("#floatingPrice");
    createProduct(floatingProductname.value, floatingPrice.value);
};


function createProduct (productName, productPrice){
    if(!productName) return alert ("Product Name is Required");
    else if (!productPrice) return alert ("Product Price is Required");


    let product = {
        name:productName,
        price:productPrice,
    };

    localStorage.setItem("product", JSON.stringify(product));


    console.log("Creating product......", productName, productPrice)
}