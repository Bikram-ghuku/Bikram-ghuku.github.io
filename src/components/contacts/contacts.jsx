import "./contacts.css"
import {useRef, useState} from 'react';
import emailjs from 'emailjs-com'

const Contacts=()=>{
    const formRef = useRef()
    const [done, setdone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ae2u3il', 'template_5xtw34h', formRef.current, 'ms1BDBadpiIYjmx2w')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact Me
                    </h1>
                    <p className="c-desc">
                        Hey there! Thanks for going through my website. Hope you liked it.
                        If you want to say hi, give any suggestion feel free to send me a 
                        message. I will try to respond within 2 days, I promise 🙃
                    </p>
                    <div className="c-info">
                        <div className="c-info-item">
                            <div className="row">
                            <i class="fas fa-user" aria-hidden="true"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Bikram Ghuku</div>
                                </div>
                            </div>
                            <div className="row">
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">IIT Campus, Kharagpur, West Bengal, India</div>
                                </div>
                            </div>
                            <div className="row">
                                <i class="fas fa-envelope" aria-hidden="true"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title">me@bikramghuku.tech</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-r-desc">
                        Message Reviews and suggestion
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <textarea rows="5" placeholder="Message" name="message"/>                    
                        <button class="s-btn">Send</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;