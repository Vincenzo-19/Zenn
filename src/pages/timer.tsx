import Header from '../components/home/header';
import CountDown from '../components/timer/countDown';
import IstruzioniTimer from '../components/timer/istruzioniTimer';
import Footer from '../components/home/footer';

export const Timer = () => {
    return (
        <>
            <Header />
            <CountDown />
            <IstruzioniTimer />
            <Footer />
        </>
    );
};

export default Timer;
