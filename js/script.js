
AOS.init();
const sidebar = document.querySelector('.sidebar');

const navItems = Array.from(document.querySelectorAll('nav .nav-item'));
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if(sidebar.className === 'sidebar'){
        sidebar.classList.add('open');
    }
    else {
        sidebar.classList.remove('open');
    }
});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        navItem.classList.add('active');
        
    });
});

let menu = document.querySelector('.menu');
menu.onclick = function() {
    navBar = document.querySelector('nav');
    navBar.classList.toggle('active');
}

navBar = document.querySelector('nav');
let link = document.querySelectorAll('a');
link.forEach(link => {

    link.onclick = function() {
        navBar = document.querySelector('nav');
        navBar.classList.toggle('active');
    }
});

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.nav-item a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

let home = document.querySelector('#home');
let about = document.querySelector('#about');
let skill = document.querySelector('#skills');
let project = document.querySelector('#project');
let contact = document.querySelector('#contact');

// console.log(home.offsetTop);
// console.log(about.offsetTop);
// console.log(skill.offsetTop);
// console.log(project.offsetTop);
// console.log(contact.offsetTop);
window.addEventListener('scroll', ()=> {
    let windo = window.pageYOffset;
    console.log(windo);
    if(about.offsetTop <= windo && skill.offsetTop > windo){
        // console.log('about');
        
    }
    else if(skill.offsetTop <= windo && project.offsetTop > windo){
        // console.log('skill');
    }
    else if(project.offsetTop <= windo && contact.offsetTop > windo){
        // console.log('project');
    }
    else if(contact.offsetTop <= windo){
        // console.log('contact');
    }
    else {
        // console.log('home');
    }
});
let links = document.querySelectorAll('.nav-item a');



// var sections = document.querySelectorAll('section');
// var navbarItems = document.querySelectorAll('.nav-item a');


// window.addEventListener('scroll', function(){
//     var fromTop = window.scrollY;
  
//     sections.forEach(function(el){
//       if(el.offsetTop <= fromTop && (el.offsetTop + el.offsetHeight) > fromTop) {
//         navbarItems.forEach(function(nav){
//           nav.classList.remove('active');
//           if(el.getAttribute('id') === nav.getAttribute('href').substring(1)){
//             nav.classList.add('active');
//           }
//         });
//       }
//     });
//   });

//   form 
const name = document.getElementById("name");
const email = document.getElementById('email');
const button = document.getElementById('formbtn');

const errorElement1 = document.getElementById('error1');
const errorElement2 = document.getElementById('error2');
button.addEventListener('click', function() {
    if (name.value === '' || name.value == null) {
        document.getElementById('name').style.border = '2px solid hsl(0, 100%, 74%)';
      
    }
    
    if (email.value.includes('@') == false) {
        document.getElementById('email').style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("email").placeholder = "email@example.com";
        // document.getElementById("email").placeholder.style.color = 'hsl(0, 100%, 74%)';
        document.getElementById('email').classList.add('placeholderClr');

    }



})
