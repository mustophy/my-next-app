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
                <script defer src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/modernizr-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/easing-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/isotope-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/packery-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/share-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/sliding-menu-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/tweenmax-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/swiper-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/tweenmax-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/utility-min.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/map-script.js" />
                <script defer src="https://masai.fra1.cdn.digitaloceanspaces.com/next-app/js/dark-scripts.js" />
            </div>
        </>
    )
}

export default Layout;