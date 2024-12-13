export const Hero = () => {
    return (
        <main className="bg-gradient-to-br from-primaryColor from-50% to-forthColor min-w-full">
            <section className="h-96 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-44">
                <div>
                    <h1 className="text-secondaryColor font-bold text-6xl md:text-9xl md:w-48">
                        Zenn
                    </h1>
                    <p className="text-secondaryColor font-bold text-xl md:text-2xl">
                        Trova la tua calma.
                    </p>
                </div>
                <div>
                    <img
                        src="/images/yoga.webp"
                        alt="yoga-image"
                        className="w-32 h-32 md:w-56 md:h-56"
                    />
                </div>
            </section>
        </main>
    );
};

export default Hero;
