import React from 'react'
import './first.css'
import Image from 'next/image';
import { Place } from '@/app/image';
const First = () => {
  return (
    <div className='white-section'>
        <section className='first-section'>
            <div className="container">
                <div className="Content-Wrapper">
                    <div className="content">
                        <p className="top">Feature</p>
                        <h3>FlowStream</h3>
                        <p className="bottom">
                            "FlowStream," which is a collection of beautiful natural soundscapes 
                            that can be played in the background to help you de-stress and 
                            concentrate. You can choose from a range of different soundscapes,
                            such as the soothing sounds of ocean waves or the peaceful rustling 
                            of leaves in a forest.
                            </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='second-section'>
            <div className="container">
                <div className="m-col">
                    <div className="col">
                        <div className="img">
                            <Image src={Place} className="bg"></Image>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <p className="top">Values</p>
                            <h3>Our Mission</h3>
                            <p className="bottom">At Korba, we believe that achieving mindfulness and tranquility should be simple and accessible to everyone. Try our platform today and experience the benefits of a more peaceful and centered life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default First