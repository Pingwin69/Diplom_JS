let meat = document.querySelector('.Meat');
let fish = document.querySelector('.Fish');
let fruits = document.querySelector('.Fruits');
let veg = document.querySelector('.Vegetables');
let all = document.querySelector('.All');

let allMeat = document.querySelectorAll('.meat');
let allFish = document.querySelectorAll('.fish');
let allFruits = document.querySelectorAll('.fruit');
let allVeg = document.querySelectorAll('.veg');


all.addEventListener('click', function(){
    for(i of allFish){
        i.style.display = 'flex'
    };
    for(i of allMeat){
        i.style.display = 'flex'
    };
    for(i of allFruits){
        i.style.display = 'flex'
    };
    for(i of allVeg){
        i.style.display = 'flex'
    };      
})

meat.addEventListener('click', function(){
        for(i of allFish){
            i.style.display = 'none'
        };
        for(i of allMeat){
            i.style.display = 'flex'
        };
        for(i of allFruits){
            i.style.display = 'none'
        };
        for(i of allVeg){
            i.style.display = 'none'
        };      
});

fish.addEventListener('click', function(){
        for(i of allMeat){
            i.style.display = 'none'
        };
        for(i of allFish){
            i.style.display = 'flex'
        };
        for(i of allFruits){
            i.style.display = 'none'
        };
        for(i of allVeg){
            i.style.display = 'none'
        };    
})

fruits.addEventListener('click', function(){
    
        for(i of allFish){
            i.style.display = 'none'
        };
        for(i of allFruits){
            i.style.display = 'flex'
        };
        for(i of allMeat){
            i.style.display = 'none'
        };
        for(i of allVeg){
            i.style.display = 'none'
        };    
})

veg.addEventListener('click', function(){
        for(i of allFish){
            i.style.display = 'none'
        };
        for(i of allVeg){
            i.style.display = 'flex'
        };
        for(i of allFruits){
            i.style.display = 'none'
        };
        for(i of allMeat){
            i.style.display = 'none'
        };         
})