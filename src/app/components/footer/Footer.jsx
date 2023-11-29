import React from "react"
import styles from './Footer.module.css';
import Image from 'next/image'



function Footer(){
    return (
       <div className={styles.container}> 
       {/*Hellogi */}
       {/*Hello */}
        <div>@all rights</div>
        <div className={styles.sotialNetworks}>
            <img src="/1.png"  className={styles.icon}
            width={24} 
            height={24}
            alt="Fb"
            />
            <img src="/2.png"  className={styles.icon}
            width={24} 
            height={24}
            alt="Fb"
            />
            {/* <img src="/3.png" className={styles.icon} 
            width={24} 
            height={24}
            alt="Fb"
            /> */}
            <img src="/3.png" className={styles.icon} 
            width={24} 
            height={24}
            alt="Fb"
            />
            <img src="/3.png" className={styles.icon} 
            width={24} 
            height={24}
            alt="Fb"
            />
          
            <img src="/3.png" className={styles.icon} 
            width={24} 
            height={24}
            alt="Fb"
            />
          

        </div>
       </div>
      );
}
export default Footer