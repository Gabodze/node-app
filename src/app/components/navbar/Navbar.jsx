import React from "react";
import styles from './Navbar.module.css'
import Link from "next/link"


function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Portfolio",
    },
    {
      id: 3,
      title: "Blog",
    },
    {
      id: 4,
      title: "About",
    },
    {
      id: 5,
      title: "Contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: '/Dashboard'
    },
  ];

  return (
    <div className={styles.container}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;