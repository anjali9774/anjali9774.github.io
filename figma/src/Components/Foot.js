import LinkedIn from '../assets/LinkedinLogo.svg'
import Instagram from '../assets/InstagramLogo.svg'
import './Foot.css'

const Foot = ()=>{
    return (
        <>
              <div class="material">
        <ul>
            <li>Prompt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>
        </ul>
        <ul class="rightMaterial">
            <li>Dweep.io</li>
            <li>Made with love in India</li>
            <li class="logos">
                <input type="image" img src={LinkedIn} alt="LinkedIn"/>
                <input type="image" img src={Instagram} alt="Instagram"/>
            </li>
            <li>&nbsp;</li>
            <li>hello@dweep.io</li>
        </ul>
    </div>
        </>
    )
}

export default Foot