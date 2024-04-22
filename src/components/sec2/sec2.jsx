import './sec2.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Sec2 = () => {
    return (
        <div className='sec2'>
            <div className="tilte-sec2">
                <h1>Skills</h1>
            </div>
            <div className="list-sec2">
                <div className="card-skills">
                    <div className="card-sec2">
                        <div className="logo-card">
                        <FaHtml5 className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Html</h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <FaCss3  className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Css</h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <IoLogoJavascript className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Javascript</h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <FaReact  className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>React </h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <SiExpress className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>express js</h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <FaWordpress  className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Wordpress </h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <SiTailwindcss   className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Tailwindcss  </h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                    <div className="card-sec2">
                        <div className="logo-card">
                        <SiMongodb   className='fntlogo' />
                        </div>
                        <div className="name-card">
                            <h1 style={{color:'#ffffff'}}>Mongodb </h1>
                        </div>
                        <div className="descr-card">
                            <p style={{color:'#d5d5d5'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec2;
