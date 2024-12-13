import Header from '../components/home/header';
import TimerComponent from '../components/timerPage/timer';
import IstruzioniTimer from '../components/timerPage/istruzioniTimer';
import Footer from '../components/home/footer';

export const Timer = () => {
    return (
        <>
            <Header />
            <TimerComponent />
            <IstruzioniTimer />
            <Footer />
        </>
    );
};

export default Timer;
