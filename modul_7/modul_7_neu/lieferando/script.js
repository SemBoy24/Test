let restaurant = [
    {
        "name": "Best Pizza",
        "likes": 9861,
        "liked": true,
        "menus": [
            {
                "name": "Tonno",
                "price": 8.99,
                "img": "assets/img/thunfisch-pizza.jpg"
            },
            {
                "name": "Quattro Formaggi",
                "price": 9.99,
                "img": src=f
            }
        ]
    },
    {
        "name": "Best Burger",
        "likes": 9861,
        "liked": true,
        "menus": [
            {
                "name": "Cheesi",
                "price": 6.99,
                "img": src=f
            },
            {
                "name": "Hamburg Deluxe",
                "price": 5.99,
                "img": src=f
            }
        ]
    },
    {
        "name": "Best Soup",
        "likes": 9861,
        "liked": true,
        "menus": [
            {
                "name": "Tomato",
                "price": 7.99,
                "img": src=f
            },
            {
                "name": "Linsen",
                "price": 4.99,
                "img": src=f
            }
        ]
    }
];

let cart = [];

//restaurants auflisten
function render(restaurant) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "ijoiu";

    for (let indexPost = 0; indexPost < restaurant.length; indexPost++) {
        contentRef.innerHTML += getRestaurantTemplate(indexPost)
        
    };
}

function getRestaurantTemplate(indexPost) {
    let menus = restaurant[indexPost].menus.map(menu => `
        <div>
            <h3>${menu.name}</h3>
            <img src="${menu.img}" alt="${menu.name}">
            <p>Preis: ${menu.price} €</p>
        </div>
    `).join(""); // Alle Menüs zusammenfügen

    return `
    <div class="post">
        <h2>${restaurant[indexPost].name}</h2>
        <p>Likes: ${restaurant[indexPost].likes}</p>
        <div>
            <button onclick="addLike(${indexPost}, 'notes', 'trashNotes')" class="btn">X</button>
        </div>
        ${menus} <!-- Alle Menüs anzeigen -->
    </div>`;
}
//warenkorb auflisten 
//warenkorb hinzufügen 
//warenkorb löschen
//media quarry warenkorb hervorheben 
//bestellung abschicken


let restaurants = [
    {
        name: "Pizza Palace",
        cuisine: "Pizza",
        rating: 4.5,
        menus: [
            { name: "Tonno", price: 8.99, img: "assets/img/thunfisch-pizza.jpg" },
            { name: "Quattro Formaggi", price: 9.99, img: "assets/img/quattro-formaggi.jpg" }
        ]
    },
    {
        name: "Sushi World",
        cuisine: "Sushi",
        rating: 4.8,
        menus: [
            { name: "Maki", price: 12.99, img: "assets/img/maki.jpg" },
            { name: "Sashimi", price: 14.99, img: "assets/img/sashimi.jpg" }
        ]
    },
    {
        name: "Burger Bude",
        cuisine: "Burger",
        rating: 4.2,
        menus: [
            { name: "Cheeseburger", price: 6.99, img: "assets/img/cheeseburger.jpg" },
            { name: "Hamburg Deluxe", price: 5.99, img: "assets/img/hamburg-deluxe.jpg" }
        ]
    }
];

function searchRestaurants() {
    const list = document.getElementById("restaurantList");
    list.innerHTML = "";
    restaurants.forEach((restaurant, index) => {
        const menuItems = restaurant.menus.map((menu, menuIndex) => `
            <div class="p-2 border rounded-md mb-2">
                <h3>${menu.name}</h3>
                <img src="${menu.img}" alt="${menu.name}" width="150" class="my-2">
                <p>${menu.price.toFixed(2)}€</p>
                <button onclick="addToCart(${index}, ${menuIndex})" class="bg-orange-500 text-white p-2 rounded-md">In den Warenkorb</button>
            </div>
        `);
        
        const card = `
            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold">${restaurant.name}</h3>
                <p>${restaurant.cuisine}</p>
                <p>⭐ ${restaurant.rating}</p>
                ${menuItems}
                <div class="mt-4">
                    <input type="number" id="rating-${index}" min="1" max="5" placeholder="Bewertung (1-5)" class="border p-2 w-full rounded-md">
                    <button onclick="rateRestaurant(${index})" class="bg-blue-500 text-white p-2 rounded-md mt-2 w-full">Bewerten</button>
                </div>
            </div>
        `;
        list.innerHTML += card;
    });
}

function addToCart(index, menuIndex) {
    const item = restaurants[index].menus[menuIndex];
    cart.push(item);
    showCart();
}

function showCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = cart.map(item => `
        <div>${item.name} - ${item.price.toFixed(2)}€</div>
    `).join("");
}

function checkout() {
    alert(`Gesamtpreis: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}€`);
    cart = [];
    showCart();
}

function rateRestaurant(index) {
    const ratingInput = document.getElementById(`rating-${index}`);
    const rating = parseInt(ratingInput.value);
    if (rating >= 1 && rating <= 5) {
        alert(`Danke für deine Bewertung von ${rating} Sternen für ${restaurants[index].name}!`);
        ratingInput.value = "";
    } else {
        alert("Bitte gib eine Bewertung zwischen 1 und 5 ein.");
    }
}