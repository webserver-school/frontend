import React, { Component } from 'react';
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Carusel.module.css'

function MyCarusel() {
    const [value, onChange] = useState(new Date());
    return (
    <div className={styles.center}>
        <div className={styles.content}>
            <h3>Image Carousel</h3>
        <div>
              <Carousel>
                  <div>
                      <img src="/img1.jpg" alt="image1"/>
                      <p className="legend">Coffe 1</p>
  
                  </div>
                  <div>
                      <img src="/img2.jpg" alt="image2" />
                      <p className="legend">Coffe 2</p>
  
                  </div>
                  <div>
                      <img src="/img3.jpg" alt="image3"/>
                      <p className="legend">Coffe 3</p>
  
                  </div>
                  <div>
                      <img src="/img4.jpg" alt="image4"/>
                      <p className="legend">Coffe 4</p>
  
                  </div>
                  <div>
                      <img src="/img5.jpg" alt="image5"/>
                      <p className="legend">Coffe 5</p>
  
                  </div>
              </Carousel>
            </div>
        </div>  
  </div>
  
  )
  }
  
  export default MyCarusel