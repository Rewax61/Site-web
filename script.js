var btn = document.getElementsByClassName("titre")[0].getElementsByClassName("btn")[0];
btn.addEventListener('click', function() {
    var couleur = document.getElementsByClassName("titre")[0].getElementsByClassName("couleur")[0];
    document.getElementsByTagName("body")[0].style.backgroundColor = couleur;
})