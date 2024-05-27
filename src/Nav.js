import './Nav.css';

function Nav() {
    return (
            <div id="nav">
                <div id="nav-left">
                    <div id="hamburger">
                        <img className='link' src='./hamburger icon.png'></img>
                    </div>
                    <div id="name-nav">Zaid Sharieff</div>
                </div>
                <div id="nav-right">
                    {/* <Link to="App/#about-section"> */}
                    {/* </Link> */}
                    <a className="hash-link" href="#about-section">
                        <div className="clickable" id="about">About</div>
                    </a>
                    <a className="hash-link" href="#portfolio-section">
                        <div className="clickable" id="portfolio">Portfolio</div>
                    </a>
                    <a className="hash-link" href="#interests-section">
                        <div className="clickable" id="interest">Interest</div>
                    </a>
                    <a className="hash-link" href="#projects-section">
                        <div className="clickable" id="project">Project</div>
                    </a>
                    <a className="hash-link" href="#contact-section">
                        <div className="clickable" id="contact">Contact</div>
                    </a>
                    <div id="options">
                        <img className="link" src='./options icon.png'></img>
                    </div>
                </div>
            </div>
    )
}

export default Nav;