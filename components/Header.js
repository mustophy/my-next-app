import Link from "next/link";

const Header = () => {
    return (
        <header className="main-header">
            <Link href="/">
            <a className="logo-holder text-logo">
                <h2>ABU RAZEETH</h2>
            </a></Link>
            <div className="search-button"><i className="far fa-search"></i></div>
            <div className="search-input">
                <form action="#">
                    <input name="s" id="se" type="text" className="search" placeholder="Search" />
                </form>
            </div>
            <div className="sb-button"></div>
            <div className="share-btn showshare"><i className="fal fa-megaphone"></i><span>
                    Share Kotlis
                </span></div>
            <div className="nav-button-wrap">
                <div className="nav-button"><span></span><span></span><span></span></div>
            </div>

            <div className="nav-holder main-menu">
                <nav>
                    <ul>
                        <li id="menu-item-315"
                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-315">
                            <Link title="" href="/">Home</Link>
                        </li>
                        <li id="menu-item-382"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"><Link
                                title="I" href="/about/">About</Link></li>
                        <li id="menu-item-316"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-316">
                            <Link title="I" href="/portfolio">Portfolio</Link>
                        </li>
                        <li id="menu-item-480"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-480">
                            <Link href="#">Video</Link>
                        </li>
                        <li id="menu-item-525"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-525">
                            <Link href="#">Shop</Link>
                        </li>
                        <li id="menu-item-383"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-383"><Link
                                title="I" href="#">Contacts</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header