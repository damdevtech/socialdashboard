function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><a href="/"><i className="fas fa-home" style={{ marginRight: '8px' }}></i>Home</a></li>
                <li><a href="/explore"><i className="fas fa-compass" style={{ marginRight: '8px' }}></i>Explore</a></li>
                <li><a href="/messages"><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>Messages</a></li>
                <li><a href="/profile"><i className="fas fa-user" style={{ marginRight: '8px' }}></i>Profile</a></li>
            </ul>
            <button>New Post</button>
        </div>

    )
}

export default Sidebar; 