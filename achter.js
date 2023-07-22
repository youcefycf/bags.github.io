var image = {
    src: img_src,
    name: name_item,
    prix:prix,
  }

document.querySelector('.product').innerHTML = ""
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var item = JSON.parse(localStorage.getItem(key));
   
  
  html = `
  <div class="product">
        <div class="product-img">
          <img src="${item.src}" width="650px" height="750px">
          <div class="info">
              <p>${item.name}</p>
              <p>${item.prix}</p>
             </div>
        </div>
          <div class="order">
              <button>order now</button>
          </div>
      </div>
        `
        
  if (item.src != null) {document.querySelector('.product').innerHTML += html}
}
