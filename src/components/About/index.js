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
            Hello, I'm Dathon Weber. As a seasoned Full Stack Web Developer with a Bachelor's Degree in Software Development, I bring extensive expertise in various frameworks and platforms. Having recently pivoted to Shopify Theme Development, I now specialize in crafting seamless, high-performing storefronts tailored to client needs.</p>
          <p>
            Throughout my career, I've mastered tools such as React, Angular, Node.js, and more, enabling me to contribute significantly to the success of diverse projects at Fenom Digital and Dees Nail Designs. My background in Salesforce Commerce Cloud provides a unique perspective on eCommerce solutions, which I now leverage in my Shopify development work.

          </p>
          <p>At Fenom Digital, I played a pivotal role in elevating the company's standing within the industry by spearheading the development of cutting-edge PWA-based websites. Collaborating with renowned clients like Casper.com and SnipesUSA.com, I exceeded expectations, delivering solutions that increased website performance and client satisfaction. Currently, I work as a freelance Shopify Theme Developer, holding certifications in Shopify Development Fundamentals and Liquid Storefront for Theme Developers from Shopify Academy. My ability to thrive in dynamic team environments and knack for meeting tight deadlines and adapting to evolving client needs has consistently positioned me as a valuable asset in any project setting.</p>
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
