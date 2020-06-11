class AllProducts{
    constructor(containerProducts, catalogProducts, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    };

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProducts.length; i++){
            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Add to Cart';
            } else {
                activeText = 'Remove';
            }

            let item = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: `item ${this.catalogProducts[i].cls}`                
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'image',
                bgImage:`url('${this.catalogProducts[i].img}')`
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                contentText: this.catalogProducts[i].price
            }); 
            let btn = createProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                contentText: activeText,
                id: this.catalogProducts[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Remove';
                } else{
                    this.innerHTML = 'Add to Cart';
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);



          


            item.setAttribute('data-toggle', 'tooltip');
            item.setAttribute('data-placement', 'bottom');
            item.setAttribute('title',`${catalogProduct[i].comm}`);

        }
        this.containerProducts.appendChild(wrapper);
    };
}

let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');


let one = document.querySelector('#id1');
let two = document.querySelector('#id2');
let three = document.querySelector('#id3');
let four = document.querySelector('#id4');
let five = document.querySelector('#id5');
let six = document.querySelector('#id6');
let seven = document.querySelector('#id7');
let eight = document.querySelector('#id8');



let one1 = document.createElement('div');
one.parentElement.appendChild(one1);
one1.className = 'sale';
let one2 = document.createElement('div');
two.parentElement.appendChild(one2);
one2.className = 'sale';
let one3 = document.createElement('div');
three.parentElement.appendChild(one3);
one3.className = 'sale';
let one4 = document.createElement('div');
four.parentElement.appendChild(one4);
one4.className = 'sale';
let one5 = document.createElement('div');
five.parentElement.appendChild(one5);
one5.className = 'sale';
let one6 = document.createElement('div');
six.parentElement.appendChild(one6);
one6.className = 'sale';
let one7 = document.createElement('div');
seven.parentElement.appendChild(one7);
one7.className = 'sale';
let one8 = document.createElement('div');
eight.parentElement.appendChild(one8);
one8.className = 'sale';







let hour = 11;
var minute = 60;
var sec = 60;


let hourStarted = 12;
var minuteStarted = 0;
var secStarted = 0;




function start(){z = setInterval(function timeStarted(){
    minuteStarted = minute;
    secStarted = sec;
    hourStarted = hour;
    sec = --sec;

    if(sec == 0){
        sec = 60;
        minute = minute - 1;
    }

    if(minute == 0){
        minute = 60;
        hour = hour - 1;
    }


    document.querySelector('.bbb').innerHTML = hourStarted + ':' + minuteStarted + ':' + secStarted;
   
    
}, 1000)}

start();