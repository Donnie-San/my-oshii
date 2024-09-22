import './Header.css'

function Header() {

    return(
        <>
        <header>
            <h1>MY-おしい</h1>
            <nav className="navbar">
                <ul>
                    <li><a herf="#">Home</a></li>
                    <li><a herf="#">About</a></li>
                    <li><a herf="#">Playlist</a></li>
                </ul>
            </nav>
            <a href="#"><button>Contact Me</button></a>
        </header>
        </>
    )
}

export default Header