import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useRedirect } from "../../hooks/helpers/useRedirect";

import promo from "../../assets/promo.png";

const HomeBanner = () => {
    const handleRedirect = useRedirect();

    return (
        <section className="bg-gray-100 px-8 md:px-12 py-8 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                className="order-2 text-center md:text-start md:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-4xl font-bold text-gray-600 font-mona">
                    Improve your English & connect to the world with{" "}
                    <span className="text-secondary">E4F Connect</span>
                </h1>

                <p className="mt-5 text-base">
                    Learn and communicate easily in English in a collaborative and stimulating environment. 
                    Progress together, communicate without barriers, and experience each session with enthusiasm.
                </p>

                <Button
                    label="Get started"
                    className="!bg-primary !text-base !rounded-full !font-semibold !px-12 !py-3 !mt-8"
                    onClick={handleRedirect}
                />
            </motion.div>

            <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.img
                    src={promo}
                    alt="Promo"
                    className="w-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
};

export default HomeBanner;
