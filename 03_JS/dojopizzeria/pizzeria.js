// function pizzaOven(crust,style,toppings){
    
//     var pizza = {};
//     pizza.crust = crust;
//     pizza.style = style;
//     pizza.topping = toppings;
//     return pizza

// }

// var pizzas = {
//     crust: "deep dish",
//     style: "traditional",
//     toppings: ["mozzarella", "pepperoni","sausage"]
// }
// console.log(pizzas)



// var pizzaOne = pizzaOven("hand tossed","traditional",["mozzarella","feta","mushrooms","olives","onions"])

// console.log(pizzaOne)


function pizzaOven(crust,style,toppings){

    var crust = ["hand tossed", "deep dish", "Chicago","thin","New York"]
    var style = ["Meat Lovers","Veggie","Cheese Only", "Keto"]
    var toppings = ["Sausage","Jalapeno", "Feta", "Chicken","Three Cheese Blend"]
    var randomCrustIndex = Math.floor(Math.random()*crust.length)
    var randomStyleIndex = Math.floor(Math.random()*style.length)
    var randomToppingsIndex= Math.floor(Math.random()*toppings.length)

    var pizza = {};
    pizza.crust = crust[randomCrustIndex];
    pizza.style = style[randomStyleIndex];
    pizza.toppings = toppings[randomToppingsIndex];
    return pizza

}

console.log(pizzaOven());


