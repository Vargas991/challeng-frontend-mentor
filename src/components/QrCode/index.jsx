import React from 'react'
import './styles.css'
import qr from '../../../public/images/image-qr-code.png'
export const QrCode = () => {
  return (
    <main class="main-container">
    <section class="card">
      <article class="card-img">
        <img src={'../images/image-qr-code.png'} alt="" />
      </article>
      <article class="card-info">
        <h1 class="card-info__title" >Improve your front-end skills by building projects</h1>
        <p class="card-info__text">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </article>
    </section>
  </main>
  )
}

