import HomeActivity from "../components/home/Activity";
import HomeBanner from "../components/home/Banner";
import HomeCounterStat from "../components/home/CounterStat";
import HomeProcess from "../components/home/Process";
import HomeProgram from "../components/home/Program";

const Homepage = () => {
    return (
        <>
            <HomeBanner />
            <HomeCounterStat />
            <HomeProgram />
            <HomeActivity />
            <HomeProcess />
        </>
    )
};

export default Homepage;