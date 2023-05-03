let navStyle = document.getElementById('home_hero_nav');


onscroll=()=>{
    if (scrollY > 165) {
        navStyle.style.backdropFilter="blur(3px)"
    }
}