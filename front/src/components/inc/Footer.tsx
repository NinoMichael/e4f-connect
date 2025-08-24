import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-12 md:mt-20 bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/20 pb-6">
                    <h3 className="text-lg font-mona font-semibold tracking-wide">
                        English4Folks
                    </h3>
                    <nav className="flex flex-wrap justify-center gap-4 text-xs">
                        <Link to="/" className="hover:text-primary transition-colors">
                            Legal Notice
                        </Link>
                        <span className="hidden md:inline">|</span>
                        <Link to="/" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="hidden md:inline">|</span>
                        <Link to="/" className="hover:text-primary transition-colors">
                            Terms of Use
                        </Link>
                    </nav>
                </div>

 
                <p className="mt-8 text-xs text-center">
                    © 2025 English for Folks – All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
