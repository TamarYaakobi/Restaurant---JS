  //פונקציות העיצוב של הלקוח
let kid=document.getElementById('kid')
kid.setAttribute('data-first',"pink")
kid.setAttribute('data-two',"rgba(147, 147, 57, 0.8)")


let big=document.getElementById('big')
big.setAttribute('data-first',"rgba(0, 0, 0, 0.841)")
big.setAttribute('data-two'," #e53935")

let tree=document.getElementById('tree')
tree.setAttribute('data-first',"green")
tree.setAttribute('data-two',"black")

function tach(){
   let allcol=document.getElementsByClassName('col')
    let select = event.target;
    let selectedOption = select.options[select.selectedIndex];
let back=selectedOption.getAttribute('data-first')
let color=selectedOption.getAttribute('data-two')
const allH2 = document.querySelectorAll("h2");
allH2.forEach(h2 => {
  h2.style.color = color;
h2.style.borderBottom = `2px solid ${color}`;
});
const allButtons = document.querySelectorAll("button");
allButtons.forEach(allButtons => {
  allButtons.style.background = color;
});
const allSelect = document.querySelectorAll("select");
allSelect.forEach(allSelect => {
  allSelect.style.background = color;
});
document.body.style.background=back


}




