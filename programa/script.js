document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  

document.querySelectorAll(".acordeon-item").forEach((item) => {
    item.addEventListener("click", () => {
        // Cierra todos los elementos abiertos
        document.querySelectorAll(".acordeon-item").forEach((el) => {
            if (el !== item) el.classList.remove("active");
        });

        // Activa o desactiva el elemento seleccionado
        item.classList.toggle("active");
    });
});
