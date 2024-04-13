let image=document.querySelector('img');
let id_image=image.getAttribute('id');
console.log(id_image);

// change id of image object
image.setAttribute("id","img_spider");
id_image=image.getAttribute('id');
console.log(id_image);