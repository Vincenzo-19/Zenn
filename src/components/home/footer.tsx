export const Footer = () => {
    return (
        <footer className="bg-primaryColor text-white py-8">
            <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center">
                <div className="sm:ml-8">
                    <h3 className="text-center sm:text-start text-2xl font-bold mb-4 text-secondaryColor">
                        Zenn
                    </h3>
                    <p className="text-sm text-secondaryColor">
                        © 2024 Zenn. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-8 mb-8 sm:mb-0 sm:mr-8">
                    <a
                        href="https://github.com/Vincenzo-19"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="/images/github.webp"
                            alt="github-logo"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            loading="lazy"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vincenzonurcato/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="/images/linkedin-logo.webp"
                            alt="linkedin-logo"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
