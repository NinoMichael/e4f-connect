import { useEffect, useState } from "react";

type CounterCardProps = {
    label: string;
    icon: string;
    count: number;
};

const HomeCounterStat = () => {
    const counters = [
        {
            label: 'active members',
            icon: 'pi pi-users !text-2xl sm:!text-3xl',
            count: 100,
        },
        {
            label: 'free courses',
            icon: 'pi pi-book !text-2xl sm:!text-3xl',
            count: 1000,
        },
        {
            label: 'organized workshops',
            icon: 'pi pi-megaphone !text-2xl sm:!text-3xl',
            count: 40,
        },
        {
            label: 'online sessions',
            icon: 'pi pi-mobile !text-2xl sm:!text-3xl',
            count: 150,
        },
    ];

    return (
        <div className="bg-secondary text-white py-8 grid grid-cols-2 md:grid-cols-4 items-center justify-center mx-auto gap-8 sm:gap-12 px-4 sm:px-16">
            {counters.map((item, index) => (
                <CounterCard key={index} {...item} />
            ))}
        </div>
    );
};

const CounterCard = ({ label, icon, count }: CounterCardProps) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = Math.ceil(count / (duration / 16));

        const interval = setInterval(() => {
            start += increment;
            if (start >= count) {
                start = count;
                clearInterval(interval);
            }
            setCurrentValue(start);
        }, 16);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="flex gap-2 sm:gap-4 items-center">
            <div className="w-16 h-12 sm:h-16 text-center bg-white/10 rounded-full p-2 flex items-center justify-center">
                <i className={icon} />
            </div>
            <div>
                <h4 className="font-semibold text-xl sm:text-2xl">
                    + {currentValue}
                </h4>
                <p className="mt-0.5">{label}</p>
            </div>
        </div>
    );
};

export default HomeCounterStat;
