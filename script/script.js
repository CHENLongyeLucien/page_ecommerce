const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.getElementById("scrollTopBtn");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('.every-games, .popular-games').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} ajouté au panier !`);
    });
});

const games = [
    { name: "BLOODBORNE", price: 32.4 },
    { name: "BLACK MYTH : WUKONG", price: 36.2 },
    { name: "CLAIR OBSCUR : EXPEDITION 33", price: 23.44 },
    { name: "CUPHEAD", price: 13.88 },
    { name: "DELTARUNE", price: 6.99 },
    { name: "DOOM ETERNALE", price: 7.81 },
    { name: "LIES OF P", price: 19.76 },
    { name: "DARK SOULS 3", price: 20.99 },
    { name: "ENA DREAM BBQ", price: 0.00 },
    { name: "GEOMETRY DASH", price: 1.99 },
    { name: "GHOST OF TSUHIMA", price: 27.84 },
    { name: "GOD OF WAR", price: 23.44 },
    { name: "HADES II", price: 9.99 },
    { name: "HONKAI STAR RAIL", price: 0.00 },
    { name: "NIER AUTOMATA", price: 14.25 },
    { name: "ELDEN RING NIGHTREIGN", price: 23.00 },
    { name: "ORI", price: 5.37 },
    { name: "PORTAL", price: 6.94 },
    { name: "RESIDENT EVIL REQUIEM", price: 55.99 },
    { name: "SEKIRO", price: 33.33 },
    { name: "SPLIT FICTION", price: 38.99 },
    { name: "HOLLOW KNIGHT : SILKSONG", price: 11.99 },
    { name: "VALORANT", price: 0.00 },
    { name: "THE LEGEND OF ZELDA : TEARS OF THE KINGDOM", price: 34.8 },
    { name: "ELDEN RING NIGHTREIGN (promo)", price: 17.99 }
];

const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('search-suggestions');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    if(query === '') return;
    const filtered = games.filter(game => game.name.toLowerCase().includes(query));
    filtered.forEach(game => {
        const li = document.createElement('li');
        li.textContent = `${game.name} - ${game.price}€`;
        li.style.cursor = 'pointer';
        li.style.backgroundColor = 'white';
        li.style.color = 'black';
        li.style.padding = '5px 10px';
        li.addEventListener('click', () => {
            addToCart(game.name, game.price);
            searchInput.value = '';
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
    });
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} ajouté au panier !`);
}
