const Modal = {
    open() {
        //abrir modal
        //adicionar classe active ao modal
        document.querySelector('.modal-overlay')
            .classList.add('active');
    },
    close() {
        //remover a classe acttive do modal
        document.querySelector('.modal-overlay')
            .classList.remove('active');
    }
}