import Image from "next/image"
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from 'react';

const Contact = () => {

    const [token, setToken] = useState(false);
    const [captchaError, setCaptchaError] = useState(false)
    const handleVerificationSuccess = (token, ekey) => {
        setToken(token)
    }
    const sendMessage = (e) => {
        e.preventDefault()
        if(!token) return setCaptchaError("You must check the captcha to proceed")
        setCaptchaError(false)

    }
    return (
        <>
            <div className="content">
                <div className="column-image">

                    <div className="bg" data-bg="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/images/portfolio/13.jpg"
                        style={{ backgroundImage: "url('https://masai.fra1.cdn.digitaloceanspaces.com/next-app/images/portfolio/13.jpg')", objectFit: 'cover' }}>
                    </div>
                    <div className="overlay"></div>
                    <div className="column-title">
                        <h2>About Me</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar.</h3>

                    </div>

                    <div className="column-notifer">
                        <div className="scroll-down-wrap transparent_sdw">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                            <span>Scroll down to Discover</span>
                        </div>
                    </div>
                    <div className="fixed-column-dec"></div>
                </div>
                <div className="column-wrapper">
                    <div className="scroll-nav-wrap">
                        <nav className="scroll-nav scroll-init">
                            <ul>
                                <li><a href="#sec3">Say Hello</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                    <section id="sec3">
                        <div className="container small-container">
                            <div className="section-title fl-wrap">
                                <h3> Get In Touch</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>

                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-contact-form">
                                                    <div id="contact-form" className="custom-form">
                                                        <div role="form" className="wpcf7" id="wpcf7-f5-p157-o1" lang="en-US" dir="ltr">
                                                            <div className="screen-reader-response">
                                                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                                <ul></ul>
                                                            </div>
                                                            <form onSubmit={sendMessage}>
                                                                <p><span ><input type="text"
                                                                    name="your-name" defaultValue="" size="40"
                                                                    required placeholder="Your Name *" /></span></p>
                                                                <p><span className=" your-email"><input type="email"
                                                                    name="your-email" defaultValue="" size="40"
                                                                    placeholder="Email Address *" required/></span></p>
                                                                <p><span className=" your-message"><textarea
                                                                    name="your-message" cols="40" rows="10"
                                                                    placeholder="Your Message:" required></textarea></span></p>
                                                                <div style={{textAlign: 'center'}}>
                                                                    <HCaptcha
                                                                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                                                                        onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
                                                                    />
                                                                </div>
                                                                <span className="wpcf7-not-valid-tip" >{captchaError && <>{captchaError}</>}</span>
                                                                <p><button
                                                                    className="btn float-btn flat-btn color-bg">Send
                                                                    Message</button></p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sec-dec"></div>
                    <div className="clear"></div>
                    <div className="clear"></div>

                    <footer className="min-footer fl-wrap content-animvisible">
                        <div className="container small-container">
                            <div className="footer-inner fl-wrap">
                                <div className="policy-box">
                                    <p>© Ohovisuals 2023 | All rights reserved.</p>
                                </div>

                                <a href="#" className="to-top-btn to-top">
                                    Back to top
                                    <i className="fal fa-long-arrow-up"></i></a>

                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="share-wrapper">
                <div className="share-container fl-wrap  isShare"><a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwebredox.net%2Fdemo%2Fwp%2Fkotlis%2Fdark%2Fabout%2F" className="pop share-icon share-icon-facebook"></a><a href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwebredox.net%2Fdemo%2Fwp%2Fkotlis%2Fdark%2Fabout%2F&amp;media=&amp;description=" className="pop share-icon share-icon-pinterest"></a><a href="https://plusone.google.com/_/+1/confirm?hl=en&amp;url=https%3A%2F%2Fwebredox.net%2Fdemo%2Fwp%2Fkotlis%2Fdark%2Fabout%2F" className="pop share-icon share-icon-googleplus"></a><a href="https://twitter.com/share?via=in1.com&amp;text=About – Kotlis  Photography Portfolio WordPress Theme" className="pop share-icon share-icon-twitter"></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwebredox.net%2Fdemo%2Fwp%2Fkotlis%2Fdark%2Fabout%2F&amp;title=About – Kotlis  Photography Portfolio WordPress Theme&amp;summary=&amp;source=in1.com" className="pop share-icon share-icon-linkedin"></a></div>
            </div>
        </>
    )
}

export default Contact