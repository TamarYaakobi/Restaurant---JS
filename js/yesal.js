//הצגת הודעת אישור
//הודעה תעלם אחרי כמה שניות
function pop1(){
    var child = document.getElementById('clonemother1');
    var clone = child.cloneNode(true);
    var node = document.getElementById("toasts1").appendChild(clone);
    pop2(node) 
}
function pop(){
    var child = document.getElementById('clonemother');
    var clone = child.cloneNode(true);
    var node = document.getElementById("toasts").appendChild(clone);
    pop2(node) 
}


function pop2(node) {
  // let x=document.getElementsByClassName('message')[1]
  const storage = localStorage.getItem('customerProducts');
  const products = storage ? JSON.parse(storage) : [];

  // מוצא את המקום שמכיל את ההודעה
  const messageElem = node.querySelector('.message')
const titleElem = node.querySelector('.text p:first-child');


  if (products.length === 0) {
    messageElem.innerText = "עוד לא הכנסת מוצרים לסל";
    titleElem.innerText = "שים לב";
}
    setTimeout(function() {
    },1000);
    setTimeout(function() {
      if(node) {
        node.style.animation = "toast .5s ease-out forwards";
        setTimeout(() => {node.remove();} ,500);
      }
    },2000);
  }  
//מחיקת ההודעת אישור
  function deletethis() {
    var e = window.event;
    var grand = e.target.parentNode.parentNode;
    grand.style.animation = "toast .5s ease-out forwards";
    setTimeout(() => {grand.remove();} ,500);
  }