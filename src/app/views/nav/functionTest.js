// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<mat-icon>menu</mat-icon>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<mat-icon>close</mat-icon>";
    }
}

//toggle.addEventListener('click',toggleMenu,false);