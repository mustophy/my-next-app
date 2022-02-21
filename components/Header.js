const Header = () => {
    return (
        <header className="main-header">
            <a className="logo-holder text-logo" href="#">
                <h2>ABU RAZEETH</h2>
            </a>
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
                            <a title="" href="#">Home</a>
                        </li>
                        <li id="menu-item-382"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"><a
                                title="I" href="https://webredox.net/demo/wp/kotlis/dark/about/">About</a></li>
                        <li id="menu-item-316"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-316">
                            <a title="I" href="#">Portfolio</a>
                        </li>
                        <li id="menu-item-480"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-480">
                            <a href="#">Video</a>
                        </li>
                        <li id="menu-item-525"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-525">
                            <a href="#">Shop</a>
                        </li>
                        <li id="menu-item-383"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-383"><a
                                title="I" href="https://webredox.net/demo/wp/kotlis/dark/contacts/">Contacts</a>
                        </li>
                        <li id="menu-item-317"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-317">
                            <a title="I" href="#">News</a>
                        </li>
                        <li id="menu-item-355"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355">
                            <a title="I" href="#">Pages</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header