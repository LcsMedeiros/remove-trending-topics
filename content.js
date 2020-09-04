window.onload = remover;

function remover() {
    conteudo = document.querySelector('[data-testid=sidebarColumn]')
    conteudo.parentNode.removeChild(conteudo)
}