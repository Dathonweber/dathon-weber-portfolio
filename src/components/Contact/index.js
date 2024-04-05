import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'default_service',
      'template_fj7ir7i',
      refForm.current,
      'bNCTiTWbqGe2G0GBi'
    ).then(
      () => {
        alert('Message successfully sent')
        window.location.reload(false)
      }, () => {
        alert('Failed to send message, please try again')
      }
    )
  }
  return (
    <>
      <div className='map-container contact-page'>
        <div className='text-zone'>

          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            I'm a seasoned full-stack web developer, and this space is a testament to my dedication and expertise.
            If you're a fellow developer, a potential collaborator, or someone with substantial projects in the pipeline, I'm particularly eager to connect with you.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder="Subject" type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className='info-map d-none d-lg-block'>
          Dathon Weber
          <br />
          United States, <br />
          Emporia Kansas <br />
          <span>dathonweber82@gmail.com</span>
        </div>

        <div className='map-wrap d-none d-lg-block'>
          <MapContainer center={[38.4037691,-96.2191085]} zoom={11}>

            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[38.4037691,-96.2191085]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='ball-pulse-sync' />
    </>
  )
}

export default Contact;