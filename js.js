class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
this.navList = document.querySelector(navList);
this.navLinks = document.querySelector(navLinks);
this.activeClass = "active";

this.hadleClick = this.hadleClick(this);
 }
  hadleClick = this.hadleClick.bind();

   animadateLinks() {
   this.navLinks.array.forEach(link,index) => {
    console.log
    link.style.animation
    ? (link.style.animation ="")
    : (link.style.animation = 'navlinkFade 0.5 ease forwards 3s');
    {index  + 0.3}
   }


  
  hadleClick()
    this.navList.classlist.toggle(this.activeClass);
    this.mobileMenu.classlist.toggle(this.activeClass);
    this.animadateLInks(); 
}


}
addClickevente(){
    this.mobileMenu.addClickevente("click",this.hadleClick);
    {
init(){

    if (mobileMenu){
        this.addClickevente();
        return this
    }
}
 const mobileMenu = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav -list li",

);
