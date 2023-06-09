const radioList = document.getElementById('radioList').children // Массив с input-ами
const mainImage = document.getElementById('imageMain') // <img/>
const imageList = document.getElementById('imageList').children // Массив с миниатюрами
const sizeButtonList = document.getElementsByClassName('item__size-button') // Массив с кнопками размеров

let mainImageId = 1

const changeImage = (id) => {
    mainImageId = id
    mainImage.src = `images/VansOldSchool-${id}.jpg`
}
// Переключение фото через кнопки
for (let i = 0; i < radioList.length; i++) {
    radioList.item(i).onclick = (e) => {
        let id = Number(e.target.id.slice(6))

        imageList.item(i).click()

        changeImage(id)
    }
}

// Переключение фото через миниатюры (есть баг с анимацией смены размера)

for (let i = 0; i < imageList.length; i++) {


    imageList.item(i).onclick = (e) => {
        let id = Number(e.target.src.slice(-5, -4))

        for (let i = 0; i < imageList.length; i++) {
            imageList.item(i).classList.remove('active')
        }

        e.target.classList.add('active')

        radioList.item(i).click()

        changeImage(id)
    }


}

// Переключение размера товара

for (let i = 0; i < sizeButtonList.length; i++) {
    sizeButtonList.item(i).onclick = (e) => {
        e.preventDefault()

        for (let i = 0; i < sizeButtonList.length; i++) {
            sizeButtonList.item(i).classList.remove('active')
        }

        e.target.classList.add('active')
    }
}