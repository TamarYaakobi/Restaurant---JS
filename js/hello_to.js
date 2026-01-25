
//פונקצית הרשמה
//מכניסה את הפרטים של המשתמש
//בודקת אם כבר קיים אחד כזה
//אם כן תציין זאת
//ותעביר אותו לדף ההתחברות
//אם לא- תכניס אותו למחסנית גם
//ותשלח אותו לדף הבית
function checkR(){
    
    event.preventDefault()


    let obj = {
        name: document.getElementById('reg_name1').value,
        last_name: document.getElementById('reg_lastname').value,
        email: document.getElementById('reg_email1').value
    }
    let pr=document.getElementById('pr')
    let allPepole = [];
    let allJson=localStorage.getItem('pepole')
    if(allJson!=null){
     //נהפוך אותה ממחרוזת למערך
    allPepole=JSON.parse(allJson)
    let index
    for (index = 0; index < allPepole.length; index++) {
        if(allPepole[index].email==obj.email){
            pr.hidden=false
        }
    }
    if(pr.hidden){
        allPepole.push(obj)
    }}
    else{
        allPepole=[obj]
    }
    if(pr.hidden){
    allJson=JSON.stringify(allPepole)
    localStorage.setItem('pepole',allJson)
    sessionStorage.setItem('userName', allPepole[allPepole.length-1].name)
    window.history.back()

}}

//פונקצית התחברות
//בודקת האם המשתמש רשום
//אם כן מעבירה אותו לדף הבית
//אם לא שולחת אותו להרשמה
function checkE(){
    event.preventDefault()
    let obj = {
        name: document.getElementById('reg_name').value,
        email: document.getElementById('reg_email').value
    }
    let p1=document.getElementById('pe')
    let allPepole = [];
    let allJson=localStorage.getItem('pepole')
    let c=0
    let i
    let index
    if(allJson!=null){
     //נהפוך אותה ממחרוזת למערך
    allPepole=JSON.parse(allJson)
console.log(Array.isArray(allPepole)); 
    for ( index = 0; index < allPepole.length; index++) {
        if(allPepole[index].email==obj.email&&allPepole[index].name==obj.name){
            c=1
            i=index
        }
    }
    if(c!=1){
        event.preventDefault()
        p1.hidden=false}


    else{
        sessionStorage.setItem('userName', allPepole[i].name)
        window.history.back()

    }
    allJson=JSON.stringify(allPepole)}
    else{p1.hidden=false }
}

//בודקת האם הלקוח מחובר
//אם לא כותבת SINGIN
//אם כן תכתוב את שם הלקוח והאות הראשונה בתור אייקון
function hello() {
    let SignIn=document.getElementById('SignIn')
    // let iN = document.getElementById('iN');
    let name= sessionStorage.getItem('userName')
   if (name) {
    // iN.hidden=false
        //   iN.innerText = name.charAt(0);
           SignIn.innerText=name
           SignIn.style.color=" #e53935"
SignIn.style.fontWeight = "bold";

        

        }



}
