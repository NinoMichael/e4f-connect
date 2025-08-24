import { motion } from "framer-motion";
import englishPeople from '../../assets/english-people.png';

const programs = [
    {
        title: "Beginner",
        description: "Master the basics and gain confidence. Learn essential vocabulary and practice simple conversations for daily life",
    },
    {
        title: "Intermediate",
        description: "Develop fluency and improve comprehension. Strengthen grammar, learn idioms, and engage in real discussions",
    },
    {
        title: "Advanced",
        description: "Perfect communication for academic & professional goals. Focus on presentations, debates, and advanced writing skills",
    },
];

const HomeProgram = () => {
    return (
        <section className="mt-12 md:mt-20 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img 
                        src={englishPeople} 
                        alt="English People"
                        className="w-full"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl text-center font-bold text-primary mb-6 md:text-start">
                        Programs adapted to all levels...
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-6 bg-gray-100 shadow-lg rounded-2xl text-center cursor-pointer hover:shadow-xl transition-all"
                            >
                                <h3 className="text-base font-semibold text-secondary mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {program.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeProgram;
