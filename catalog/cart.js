let easy = 0;
let blabla = 0;
let joa = 0;

class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;

        this.createCart();
    }


    createCart(){
        this.catalogCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'flex';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            wrapper.className = 'wrapper_cart';
            for(let i = 0; i < productsCart.length; i++){
                let item = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let name = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    contentText: productsCart[i].name
                });
                let img = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'image',
                    bgImage:`url('${productsCart[i].img}')`
                });
                let price = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'pricee',
                    contentText: productsCart[i].price
                });
              

                let kg = document.createElement('div');
                kg.className = 'kg';
                let massa = document.createElement('div');
                massa.className = 'massa';
                massa.innerHTML = '1 kg';
                let btnMassa = document.createElement('div');
                btnMassa.className = 'btnMassa';
                let btn_plus = document.createElement('button');
                btn_plus.className = 'btn_plus';
                btn_plus.innerHTML = '+';
                let btn_minus = document.createElement('button');
                btn_minus.className = 'btn_minus';
                btn_minus.innerHTML = '-';
                
                
                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                item.appendChild(kg);
                kg.appendChild(massa);
                kg.appendChild(btnMassa);
                btnMassa.appendChild(btn_minus);
                btnMassa.appendChild(btn_plus);
                wrapper.appendChild(item);
               




                btn_plus.addEventListener('click', function(){
                    let sum = massa.innerHTML;
                    let num = sum.substr(0, sum.length - 2);
                    massa.innerHTML = Number(num) + 1 + 'kg';
    
                    let pr = productsCart[i].price; 
                    let pPr = pr.substr(0, pr.length - 1);          
                    price.innerHTML = Number(pPr) *  (Number(num) + 1 )+ '$';
                    
                })
                btn_minus.addEventListener('click', function(){
                    let sum = massa.innerHTML;
                    let num = sum.substr(0, sum.length - 2);
                    if(Number(num) > 1){
                    massa.innerHTML = Number(num) - 1 + 'kg';
                    let pr = productsCart[i].price;   
                    let pPr = pr.substr(0, pr.length - 1);             
                    price.innerHTML = Number(pPr) *  (Number(num) - 1 )+ '$';
                    
                    }
                    
                })
            };
            
            
            let newDiv = document.createElement('div');
            newDiv.innerHTML = 'Calculate It:';
            newDiv.className = 'result';
            let newSpan = document.createElement('span');
            newSpan.className = 'summa';
            

            newDiv.addEventListener('click', function(){
            let pricee = document.querySelectorAll('.pricee');
                let sum = 0;
                for(let i = 0; i < productsCart.length; i++){
                    let p = Number.parseInt(pricee[i].innerHTML);
                    sum += p; 
                    blabla = sum;
                   joa = sum + '$';                   
                   easy = joa;
                   newSpan.innerHTML = easy;
                }
            
            
            })
            
            let buy = document.createElement('button');
                buy.className = 'btn_buy';
                buy.innerHTML = 'Buy it ALL';

            newDiv.appendChild(newSpan);
            wrapper.appendChild(newDiv);
            
            

            let close = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'close',
                contentText: 'X'
            });

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';
            });

            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(buy);

            buy.addEventListener('click', function(){
                if(blabla > 0){
                alert(`Поздравляю, Вы оформили заказ на ${blabla + '$'}`);
            } else {
                alert('Посчитайте сумму заказа!');
            }
            })




        });
        
    };

    
    getProductCart(){
        
        
        let products = store.getProducts();
        let productsInCart = [];
            
        
        
        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsInCart.push(this.catalogProduct[i]);
            }
        }
        
      

        return productsInCart;
    }
    
}


let cart = new Cart('.container_cart', '.catalog_counter', catalogProduct);




