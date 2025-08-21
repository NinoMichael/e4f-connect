import { Carousel } from "primereact/carousel";

interface GridWelcomeItem {
    bgClass: string;
    text: string;
}
  
const MemberDashboard = () => {
    const gridWelcomeItems = [
        {
            bgClass: "bg-gray-200 text-black",
            text: "Sharpen your grammar, vocabulary, and expression skills step by step."
        },
        {
            bgClass: "bg-primary text-white",
            text: "Every session is a new chance to express yourself in real-time."
        },
        {
            bgClass: "bg-gray-50 text-black shadow",
            text: "Have fun while reinforcing what you've learned."
        },
        {
            bgClass: "bg-secondary text-white",
            text: "Stay motivated with visible results and guidance."
        }
    ];

    const gridWelcomeTemplate = ( item: GridWelcomeItem ) => {
        return (
            <div
                key={item.text}
                className={`${item.bgClass} flex justify-between items-center rounded-lg p-4 h-full`}
            >
                <h6>{item.text}</h6>
            </div>
        )
    }

    return (
        <div>
            <section className="hidden lg:grid grid-cols-4 gap-6 items-stretch">
                {
                    gridWelcomeItems.map((index) => 
                        gridWelcomeTemplate(index)
                    )
                }
            </section>

            <Carousel 
                value={gridWelcomeItems} 
                numVisible={3} 
                numScroll={3}  
                circular
                autoplayInterval={3000} 
                itemTemplate={gridWelcomeTemplate}
                className="lg:!hidden" 
            />

        </div>
    )
}

export default MemberDashboard;