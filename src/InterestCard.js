import './InterestCard.css';

function InterestCard({ name, src }) {
    return (
        <div className='interest-card'>
            <div className='interest-card-icon'>
                <img src={src} alt='Technology' width={"30px"}></img>
            </div>
            <div className='interest-card-title'>{name}</div>
        </div>
    )    
}

export default InterestCard;