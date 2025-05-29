// projectData.js
import CasperHomePage from '../src/assets/images/CasperHomePage.png'
import CasperPLP from '../src/assets/images/CasperPLP.png'
import CasperPDP from '../src/assets/images/CasperPDP.png'
import CasperNavMenu from '../src/assets/images/CasperNavMenu.png'
import SnipesHomePage from '../src/assets/images/SnipesHomePage.png'
import SnipesNavMenu from '../src/assets/images/SnipesNavMenu.png'
import SnipesPLP from '../src/assets/images/SnipesPLP.png'
import SnipesPDP from '../src/assets/images/SnipesPDP.png'
import SnipesBlog from '../src/assets/images/SnipesBlog.png'
import DrapersHomePage from '../src/assets/images/DrapersHomePage.png'
import DrapersNavMenu from '../src/assets/images/DrapersNavMenu.png'
import DrapersPLP from '../src/assets/images/DrapersPLP.png'
import DrapersPDP from '../src/assets/images/DrapersPDP.png'
import ElephanTeaBobaHomePage from '../src/assets/images/ElephanTeaBobaHomePage.png'
import ElephanTeaBobaPDP from '../src/assets/images/ElephanTeaBobaPDP.png'
import ElephanTeaBobaPLP from '../src/assets/images/ElephanTeaBobaPLP.png'

const projects = [
    {
        projectName: "ElephanTeaBoba.com",
        projectURL: "https://elephanteaboba.com/",
        projectImages: [ElephanTeaBobaHomePage, ElephanTeaBobaPLP, ElephanTeaBobaPDP],
        description: ['Configured Shopify settings, products, collections, and navigation.',
            'Implemented custom sections and dynamic content using Liquid.', 'Enhanced interactivity and responsiveness with JavaScript and custom styling.',
            'Account Features', 'Optimized for both desktop and mobile experiences.']
    },
    {
        projectName: "Casper.com",
        projectURL: "https://casper.com/",
        projectImages: [CasperHomePage, CasperNavMenu, CasperPLP, CasperPDP],
        description: ['Global Navigation', 'Mini-Cart', 'Checkout Page', 'Account Features', 'Front-end UI Bugfixes']
    },
    {
        projectName: "Snipesusa.com",
        projectURL: "https://www.snipesusa.com/",
        projectImages: [SnipesHomePage, SnipesNavMenu, SnipesPLP, SnipesPDP, SnipesBlog],
        description: ['3rd Party API Integration', 'Blog Page', 'Backend XML in collaboration with WordPress']
    },
    {
        projectName: "Drapers.com",
        projectURL: 'https://www.drapers.com/',
        projectImages: [DrapersHomePage, DrapersNavMenu, DrapersPLP, DrapersPDP],
        description: ['Page Designer carousels for PDP Page', 'Page Designer carousels for PLP Page', 'Page Designer carousels for Checkout Page', 'PLP Refinement Options', 'Front-end UI Bugfixes']
    }
    // Add more project objects as needed
];


export { projects };
