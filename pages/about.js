import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="content">
                <div className="column-image">

                    <div className="bg" data-bg="images/b2.jpg"
                        style={{ backgroundImage: "url('./images/b2.jpg')"}}>
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


                                <li><a href="#sec1" className="act-scrlink">About</a></li>


                                <li><a href="#sec2">Skills</a></li>


                                <li><a href="#sec3">Services</a></li>


                                <li><a href="#sec4">Clients</a></li>

                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                    <section id="sec1">
                        <div className="container small-container   ">
                            <div className="section-title fl-wrap">
                                <h3> My Little Story</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 01.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-text  " >
                                                    <p>Cras mattis iudicium purus sit amet fermentum at nos hinc
                                                        posthac, sitientis piros afros. Lorem ipsum dolor sit amet,
                                                        consectetur adipisici elit, petierunt uti sibi concilium totius
                                                        Galliae in diem sed eius mod tempor incidunt ut labore et dolore
                                                        magna aliqua. Pellentesque habitant morbi tristique senectus et
                                                        netus piros labore et dolore magna.<br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                                                        Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                                                        suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                                                        Curabitur convallis fringilla diam sed aliquam. Sed tempor
                                                        iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                                                        consequat purus viverra.</p>
                                                    <p>Praesent nec leo venenatis elit semper aliquet id ac enim.
                                                        Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                                                        Integer dictum, diam vitae blandit accumsan, dolor odio tempus
                                                        arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit. Morbi varius lacinia
                                                        vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex
                                                        vehicula ac. In malesuada quis turpis vel viverra.</p>
                                                </div>
                                                <div className="sec-counter ">
                                                    <div className="inline-facts-holder fl-wrap">
                                                        <div className="inline-facts">
                                                            <div className="milestone-counter">
                                                                <div className="stats animaper">
                                                                    <div className="num" data-content="461" data-num="461">
                                                                        461</div>
                                                                </div>
                                                            </div>
                                                            <h6>Finished projects</h6>
                                                        </div>
                                                        <div className="inline-facts">
                                                            <div className="milestone-counter">
                                                                <div className="stats animaper">
                                                                    <div className="num" data-content="354" data-num="354">
                                                                        354</div>
                                                                </div>
                                                            </div>
                                                            <h6>Working projects</h6>
                                                        </div>
                                                        <div className="inline-facts">
                                                            <div className="milestone-counter">
                                                                <div className="stats animaper">
                                                                    <div className="num" data-content="168" data-num="168">
                                                                        168</div>
                                                                </div>
                                                            </div>
                                                            <h6>Happy customers</h6>
                                                        </div>
                                                        <div className="inline-facts">
                                                            <div className="milestone-counter">
                                                                <div className="stats animaper">
                                                                    <div className="num" data-content="222" data-num="222">
                                                                        222</div>
                                                                </div>
                                                            </div>
                                                            <h6>Working hours</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sec-button" ><a className=" btn fl-btn" href="#">My
                                                        Portfolio</a></div>
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
                        <div className="container small-container   ">
                            <div className="section-title fl-wrap">
                                <h3> Skills and Attainments</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 02.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-skills">
                                                    <div className="skillbar-box animaper">
                                                        <div className="custom-skillbar-title"><span>Photoshop</span></div>
                                                        <div className="skill-bar-percent">95%</div>
                                                        <div className="skillbar-bg" data-percent="95%">
                                                            <div className="custom-skillbar"></div>
                                                        </div>
                                                        <div className="custom-skillbar-title"><span>Illustrator</span>
                                                        </div>
                                                        <div className="skill-bar-percent">65%</div>
                                                        <div className="skillbar-bg" data-percent="65%">
                                                            <div className="custom-skillbar"></div>
                                                        </div>
                                                        <div className="custom-skillbar-title"><span>3D MAX</span></div>
                                                        <div className="skill-bar-percent">75%</div>
                                                        <div className="skillbar-bg" data-percent="75%">
                                                            <div className="custom-skillbar"></div>
                                                        </div>
                                                        <div className="custom-skillbar-title"><span>Google ScketchUp</span>
                                                        </div>
                                                        <div className="skill-bar-percent">90%</div>
                                                        <div className="skillbar-bg" data-percent="90%">
                                                            <div className="custom-skillbar"></div>
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
                    <section id="sec3">
                        <div className="container small-container   ">
                            <div className="section-title fl-wrap">
                                <h3> Services and prices</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 03.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-services">
                                                    <div className="serv-wrap fl-wrap">
                                                        <div className="serv-item">
                                                            <div className="serv-media"><img
                                                                    src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/1.jpg"
                                                                    alt=""/></div>
                                                            <div className="serv-text">
                                                                <h4><a href="#">Wedding Photography</a></h4>
                                                                <p>Sed blandit, dolor id aliquam vestibulum, nibh elit
                                                                    imperdiet turpis, quis molestie quam erat vel nisi.
                                                                </p>
                                                                <ul>
                                                                    <li><a href="#">Portraits</a></li>
                                                                    <li><a href="#">Weddings</a></li>
                                                                    <li><a href="#">Commercials</a></li>
                                                                </ul>
                                                                <div className="serv-price">Price : <span> $250-$1200</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="serv-item">
                                                            <div className="serv-media"><img
                                                                    src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/2.jpg"
                                                                    alt=""/></div>
                                                            <div className="serv-text">
                                                                <h4><a href="#">Commercial Photography</a></h4>
                                                                <p>Sed blandit, dolor id aliquam vestibulum, nibh elit
                                                                    imperdiet turpis, quis molestie quam erat vel nisi.
                                                                </p>
                                                                <ul>
                                                                    <li><a href="#">Filming</a></li>
                                                                    <li><a href="#">Montage</a></li>
                                                                    <li><a href="#">Slow motion</a></li>
                                                                </ul>
                                                                <div className="serv-price">Price : <span> $350-$900</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sec-text  " >
                                                    <p>Praesent nec leo venenatis elit semper aliquet id ac enim.
                                                        Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                                                        Integer dictum, diam vitae blandit accumsan, dolor odio tempus
                                                        arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit. Morbi varius lacinia
                                                        vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex
                                                        vehicula ac. In malesuada quis turpis vel viverra.</p>
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
                    <section id="sec4">
                        <div className="container small-container   ">
                            <div className="section-title fl-wrap">
                                <h3> Clients and Testimonilas</h3>
                                <h4> Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
                                <div className="section-number"> 04.</div>
                            </div>
                            <div className="column-wrapper_item fl-wrap">
                                <div className="column-wrapper_text fl-wrap">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="sec-testi ">
                                                    <div className="testilider fl-wrap" data-effects="slide">
                                                        <div className="swiper-container swiper-container-horizontal"
                                                            style={{ cursor: 'grab' }}>
                                                            <div className="swiper-wrapper"
                                                                style={{ transitionDuration: '0ms', transform: "translate3d('-593px', '0px', '0px')" }}>
                                                                <div className="swiper-slide swiper-slide-duplicate"
                                                                    data-swiper-slide-index="2"
                                                                    style={{ width: '276.5px', marginRight: '20px' }}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/3-2.jpg"
                                                                                alt="Gary Trust"/></div>
                                                                        <h3>Gary Trust</h3>
                                                                        <p>All the Lorem Ipsum generators on the
                                                                            Internet tend to repeat predefined chunks as
                                                                            necessary, making this the first true
                                                                            generator on the Internet. It uses a
                                                                            dictionary of over </p><a href="#"
                                                                            className="teti-link" target="_self">Via
                                                                            Myspace</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                                                    data-swiper-slide-index="3"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/4.jpg"
                                                                                alt="Centa Simpson" /></div>
                                                                        <h3>Centa Simpson</h3>
                                                                        <p>Vestibulum orci felis, ullamcorper non
                                                                            condimentum non, ultrices ac nunc. Mauris
                                                                            non ligula suscipit, vulputate mi accumsan,
                                                                            dapibus felis. Nullam sed sapien dui. Nulla
                                                                            auctor sit amet sem non porta. </p><a
                                                                            href="#" className="teti-link"
                                                                            target="_self">Via Facebook</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-active"
                                                                    data-swiper-slide-index="0"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/1-2.jpg"
                                                                                alt="Liza Mirovsky"/></div>
                                                                        <h3>Liza Mirovsky</h3>
                                                                        <p>All the Lorem Ipsum generators on the
                                                                            Internet tend to repeat predefined chunks as
                                                                            necessary, making this the first true
                                                                            generator on the Internet. It uses a
                                                                            dictionary of over </p><a href="#"
                                                                            className="teti-link" target="_self">Via
                                                                            Twitter</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-next"
                                                                    data-swiper-slide-index="1"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/2-1.jpg"
                                                                                alt="Andy Smith" /></div>
                                                                        <h3>Andy Smith</h3>
                                                                        <p>Vestibulum orci felis, ullamcorper non
                                                                            condimentum non, ultrices ac nunc. Mauris
                                                                            non ligula suscipit, vulputate mi accumsan,
                                                                            dapibus felis. Nullam sed sapien dui. Nulla
                                                                            auctor sit amet sem non porta. </p><a
                                                                            href="#" className="teti-link"
                                                                            target="_self">Via Facebook</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide" data-swiper-slide-index="2"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/3-2.jpg"
                                                                                alt="Gary Trust"/></div>
                                                                        <h3>Gary Trust</h3>
                                                                        <p>All the Lorem Ipsum generators on the
                                                                            Internet tend to repeat predefined chunks as
                                                                            necessary, making this the first true
                                                                            generator on the Internet. It uses a
                                                                            dictionary of over </p><a href="#"
                                                                            className="teti-link" target="_self">Via
                                                                            Myspace</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-duplicate-prev"
                                                                    data-swiper-slide-index="3"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/4.jpg"
                                                                                alt="Centa Simpson"/></div>
                                                                        <h3>Centa Simpson</h3>
                                                                        <p>Vestibulum orci felis, ullamcorper non
                                                                            condimentum non, ultrices ac nunc. Mauris
                                                                            non ligula suscipit, vulputate mi accumsan,
                                                                            dapibus felis. Nullam sed sapien dui. Nulla
                                                                            auctor sit amet sem non porta. </p><a
                                                                            href="#" className="teti-link"
                                                                            target="_self">Via Facebook</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                                    data-swiper-slide-index="0"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/1-2.jpg"
                                                                                alt="Liza Mirovsky" /></div>
                                                                        <h3>Liza Mirovsky</h3>
                                                                        <p>All the Lorem Ipsum generators on the
                                                                            Internet tend to repeat predefined chunks as
                                                                            necessary, making this the first true
                                                                            generator on the Internet. It uses a
                                                                            dictionary of over </p><a href="#"
                                                                            className="teti-link" target="_self">Via
                                                                            Twitter</a>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                                                    data-swiper-slide-index="1"
                                                                    style={{ width: '276.5px', marginRight: '20px'}}>
                                                                    <div className="testi-item fl-wrap">
                                                                        <div className="testi-avatar"><img
                                                                                src="https://webredox.net/demo/wp/kotlis/dark/wp-content/uploads/2019/03/2-1.jpg"
                                                                                alt="Andy Smith" /></div>
                                                                        <h3>Andy Smith</h3>
                                                                        <p>Vestibulum orci felis, ullamcorper non
                                                                            condimentum non, ultrices ac nunc. Mauris
                                                                            non ligula suscipit, vulputate mi accumsan,
                                                                            dapibus felis. Nullam sed sapien dui. Nulla
                                                                            auctor sit amet sem non porta. </p><a
                                                                            href="#" className="teti-link"
                                                                            target="_self">Via Facebook</a>
                                                                    </div>
                                                                </div>
                                                            </div><span className="swiper-notification"
                                                                aria-live="assertive" aria-atomic="true"></span>
                                                        </div>
                                                    </div>
                                                    <div className="testilider-controls">
                                                        <div className="ss-slider-btn ss-slider-prev color-bg" tabIndex="0"
                                                            role="button" aria-label="Previous slide"><i
                                                                className="fal fa-angle-left"></i></div>
                                                        <div className="ss-slider-btn ss-slider-next color-bg" tabIndex="0"
                                                            role="button" aria-label="Next slide"><i
                                                                className="fal fa-angle-right"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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

export default About