"use client" ;
import Logo from '../../image/Logo.svg';
import './navbar.css'
import Image from 'next/image';
import Link from 'next/link';
import {HiXMark, HiOutlineBars3} from 'react-icons/hi2'
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <header>
                <div className="logo">
                    <Image src={Logo} />
                </div>
                {
                    open
                    ?<HiXMark id="close" onClick={()=> setOpen(false)}/>
                    : <HiOutlineBars3 id="open" onClick={()=> setOpen(true)}/>
                }
                
                    {open && (

                            <div className={`small-nav scale-up-center ${open? '' : 'scale-down-center'}`}>
                                <ul>
                                    <li>
                                        <Link href='#' className='link'>Features</Link>
                                    </li>
                                    <li>
                                        <Link href='#pricing' className='link'>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href='#blog' className='link'>Blog</Link>
                                    </li>
                                    <li>
                                        <Link href='#company' className='link'>Company</Link>
                                    </li>
                                </ul>
                                <button className="btn nav-btn">View app</button>
                            </div>
                        )
                    }
                    
                <div className="large-nav">
                    <ul>
                        <li>
                            <Link href='#' className='link'>Features</Link>
                        </li>
                        <li>
                            <Link href='#pricing' className='link'>Pricing</Link>
                        </li>
                        <li>
                            <Link href='#blog' className='link'>Blog</Link>
                        </li>
                        <li>
                            <Link href='#company' className='link'>Company</Link>
                        </li>
                    </ul>
                    <button className="btn nav-btn">View app</button>
                </div>
            </header>
        </>
    );
}



export default Navbar;