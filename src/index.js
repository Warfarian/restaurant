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
    
}


window.onload(displayHome());