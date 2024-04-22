/* eslint-disable react/no-unescaped-entities */
import './sec1.css';
import Photosec1 from '../../../public/img/sapiens.svg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";




const Sec1 = () => {
    return (
        <section className='sec1'>
            <div className="firt">

                <div className="sec1-text-btn">
                    <div className="tes">
                        <div className="big-text">
                            <h1>Get Noticed <br /> <span>Online.</span></h1>
                        </div>
                        <div className="small-text">
                            <p>Web Devloper that Helps You Stand Out in a Crowded Market</p>
                        </div>
                        <div className="btnwork">
                            <a href="#">Let's Work Together</a>
                        </div>
                    </div>
                </div>
                <div className="sec-imm">
                    <img src={Photosec1} alt="" />
                </div>
            </div>
            <div className="sec1-skills">
                <div className="icc">
                    <FaHtml5 className='iconclr' />
                    <FaCss3Alt className='iconclr' />
                    <FaNodeJs className='iconclr' />
                    <SiTailwindcss className='iconclr' />
                    <FaReact className='iconclr' />
                    <TbBrandNextjs className='iconclr' />
                    <SiMongodb className='iconclr' />
                </div>
            </div>
        </section>
    );
}

export default Sec1;
