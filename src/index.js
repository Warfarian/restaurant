import "./styles.css";

console.log('Hello from Webpack!');

let content = document.querySelector('#content');

let homeHeader = document.createElement('h1');

let logo = document.createElement('img');
logo.src = "https://www.muraldecal.com/en/img/asfs1336-png/folder/products-detalle-png/stickers-breaking-bad-los-pollos-hermanos.png";

let homePara1 = document.createElement('p');
let homePara2 = document.createElement('p');
let homePara3 = document.createElement('p');
let homePara4 = document.createElement('p');

homeHeader.textContent = "Los Pollos Hermanos";
homePara1.textContent = "Welcome to Los Pollos Hermanos, where our family has been serving delicious, mouth-watering meals since 1986. Founded by Gustavo 'Gus' Fring, our mission has always been simple: provide the highest-quality chicken and a dining experience that brings people together.";
homePara2.textContent = "At Los Pollos Hermanos, we believe that great food comes from a place of love. Our carefully crafted recipes are prepared with fresh, locally sourced ingredients, ensuring every bite is packed with flavor. Whether you’re enjoying our famous crispy fried chicken, our tender chicken sandwiches, or our freshly made sides, you can be sure every dish is made with care.";
homePara3.textContent = "Los Pollos Hermanos isn't just about serving food - it's about creating memories. We’re proud to be a family-oriented establishment, where every customer is treated like a member of our own family. With locations throughout the Southwest, we've grown from a small local restaurant into a beloved chain, yet our values remain the same: family, community, and quality.";
homePara4.textContent = "So, come join us for a meal that will leave you smiling. 'At Los Pollos Hermanos, You can taste the difference!'";

content.appendChild(homeHeader);
content.appendChild(homePara1);
content.appendChild(homePara2);
content.appendChild(homePara3);
content.appendChild(homePara4);
content.appendChild(logo);