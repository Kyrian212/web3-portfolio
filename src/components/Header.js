// Import Assets
import profile from '../assets/kk.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kyrian Molokwu" />

            <div className='header__content'>
                <h1>Hi, I'm Kyrian Molokwu</h1>
                <p>Product Manager</p>
                <a href="mailto:kyrianmolokwu@gmail.com" className='button'>Get in Touch</a>
            </div>
        </section>
    );
}

export default Header;