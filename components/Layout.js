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
                <script async src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" />
                <script async src="/js/modernizr-min.js" />
                <script async src="/js/easing-min.js" />
                <script async src="/js/lightgallery-min.js"/>
                <script async src="/js/isotope-min.js" />
                <script async src="/js/packery-min.js" />
                <script async src="/js/share-min.js" />
                <script async src="/js/sliding-menu-min.js" />
                <script async src="/js/tweenmax-min.js" />
                <script async src="/js/swiper-min.js" />
                <script async src="/js/tweenmax-min.js" />
                <script async src="/js/utility-min.js" />
                <script async src="/js/map-min.js" />
                <script async src="/js/map-script.js" />
                <script async src="/js/dark-scripts.js" />
            </div>
        </>
    )
}

export default Layout;