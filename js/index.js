var slides = document.querySelectorAll(".slides");
var dotContainer = document.getElementById("dot");
//הצגת תמונות זזות בהילוך איטי
for (let i = 0; i < slides.length; i++) {
  let d = document.createElement("span");
  d.className = "dot";
  dotContainer.appendChild(d);
}

var dots = document.querySelectorAll(".dot"); // עדכון לאחר יצירת הנקודות

var index = 0;
//כנל
function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  // dots[index].classList.add("active");

  index++;
  setTimeout(changeSlide, 3000);
}
//הפעלת הפונקציה שמציגה את התמונות על המסך
changeSlide();
//פונקציה הצובעת את הלב אם המשתמש לחץ על 
//האיקון לב כדי לסמן לייק
//ומבטלת אם לחץ עליו שוב
function toggleHeart(element) {
  const icon = element.querySelector("i");

  if (icon.classList.contains("text-red-500")) {
    icon.classList.remove("text-red-500");
    icon.classList.add("text-white");
  } else {
    icon.classList.remove("text-white");
    icon.classList.add("text-red-500");
  }
}
//פונקציה שמוסיפה אטריביוט לכל אופצית בחירה מתוך הסרגל בראש העמוד
function addDataIndex() {
  let a = document.getElementById('open')
  let b = document.getElementById('xm')
  let c = document.getElementById('xsa')
  let d = document.getElementById('xsu')
  let e = document.getElementById('xdr')
  let f = document.getElementById('xde')

  a.setAttribute('data-arr', 'newStarter')

  b.setAttribute('data-arr', 'newMain_course')

  f.setAttribute('data-arr', 'newDesserts')

  e.setAttribute('data-arr', 'newDrinks')

  d.setAttribute('data-arr', 'newSupes')

  c.setAttribute('data-arr', 'newSaleds')

//פונקציה ששולחת לפונקציה שמציגה א התפריט בהתאם לערכים שנשלחו אליה

}