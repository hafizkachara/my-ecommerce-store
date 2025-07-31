import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    const menus = [
        {
            name: "Home",
            url: ""
        },
        {
            name: "About Us",
            url: "about_us"
        },
        {
            name: "Services",
            url: "services"
        },
        {
            name: "Blogs",
            url: "blogs"
        },
        {
            name: "Pages",
            url: "pages"
        },
        {
            name: "Contact",
            url: "contact"
        },
        {
            name: "Projects",
            url: "projects"
        },
    ]

    return (
        <>
            <header>
                <div className='header--section'>
                    <div className='container'>
                        <div className='main--header--content'>
                            <ul className='main--header-logo-image'>
                                <li className='list--item'>
                                    <a href='javascript:void(0)' className='link-aitem'>
                                        {/* <img src={Logo} /> */}
                                    </a>
                                </li>
                            </ul>
                            <ul className='d--flex-pro'>
                                <ul className='main--header-nav--items'>
                                    {menus.map((item) => <li><Link to={item.url}>{item.name}</Link></li>)}
                                </ul>
                                <ul className='main--inner--header-nav-items-media'>
                                    
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>  
            </header>
        </>
    )
}

export default Header
