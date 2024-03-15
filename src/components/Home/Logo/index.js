import './index.scss'
import LogoS from '../../../assets/images/DathonWeber.jpg'

const Logo = () => {
  return ( 
    <div className="logo-container d-none d-lg-block">
      <img
        className="solid-logo"
        src={LogoS}
        alt="S"
      />
    </div>
  )
}

export default Logo
