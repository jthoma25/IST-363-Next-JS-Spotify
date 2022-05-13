import styles from './nav.module.scss'

import Link from 'next/Link'

import classNames from 'classnames/bind'


const navLinks = [
    {
        label: "Premium",
        slug: "premium"
    },
    {
        label: "Support",
        slug: "support"
    },
    {
        label: "Download",
        slug: "download"
    },
    {
        label: "Account",
        slug: "account"
    },
    {
        label: "Logout",
        slug: "logout"
    }
];


let cx = classNames.bind(styles)

const Nav = (mobile, flexDirection) => {
    let navClasses = cx({
        nav : true,
        mbile : mobile
    });
    let listClasses = cx({
        list : true,
        [`flex-direction-${flexDirection}`] : flexDirection
    });
    return <nav className={navClasses}>
        <ul className={listClasses}>
            {navLinks.map((navLink, index) => {
                return <li key={index} className={styles.listItem}>
                    <Link href={`/${navLink.slug}`} >
                        <a className={styles.link}>
                        {navLink.label} 
                        </a>
                    </Link>
                    
                </li>
            })}
        </ul>
    </nav>
}

export default Nav;