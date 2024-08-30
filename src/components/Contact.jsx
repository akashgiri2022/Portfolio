import React from "react"

function Contact(){
      
    function handleSubmit(e){
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzf62gMmNo3gtO4LNSNeVPbHbQM5c5aByoXY2VOIvrL4ETI2vjXIJxONWzPLbXKlBk8Fg/exec'
        const msg=document.getElementById("msg")
        const x=document.querySelector("form")
        
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(x)})
        .then(response => {
            msg.innerHTML="Message Sent"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            x.reset()
        })
        .catch(error => console.error('Error!', error.message))
    }

    return (
        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="subtitle">Contact Me</h1>
                        <p><i class="fa-sharp fa-solid fa-square-envelope"></i> akashgiri2022@gmail.com</p>
                        <p><i class="fa-solid fa-square-phone"></i> 7682901314</p>
                        <div class="social-icon">
                            <a href="https://www.linkedin.com/in/agstack/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <a href={require("../img/Agstack.pdf")} download class="btn btn2">Download Resume/CV</a>
                    </div>
                    <div class="contact-right">
                        <form name="submit-to-google-sheet" className="form" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © Akash Giri</p>
            </div>
            
        </div>
    )
}

export default Contact