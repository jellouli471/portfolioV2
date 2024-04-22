/* eslint-disable react/no-unescaped-entities */
import './header.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <h2>Abdo<span className='no9ta'>.</span></h2>
                </div>
                <div className="links-btn">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Work</a>
                    <div className="btnn">
                    <button>Let's Work Together</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
