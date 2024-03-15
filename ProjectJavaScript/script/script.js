const container = document.querySelector('.container');
const search = document.querySelector('#search');
const selectCategory = document.querySelector('#select-category');
const selectPrice = document.querySelector('#select-price');
const rangeInput = document.querySelector('#range');
const maxInput = document.querySelector('#max');
const minInput = document.querySelector('#min');



const products = [
    {
        id: "1",
        image: "assets/Products/iphone.jpg",
        rating: 4,
        name: "smart phone",
        brand: "Iphone",
        price: 1200,
        category: ['electronic', 'communication'],
        description: "The iPhone 15 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally",
        sold:false
    },
    {
        id: "2",
        image: 'assets/Products/TV.png',
        rating: 4,
        name: "TV",
        brand: "Lg",
        price: 700,
        category: ['electronic'],
        description: "LG overhauled the interface in 2021 with the release of webOS 6.0, and it's still one of the best-looking platforms. The redesign replaces the menu ribbon of previous versions with a full-screen smart hub, complete with various widgets.",
        sold:true
    },
    {
        id: "3",
        image: 'assets/Products/Headphones.jpg',
        rating: 3,
        name: "Headphones",
        brand: "Beats studio pro",
        price: 200,
        category: ['electronic', 'media'],
        description: "Headphones are a pair of padded speakers which you wear over your ears in order to listen to a radio or recorded music, or for using a phone without other people hearing it.",
        sold:false
    },
    {
        id: "4",
        image: 'assets/Products/Sofa.jpg',
        rating: 2,
        name: "sofa",
        brand: "ciao berto",
        price: 1000,
        category: ['home'],
        description: "Nordic Modern Lounge Minimalist Grey High Quality Furniture Comfortable Fabric Upholstered Single Living Room Sofas SM-1063-1",
        sold:false
    },
    {
        id: "5",
        image: 'assets/Products/Keyboard.jpg',
        rating: 5,
        name: "keyboard",
        brand: "lenovo",
        price: 90,
        category: ['electronic', 'keyboard'],
        description: "Dacoity Gaming Keyboard, 104 Keys All-Metal Panel, Rainbow LED Backlit Quiet Computer Keyboard, Wrist Rest, Multimedia Keys, Anti-ghosting Keys, Waterproof Light Up USB Wired Keyboard for PC Mac Xbox",
        sold:false
    },
    {
        id: "6",
        image: 'assets/Products/Piano.png',
        rating: 2,
        name: "piano",
        brand: "fazioli",
        price: 250,
        category: ['music', 'electronic', 'entertaiment'],
        description: "The piano is a keyboard instrument that produces sound when pressed on the keys.",
        sold:false
    },
    {
        id: "7",
        image: 'assets/Products/firestick.jpg',
        rating: 5,
        name: "firestick",
        brand: "lg",
        price: 15,
        category: ['electronic', 'Equipmant'],
        description: "stick is a media streaming device which lets you stream video, install apps, play music etc on your tv. *It's built on the Android platform and it converts your normal tv to a smart tv.",
        sold:false
    },
    {
        id: "8",
        image: 'assets/Products/chair.jpg"',
        rating: 3,
        name: "chair",
        brand: "notabriliant",
        price: 30,
        category: ['home', 'chair'],
        description: "Customised italy lounge suppliers modern living room furniture accent single seater sofa chair",
        sold:true
    },
    {
      id: "9",
      image: 'assets/Products/back-equipment.jpg"',
      rating: 2,
      name: "back-equipment",
      brand: "protech",
      price: 150,
      category: ['gym', 'equipment'],
      description: "Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance.",
      sold:false
  },
  {
    id: "10",
    image: 'assets/Products/medicine-ball.jpg"',
    rating: 5,
    name: "medicine-ball",
    brand: "protech",
    price: 20,
    category: ['gym', 'equipment'],
    description: "Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance.",
},
{
  id: "11",
  image: 'assets/Products/picture.jpg"',
  rating: 5,
  name: "picture-decoration",
  brand: "notabriliant",
  price: 10,
  category: ['home', 'decoration'],
  description: "Hanging wall shelf, swing rope floating shelf, 3-layer wooden hanging storage shelf",
},
{
  id: "12",
  image: 'assets/Products/spin-bike.jpg"',
  rating: 5,
  name: "spin-bike",
  brand: "protech",
  price: 500,
  category: ['gym', 'equipment'],
  description: "Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance.",
},
{
  id: "13",
  image: 'assets/Products/t-shirt-air.jpg"',
  rating: 5,
  name: "t-shirt-air",
  brand: "nike",
  price: 30,
  category: ['t-shirt', 'cloths'],
  description: "Crafted with premium, heavyweight knit fabric, this short-sleeve top from our Nike Life collection puts an elevated spin on an everyday essential. The thick, dual-layered knit ribbing at the collar adds texture and durability.",
},
{
  id: "14",
  image: 'assets/Products/t-shirt-nike.jpg"',
  rating: 3,
  name: "t-shirt-nike",
  brand: "nike",
  price: 40,
  category: ['t-shirt', 'cloths'],
  description: "Crafted with premium, heavyweight knit fabric, this short-sleeve top from our Nike Life collection puts an elevated spin on an everyday essential. The thick, dual-layered knit ribbing at the collar adds texture and durability.",
  sold:true
},
{
  id: "15",
  image: 'assets/Products/table.jpg"',
  rating: 5,
  name: "table",
  brand: "giona",
  price: 120,
  category: ['home', 'decoration'],
  description: "The gorgeously simple design is elevated by the groove detailing runs along the side of the table as well. The handle cut-outs for the cabinet door.",
},
{
  id: "16",
  image: 'assets/Products/shoes.jpg"',
  rating: 5,
  name: "shoes",
  brand: "nike",
  price: 70,
  category: ['shoes', 'clothes'],
  description: "Crafted with premium, heavyweight knit fabric, this short-sleeve top from our Nike Life collection puts an elevated spin on an everyday essential. The thick, dual-layered knit ribbing at the collar adds texture and durability.",
},
]
const productSceleton = (image, name, brand,category, price, description, rating,sold) => {
    return  `
    <div class="product-card">
        <div class="image">
            <img width="350" height="350" src="${image}" alt="">
        </div>
        <div class="headers">
            <h2 class="product-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <h3 class="product-brand">${brand.charAt(0).toUpperCase() + brand.slice(1)}</h3>
        </div>
        
        <div class="product-categories">
            ${category.map((c) => `<button>${c}</button>` )}
        </div>
        <div class="product-price">
        <h4 class="price"> Price: ${price}</h4>
        </div>
        <div class="product-description">
        <span>
        ${description}
        </span>
        </div>
        <div class="product-ratings">
        <h4>Rating: <span class="stars">${"★".repeat(rating)}</span></h4>
        </div>
        ${sold ? '<p class="sold-tag">Sold</p>' : '<button class="add-to-cart" onclick="addToCart(' + price + ')">Add to Cart</button>'}
    </div>`
}


const renderProduct = (array) => {
  container.innerHTML = "";
    const products = array.map(({id, image, rating, name, brand, price, category, description,sold}) => {
        container.innerHTML += productSceleton(image, name, brand,category, price, description, rating,sold)
    })
}

search.addEventListener('input',(e) =>{
  let term = e.target.value.toLowerCase()
  const filter = products.filter((products)=> 
    products.name.toLocaleLowerCase().includes(term))

    renderProduct(filter)
})

renderProduct(products)

selectCategory.addEventListener('change', (e) => {
  const selectedCategory = e.target.value.toLowerCase();
  if (selectedCategory === 'all') {
      renderProduct(products);
  } else {
      const filteredProducts = products.filter((product) => product.category.includes(selectedCategory));
      renderProduct(filteredProducts);
  }
});

selectPrice.addEventListener('change', (e) => {
  const selectPriceOption = e.target.value.toLowerCase();
  let sortedProducts;

  if (selectPriceOption === 'lowtohigh') {
    sortedProducts = products.slice().sort((a, b) => a.price - b.price);
  } else if (selectPriceOption === 'hightolow') {
    sortedProducts = products.slice().sort((a, b) => b.price - a.price);
  } else if (selectPriceOption === 'rating') {
    sortedProducts = products.slice().sort((a, b) => b.rating - a.rating);
  }

  renderProduct(sortedProducts);
});

  rangeInput.addEventListener('input',(e) => {
    const maxPrice = e.target.value;
    const minPrice = 0;

    maxInput.value = maxPrice;
    minInput.value = minPrice;

    if(maxPrice > 0) {
      const filteredProducts = products.filter((product) =>
      product.price >= minPrice && product.price <= maxPrice)
      maxInput.style.background = "green"
      minInput.style.background = "red"
      renderProduct(filteredProducts)
    } else {
      renderProduct(products)
      maxInput.style.background = "white"
      minInput.style.background = "white"
    }

    rangeInput.setAttribute("max","1200")
  })


  const cart = [];
  let total = 0;

  function addToCart(price) {
    cart.push(price);
    updateCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function updateCart() {
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartElement.innerHTML = "";
    let cartTotal = 0;

    cart.forEach((price, index) => {
      cartElement.innerHTML += `<li class ="li-class">$${price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
      cartTotal += price;
    });

    totalElement.textContent = cartTotal;
  }

 
