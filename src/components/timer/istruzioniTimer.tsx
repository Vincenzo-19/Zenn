export const IstruzioniTimer = () => {
    return (
        <>
            <section className="min-w-full mt-16 flex flex-col items-center justify-center bg-gradient-to-br from-white from-50% to-thirdColor">
                <div className="w-full lg:w-10/12">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center font-bold text-3xl md:text-4xl text-primaryColor">
                            Istruzioni
                        </h2>
                        <div className="mt-16 w-full">
                            {/* Card 1 */}
                            <div className="lg:w-10/12 m-auto p-10 mb-16 lg:rounded-3xl lg:bg-gradient-to-bl lg:from-white lg:from-30% lg:to-thirdColor">
                                <h3 className="text-lg sm:text-xl font-bold text-primaryColor mb-5">
                                    1. Spegni tutto!
                                </h3>
                                <p className="md:text-lg">
                                    È impossibile utilizzare il timer se la
                                    nostra mente è impegnata in altre attività.
                                    <br />
                                    Spegni tutto ciò che può distrarti.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="lg:w-10/12 m-auto p-10 mb-16 lg:rounded-3xl lg:bg-gradient-to-bl lg:from-white lg:from-30% lg:to-thirdColor">
                                <h3 className="text-lg md:text-xl font-bold text-primaryColor mb-5">
                                    2. Timer
                                </h3>
                                <p className="md:text-lg">
                                    Il timer è composto da 3 pulsanti:
                                </p>
                                <ul className="md:text-lg mb-3 mt-3">
                                    <li>
                                        <strong>Start:</strong> avvia il timer.
                                    </li>
                                    <li>
                                        <strong>Pause:</strong> mette in pausa
                                        il timer.
                                    </li>
                                    <li>
                                        <strong>Reset:</strong> resetta il
                                        timer.
                                    </li>
                                </ul>
                                <p className="md:text-lg">
                                    È possibile incrementare o decrementare il
                                    tempo del timer di 1 minuto rispettivamente
                                    con i pulsanti <strong>+</strong> e
                                    <strong> -</strong> .
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="lg:w-10/12 m-auto p-10 mb-16 lg:rounded-3xl lg:bg-gradient-to-bl lg:from-white lg:from-30% lg:to-thirdColor">
                                <h3 className="text-lg md:text-xl font-bold text-primaryColor mb-5">
                                    3. Sii costante!
                                </h3>
                                <p className="md:text-lg">
                                    Sii costante e rispetta il tempo che ti sei
                                    dedicato. <br />I risultati arriveranno solo
                                    con il tempo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IstruzioniTimer;
