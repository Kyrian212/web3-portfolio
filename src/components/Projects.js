// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/adron.png';
import aave from '../assets/Screenshot (13).png';
import av from '../assets/av.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

               {/*  <div className="projects__card">
                    <h3>Portfolio</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>This is my portfolio site i built from 
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">View </a>
                    {/* <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a> 
                </div>  */}

                <div className="projects__card">
                    <h3>Adron Homes </h3>
                    <img src={compound} alt="Adron Landing Page" />
                    <strong> Real Estate</strong>
                    <p>
                        This is one of the largest real estate company for home owners and partners.
                    </p>

                    <a href="https://adronhomesproperties.com/" target="_blank" className="button">View</a>
                   {/*  <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>Veva</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <strong> Ecommerce</strong>
                    <p>
                        A food marketplace that brings together food vendors and customers
                    </p>

                    <a href="https://getveva.co/" target="_blank" className="button">View</a>
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>AuctionsVillage</h3>
                    <img src={av} alt="Aave Landing Page" />
                    <strong> Ecommerce </strong>
                    <p>
                        A peer-to-peer auction marketplace for value-based transactions.
                    </p>

                    <a href="https://app.auctionsvillage.com/" target="_blank" className="button">View</a>
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>
            </div>
        </section>
    );
}

export default Projects;