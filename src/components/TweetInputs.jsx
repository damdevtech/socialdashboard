function TweetInputs() {
    return (
        <div className="border-b border-gray-200 p-4 bg-white">
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>

                <div className="flex-1">
                    <textarea
                        placeholder="What's happening?"
                        className="w-full resize-none outline-none text-lg placeholder-gray-500"
                        rows="3"
                    ></textarea>

                    <div className="flex justify-end mt-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold transition">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetInputs;
