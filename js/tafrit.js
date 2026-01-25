



//שליפת מערך האוביקטים מהמחסנית
function returnItems(x) {
    let allJson = localStorage.getItem(x)
    return JSON.parse(allJson)
}
//הכנסת הערכים מתןך המחסנית למערך
//הפונקציה הופעלה כל פעם על כל מערך לפי השם שלו שכך נקרא במחסנית
let newStarter = returnItems(xs)
let newMain_course = returnItems(xm)
let newDesserts = returnItems(xde)
let newDrinks = returnItems(xdr)
let newSupes = returnItems(xsu)
let newSaleds = returnItems(xsa)



//מופעלת בריענון הדף
//אם יש במחסנית ערך שנבחר שהמשתמש בחר, ואותו צריך להראות
//הפונקציה תופעל עליו
//ותשלח אותו לפונקצית a 
//שמציגה את המערך על המסך
//אחרת-
//תשלח לפונקצית ההצגה את כל המערכים
function showTafrit() {
    let selectedCategory = localStorage.getItem("selectedCategory");
    localStorage.removeItem("selectedCategory"); // מנקה אחרי שימוש

    if (selectedCategory) {
        let arr = [];
        let targetDiv = null;

        switch (selectedCategory) {
            case "newStarter":
                arr = newStarter;
                targetDiv = document.getElementById('Open');
                break;
            case "newMain_course":
                arr = newMain_course;
                targetDiv = document.getElementById('aikari');
                break;
            case "newDesserts":
                arr = newDesserts;
                targetDiv = document.getElementById('desserts');
                break;
            case "newDrinks":
                arr = newDrinks;
                targetDiv = document.getElementById('drinks');
                break;
            case "newSupes":
                arr = newSupes;
                targetDiv = document.getElementById('supes');
                break;
            case "newSaleds":
                arr = newSaleds;
                targetDiv = document.getElementById('saleds');
                break;
        }

        if (arr.length && targetDiv) {
            let yh = document.getElementById(`${targetDiv.id}1`)
            arr.forEach(p => a(p, targetDiv, yh));
        }
    } else {
        // אם לא בוצע סינון – מציגים את כל התפריט
        newStarter.forEach(p => a(p, Open, Open1));
        newMain_course.forEach(p => a(p, aikari, aikari1));
        newDesserts.forEach(p => a(p, desserts, desserts1));
        newDrinks.forEach(p => a(p, drinks, drinks1));
        newSupes.forEach(p => a(p, supes, supes1));
        newSaleds.forEach(p => a(p, saleds, saleds1));
    }
}

//יצירת התפריט על המסך
function a(p, x, y) {
    y.hidden = false
    let nav = document.createElement('nav')
    for (let key in p) {
        nav.setAttribute(`data-${key}`, p[key])
        if (key != "discription") {
            if (key == "img") {
                let img = document.createElement('img')
                img.src = p[key]
                img.addEventListener('click', newPaper)
                nav.appendChild(img)
            }
            else {
                let p1 = document.createElement('p')
                p1.innerText = p[key]
                p1.addEventListener('click', newPaper)
                nav.appendChild(p1)
            }
        }
    }

    let b = document.createElement('button')
    //שליחה להוספה לסל
    b.addEventListener('click', insertT)
    //שליחה לפונקציה שתציג הודעת אישור
    b.addEventListener('click', pop)
      b.addEventListener('click', createTable)
    b.innerText = "מגרה אותי, ברור מזמין🤤"
    b.className = "button"
    nav.appendChild(b)
    x.appendChild(nav)
}

//מיון כל מערך אוביקטים לפי מחיר
function sortByPrice() {
    newStarter.sort((a, b) => a.price - b.price)
    newMain_course.sort((a, b) => a.price - b.price)
    newSupes.sort((a, b) => a.price - b.price)
    newSaleds.sort((a, b) => a.price - b.price)
    newDesserts.sort((a, b) => a.price - b.price)
    newDrinks.sort((a, b) => a.price - b.price)
    let removNav = document.getElementsByTagName('nav')
    while (removNav.length > 0) {
        removNav[0].remove()
    }
    showTafrit()
}
//פונקציה שתקבל את הסלקט, תיקח את אירוע הלחיצה ותשלח 
function selectCaT(event) {
    let select = event.target;
    let selectedOption = select.options[select.selectedIndex];
    selectCa(selectedOption); // שולחת את ה־<option> עצמו
  }
//פונקציה שתיקח את אירוע הלחיצה ותשלח
  function selectCaI(event) {
    let selectedOption = event.target

    selectCa(selectedOption); // שולחת את ה־<option> עצמו
  }
  ////מקבלת את אירוע הלחיצה
  //מכניסה את השם למחסנית
  //עוברת לדף חדש בתפריט שהוא יפעיל את הפונקציה של הצגת התפריט רק על מה שבמחסנית
  function selectCa(optionElement) {
    const selected = optionElement.getAttribute('data-arr');
    localStorage.setItem("selectedCategory", selected);
    window.location = './tafrit.html';
  }
  //יצירת אטריביוט לכל  אפשרות בחירה בבחירת הקטגוריה
  //כדי שנוכל להשתמש בזה בהמשך
function addDataTafrit() {
    let a = document.getElementById('p')
    let b = document.getElementById('e')
    let c = document.getElementById('t')
    let d = document.getElementById('k')
    let e = document.getElementById('m')
    let f = document.getElementById('n')
  
    a.setAttribute('data-arr', 'newStarter')
  
    b.setAttribute('data-arr', 'newMain_course')
  
    f.setAttribute('data-arr', 'newDesserts')
  
    e.setAttribute('data-arr', 'newDrinks')
  
    d.setAttribute('data-arr', 'newSupes')
  
    c.setAttribute('data-arr', 'newSaleds')
  }
