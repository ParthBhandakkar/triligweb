let preveiwcontainer_2 = document.querySelector('.products-preview');
let previewBox = preveiwcontainer_2.querySelectorAll('.preview');

document.querySelectorAll('.products-container_2 .product').forEach(product =>{
  product.onclick = () =>{
    preveiwcontainer_2.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwcontainer_2.style.display = 'none';
  };
});