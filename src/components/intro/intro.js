import './intro.css';
import progImage from '../../images/programer.png';
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

export default function Introduction() {
    return (
        <div className="i container">
            <div className="iLeftWrapper">
                <div className='nameSurname'>I'm <span style={{ color: 'red' }}>Mahmud</span> Jabrayilov</div>
                <p className='work'>Frontend Developer</p>
                <div className='leftIcons'>
                    <div className='ficon'>
                        <RiFacebookFill style={{ color: '#EA4C89', width: 25, height: 25 }} />
                    </div>
                    <div className='licon'>
                        <FaLinkedinIn style={{ color: '#4176FA', width: 25, height: 25 }} />
                    </div>
                    <div className='iicons'>
                        <RiInstagramFill style={{ color: '#CE6B5C', width: 50, height: 25 }} />
                    </div>
                </div>
            </div>
            <div className='progImageDiv'>
                <img className='progImage' src={progImage} alt='ss' />
            </div>
        </div>
    )
}