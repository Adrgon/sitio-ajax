let links = document.querySelectorAll('nav a')
//console.log(links)

for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', pedirPagina)
}

function pedirPagina(e){
    e.preventDefault()
    //console.dir(e.target.dataset.pagina)
    let url = `${e.target.dataset.pagina}.html`
    //let urlo = "pepito.html"
    console.log(url)
    let page = document.querySelector('#miPagina')
    // AJAX
    let ajax = new XMLHttpRequest();
    ajax.open('get', url)
    
    ajax.onreadystatechange = function(){
        if(ajax.readyState ==4 && ajax.status ==200){
            page.innerHTML = ajax.response
        }
    }
    ajax.send(null)


}

