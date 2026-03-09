import TweetInputs from "../components/TweetInputs";
import Feeds from "../components/Feeds";
import TopNav from "../components/TopNav";
import SideBar from "../components/SideBar";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Top Navigation */}
            <TopNav />

            {/* Main layout */}
            <div className="flex justify-center">

                {/* Sidebar */}
                <SideBar />

                {/* Feed */}
                <div className="w-full max-w-2xl border-x border-gray-200 bg-white">
                    <TweetInputs />
                    <Feeds />
                </div>

            </div>
        </div>
    );
}

export default Home;