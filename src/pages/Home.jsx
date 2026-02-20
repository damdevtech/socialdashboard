import TweetInputs from "../components/TweetInputs";
import Feeds from "../components/Feeds";

function Home() {
    return (
        <div className="flex justify-center w-full bg-white min-h-screen">
            <div className="w-full max-w-2xl border-x border-gray-200 bg-gray-900 ">
                    <TweetInputs />
                <Feeds />
            </div>
        </div>
    );
}

export default Home;
