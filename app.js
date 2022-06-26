//active Humber Menu
const bar = document.getElementById('bar');
bar.addEventListener('click', toggleHumBarger);

//deactive Humber Menu
const crossBar = document.getElementById('cross');
crossBar.addEventListener('click',toggleHumBarger);






const navLinks = document.getElementsByClassName('nav-link');

[...navLinks].forEach(nav => {
    nav.addEventListener('click', function(){

        const nav = document.getElementById('nav-menu');
        nav.classList.remove('nav-active');

        document.getElementById('icons').classList.remove('active-icon');

    })
})




function toggleHumBarger(){
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('nav-active');
    
    document.getElementById('icons').classList.toggle('active-icon');
}