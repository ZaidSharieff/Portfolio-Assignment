import './App.css';
import InterestCard from './InterestCard.js';
import MainCard from './MainCard.js';
import Nav from './Nav.js';
import ProjectCard from './ProjectCard.js';
import Space from './Space.js';
import AboutCard from './AboutCard.js';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Nav></Nav>
        <Space space={200}></Space>
        <div id="about-section">
          <MainCard></MainCard>
        </div>

        <div className='row-header'>
          What I Do
        </div>
        <div id="portfolio-section">
          <AboutCard title={"Developer"} src={"./developer icon.png"} desc={"I am a data engineer with 3+ years of experience working on Azure cloud. have a strong background in ETL processes and have successfully completed multiple projects involving data ingestion, transformation, and loading. highly proficient in Python and have a strong understanding of SQL and data management principles. able to work effectively in both individual and team environments and am committed to delivering high-quality results."}></AboutCard>
          <AboutCard title={"Otaku"} src={"./otaku icon.png"} desc={"I am an Otaku, which is a term used to describe someone who is deeply passionate about anime and manga. As an Otaku, I have a deep appreciation for the art, storytelling, and cultural significance of these mediums. I enjoy immersing myself in the rich and diverse world of anime and manga, and I am always eager to learn more about new series and creators. My love for Otaku culture goes beyond just consuming media, as I also enjoy participating in fan communities and events, and sharing my enthusiasm with others. Being an Otaku is a big part of my identity, and I am proud to be a part of this vibrant and creative community.."}></AboutCard>
          <AboutCard title={"Learner"} src={"./learner icon.png"} desc={"I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry."}></AboutCard>
        </div>

        <div className='row-header'>
          Interests
        </div>
        <div id='interests-section'>
          <InterestCard name={"Movie"} src={'./movie icon.png'}></InterestCard>
          <InterestCard name={"Music"} src={'./music icon.png'}></InterestCard>
          <InterestCard name={"Gaming"} src={'./gaming icon.png'}></InterestCard>
          <InterestCard name={"Photography"} src={'./photography icon.png'}></InterestCard>
          <InterestCard name={"Reading"} src={'./reading icon.png'}></InterestCard>
          <InterestCard name={"Traveling"} src={'./traveling icon.png'}></InterestCard>
        </div>

        <div className='row-header'>
          Projects And Work
        </div>
        <div id='projects-section'>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
          <ProjectCard language={"Rust"} title={"Vedic"} desc={"Vedic is World first working Programming launguage in Sanskrit"}></ProjectCard>
        </div>

        <div className='row-header'>
          Contact
        </div>
        <div id='contact-section'>
          <div id='contact-section-text'>Find me on.</div>
          <div className='links'>
            <img className='link' src='./facebook icon.png' alt='Facebook'></img>
            <img className='link' src='./twitter icon.png' alt='Twitter'></img>
            <img className='link' src='./linkedin icon.webp' alt='Linkedin'></img>
            <img className='link' src='./instagram icon.webp' alt='Instagram'></img>
            <img className='link' src='./github icon.png' alt='GitHub'></img>
          </div>
        </div>

        <div id='footer'>
          <div id='footer-text'>Thank You For Visiting.</div>
          <div id='footer-footnote'>Zaid Sharieff © 2024 All rights reserved.</div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
