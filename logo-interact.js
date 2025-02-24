const logoElement = document.getElementById("lucas");
const imgElement = document.getElementsByTagName("img");
const newImg = document.createElement("img");
const logoParent = document.getElementById("lucas-container");

logoElement.addEventListener("click", logoChange);

function logoChange() {
    if (logoParent.childElementCount < 2) {
        newImg.src = "./files/images/nagy.png"
        newImg.setAttribute("id", "lucas");
        logoParent.appendChild(newImg);
    }
}