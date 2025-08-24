import { motion } from "framer-motion"

const HomeProcess = () => {
    const processes = [
        {
            id: 1,
            title: 'In-person membership',
            description: 'Come directly to our office to fill out your membership form. A membership fee is required to confirm your registration.',
            icon: 'pi pi-id-card'
        },
        {
            id: 2,
            title: 'Participate in the sessions',
            description: 'Join our interactive discussions, practical workshops and cultural events (in person or online).',
            icon: 'pi pi-comments'
        },
        {
            id: 3,
            title: 'Progress and connect',
            description: 'Receive personalized support, improve your speaking skills and expand your network by meeting other English enthusiasts.',
            icon: 'pi pi-users'
        }
    ]

    return (
        <div className="mt-10 md:mt-20 px-6 md:px-12">
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-primary">
                How it works ?
            </h2>
            <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
                Joining our English club is simple, accessible and designed to help you progress step by step.
            </p>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {processes.map((process, index) => (
                    <motion.div
                        key={process.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                    >
                        <div className="flex justify-center">
                            <span className={`pi ${process.icon} text-4xl text-primary`}></span>
                        </div>
                        <h5 className="mt-4 text-lg font-semibold text-secondary">
                            {process.title}
                        </h5>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            {process.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default HomeProcess
