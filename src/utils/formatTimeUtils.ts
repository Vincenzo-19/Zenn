// funzione per formattare il tempo in minuti e secondi

export const formatTime = (time: number): string => {
    const MINUTES = Math.floor(time / 60);
    const SECONDS = time % 60;
    return `${String(MINUTES).padStart(2, '0')}:${String(SECONDS).padStart(
        2,
        '0'
    )}`;
};
