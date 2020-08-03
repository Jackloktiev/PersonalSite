
document.getElementById("background").addEventListener("click", clickHandler);
function clickHandler(){
    let menuClassValue = document.getElementById("nav-list").getAttribute("class");
    let iconClassValue = document.getElementById("menu-icon").getAttribute("class");
    if(menuClassValue==="nav-list"){
        document.getElementById("nav-list").setAttribute("class","nav-list-visible");
    }else{
        document.getElementById("nav-list").setAttribute("class","nav-list");
    }

    iconClassValue==="nav-icon"
    ?
    document.getElementById("menu-icon").setAttribute("class","nav-icon-cross")
    :
    document.getElementById("menu-icon").setAttribute("class","nav-icon")

}