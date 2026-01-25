//פונקציה שמעבירה את הלקוח מדף התפריט לדף שעליו לחץף עי שמכניסה למחסנית את הנתונים
function newPaper() {
let nav=event.currentTarget.parentElement
    let obj = {
        prodName:nav.getAttribute('data-name'),
        price: nav.getAttribute('data-price'),
        discription:nav.getAttribute('data-discription'),
        img:nav.getAttribute('data-img')
    }
   
    let allProducts
    allProducts=obj
    allJson = JSON.stringify(allProducts)
    sessionStorage.setItem('products', allJson)
    window.location = '../html/selfProduct.html'
}
//פונקציה שמציגה את המוצר שעליו לחץ הלקוח
//בדף נפרד
//עם תיאור ובחירת כמות ואופציה הוספה לסל
function showProduct(){
let selfName=document.getElementById('selfName')
let selfPrice=document.getElementById('selfPrice')
let selfDiscription=document.getElementById('selfDiscription')
let selfImg=document.getElementById('selfImg')

let sessionJ=sessionStorage.getItem('products')
let sessionA=JSON.parse(sessionJ)
// selfImg.src=sessionA.img
selfName.innerText=sessionA.prodName
selfPrice.innerText=sessionA.price
selfDiscription.innerText=sessionA.discription
selfImg.innerText=sessionA.img
// console.log(sessionA.img);

document.body.style.backgroundImage = `url(${encodeURI(sessionA.img)})`;
}


//הוספת או הורדת הכמות שמוזמנת
function moreOrLess() {
    let selfAmount = document.getElementById('selfAmount')
    if (event.currentTarget.innerText == '-'&&selfAmount.innerText>0)
        selfAmount.innerText --
    if (event.currentTarget.innerText == '+')
        selfAmount.innerText ++
}
//פונקציה שתחזיר את המשתש מדף המוצר חזרה לאיפה שהיה
function back1(){
    window.history.back()
}

