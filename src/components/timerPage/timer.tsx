import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TimerActions from '../../store/timer/timer.actions';
import { SELECT_TIMER } from '../../store/timer/timer.selectors';

export const TimerComponent = () => {
    const { time, isActive, isPaused } = useSelector(SELECT_TIMER);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval: number | null = null;

        if (isActive && !isPaused && time > 0) {
            interval = setInterval(() => {
                dispatch(TimerActions.SET_TIME(time));
            }, 1000);
        } else if (time === 0) {
            dispatch(TimerActions.PAUSE_TIMER(true));
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isActive, isPaused, time, dispatch]);

    //
    //
    //

    // funzione per formattare il timer

    const formatTime = (time: number) => {
        const MINUTES = Math.floor(time / 60);
        const SECONDS = time % 60;
        return `${String(MINUTES).padStart(2, '0')}:${String(SECONDS).padStart(
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
                                    onClick={() =>
                                        dispatch(
                                            TimerActions.DECREMENT_TIME(60)
                                        )
                                    }
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
                                    onClick={() =>
                                        dispatch(
                                            TimerActions.INCREMENT_TIME(60)
                                        )
                                    }
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
                            onClick={() =>
                                dispatch(TimerActions.START_TIMER(true))
                            }
                            className="text-sm sm:text-base py-2 px-3 sm:px:4 rounded-3xl bg-primaryColor text-secondaryColor hover:opacity-80"
                        >
                            Start
                        </button>
                        <button
                            onClick={() =>
                                dispatch(TimerActions.PAUSE_TIMER(true))
                            }
                            className="text-sm sm:text-base py-2 px-3 sm:px:4 rounded-3xl bg-primaryColor text-secondaryColor hover:opacity-80"
                        >
                            Pause
                        </button>
                        <button
                            onClick={() => dispatch(TimerActions.RESET_TIMER())}
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

export default TimerComponent;
