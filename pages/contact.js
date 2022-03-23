import Image from "next/image"

const Contact = () => {
    return (
        <>
            <div className="content">
                <div className="column-image">

                    <div className="bg" data-bg="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/2-1.jpg"
                        style={{ backgroundImage: "url('https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/2-1.jpg')" }}>
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
                                <li><a href="#sec1" className="act-scrlink">Details</a></li>
                                <li><a href="#sec2">Location</a></li>
                                <li><a href="#sec3">Say Hello</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                    <section id="sec1">
                        <div className="container small-container">
                            <div className="section-title fl-wrap">
                                <h3> Contact Information</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 01.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-text">
                                                    <p>If you’d like to talk about a project, our work or anything else then get in touch.
                                                    </p>
                                                </div>
                                                <div className="sec-contact-info ">
                                                    <div className="contact-details fl-wrap">
                                                        <ul>
                                                            <li>
                                                                <span>Mail : </span><a target="_blank"
                                                                    href="mailto:yourmail@domain.com" rel="noreferrer">yourmail@domain.com</a>
                                                            </li>
                                                            <li><span>Address : </span>
                                                                <p><a href="#">USA 27TH Brooklyn NY</a></p>
                                                            </li>
                                                            <li>
                                                                <span>Phone : </span>
                                                                <a href="tel:+7(111)123456789">+7(111)123456789</a> ,
                                                                <a href="tel:+8(222)987654321">+8(222)987654321</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="sec-button">
                                                    <a className="custom-scroll-link btn fl-btn" href="#sec3">Say Hello</a>
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
                    <section id="sec2">
                        <div className="container small-container">
                            <div className="section-title fl-wrap">
                                <h3> Studio Location</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 02.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="map-container">
                                                    <div id="map-single"
                                                        className="map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
                                                        data-latlog="[48.859003, 2.345275]"
                                                        data-popuptext="27th Brooklyn New York, NY 10065"
                                                        data-popupicon="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/mapmarker.png"
                                                        tabIndex="0" style={{ position: 'relative' }}>
                                                        <div className="leaflet-pane leaflet-map-pane"
                                                            style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                            <div className="leaflet-pane leaflet-tile-pane">
                                                                <div className="leaflet-layer " style={{ zIndex: 1, opacity: 1 }}>
                                                                    <div className="leaflet-tile-container leaflet-zoom-animated"
                                                                        style={{
                                                                            zIndex: 18, transform: 'translate3d(0px, 0px, 0px) scale(1)'
                                                                        }}>
                                                                        <img alt="" role="presentation"
                                                                            src="//c.basemaps.cartocdn.com/light_all/15/16597/11272.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(166px, -27px, 0px)', opacity: 1
                                                                            }} />
                                                                        <img alt="" role="presentation"
                                                                            src="//a.basemaps.cartocdn.com/light_all/15/16597/11273.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(166px, 229px, 0px)', opacity: 1
                                                                            }} />
                                                                        <img alt="" role="presentation"
                                                                            src="//b.basemaps.cartocdn.com/light_all/15/16596/11272.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(-90px, -27px, 0px)', opacity: 1
                                                                            }} />
                                                                        <img alt="" role="presentation"
                                                                            src="//a.basemaps.cartocdn.com/light_all/15/16598/11272.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(422px, -27px, 0px)', opacity: 1
                                                                            }} />
                                                                        <img alt="" role="presentation"
                                                                            src="//c.basemaps.cartocdn.com/light_all/15/16596/11273.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(-90px, 229px, 0px)', opacity: 1
                                                                            }} />
                                                                        <img alt="" role="presentation"
                                                                            src="//b.basemaps.cartocdn.com/light_all/15/16598/11273.png"
                                                                            className="leaflet-tile leaflet-tile-loaded"
                                                                            style={{
                                                                                width: '256px', height: '256px',
                                                                                transform: 'translate3d(422px, 229px, 0px)', opacity: 1
                                                                            }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="leaflet-pane leaflet-shadow-pane">

                                                            </div>
                                                            <div className="leaflet-pane leaflet-overlay-pane"></div>
                                                            <div className="leaflet-pane leaflet-marker-pane">
                                                                <img src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/mapmarker.png"
                                                                    className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                                    alt="" tabIndex="0" style={{
                                                                        marginLeft: '-20px', marginTop: '-20px',
                                                                        width: '40px', height: '40px',
                                                                        transform: 'translate3d(287px, 175px, 0px)', zIndex: 175
                                                                    }} />
                                                            </div>
                                                            <div className="leaflet-pane leaflet-tooltip-pane"></div>
                                                            <div className="leaflet-pane leaflet-popup-pane">
                                                                <div className="leaflet-popup  leaflet-zoom-animated" style={{
                                                                    opacity: 1,
                                                                    transform: 'translate3d(287px, 149px, 0px)', bottom: '-7px',
                                                                    left: '-125px'
                                                                }}>
                                                                    <div className="leaflet-popup-content-wrapper">
                                                                        <div className="leaflet-popup-content" style={{ width: '248px' }}>
                                                                            27th
                                                                            Brooklyn New York, NY 10065</div>
                                                                    </div>
                                                                    <div className="leaflet-popup-tip-container">
                                                                        <div className="leaflet-popup-tip"></div>
                                                                    </div>
                                                                    <a className="leaflet-popup-close-button" href="#close">×</a>
                                                                </div>
                                                            </div>
                                                            <div className="leaflet-proxy leaflet-zoom-animated"
                                                                style={{
                                                                    transform: 'translate3d(4.24895e+06px, 2.88583e+06px, 0px) scale(16384)'
                                                                }}>
                                                            </div>
                                                        </div>
                                                        <div className="leaflet-control-container">
                                                            <div className="leaflet-top leaflet-left">
                                                                <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                                                                    <a className="leaflet-control-zoom-in" href="#" title="Zoom in"
                                                                        role="button" aria-label="Zoom in">+</a>
                                                                    <a className="leaflet-control-zoom-out" href="#" title="Zoom out"
                                                                        role="button" aria-label="Zoom out">−</a>
                                                                </div>
                                                            </div>
                                                            <div className="leaflet-top leaflet-right">

                                                            </div>
                                                            <div className="leaflet-bottom leaflet-left">

                                                            </div>
                                                            <div className="leaflet-bottom leaflet-right">
                                                                <div className="leaflet-control-attribution leaflet-control">
                                                                    <a href="http://leafletjs.com"
                                                                        title="A JS library for interactive maps">Leaflet</a> | © <a
                                                                            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                                                                    contributors
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sec-text">
                                                    <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam
                                                        venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor
                                                        odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis
                                                        facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.
                                                    </p>
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
                    <section id="sec3">
                        <div className="container small-container">
                            <div className="section-title fl-wrap">
                                <h3> Get In Touch</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 03.</div>
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
                                                            <form action="/demo/wp/kotlis/dark/contacts/#wpcf7-f5-p157-o1" method="post"
                                                                className="wpcf7-form init" noValidate="novalidate" data-status="init">
                                                                <div style={{display: 'none'}}>
                                                                    <input type="hidden" name="_wpcf7" defaultValue="5" />
                                                                    <input type="hidden" name="_wpcf7_version" defaultValue="5.5.6" />
                                                                    <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                                                    <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f5-p157-o1" />
                                                                    <input type="hidden" name="_wpcf7_container_post" defaultValue="157" />
                                                                    <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
                                                                </div>
                                                                <p><span className="wpcf7-form-control-wrap your-name"><input type="text"
                                                                    name="your-name" defaultValue="" size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true" aria-invalid="false"
                                                                    placeholder="Your Name *" /></span></p>
                                                                <p><span className="wpcf7-form-control-wrap your-email"><input type="email"
                                                                    name="your-email" defaultValue="" size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                    aria-required="true" aria-invalid="false"
                                                                    placeholder="Email Address *" /></span></p>
                                                                <p><span className="wpcf7-form-control-wrap your-message"><textarea
                                                                    name="your-message" cols="40" rows="10"
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true" aria-invalid="false"
                                                                    placeholder="Your Message:"></textarea></span></p>
                                                                <p><button
                                                                    className="btn float-btn flat-btn color-bg wpcf7-form-control wpcf7-submit">Send
                                                                    Message</button></p>
                                                                <div className="wpcf7-response-output" aria-hidden="true"></div>
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
                                    <p>© Kotlis 2020 | All rights reserved.</p>
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