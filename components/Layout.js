import Script from 'next/script';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>

            <div id="main" style={{ opacity: 1 }}>
                <Header />
                <div id="wrapper">
                    {children}
                </div>
                <Sidebar />
                <div className="element">
                    <div className="element-item"></div>
                </div>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
                    <script src="/js/modernizr-min.js"></script>
                    <script src="/js/easing-min.js"></script>
                    <script src="/js/lightgallery-min.js"></script>
                    <script src="/js/isotope-min.js"></script>
                    <script src="/js/packery-min.js"></script>
                    <script src="/js/share-min.js"></script>
                    <script src="/js/sliding-menu-min.js"></script>
                    <script src="/js/tweenmax-min.js"></script>
                    <script src="/js/swiper-min.js"></script>
                    <script src="/js/tweenmax-min.js"></script>
                    <script src="/js/utility-min.js"></script>
                    <script src="/js/map-min.js"></script>
                    <script src="/js/map-script.js"></script>
                    <script src="/js/dark-scripts.js"></script>
                </Head>
            </div>
        </>
    )
}

export default Layout;