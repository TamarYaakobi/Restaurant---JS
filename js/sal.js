let productToDezign 
//תפיסת המוצר שהלקוח הכניס לסל
//ושליחה לפונקציה שתמשיך את התהליך
function insertT(){
    let nav=event.currentTarget.parentElement
    let obj = {
        prodName: nav.getAttribute('data-name'),
        price: nav.getAttribute('data-price'),
        img: nav.getAttribute('data-img')
    }
    allInsert(obj)
}
//כנל, אבל מדף המוצר ולא מדף התפריט
function insertS(){
    let selfAmount=document.getElementById('selfAmount')
let selfPrice=document.getElementById('selfPrice')
let selfName=document.getElementById('selfName')
let selfImg=document.getElementById('selfImg')
let obj = {
    prodName: selfName.innerText,
    amount:selfAmount.innerText,
    price: selfPrice.innerText,
    img: selfImg.innerText
}
allInsert(obj)
}
//פונקצית הוספה לסל
//לוקחת את האוביקט ומכניסה למחסנית
function allInsert(obj) {

    let allJson = localStorage.getItem('customerProducts')
    let allProducts
    if (allJson != null)
        allProducts = JSON.parse(allJson)
    else
        allProducts = []
    allProducts.push(obj)
    allJson = JSON.stringify(allProducts)
    localStorage.setItem('customerProducts', allJson)
    
}
//שימוש במוצרים של הלקוח שנמצאים במחסנית
//יצירת טבלה שמורכבת ממחיר, תמונה ושם המוצר
function createTable() {
    let Isum=document.getElementById('sum')
    let sum=0
    let allJson = localStorage.getItem('customerProducts')
    let allProducts
    allProducts = JSON.parse(allJson)
    let aba = document.getElementById('aba')
    aba.innerHTML = ''
    allProducts.forEach(p => {
        let row = document.createElement('tr')
        let del= document.createElement('td')
        del.addEventListener('click',Delete)
        let delImg= document.createElement('img')
        delImg.src="../pics/מחיקה.svg"
        // delImg.style.width='5%'
      delImg.className="del"
        del.appendChild(delImg)
        row.appendChild(del)
        let amountForPrice=1
        for (let prop in p) {
            let col
            if(prop!='amount'){
             col = document.createElement('td')
            
            }
            if (prop === 'img') {
                let img = document.createElement('img')
                img.src = p[prop]
                img.style.width = '50px' // או כל גודל שתרצי
                col.appendChild(img)
            } else{ 
                
                if(prop === 'amount'&&p[prop]>1){
                    amountForPrice=p[prop]
                    console.log(amountForPrice);
                }
               else if(prop === 'price'){
                    sum += +(p[prop]*amountForPrice)
                    col.innerText = `${amountForPrice} * ${p[prop]}`}
               else {col.innerText = p[prop]
                del.setAttribute('data-name',p[prop])
            }

            }
            if(prop!='amount'){
            row.appendChild(col)}
        }

                aba.appendChild(row)
    })
    Isum.innerText =  sum ;

}
//ונקציה שמופעלת בעת לחיצה על הכפתור מעבר לתשלום בודקת האם המשתמש התחבר לשם משתמש 
//אם לא שולחת לדף ההרשמה
// אם כן תציג הודעת אישור ותרוקן את מערך המוצרים במחסנית 
function check(){
if(sessionStorage.getItem('userName')==null){
// שולח את המשתמש ל-pageB.html עם הפרמטר של הדף הנוכחי
window.location.href = "./enter.html?return=" + window.location.href;

}
else{
pop1()
localStorage.setItem('customerProducts', JSON.stringify([]))
goIndex()

}
}
function goIndex(){
    setTimeout(function() {
   window.location = './index.html';    },2500);
   
}

function Delete(){
let sal=localStorage.getItem('customerProducts')
let salArr=JSON.parse(sal)
console.log(event.currentTarget.getAttribute('data-name'));
    for (let index = 0; index < salArr.length; index++) {  
if(salArr[index].prodName==event.currentTarget.getAttribute('data-name')){
    salArr.splice(index,1)
    }}
    localStorage.setItem('customerProducts',JSON.stringify(salArr))
createTable()
    
}
