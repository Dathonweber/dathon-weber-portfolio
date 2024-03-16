import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [])
  return (
    <>
      <div className="about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Dathon Weber, a dedicated Full Stack Web Developer based in
            Emporia, Kansas. In my recent role at Fenom Digital, I played a
            pivotal role in developing and testing Progressive Web Applications
            (PWA) and Salesforce Commerce Cloud (SFRA) e-commerce websites.
            Notable achievements include contributing to the success of Fenom in
            the industry and building custom cartridges for clients like
            Casper.com and SnipesUSA.com.
          </p>
          <p>
            Prior to that, at Dees Nail Designs, I
            designed, coded, and deployed a website that led to a 66% increase in
            appointment bookings within the first three months of going live.
            Proficient in Angular, Express, Node.js, and MongoDB, I demonstrated
            my versatility in web development.
          </p>
          <p>
            My technical skills span languages such as React, C#, HTML, CSS, and
            tools like Jira, Bitbucket, AWS, Visual Studio Code. Beyond my
            technical expertise, I am driven by a genuine passion for programming
            and a commitment to continuous learning.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#dd0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default About
