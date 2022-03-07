import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className="content full-height  hidden-item no-mob-hidden">
        <div className="fw-carousel-wrap fsc-holder">
          <div className="fw-carousel  fs-gallery-wrap fl-wrap full-height lightgallery" data-mousecontrol="true"
            data-slider-speed="1400" data-slider-autoplay="false">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide hov_zoom">
                  <Image src="images/b2.jpg" alt="Some image" layout={'fill'} />
                  <Link href="images/b2.jpg">
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3><Link href="#"><a >Post title</a></Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide hov_zoom">
                  <Image src="images/background.jpg" alt="Some image" width={584} height={438} />
                  <Link href="images/background.jpg">
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3><Link href="#"><a >Post title</a></Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide hov_zoom">
                  <Image src="images/b2.jpg" alt="Some image" width={584} height={438} />
                  <Link href="images/b2.jpg">
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3><Link href="#"><a>Post title</a></Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide hov_zoom">
                  <Image src="images/background.jpg" width={584} height={438} alt="Some image" />
                  <Link href="images/background.jpg" >
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3>
                      <Link href="#"><a >Post title</a></Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide hov_zoom">
                  <Image src="images/b2.jpg" alt="Some image" width={584} height={438} />
                  <Link href="images/b2.jpg">
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3>
                      <Link href="#"><a>Post title</a></Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide hov_zoom">
                  <Image src="images/background.jpg" alt="Some image" width={584} height={438} />
                  <Link href="images/background.jpg">
                    <a className="box-media-zoom   popup-image">
                      <i className="fal fa-search"></i>
                    </a>
                  </Link>
                  <div className="thumb-info">
                    <h3>
                      <Link href="#"><a>Post title</a></Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum rem?
                      Fugiat voluptate aliquid fuga esse quam soluta perferendis corporis a vero,
                      ad delectus porro iure, repudiandae placeat ratione provident!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide swiper-link-wrap hov_zoom">
                  <Link href="#"><a className="swiper-link"><span>Hello world</span></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-counter_wrap">
          <div className="fw-carousel-counter"></div>
        </div>
        <div className="bottom-panel">
          <div className="bottom-panel-column bottom-panel-column_left">
            <div className="scroll-down-wrap">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
              <span>Scroll down or Swipe</span>
            </div>
            <div className="fs-controls_wrap">
              <div className="fw_cb fw-carousel-button-prev"><i className="fal fa-angle-left"></i></div>
              <div className="fw_cb fw-carousel-button-next"><i className="fal fa-angle-right"></i></div>
            </div>
          </div>
          <div className="bottom-panel-column bottom-panel-column_right">
            <div className="half-scrollbar">
              <div className="hs_init"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="share-wrapper">
        <div className="share-container fl-wrap  isShare"></div>
      </div>
    </>
  )
}

export default Home