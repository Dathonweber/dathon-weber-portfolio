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

const projects = [
    {
        projectName: "Casper.com",
        projectURL: "https://casper.com/",
        projectImages: [CasperHomePage, CasperNavMenu, CasperPLP, CasperPDP],
        description: "Our project involved a comprehensive overhaul of the client's existing website,with a dual focus on modernizing its appearance and transitioning from Demandware to SFRA infrastructure. As a member of the development team, my responsibilities included the construction and upkeep of crucial components such as the mini cart/cart pages, checkout page, and global navigation bar, ensuring seamless functionality across both desktop and mobile platforms. Leveraging GitHub and Bitbucket repositories, I facilitated collaborative development efforts and maintained active codebases to streamline project progress. Midway through the six-month project timeline, the client opted to streamline functionality by temporarily removing the account creation feature. This strategic decision enabled us to adhere to the established site release schedule without compromising quality. Following the successful site launch in early January, the managed services team seamlessly reintegrated the account creation feature, ensuring a smooth transition and optimal user experience for visitors."
    },
    {
        projectName: "Snipesusa.com",
        projectURL: "https://www.snipesusa.com/",
        projectImages: [SnipesHomePage, SnipesNavMenu, SnipesPLP, SnipesPDP, SnipesBlog],
        description: "Within the Managed Services team, I played a pivotal role in enhancing the client's website by implementing blog and social media platforms, enriching its interactive capabilities and fostering greater engagement with users. Utilizing GitHub and Bitbucket repositories, I ensured the efficient development and ongoing maintenance of the website's code bases, enabling seamless integration of new features and updates. During my tenure with the managed services team, a client request necessitated the integration of a third-party API, presenting a unique challenge as it was unfamiliar territory for me. However, through effective collaboration with my team and management, we successfully navigated this hurdle within the specified timeframe. This achievement not only bolstered the website's functionality but also underscored our team's adaptability and commitment to meeting client needs promptly and effectively."
    },
    {
        projectName: "Drapers.com",
        projectURL: 'https://www.drapers.com/',
        projectImages: [DrapersHomePage, DrapersNavMenu, DrapersPLP, DrapersPDP],
        description: "At Drapers.com, I played a crucial role in a project aimed at optimizing the website's functionality and user experience, utilizing SFCC (Salesforce Commerce Cloud) SFRA (Storefront Reference Architecture) technologies. Utilizing SFCC's Page Designer, I crafted visually appealing pages for both Product Listing Pages (PLP) and Product Detail Pages (PDP), ensuring a cohesive and engaging user experience throughout the website. Additionally, I effectively managed code development and maintenance using GitHub and Bitbucket repositories, facilitating collaboration and ensuring the smooth evolution of the website's capabilities."
    }
    // Add more project objects as needed
];


export { projects};
