function fetchData(){
    fetch("https://web-backend-l6ae.onrender.com/workwear")
    .then((res)=>res.json())
    .then((data)=>list(data))
    .catch((err)=>console.log(err))

}
fetchData()

function list(data)
{
    let datastore=data.map((el)=>Seccard(el.image1,el.image2,el.product,el.price))
    document.querySelector(".slider-img5").innerHTML=datastore.join("")
}

function Seccard(image1,image2,product,price)
{
    let cart=` <div class="pic3" id="pic">
   
    <a href="description.html?image2=${encodeURIComponent(image2)}&product=${encodeURIComponent(product)}&price=${encodeURIComponent(price)}">
            
    <div class="sliderBothImg">
    
        <img src="${image1}" class="img1" alt=""> 
          
        <img src="${image2}" class="img2" alt=""> 
        </a>
              
    </div>
  
    <p>${product}</p>
    <p>${price}</p>
    <button class="btn Add"><a href="">Add To Card</a></button>
</div>

`;
return cart;
}

//mens tshirt 4



function datafetch(){
    fetch("https://web-backend-l6ae.onrender.com/womensproduct")
    .then((res)=>res.json())
    .then((data)=>datalist(data))
    .catch((err)=>console.log(err))

}
datafetch()

function datalist(data)
{
    let stored=data.map((el)=>sliderdata(el.image1,el.image2,el.product,el.price))
    document.querySelector(".slider-img4").innerHTML=stored.join("")
}

function sliderdata(image1,image2,product,price)
{
    let tshirt=` 
    <div class="pic4" id="pic">
    <div class="pic4bothimg">
        <img src="${image1}" class="shirt1" alt="" style="width: 250px;height:300px">   
        <img src="${image2}" class="shirt2" alt="" style="width: 250px;height:300px">        
    </div>
    <p>${product}</p>
    <p>${price}</p>
    <button class="btn Add"><a href="">Add To Card</a></button>
</div>
   
`;
return tshirt;
}

    function fetchWomensData() {
        fetch("https://web-backend-l6ae.onrender.com/tshirt")
            .then((res) => res.json())
            .then((data) => womenslist(data))
            .catch((err) => console.log(err));
    }

    fetchWomensData();

    function womenslist(data) {
        let  connection= data.map((el) => womensCard(el.image, el.name , el.price, ));
         document.querySelector(".slider-img3").innerHTML=connection.join("")
    } 

    function womensCard(image, name, price,) {
        let womens = `
            <div class="pic3">
            <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="" style="width: 250px;height:300px">
                </a>
                <p style="width:60%">${name}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
        return womens;
    }




    function fetchWomensshirtsData() {
        fetch("https://web-backend-l6ae.onrender.com/womenshirts")
            .then((res) => res.json())
            .then((data) => womensshirtslist(data))
            .catch((err) => console.log(err));
    }

    fetchWomensshirtsData();

    function womensshirtslist(data) {
        let  connected= data.map((el) => womensshirtsCard(el.image, el.name , el.price, ));
         document.querySelector(".slider-img6").innerHTML=connected.join("")
    } 

    function womensshirtsCard(image, name, price,) {
        let womens = `
            <div class="pic3">
            <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="" style="width: 250px;height:300px">
                </a>
                <p style="width:60%">${name}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
        return womens;
    }



    
    function fetchmensworkData() {
        fetch("https://web-backend-l6ae.onrender.com/mensworkwear")
            .then((res) => res.json())
            .then((data) => mensworklist(data))
            .catch((err) => console.log(err));
    }

    fetchmensworkData();

    function mensworklist(data) {
        let  joined= data.map((el) => mensworkCard(el.image, el.name , el.price, ));
         document.querySelector(".slider-img7").innerHTML=joined.join("")
    } 

    function mensworkCard(image, name, price,) {
        let mensworkwear = `
            <div class="pic3">
            <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="" style="width: 250px;height:300px">
                </a>
                <p style="width:60%">${name}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
       
        return mensworkwear;
    }


    
    
    function fetchcapData() {
        fetch("https://web-backend-l6ae.onrender.com/cap")
            .then((res) => res.json())
            .then((data) => caplist(data))
            .catch((err) => console.log(err));
    }

    fetchcapData();

    function caplist(data) {
        let  joine= data.map((el) => capCard(el.image, el.name , el.price, ));
         document.querySelector(".slider-img8").innerHTML=joine.join("")
    } 

    function capCard(image, name, price,) {
        let cap = `
            <div class="pic3">
            <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
           
                <img src="${image}" alt="" style="width: 250px;height:300px">
                </a>
                <p style="width:60%">${name}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
        return cap;
    }




    function fetchwatchData() {
        fetch("https://web-backend-l6ae.onrender.com/watch")
            .then((res) => res.json())
            .then((data) => watchlist(data))
            .catch((err) => console.log(err));
    }

    fetchwatchData();

    function watchlist(data) {
        let  link= data.map((el) => watchCard(el.image, el.name , el.price, ));
         document.querySelector(".slider-img9").innerHTML=link.join("")
    } 

    function watchCard(image, name, price,) {
        let watch = `
            <div class="pic3">
            <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="" style="width: 250px;height:300px">
                </a>
                <p style="width:60% ">${name}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
        return watch;
    }




