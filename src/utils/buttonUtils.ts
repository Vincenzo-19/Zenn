// funzione per aggiungere il corretto stile di un bottone da mobile

export const addButtonTouchListeners = () => {
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('touchstart', () => {
            button.style.opacity = '0.8';
        });
        button.addEventListener('touchend', () => {
            button.style.opacity = '1';
        });
    });
};
