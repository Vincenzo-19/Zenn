import { Duration } from 'luxon';

// funzione per formattare il tempo in minuti e secondi

export const formatTime = (time: number): string => {
    const DURATION = Duration.fromObject({ seconds: time });
    return DURATION.toFormat('mm:ss');
};
