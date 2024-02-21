"use strict"
// let h1=document.querySelector("h1")
// console.log(h1);
// console.log(document.querySelector(".item"));
// console.log(h1.parentNode);
// console.log(h1.parentNode.nextElementSibling);
// console.log(h1.parentNode.nextElementSibling.previousElementSibling);
// console.log(h1.parentNode.parentNode.parentNode.parentNode);
// console.log(h1.closest(".product"));
// console.log(h1.closest(".product").lastElementChild);
// console.log(h1.closest(".product").children)
// let item1=document.querySelector(".item1")
// console.log(item1.parentNode.parentNode.nextElementSibling.lastElementChild);
// console.log(item1.parentNode.parentNode.nextElementSibling.firstElementChild);
// console.log(document.querySelector(".salam").nextElementSibling.lastElementChild);
// let btns=document.querySelectorAll(".btn")
// btns.forEach(btn => {
//     btn.addEventListener("click",function(e){
//         this.nextElementSibling.style.backgroundColor="red"
//         console.log(e.target);
//     })
// });

// document.addEventListener("keydown",function(e){
//     if (e.keyCode==13) {
//         document.querySelector("body").style.backgroundColor="black"
//     }
// })
//  let sideBar=document.querySelector(".sidebar")
//  let openIcon=document.querySelector(".open-icon")
// let closeIcon=document.querySelector(".close-icon")
// openIcon.addEventListener("click",function(){
//     sideBar.classList.remove("move-sidebar")
//     this.classList.add("d-none")
//     this.previousElementSibling.classList.remove("d-none")
// })
// closeIcon.addEventListener("click",function(){
//     sideBar.classList.add("move-sidebar")
//     this.classList.add("d-none")
//     this.nextElementSibling.classList.remove("d-none")
// })
// document.querySelector(".paste").addEventListener("click",function(){
//     document.querySelector("h2").innerText=document.querySelector("h1").innerText
//     document.querySelector("h1").innerText="";
// })

// let sendBtn=document.querySelector(".send")
// sendBtn.addEventListener("dblclick",function(){
//     alert("Salaaam")
// })

// sendBtn.addEventListener("mouseover",function(){
//     alert("Salaaam")
// })

// sendBtn.addEventListener("mouseover",function(){
//     this.classList.remove("btn-primary");
//     this.classList.add("btn-success")
// })

// sendBtn.addEventListener("mouseout",function(){
//     this.classList.remove("btn-success");
//     this.classList.add("btn-primary")
// })

// let input=document.querySelector("input")
// input.addEventListener("keydown",function(){
//     console.log("nurane");
// })

// let input=document.querySelector("input")
// input.addEventListener("keyup",function(){
//     console.log("nurane");
// })

// let input=document.querySelector("input")
// input.addEventListener("keypress",function(){
//     console.log("nurane");
// })

// document.querySelector(".form-select").addEventListener("change",function(){
//     console.log(this.value);
// })
// console.log(document.querySelector("a").getAttribute("href"));
// document.querySelector("a").setAttribute("href","salam")
// console.log(document.querySelector("a").getAttribute("href"));
// console.log(document.querySelector("a").hasAttribute("href"));
// console.log(document.querySelector("a").hasAttribute("hrefs"));

// let linkedinBtn=document.querySelector(".linkedin")
// let googleBtn=document.querySelector(".google")
// linkedinBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.linkedin.com/feed/")
//     document.querySelector("a").innerText="go to linkedin"
// })
// googleBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.google.com.tr/?hl=tr")
//     document.querySelector("a").innerText="go to google"
// })