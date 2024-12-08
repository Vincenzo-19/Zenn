import Hero from './hero';

export const Main = () => {
    return (
        <>
            <Hero />
            <section className="min-w-full flex justify-center bg-gradient-to-br from-white from-40% to-thirdColor">
                <div className="md:max-w-3xl lg:max-w-6xl mb-16 mt-16 p-8 md:p-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primaryColor">
                        Zenn: Scopri un mondo nuovo dentro di te
                    </h2>
                    <p className="text-base sm:text-lg mt-6">
                        Sei pronto a intraprendere un viaggio alla scoperta di
                        te stesso? Zenn ti accompagnerà in questa avventura,
                        rivelandoti un mondo interiore ricco di risorse e
                        potenzialità.
                    </p>
                    <p className="text-base sm:text-lg mt-6">
                        Immagina di avere uno strumento che ti permette di
                        calmare la tua mente, migliorare la tua concentrazione e
                        ridurre lo stress. Con Zenn, questo strumento è a
                        portata di mano. Scopri perché milioni di persone in
                        tutto il mondo hanno scelto la meditazione come pratica
                        quotidiana per migliorare la loro vita.
                    </p>
                </div>
            </section>

            <section className="min-w-full flex justify-center">
                <div className="relative w-full h-52 overflow-hidden">
                    <img
                        src="/src/images/fiore.jpg"
                        alt="Meditation"
                        className="w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <p className="text-white text-xl md:text-2xl font-bold p-8 text-center">
                            "Meditare è come piantare un seme di felicità nel
                            tuo giardino interiore"
                        </p>
                    </div>
                </div>
            </section>

            <section className="min-w-full flex justify-center bg-gradient-to-br from-white from-40% to-thirdColor">
                <div className="md:max-w-3xl lg:max-w-7xl mb-16 mt-16 p-8 md:p-16">
                    <div>
                        <h2 className=" text-center text-2xl sm:text-3xl font-bold text-primaryColor">
                            Scopri i benefici della meditazione per il tuo
                            benessere
                        </h2>
                    </div>
                    <div className="h-44 mt-16 px-16 py-8 flex justify-between items-center rounded-3xl bg-gradient-to-br from-white from-40% to-thirdColor">
                        <div className="mr-16">
                            <h3 className="text-xl text-primaryColor sm:text-2xl font-bold mb-4">
                                Mente più calma
                            </h3>
                            <p className="text-base md:text-lg">
                                La meditazione ti aiuta a calmare la mente,
                                riducendo ansia e stress.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/src/images/water.png"
                                alt="water-icon"
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                    <div className="h-44 mt-16 px-16 py-8 flex flex-row-reverse justify-between items-center rounded-3xl bg-gradient-to-bl from-white from-40% to-thirdColor">
                        <div className="ml-16">
                            <h3 className="text-xl text-primaryColor sm:text-2xl font-bold mb-4">
                                Miglioramento della concentrazione
                            </h3>
                            <p className="text-base md:text-lg">
                                Con la meditazione, la tua mente sarà più
                                concentrata e focalizzata sugli studi o sul
                                lavoro.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/src/images/focus-points.png"
                                alt="focus-icon"
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                    <div className="h-44 mt-16 px-16 py-8 flex justify-between items-center rounded-3xl bg-gradient-to-br from-white from-40% to-thirdColor">
                        <div>
                            <h3 className="text-xl text-primaryColor sm:text-2xl font-bold mb-4">
                                Aumento della creatività
                            </h3>
                            <p className="text-base md:text-lg mr-16">
                                La meditazione stimola la creatività e ti
                                permette di trovare nuove soluzioni ai problemi.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/src/images/idea.png"
                                alt="water-icon"
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
