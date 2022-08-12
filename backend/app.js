function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

scroll = true

addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn_menu")
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("mostrar")
            if (scroll == true) {
                disableScroll();
                scroll = false;
            }else if (scroll == false) {
                scroll = true;
                enableScroll();
            }
              })
        }
})
