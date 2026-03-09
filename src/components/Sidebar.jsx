function Sidebar() {
    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col w-64 p-4">

                <h2 className="text-xl font-bold mb-6">Menu</h2>

                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        🏠 Home
                    </li>

                    <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        🔍 Explore
                    </li>

                    <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        ✉️ Messages
                    </li>

                    <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        👤 Profile
                    </li>
                </ul>

                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full">
                    New Post
                </button>

            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 text-xl">

                <button>🏠</button>
                <button>🔍</button>
                <button>✉️</button>
                <button>👤</button>

            </div>
        </>
    );
}

export default Sidebar;