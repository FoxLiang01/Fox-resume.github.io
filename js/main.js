//======= show menu 按扩展按钮时展开导航栏 =====================================\\
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//======= remove menu 按任意一个按钮时收回导航栏 =====================================\\
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//=======【总这里开始有点看不懂，消化一下】 scroll sections active link 锚点实现 =====================================\\
const section = document.querySelectorAll('section[id]')

function scrollAction(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')}
            else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}

//=======show scroll top 高度大于200px的时候显示回到顶部按钮 =====================================\\
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// ================= 黑白模式转换 ====================================================\\
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//前一个选择的模式
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//确认目前的模式
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)? 'bx-moon' : 'bx-sun'

//选择模式
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon'? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//增删class scale-cv
function scaleCv(){
    document.body.classList.add('scale-cv');
}

function removeScale(){
    document.body.classList.remove('scale-cv');
}

//把页面生成为pdf文档
let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-button')
//html2pdf option
let opt = {
    margin:       0,
    filename:     '简历-梁嘉泳.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  }

//
function generateResume(){
    html2pdf(areaCv,opt)
}
//点击按钮时使用这三个自定义过的功能
resumeButton.addEventListener('click', () =>{
    //
    scaleCv();
    //
    generateResume();
    //
    setTimeout(removeScale, 5000);

})
//调技能的进度条
const skillsBars = document.getElementsByClassName('skills-bar-per');
select = ()=>{
    for(var i = 0; i < skillsBars.length ; i++){
        skillsBars[i].id="skills-bar-per-"+i;
        switch(i){
            case 0:document.getElementById("skills-bar-per-"+i).style.width="80%";break;
            case 1:document.getElementById("skills-bar-per-"+i).style.width="80%";break;
            case 2:document.getElementById("skills-bar-per-"+i).style.width="70%";break;
            case 3:document.getElementById("skills-bar-per-"+i).style.width="60%";break;
            case 4:document.getElementById("skills-bar-per-"+i).style.width="60%";break;
            case 5:document.getElementById("skills-bar-per-"+i).style.width="60%";break;
            case 6:document.getElementById("skills-bar-per-"+i).style.width="90%";break;
            case 7:document.getElementById("skills-bar-per-"+i).style.width="90%";break;
            case 8:document.getElementById("skills-bar-per-"+i).style.width="80%";break;
            case 9:document.getElementById("skills-bar-per-"+i).style.width="50%";break;
            case 10:document.getElementById("skills-bar-per-"+i).style.width="70%";break;
        }
    }
}
select();