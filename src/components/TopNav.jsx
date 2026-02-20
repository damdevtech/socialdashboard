function TopNav() {
    return (
        <nav className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
                <h2 className="text-xl font-bold">Home</h2>

                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-100 px-3 py-1 rounded-full outline-none text-sm"
                    />

                    <button className="hover:text-blue-500 transition">
                        📩
                    </button>

                    <button className="w-8 h-8 rounded-full bg-gray-300"></button>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;
