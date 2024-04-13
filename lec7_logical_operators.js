let price=10;
let quantity=1;
if(price==10 || quantity!=0){
    console.log("You can buy the product");
    quantity--;
    console.log("Current quantity: ",quantity);
}
if(price>10 && quantity>0){
    console.log("Remove some items from the cart");
    quantity++;
    console.log("Current quantity: ",quantity);
}
if(!quantity){
    console.log("Items finished");
}