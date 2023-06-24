import './About.css'
import AboutImage from '../../assets/pexels-pixabay-36469.jpg'
import CV from '../../assets/Islam alsaadawy CV.pdf'
import {BsDownload} from 'react-icons/bs'
import data from './data'
import Card from '../../components/Card'
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
              {
                data.map(item =>  (
                  <Card key={item.id} className="about__card">
                      <span className="about__card-icon">{item.icon}</span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          <p>
            Hi my name is Islam Alsaadawy i am a full stack developer that strives
      
          </p>  
          <a href={CV} download className='btn primary about__button'>Download CV <BsDownload/></a>
        </div>

        </div>

    </section>
  )
}

export default About