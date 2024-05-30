window.addEventListener("load", () => {
    const para = new URLSearchParams(window.location.search);

    // First set of parameters
    const image1 = para.get("image");
    const name1 = para.get("name");
    const price1 = para.get("price");

    // Second set of parameters
    const image2 = para.get("image2");
    const name2 = para.get("product");
    const price2 = para.get("price2"); // Ensure consistent naming for second price


    const image3 = para.get("image");
    const name3 = para.get("name");
    const price3 = para.get("price"); 


    const image4 = para.get("image");
    const name4 = para.get("name");
    const price4 = para.get("price");


    
    const image5 = para.get("image");
    const title5 = para.get("title");
    const price5 = para.get("price");

    const image6 = para.get("image");
    const name6 = para.get("name");
    const price6 = para.get("price");


    const image7 = para.get("image");
    const name7 = para.get("name");
    const price7 = para.get("price");

    const image8 = para.get("image");
    const name8 = para.get("name");
    const price8 = para.get("price");

    // Update the elements only if the parameters exist
    if (image1) {
        document.querySelector(".descriptionImg").src = image1;
    }
    if (name1) {
        document.querySelector(".titleOfDisc").innerText = name1;
    }
    if (price1) {
        document.querySelector(".discriptionPrice").innerText = price1;
    }

    // Optionally, handle the second set of parameters if they exist
    if (image2) {
        document.querySelector(".descriptionImg").src = image2;
    }
    if (name2) {
        document.querySelector(".titleOfDisc").innerText = name2;
    }
    if (price2) {
        document.querySelector(".discriptionPrice").innerText = price2;
    }


    if (image3) {
        document.querySelector(".descriptionImg").src = image3;
    }
    if (name3) {
        document.querySelector(".titleOfDisc").innerText = name3;
    }
    if (price3) {
        document.querySelector(".discriptionPrice").innerText = price3;
    }


    if (image4) {
        document.querySelector(".descriptionImg").src = image4;
    }
    if (name4) {
        document.querySelector(".titleOfDisc").innerText = name4;
    }
    if (price4) {
        document.querySelector(".discriptionPrice").innerText = price4;
    }


    
    if (image5) {
        document.querySelector(".descriptionImg").src = image5;
    }
    if (title5) {
        document.querySelector(".titleOfDisc").innerText = title5;
    }
    if (price5) {
        document.querySelector(".discriptionPrice").innerText = price5;
    }
    

    if (image6) {
        document.querySelector(".descriptionImg").src = image6;
    }
    if (name6) {
        document.querySelector(".titleOfDisc").innerText = name6;
    }
    if (price6) {
        document.querySelector(".discriptionPrice").innerText = price6;
    }


    if (image7) {
        document.querySelector(".descriptionImg").src = image7;
    }
    if (name7) {
        document.querySelector(".titleOfDisc").innerText = name7;
    }
    if (price7) {
        document.querySelector(".discriptionPrice").innerText = price7;
    }



    
    if (image8) {
        document.querySelector(".descriptionImg").src = image8;
    }
    if (name8) {
        document.querySelector(".titleOfDisc").innerText = name8;
    }
    if (price8) {
        document.querySelector(".discriptionPrice").innerText = price8;
    }
});

   

// Add to cart

let cart = JSON.parse(localStorage.getItem('cart')) || [];


let selectedSize = null;


const sizeOptions = document.querySelectorAll('.size-option');
sizeOptions.forEach(option => {
  option.addEventListener('click', function() {
    sizeOptions.forEach(opt => opt.classList.remove('selected')); 
    option.classList.add('selected'); 
    selectedSize = option.getAttribute('data-size'); 
  });
});


const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.addEventListener('click', function() {
  if (selectedSize) {
    const itemTitle = document.getElementById('itemTitle').textContent;
    const itemPrice = document.getElementById('itemPrice').textContent;
    const itemImage = document.querySelector('.descriptionImg').src;

    const item = {
      title: itemTitle,
      price: itemPrice,
      size: selectedSize,
      image: itemImage
    };

    cart.push(item);

   
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart');
  } else {
    alert('Please select a size');
  }
});

