let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");
let order = document.getElementById("order");
this.order.hidden=true;
var placeorderBtn = document.getElementById('placeorder');
this.placeorderBtn.disabled=true;
var txtalret = document.getElementById('txtalret');
this.txtalret.hidden=true;
var txtalretp = document.getElementById('txtalretp');
this.txtalretp.hidden=true;
var txtalreta = document.getElementById('txtalreta');
this.txtalreta.hidden=true;
var txtalretc = document.getElementById('txtalretc');
this.txtalretc.hidden=true;
var txtalretz = document.getElementById('txtalretz');
this.txtalretz.hidden=true;



/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
  var chk = [];
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((x) => x.id === id) || [];
        let { img, price, name } = search;
        
        chk.push(search);
        console.log(chk);
        
        return `
      <div class="cart-item">
        <img width="100" src=${img} alt="" />

        <div class="details">
        
          <div class="title-price-x">
            <h4 class="title-price">
              <p class="iName">${name}</p>
            
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>
        
          <div class="cart-buttons">
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>

          <h3 class = "iPrice">₹ ${item * price}</h3>
        
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to Home</button>
    </a>
    `;
  }
};

generateCartItems();
//console.log(generateCartItems());
/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! Used to calculate total amount of the selected Products
 * ! with specific quantity
 * ? When basket is blank, it will show nothing
 */

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = shopItemsData.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (label.innerHTML = `
    <h2 id="totalbill">Total Bill : ₹ ${amount}</h2>
  
    <button class="checkout" data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout</button>
    <button onclick="clearCart()" class="removeAll" >Clear Cart</button>
    `);
  } else return;
};

TotalAmount();

/**
 * ! Used to clear cart, and remove everything from local storage
 */

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

function test(){
  var total = document.getElementById('totalbill'); console.log(total.innerText);
  var cart= document.getElementById('cart-item');//console.log(typeof cart,cart);
  var cartchk = document.querySelectorAll('.iName');//console.log(cartchk.values());
  var r=[];
  r=cartchk;
  //console.log(TotalAmount(),"tt");
 
  // var admin = document.getElementById('admin');
  // var ctlist  = generateCartItems();
  // admin.innerHTML = `ctlist`;
}

function onAlretTxt(){
  var nameCust = document.getElementById('nameCust').value;
  var phoneCust = document.getElementById('phoneCust').value;
  var addressCust = document.getElementById('addressCust').value;
  var cityCust = document.getElementById('cityCust').value;
  var zipCust = document.getElementById('zipCust').value;
  if(nameCust == ''){
    this.txtalret.hidden=false;
  } else if(phoneCust == ''){
    this.txtalretp.hidden=false;
  }
  else{
    this.txtalret.hidden=true;
  }
  if(phoneCust==''){
    this.txtalretp.hidden=false;
  }
  else{
    this.txtalretp.hidden=true;
  }
  if(addressCust==''){
    this.txtalreta.hidden=false;
  }
  else{
    this.txtalreta.hidden=true;
  }
  if(cityCust==''){
    this.txtalretc.hidden=false;
  }
  else{
    this.txtalretc.hidden=true;
  }
  if(zipCust==''){
    this.txtalretz.hidden=false;
  }
  else{
    this.txtalretz.hidden=true;
  }
}

function hideAlret(){
  var nameCust = document.getElementById('nameCust').value;
  var phoneCust = document.getElementById('phoneCust').value;
  var addressCust = document.getElementById('addressCust').value;
  var cityCust = document.getElementById('cityCust').value;
  var zipCust = document.getElementById('zipCust').value;
  if(nameCust == ''){
    this.txtalret.hidden=false;
  } 
  else{
    this.txtalret.hidden=true;
  }
  if(phoneCust==''){
    this.txtalretp.hidden=false;
  }
  else{
    this.txtalretp.hidden=true;
  }
  if(addressCust==''){
    this.txtalreta.hidden=false;
  }
  else{
    this.txtalreta.hidden=true;
  }
  if(cityCust==''){
    this.txtalretc.hidden=false;
  }
  else{
    this.txtalretc.hidden=true;
  }
  if(zipCust==''){
    this.txtalretz.hidden=false;
  }
  else{
    this.txtalretz.hidden=true;
  }
  
  
}

function onValidate(){
  var nameCust = document.getElementById('nameCust').value;//console.log(nameCust);
  var phoneCust = document.getElementById('phoneCust').value;
  var addressCust = document.getElementById('addressCust').value;
  var cityCust = document.getElementById('cityCust').value;
  var zipCust = document.getElementById('zipCust').value;
  var placeorderBtn = document.getElementById('placeorder');

  
  if(nameCust != '' && phoneCust!='' && addressCust!=''&& cityCust!=''&& zipCust!=''){
    console.log("done");
    placeorderBtn.disabled=false;
  }
}

function sendEmail(){
  var totalBill = document.getElementById('totalbill');
  var nameCust = document.getElementById('nameCust').value;//console.log(nameCust);
  var phoneCust = document.getElementById('phoneCust').value;
  var addressCust = document.getElementById('addressCust').value;
  var cityCust = document.getElementById('cityCust').value;
  var zipCust = document.getElementById('zipCust').value;
  //var admin = document.getElementById('admin');
  var ctlist  = generateCartItems();
  const sId = "service_lpuhdwf" ;
  const tId = "template_gfk5sql" ;

  var paramas ={
    name:nameCust,
    phone:phoneCust,
    address:addressCust,
    city:cityCust,
    zip:zipCust,
    message : totalBill.innerText,
    item: ctlist,
  }

  emailjs.send(sId,tId,paramas).then((res) => {
    console.log(res);
   // alert("ok")
   let load = document.getElementById("load");
   
   let clse = document.getElementById("close");
    if(res.status===200){
      clse?.click();
      this.load.hidden = true;
      this.order.hidden=false;
     // alert("order placed successfully")
      clearCart();
      
     
    }
    else{
      alert("try again")
    }
    
    console.log("call");
  });

  
  }
  











