let bucketEmpty = document.querySelector('.emptyBuscketMessage');
let bucketFilled = document.querySelector('.filledBucketMessage');
let goodsElement = document.querySelector('.goods');
let goods = [
    {
        name:"Лонгслив ‘’Nike SB’’", 
        color:"белый",
        image:"",
        size:"XL",
        price: 149.99
    },
    {
        name:"Кеды Converse ‘’Chuck Taylor’’", 
        color:"черный",
        image:"",
        size:"42",
        price: 129.99
    }
];
let createGoodInCart = (title, color, image, size, price) =>{
    console.log(title, color, image, price, size);
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
console.log(bucketEmpty, bucketFilled, goodsElement, goods);
goods.forEach(item =>{
    let card = createGoodInCart(item.name, item.color, item.image, item.size, item.price);
    console.log(card)
    goodsElement.innerHTML += card;
});
let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');

window.addEventListener('click', (event) =>{
    console.log(event.target)
    let count = event.target.closest('.count'); 
    console.log(count)
    let countNum = count.querySelector('.countNum')
    console.log(countNum);
    if(event.target == '<button class="minus">-</button>'){
        countNum.innerText = Number(countNum.innerText) - 1
    }else if(event.target == '<button class="plus">+</button>'){
        countNum.innerText = Number(countNum.innerText) + 1
    }
})