import './header.css'
import data from './data'
import HeaderImage from '../../assets/pexels-pixabay-36469.jpg'
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Islam Alsaadawy</h3>
        <p>You are a step away from having your website created by me!</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#portfolio" className='btn light'>My work</a>

        </div>
        <div className="header__socials">
          {
            data.map(item => <a key= {item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
          }
        </div>
      </div>

    </header>
  )
}

export default Header