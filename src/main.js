let shop = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];
var allData;
var data1;
var data2;
var data3;
var data4;

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
  var shopData = [...shopItemsData];console.log(shopData,"sData");
  
  var shopData1 = shopData.filter(function (el) {
    return el.desc == " GROUND CHAKKARAS" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
           
  });
  console.log(shopData1);
  this.allData = true;
  if(allData){
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, desc, img, price } = x;
        let search = basket.find((y) => y.id === id) || [];
        return `
        <div class="pcard">
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p class=${desc}>${desc}</p>
          <div class="price-quantity">
            <h2>₹ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
    </div>
      `;
      })
      .join(""));
  };
  } 
  
  

generateShop();

//new test

let generateShop1 = () => {
  var shopData = [...shopItemsData];console.log(shopData,"sData");
  
  var shopData1 = shopData.filter(function (el) {
    return el.desc == "MATCH BOX" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
           
  });
  console.log(shopData1);
  this.data1=true;
  if(data1){
    return (shop.innerHTML = shopData1
      .map((x) => {
        let { id, name, desc, img, price } = x;
        let search = basket.find((y) => y.id === id) || [];
        return `
        <div class="pcard">
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p class=${desc}>${desc}</p>
          <div class="price-quantity">
            <h2>₹ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
    </div>
      `;
      })
      .join(""));
  };
  } 


  let generateShop2 = () => {
    var shopData1 = [...shopItemsData];console.log(shopData1,"sData");
    
    var shopData2 = shopData1.filter(function (el) {
      //return el.desc == " GROUND CHAKKARAS" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
      return el.desc == "BOMB" || el.desc == " CRACKERS" || el.desc == " GARLAND AND CHORSA" 
             
    });
    console.log(shopData2,"shopData2");
    this.data2=true;
    if(data2){
      return (shop.innerHTML = shopData2
        .map((x) => {
          let { id, name, desc, img, price } = x;
          let search = basket.find((y) => y.id === id) || [];
          return `
          <div class="pcard">
        <div id=product-id-${id} class="item">
          <img width="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p class=${desc}>${desc}</p>
            <div class="price-quantity">
              <h2>₹ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
      </div>
      </div>
        `;
        })
        .join(""));
    };
    } 
  
    let generateShop3 = () => {
      var shopData1 = [...shopItemsData];console.log(shopData1,"sData");
      
      var shopData2 = shopData1.filter(function (el) {
        //return el.desc == " GROUND CHAKKARAS" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
        return el.desc == "MEGA FANCY" || el.desc == "SKY SHOT" || el.desc == "BIJILI" || el.desc == "SPARKLERS"  
               
      });
      console.log(shopData2,"shopData2");
      this.data2=true;
      if(data2){
        return (shop.innerHTML = shopData2
          .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || [];
            return `
            <div class="pcard">
          <div id=product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
              <h3>${name}</h3>
              <p class=${desc}>${desc}</p>
              <div class="price-quantity">
                <h2>₹ ${price} </h2>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${
              search.item === undefined ? 0 : search.item
            }</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
        </div>
        </div>
          `;
          })
          .join(""));
      };
      } 
  
      let generateShop4 = () => {
        var shopData1 = [...shopItemsData];console.log(shopData1,"sData");
        
        var shopData2 = shopData1.filter(function (el) {
          //return el.desc == " GROUND CHAKKARAS" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
          return el.desc == " GIFT BOX" || el.desc == " GROUND CHAKKARAS" || el.desc == "ROCKET" 
                 
        });
        console.log(shopData2,"shopData2");
        this.data2=true;
        if(data2){
          return (shop.innerHTML = shopData2
            .map((x) => {
              let { id, name, desc, img, price } = x;
              let search = basket.find((y) => y.id === id) || [];
              return `
              <div class="pcard">
            <div id=product-id-${id} class="item">
              <img width="220" src=${img} alt="">
              <div class="details">
                <h3>${name}</h3>
                <p class=${desc}>${desc}</p>
                <div class="price-quantity">
                  <h2>₹ ${price} </h2>
                  <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${
                search.item === undefined ? 0 : search.item
              }</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
          </div>
          </div>
            `;
            })
            .join(""));
        };
        } 

        let generateShop5 = () => {
          var shopData1 = [...shopItemsData];console.log(shopData1,"sData");
          
          var shopData2 = shopData1.filter(function (el) {
            //return el.desc == " GROUND CHAKKARAS" || el.desc == "FLOWER POT" || el.desc == "TWINKLING STAR" 
            return  el.desc == "FANCY FOUNTAINS"
                   
          });
          console.log(shopData2,"shopData2");
          this.data2=true;
          if(data2){
            return (shop.innerHTML = shopData2
              .map((x) => {
                let { id, name, desc, img, price } = x;
                let search = basket.find((y) => y.id === id) || [];
                return `
                <div class="pcard">
              <div id=product-id-${id} class="item">
                <img width="220" src=${img} alt="">
                <div class="details">
                  <h3>${name}</h3>
                  <p class=${desc}>${desc}</p>
                  <div class="price-quantity">
                    <h2>₹ ${price} </h2>
                    <div class="buttons">
                      <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                      <div id=${id} class="quantity">${
                  search.item === undefined ? 0 : search.item
                }</div>
                      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                  </div>
                </div>
            </div>
            </div>
              `;
              })
              .join(""));
          };
        }
      

// new test end

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

  console.log(basket);
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
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let navbar = document.getElementById("main-navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos ) {
    navbar.classList.add('sticky');
   
   // header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    //header.classList.remove('navbarOffsetMargin');
  }
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});