import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Logo , Facebook,Instagram, Linkedin, Twitter} from '../../image/index'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        
        <div className="container">
            <div className="column">
                <div className="small-column">
                    <div className="col">
                        <Image src={Logo}
                            
                            alt="Logo"
                        ></Image>
                    </div>
                    <div className="col">
                        <div className="content">
                            <p>Company</p>
                            <div className="footer">
                                <Link href='#'>About</Link>
                                <Link href='#'>Careers</Link>
                                <Link href='#'>Press</Link>
                                <Link href='#'>Blog</Link>
                                <Link href='#'>Korba Science</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <p>Offers</p>
                            <div className="footer">
                                <Link href='#'>Buy a Gift</Link>
                                <Link href='#'>Redeem a Gift</Link>
                                <Link href='#'>Family Plan</Link>
                                <Link href='#'>Korba Health</Link>
                                <Link href='#'>Korba Business</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <p>Help</p>
                            <div className="footer">
                                <Link href='#'>FAQ</Link>
                                <Link href='#'>Contact Us</Link>
                                <Link href='#'>Terms</Link>
                                <Link href='#'>Cookies</Link>
                                <Link href='#'>Privacy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colm">
                    <div className="cta" >
                        <p>Subscribe</p>
                        <p>Join our newsletter to stay up to date on features and releases.</p>
                    </div>
                    <form >
                        <input type="text" placeholder='Enter your email...'/>
                        <button className="btn footer-btn">Subscribe</button>
                    </form>
                    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2023 Korba. All rights reserved.</p>
                <div className="links">
                    <Link href='#'><Image src={Facebook}></Image></Link>
                    <Link href='#'><Image src={Instagram}></Image></Link>
                    <Link href='#'><Image src={Twitter}></Image></Link>
                    <Link href='#'><Image src={Linkedin}></Image></Link>
                    
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer