document.querySelector('.regist__adduser__button').addEventListener('click',  function(){
    let n = document.querySelector('.regist__listofusers__number').children.length;
//    number
   let number =  document.querySelector('.regist__adduser__login__inputlogin').value
   document.querySelector('.regist__listofusers__number').innerHTML += `<div class = 'number${n}' >${n}</div>`
//    number

//    login
let login =  document.querySelector('.regist__adduser__login__inputlogin').value
document.querySelector('.regist__listofusers__login').innerHTML += `<div class = 'login${n}'>${login}</div>`
//    login
// 
//    password
let password =  document.querySelector('.regist__adduser__login__inputpassword').value
document.querySelector('.regist__listofusers__password').innerHTML += `<div class = 'password${n}'>${password}</div>`
//    password
// 
//    email    
let email =  document.querySelector('.regist__adduser__login__inputemail').value
document.querySelector('.regist__listofusers__email').innerHTML += `<div class='email${n}'>${email}</div>`
//    email
document.querySelector(".regist__listofusers__edit").innerHTML += `<button class='edit${n}'  value='${n}' id="e${n}" style="background-color:orange ; heigth:20px;width:50px;"  onClick="reply_click(this.id)">Edit</button>`
 

 
document.querySelector(".regist__listofusers__delete").innerHTML += `<button class='delete${n}' value='${n}' id="ed${n}" style="background-color:red; heigth:20px;width:50px;" onClick="clickme(this.id)">Delete</button>`
})
 
function reply_click(clicked_id){
    //   alert(clicked_id);
     
      document.querySelector(`#${clicked_id}`).onmouseout= function(event) {
          let v = (document.querySelector(`#${clicked_id}`).value)
          console.log(`.login${v}`)
          console.log(document.querySelector(`.login${v}`))
          console.log(document.querySelector(`.login${v}`).innerHTML)
                   document.querySelector('.regist__adduser__login__inputlogin').value = document.querySelector(`.login${v}`).innerHTML
        document.querySelector('.regist__adduser__login__inputpassword').value = document.querySelector(`.password${v}`).innerHTML
        document.querySelector('.regist__adduser__login__inputemail').value = document.querySelector(`.email${v}`).innerHTML
        document.querySelector(' .regist__saveuser__button').style.display = 'block'
        document.querySelector(' .regist__adduser__button ').style.display = 'none'
        document.querySelector(' .regist__saveuser__button ').onmouseout= function(event) {
            document.querySelector(`.login${v}`).innerHTML =   document.querySelector('.regist__adduser__login__inputlogin').value  
            document.querySelector(`.password${v}`).innerHTML =  document.querySelector('.regist__adduser__login__inputpassword').value   
            document.querySelector(`.email${v}`).innerHTML =  document.querySelector('.regist__adduser__login__inputemail').value    
            document.querySelector(' .regist__adduser__button ').style.display = 'block'
            document.querySelector(' .regist__saveuser__button ').style.display = 'none'
        }
        }
      }
      

      
           
           
 
  function clickme(clicked_id)
  {
    
    let v = (document.querySelector(`#${clicked_id}`).value)
    console.log( document.querySelector(`.login${v}`).value)
    console.log(`#${clicked_id}`)
    document.querySelector(`.number${v}`).remove();
    document.querySelector(`.login${v}`).remove();
    document.querySelector(`.password${v}`).remove();
    document.querySelector(`.email${v}`).remove();
    document.querySelector(`#e${v}`).remove();
    document.querySelector(`#ed${v}`).remove();
  }

 
  
// document.querySelector('.regist__listofusers__edit__editButton').addEventListener('click',  function(){
    // let a = document.querySelector('.regist__listofusers__edit')
    // a.addEventListener("click", function(){
    //     alert(this.class); 
    //   });
//    console.log( document.querySelector(`.delete${n}`))
// })
// document.querySelector('.regist__listofusers__edit__deleteButton').addEventListener('click',  function(){

// })