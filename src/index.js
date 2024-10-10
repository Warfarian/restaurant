import "./styles.css";

//general declarations 
let content = document.querySelector('#content');

let main = document.querySelector('.main');

let logo = document.createElement('img');

let footer = document.createElement('footer');


//tab switching 

let homePage = document.getElementById('homePage');
homePage.addEventListener('click', displayHome);

let menuPage = document.getElementById('menuPage');
menuPage.addEventListener('click', displayMenu);

let contactPage = document.getElementById('contactPage');
contactPage.addEventListener('click' , displayContact);


function displayHome(){

    content.innerHTML = '';

    logo.src = "https://www.muraldecal.com/en/img/asfs1336-png/folder/products-detalle-png/stickers-breaking-bad-los-pollos-hermanos.png";
    logo.className = "logo";


    footer.classList = "footer";
    footer.innerHTML = "@LosPollosHermanos";
    main.appendChild(footer);

    let homePara1 = document.createElement('p');
    let homePara2 = document.createElement('p');
    let homePara3 = document.createElement('p');
    let homePara4 = document.createElement('p');

    homePara1.classList = "paraText";
    homePara2.classList = "paraText";
    homePara3.classList = "paraText";
    homePara4.classList = "paraText";

    homePara1.textContent = "Welcome to Los Pollos Hermanos, where our family has been serving delicious, mouth-watering meals since 1986. Founded by Gustavo 'Gus' Fring, our mission has always been simple: provide the highest-quality chicken and a dining experience that brings people together.";
    homePara2.textContent = "At Los Pollos Hermanos, we believe that great food comes from a place of love. Our carefully crafted recipes are prepared with fresh, locally sourced ingredients, ensuring every bite is packed with flavor. Whether you’re enjoying our famous crispy fried chicken, our tender chicken sandwiches, or our freshly made sides, you can be sure every dish is made with care.";
    homePara3.textContent = "Los Pollos Hermanos isn't just about serving food - it's about creating memories. We’re proud to be a family-oriented establishment, where every customer is treated like a member of our own family. With locations throughout the Southwest, we've grown from a small local restaurant into a beloved chain, yet our values remain the same: family, community, and quality.";
    homePara4.textContent = "' At Los Pollos Hermanos, You can taste the difference! '";

    content.appendChild(logo);
    content.appendChild(homePara1);
    content.appendChild(homePara2);
    content.appendChild(homePara3);
    content.appendChild(homePara4);


    let foodImg = document.createElement('img');
    foodImg.className = "food";
    foodImg.src = "https://images.unsplash.com/photo-1655195672072-0ffaa663dfa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    content.appendChild(foodImg);

    let foodImg2 = document.createElement('img');
    foodImg2.className = "food";
    foodImg2.src = "https://images.unsplash.com/photo-1625937759420-26d7e003e04c?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    content.appendChild(foodImg2);

    let foodImg3 = document.createElement('img');
    foodImg3.className = "food";
    foodImg3.src = "https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    content.appendChild(foodImg3);

    let foodImg4 = document.createElement('img');
    foodImg4.className = "food";
    foodImg4.src = "https://images.unsplash.com/photo-1625937759429-cb12c50970b4?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    content.appendChild(foodImg4);

}


function displayMenu(){
    content.innerHTML = '';
    footer.innerHTML = '';
    function createItem(url,name){
        let item = document.createElement('img');
        item.src = url;
        item.className = name;
        content.appendChild(item);
    }

    function createItemDesc(desc){
        let para = document.createElement('p');
        para.innerText = desc;
        para.className = 'desc';
        content.appendChild(para);
    }

    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1:nutrition-calculator-tile","bigHermano");
    createItemDesc('The Big Hermano');
    createItemDesc('The burger that runs the family! Our Big Hermano is a towering creation with two juicy beef patties, melted cheddar cheese, crispy bacon, lettuce, tomato, and our signature Los Pollos sauce, all tucked into a freshly toasted sesame bun. Big taste for big appetites!');
    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_3426-005_DoubleQuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile","eggyHermano");
    createItemDesc('The Eggy Hermano');
    createItemDesc('Breakfast lovers, rejoice! The Eggy Hermano is the ultimate morning delight with a perfectly fried egg, crispy bacon, and a succulent sausage patty, topped with cheddar cheese and a maple aioli. Whether its breakfast or lunch, this burger hits the spot any time of day.');
    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0004-999_DoubleCheeseburger_Alt_1564x1564-1:nutrition-calculator-tile","smallHermano");
    createItemDesc('The Small Hermano');
    createItemDesc('Small in size, big in flavor! The Small Hermano may be bite-sized, but it’s loaded with a beef patty, sharp cheddar, fresh lettuce, and a dollop of creamy aioli. Perfect for those who like to snack or grab a light bite on the go.');
    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_1564x1564-1:nutrition-calculator-tile", "juicyHermano");
    createItemDesc('The Juicy Hermano');
    createItemDesc('Satisfy your cravings with the Juicy Hermano! Packed with flavor, this burger features a thick, juicy beef patty dripping with savory goodness, topped with caramelized onions, pickles, and a dash of our secret herb butter for that melt-in-your-mouth experience.');
    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0116_SpicyCrispyChicken_PotatoBun_1564x1564-1:nutrition-calculator-tile", "spicyHermano");
    createItemDesc('The Spicy Hermano');
    createItemDesc('Turn up the heat with the Spicy Hermano! This burger packs a punch with a spicy chili-infused beef patty, jalapeños, pepper jack cheese, and a smoky chipotle mayo. It’s not for the faint-hearted—only for those who like it fiery!');
    createItem("https://s7d1.scene7.com/is/image/mcdonalds/DC_201908_9839_BEC_McGriddle_1564x1564-1:nutrition-calculator-tile", "breakieHermano");
    createItemDesc('The Breakie Hermano');
    createItemDesc('Why wait for the weekend? The Breakie Hermano gives you the best breakfast flavors in one burger—fluffy scrambled eggs, sausage, melted cheese, and a hash brown, all drizzled with a sweet maple syrup glaze. Start your day with a bite of heaven!');

}

function displayContact(){
    content.innerHTML = '';
    footer.innerHTML = ''; 
    let nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.placeholder = "ex : Gus Fring";
    nameInput.className = "nameInput" ;
    main.appendChild(nameInput);
    let mailInput = document.createElement('input');
    mailInput.type = "email";
    mailInput.placeholder = "ex : gusfring@gmail.com";
    mailInput.className = "mailInput";
    main.appendChild(mailInput);
    let newSubmit = document.createElement('input');
    newSubmit.type = "submit";
    newSubmit.className = "submitBtn"
    main.appendChild(newSubmit);
    
    function clearForm(){
        mailInput.value = '';
        nameInput.value = '';
    }

    newSubmit.addEventListener('click' , clearForm);
     
}
window.onload(displayHome());