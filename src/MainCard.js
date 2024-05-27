import './MainCard.css';
import Space from './Space';

function MainCard() {
    return (
        <div id="card">
            <div id="card-left">
                <div id="profile-picture">
                    <img id="profile" src="./profile.jpg" width={230 + "px"} alt="Profile"></img>
                </div>
                <div className="links">
                    <img className="link" src="./facebook icon.png"></img>
                    <img className="link" src="./twitter icon.png"></img>
                    <img className="link" src="./linkedin icon.webp"></img>
                    <img className="link" src="./instagram icon.webp"></img>
                    <img className="link" src="./github icon.png"></img>
                </div>
            </div>
            <div id="card-right">
                <div id="name">Zaid Sharieff</div>
                <div id="title">Developer | Otaku | Learner</div>
                <div id="contact-links">
                    <button className="button" id="resume-button">DOWNLOAD RESUME</button>
                    <button className="button" id="contact-button">CONTACT</button>
                </div>
                <Space space={10}></Space>
                <div id="about-me">
                    <div className="line">
                        <span className="bold">Experience Level : </span>
                        <span className="normal">5 years</span>
                    </div>
                    <div className="line">
                        <span className="bold">I'm Currently Watching </span>
                        <span className="normal">One Piece</span>
                    </div>
                    <div className="line">
                        <span className="bold">Interested in : </span>
                        <span className="normal">Technology, Astronomy, Space</span>
                    </div>
                    <div className="line">
                        <span className="bold">Equipments : </span>
                        <span className="normal">Sarcasm, Knowledge, Python, C, Nodejs, PHP, webdev, Linux, something else</span>
                    </div>
                    <div className="line">
                        <span className="bold">Fun Fact : </span>
                        <span className="normal">Prefer Chai over coffee</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard;