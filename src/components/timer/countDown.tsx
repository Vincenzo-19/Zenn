import { useState, useEffect } from 'react';

export const CountDown = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // definizione valori interval
        let interval: number | null = null;

        // se il timer è attivo e non è in pausa
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
            // se il timer non è attivo e il tempo è diverso da 0 e c'è un interval
        } else if (!isActive && time !== 0 && interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isActive, isPaused, time]);

    //
    //
    //

    // funzioni per gestire il timer

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTime(0);
    };

    const incrementTime = () => {
        if (!isActive) {
            setTime((prevTime) => prevTime + 60); // Incrementa di 1 minuto
        }
    };

    const decrementTime = () => {
        if (!isActive) {
            setTime((prevTime) => (prevTime >= 60 ? prevTime - 60 : 0)); // Decrementa di 1 minuto
        }
    };

    // funzione per formattare il tempo visualizzato nel timer
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
        )}`;
    };

    return (
        <>
            <section className="min-w-full flex flex-col items-center justify-center bg-gradient-to-tr from-white from-50% to-thirdColor">
                <div className="flex flex-col items-center">
                    <h1 className="mb-8 mt-16 text-4xl font-bold text-primaryColor">
                        Timer
                    </h1>
                    <div className="flex flex-col items-center">
                        <div className="sm:size-96 rounded-full flex justify-center items-center flex-col sm:bg-gradient-to-br sm:from-white sm:from-20% sm:to-thirdColor">
                            <h1 className="text-2xl sm:text-4xl font-bold text-center text-primaryColor">
                                {formatTime(time)}
                            </h1>
                            <div className="flex flex-row items-center mt-16 gap-10 sm:gap-16">
                                <button
                                    onClick={decrementTime}
                                    className={`size-8 rounded-full bg-primaryColor text-secondaryColor hover:opacity-80 ${
                                        isActive
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                    } `}
                                    disabled={isActive}
                                >
                                    -
                                </button>
                                <button
                                    onClick={incrementTime}
                                    className={`size-8 rounded-full bg-primaryColor text-secondaryColor hover:opacity-80 ${
                                        isActive
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                    }`}
                                    disabled={isActive}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-8 mb-16 flex flex-row space-x-4">
                        <button
                            onClick={handleStart}
                            className="text-sm sm:text-base py-2 px-3 sm:px:4 rounded-3xl bg-primaryColor text-secondaryColor hover:opacity-80"
                        >
                            Start
                        </button>
                        <button
                            onClick={handlePause}
                            className="text-sm sm:text-base py-2 px-3 sm:px:4 rounded-3xl bg-primaryColor text-secondaryColor hover:opacity-80"
                        >
                            Pause
                        </button>
                        <button
                            onClick={handleReset}
                            className="text-sm sm:text-base py-2 px-3 sm:px:4 rounded-3xl bg-primaryColor text-secondaryColor hover:opacity-80"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountDown;
