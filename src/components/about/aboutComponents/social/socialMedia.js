import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

import './socialMedia.css'

export default function AboutSocial() {
    return (
        <div className="aboutSocialContainer">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="iconwrapper">
                    <div className='faicon'>
                        <RiFacebookFill style={{ color: '#385C8E', width: 100, height: 100 }} />
                    </div>
                    <div>Facebook</div>
                </div>
                <div className="iconwrapper">
                    <div className='inicons'>
                        <RiInstagramFill style={{ color: '#CE6B5C', width: 100, height: 100 }} />
                    </div>
                    <div>Instagram</div>
                </div>
                <div className="iconwrapper">
                    <div className='liicon'>
                        <FaLinkedinIn style={{ color: '#4176FA', width: 100, height: 100 }} />
                    </div>
                    <p>Linkedin</p>
                </div>
                <div className="iconwrapper">
                    <div className="tiicon">
                        <AiOutlineTwitter style={{ color: '#03A9F4', width: 100, height: 100 }} />
                    </div>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    )
}