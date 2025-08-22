import { Link } from "react-router-dom";

const SocialLink = () => {
    return (
        <div className="hidden fixed top-[40%] md:flex flex-col gap-4 right-4 bg-primary rounded-3xl px-2 py-4">
            <Link 
                to="/"
                className="hover:scale-105 transform ease-in-out duration-300"
                title="Facebook page"
            >
                <div className="bg-white/10 w-10 p-2 rounded-full text-center text-white">
                    <i className="pi pi-facebook !text-lg" />
                </div>
            </Link>

            <Link 
                to="/"
                className="hover:scale-105 transform ease-in-out duration-300"
                title="Send an email"
            >
                <div className="bg-white/10 w-10 p-2 rounded-full text-center text-white">
                    <i className="pi pi-envelope !text-lg" />
                </div>
            </Link>
        </div>
    )
}   

export default SocialLink;