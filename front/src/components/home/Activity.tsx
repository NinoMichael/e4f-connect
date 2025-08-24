import discuss from '../../assets/discuss.jpg';
import read from '../../assets/read-book.jpg';
import play from '../../assets/play.jpg';
import online from '../../assets/online-sessions.jpg';

const HomeActivity = () => {
    const activities = [
        {
            id: 1,
            title: "Discussion groups",
            image: discuss,
            class: 'sm:col-span-2',
            description: "Practice your English in a friendly environment"
        },
        {
            id: 2,
            title: "Entertaining games",
            image: play,
            class: 'sm:col-span-2',
            description: "Learn English while having fun"
        },
        {
            id: 3,
            title: "Book club",
            image: read,
            class: 'sm:col-span-2 md:col-span-3',
            description: "Improve your vocabulary and comprehension skills"
        },
        {
            id: 4,
            title: "Online sessions",
            image: online,
            class: 'sm:col-span-2 md:col-span-1',
            description: "Join our virtual events from anywhere"
        },
    ]

    return (
        <div className="mt-10 md:mt-20 bg-primary py-8 px-8 md:px-16 text-white">
            <h2 className="text-2xl text-center font-bold sm:text-start">
                Experience English differently !
            </h2>
            <p className="mt-4 text-center sm:w-[75%] sm:text-start">
                We regularly organize varied and interactive events that allow our members to practice English in a natural and friendly way
            </p>

            <div className="mt-10 grid sm:grid-cols-4 gap-8">
                { activities.map(activity => (
                    <div 
                        key={activity.id} 
                        className={`relative ${activity.class} hover:scale-105 transform ease-in-out duration-300`}
                    >
                        <img 
                            src={activity.image} 
                            alt={activity.title}
                            className='w-full object-cover h-52 sm:h-80 rounded-lg'
                        />

                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                        <div className='absolute bottom-4 left-4'>
                            <h4 className='text-base font-medium'>
                                {activity.title}
                            </h4>
                            <p className='mt-1 font-light text-xs'>
                                {activity.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeActivity;