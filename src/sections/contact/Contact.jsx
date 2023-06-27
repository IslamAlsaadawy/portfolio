import data from './data'
import React from 'react'
import './contact.css'
import Card from '../../components/Card'

const Contact = () => {
  return (
    <section id="contact">
            <h2 className='contact_head'>Contact me!</h2>

      <div className="contact_container">

      <div className="left_container">
      <div className="contact__socials">

          {
            data.map(item => <a key= {item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
          }
        </div>
      </div>
      <div className="right_container">
        <form action="" className='contact_form'>
          <label htmlFor="Name"> Full name</label>
          <input type="text" />
          <label htmlFor="Email"> Email</label>
          <input type="Email" />
          <label htmlFor="PN"> Phone number</label>
          <input type="phone" />
          <label htmlFor="Message">Message</label>
          {/* <input className='contact_message' type="text" /> */}
          <textarea rows="4" cols="50" className='contact_message' placeholder=""></textarea>
          <button   className='btn primary contact_button'>Send!</button>

        </form>
      </div>

      </div>


    </section>
  )
}

export default Contact