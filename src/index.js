console.log('Hello from Webpack!');

let content = document.querySelector('#content');
let homeHeader = document.createElement('h1');
let homePara = document.createElement('p');
homeHeader.textContent = "hello";
homePara.textContent = "lorem ipsum dplorem asjdhnasifbahjdfdbashjdgsauidhsa";
content.appendChild(homeHeader);
content.appendChild(homePara);