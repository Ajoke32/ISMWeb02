let page = document.querySelector('.page');
page.classList.add('dark-theme');
let Buttontheme = document.querySelector('.theme-button');
Buttontheme.onclick = function()
{
    page.classList.toggle('dark-theme');
};