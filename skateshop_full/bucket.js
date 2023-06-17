let bucketEmpty = document.querySelector('.emptyBuscketMessage');
let bucketFilled = document.querySelector('.filledBucketMessage');
let goodsElement = document.querySelector('.goods');
let price = document.querySelector('.price-all');

let goods = [
    {
        name:"Лонгслив ‘’Nike SB’’", 
        color:"белый",
        image:"./images/nike.png",
        size:"XL",
        price: 149.99
    },
    {
        name:"Кеды Converse ‘’Chuck Taylor’’", 
        color:"черный",
        image:"./images/ConverseChuckTaylor.jpg",
        size:"42",
        price: 129.99
    }
];
let createGoodInCart = (title, color, image, size, price) =>{
    return  `
        <div class="goodContent">
            <div class="goodImg"><img src=${image} alt="good" class="goodImage imageDef"></div>
            <div class="goodTitle">
                <h2 class="title">${title}</h2>
                <p class="goodColor">Цвет: <span class="colorDef">${color}</span></p>
                <p class="goodColor">Размер: <span class="sizeDef">${size}</span></p>
            </div>
            <div class="count"> 
                <button class="minus">-</button>
                <p class="countNum">1</p>
                <button class="plus">+</button>
            </div>
            <div class="goodPrice"><p class="price"><span class="priceDef">${price}</span>р.</p></div>
        </div>
    `
};
goods.forEach(item =>{
    let card = createGoodInCart(item.name, item.color, item.image, item.size, item.price);
    goodsElement.innerHTML += card;
});

const items = Array.from(document.querySelectorAll('.goodContent'));


// функция вычисления общей стоимости:

const calcSum = () => {
    const prices = Array.from(document.querySelectorAll('.price')).map(el => +el.textContent.slice(0,-2));
    price.textContent = prices.reduce((sum, elem) => sum + elem, 0);

}

calcSum();

// Функция пересчета стоимости товара при изменении кол-ва:

const calcPrice = (card) => {
    const index = items.indexOf(card);
    card.querySelector('.priceDef').textContent = goods[index].price * card.querySelector('.countNum').textContent;
}


window.addEventListener('click', (event) =>{

    const tag = event.target;

    if(tag.classList.contains('minus') && tag.nextElementSibling.textContent != 0){
        tag.nextElementSibling.textContent--; // уменьшение кол-ва
        calcPrice(tag.closest('.goodContent')) // пересчет стоимости товара
        calcSum() // пересчет общей суммы
    }
    if(tag.classList.contains('plus')){
        tag.previousElementSibling.textContent++;
        calcPrice(tag.closest('.goodContent'))
        calcSum()
    }
})




