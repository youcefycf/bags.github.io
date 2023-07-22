const btn = document.getElementById("btn")
const cart = document.getElementById("elm-crt")
let img_src, name_item, prix;


UpdatePhotos()

btn.addEventListener("click", function(e){
img_src=prompt("lien ta3 img:")
name_item=prompt("ara isem:")
prix=parseFloat(prompt("l prix chhal:"))


var image = {
  src: img_src,
  name: name_item,
  prix:prix,
}
const objectString = JSON.stringify(image);
let itemName = Math.random().toString(36).substr(2, 5);
localStorage.setItem(itemName, objectString)




UpdatePhotos()


})




function UpdatePhotos(){
// Loop through local storage items
document.querySelector('.carte').innerHTML = ""
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var item = JSON.parse(localStorage.getItem(key));
   
  
  html = `
  <div class="box ${key}">
        <img src="${item.src}" />
        <div class="information">
          <b><p>${item.name}</p></b>
            <h5>prix : ${item.prix}</h5>
            <div class="cart">
            <a href="#"><i class='bx bx-cart'></i></a>
          
            <button onclick="changePage()">Buy</button>
          </div>
          </div>
        `

  if (item.src != null) {document.querySelector('.carte').innerHTML += html}
}

}


function changePage() {
  // Replace 'newpage.html' with the URL or filename of the page you want to navigate to
  window.location.href = 'achter.html';
}