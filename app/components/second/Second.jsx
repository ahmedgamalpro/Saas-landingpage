import React from 'react'
import './second.css'
import Image from 'next/image';
import {Third} from '@/app/image'
const Second = () => {
  return (
    <div className='black-section'>
      <section className="third-section">
      <div className="container">
                <div className="m-col">
                    <div className="col">
                        <div className="content">
                            <p className="top">Values</p>
                            <h3>Our Commitment</h3>
                            <p className="bottom">Korba is committed to helping you cultivate greater calm, balance, and well-being in your life.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <Image src={Third} className="bg"></Image>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className="forth-section">
        <div className="container">
          <div className="Content-Wrapper">
              <div className="content">
                  
                  <h3>Ready to start? </h3>
                  <p className="bottom">
                    Ready to start your journey towards a more calm and centered you? Download Korba today and experience the power of mindfulness!
                  </p>
                  <a href='/'>Try it for free</a>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Second