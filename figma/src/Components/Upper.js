import Pic from '../assets/Picture.svg'
import './Upper.css'
const Upper = ()=>{
    return(
        <>
            <div class="Whole">
        <div class="leftSection">
            <p class="heading">An inspiring design delivered to your inbox every morning</p>
            <p class="pbody">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring
                one
                every day to
                your inbox</p>
            <p class="line">Show me how it looks</p>
            <input class="emailp" type="email" placeholder="Your e-mail address" />
            <button>Register Now</button>
            <div class="bottomLine">Free - No Spam - No Data Sharing</div>
        </div>
        <div class="rightSection">
            <input type="image" img src={Pic} alt="image here"/>
        </div>
    </div>
        </>
    )
}

export default Upper

