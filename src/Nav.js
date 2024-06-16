import './Nav.css';

const scrollToSection = (sectionId) => {
    return () => {
        const yOffset = -150;
        const element = document.getElementById(sectionId);
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

function Nav() {
    return (
            <div id="nav">
                <div id="nav-left">
                    <div id="name-nav">Zaid Sharieff</div>
                </div>
                <div id="nav-right">
                    <div className="hash-link" onClick={scrollToSection('about-section')}>
                        <div className="clickable" id="about" >About</div>
                    </div>
                    <div className="hash-link" onClick={scrollToSection('portfolio-section')}>
                        <div className="clickable" id="portfolio">Portfolio</div>
                    </div>
                    <div className="hash-link" onClick={scrollToSection('interests-section')}>
                        <div className="clickable" id="interest">Interest</div>
                    </div>
                    <div className="hash-link" onClick={scrollToSection('projects-section')}>
                        <div className="clickable" id="project">Project</div>
                    </div>
                    <div className="hash-link" onClick={scrollToSection('contact-section')}>
                        <div className="clickable" id="contact">Contact</div>
                    </div>
                </div>
            </div>
    )
}

export default Nav;
