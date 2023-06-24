import './services.css'
import data from './data.js';
import Card from '../../components/Card';
const Service = () => {
  return (
    <section id="services">
      <h2>My services</h2>
      <p>i give you all the best in the services below</p>
      <div className="container services__container">
    {
      data.map(item => (
        <Card key={item.id} className="service light">
          <div className="service__icon">{item.icon}</div>
          <div className="service__details">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </Card>
      ))
    }

      </div>
      
      </section>
  )
}

export default Service
