


// Toggle mobile menu
function toggleMenu(toggle,menu){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("mat-icon").innerHTML = "menu";
    } else {
        menu.classList.add("active");
        toggle.querySelector("mat-icon").innerHTML = "close";
    }
}

/* Activate Submenu */
function toggleItem(menu) {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }
  
  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
  
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
  /* Event Listeners */
  //toggle.addEventListener("click", toggleMenu, false);

  
  // for (let item of items) {
  //   if (item.querySelector(".submenu")) {
  //     item.addEventListener("click", toggleItem, false);
  //   }
  //   item.addEventListener("keypress", toggleItem, false);
  // }
  // document.addEventListener("click", closeSubmenu, false);