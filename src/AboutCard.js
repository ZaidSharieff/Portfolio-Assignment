import './AboutCard.css';

function AboutCard({ title, desc, src }) {
    return (
        <div className="about-card">
            <div className="about-icon">
                <img src={src} alt='Developer' width={"60px"}></img>
            </div>
            <div className="about-title">{title}</div>
            <div className="about-desc">{desc}</div>
        </div>
    )
}

export default AboutCard;