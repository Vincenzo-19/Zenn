import Hero from './hero';

export const Main = () => {
    return (
        <>
            <Hero />
            <section className="min-w-full flex justify-center ">
                <div className="max-w-7xl mt-16 p-16 bg-gradient-to-br from-white from-40% to-thirdColor rounded-3xl">
                    <h2 className="text-3xl font-bold text-primaryColor">
                        Zenn: Scopri un mondo nuovo dentro di te
                    </h2>
                    <p className="text-lg mt-6">
                        Sei pronto a intraprendere un viaggio alla scoperta di
                        te stesso? Zenn ti accompagnerà in questa avventura,
                        rivelandoti un mondo interiore ricco di risorse e
                        potenzialità.
                    </p>
                    <p className="text-lg mt-6">
                        Immagina di avere uno strumento che ti permette di
                        calmare la tua mente, migliorare la tua concentrazione e
                        ridurre lo stress. Con Zenn, questo strumento è a
                        portata di mano. Scopri perché milioni di persone in
                        tutto il mondo hanno scelto la meditazione come pratica
                        quotidiana per migliorare la loro vita.
                    </p>
                </div>
            </section>

            <section className="min-w-full flex justify-center mt-16">
                <div className="relative w-full h-52 overflow-hidden">
                    <img
                        src="/src/images/fiore.jpg"
                        alt="Meditation"
                        className="w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <p className="text-white text-xl md:text-2xl font-bold p-8 text-center">
                            "La meditazione è la chiave per aprire la porta
                            della pace interiore."
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
