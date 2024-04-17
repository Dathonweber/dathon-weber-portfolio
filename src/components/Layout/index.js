import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../navbar'
import ParticleComponent from '../ParticleComponent'

const Layout = () => {
  const location = useLocation();

  const isStaticPage = location.pathname === '/resume' || location.pathname === '/my-work';

  return (
    <div className="App">
      <ParticleComponent />
      <Navbar />
      <Sidebar />
      <div className="page">

        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        {isStaticPage ? (
          <span className="bottom-tags bot-tag-static">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html bot-tag-static-html">&lt;/html&gt;</span>
          </span>
        ) : (
          <span className="bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        )}
      </div>
    </div>
  )
}

export default Layout
