import React, { useRef } from 'react'
import '../css/Contact.css'
function Contact() {
  const contactTitleRef = useRef(null)

  let copyTextIndex = 0
  let copyCharacterIndex = 0
  let interval1
  let infoTitle = 'КОНТАКТЫ'

  const addCopyText = (text) => {
    clearInterval(interval1)
    copyCharacterIndex = 0
    if (contactTitleRef.current) {
      contactTitleRef.current.textContent = ''
    }

    interval1 = setInterval(() => {
      copyCharacterIndex++
      if (contactTitleRef.current) {
        contactTitleRef.current.textContent = text.slice(0, copyCharacterIndex)
      }
      if (copyCharacterIndex === text.length) {
        clearInterval(interval1)
      }
    }, 90)
  }

  const CopyLink = (value) => {
    const email = 'sako.delovoi@gmail.com'
    const telegram = '@Fal1Angel'
    const phone = '+77053367291'
    let textToCopy = ''

    if (value === 'Email') {
      navigator.clipboard.writeText(email)
      textToCopy = email
    } else if (value === 'Telegram') {
      navigator.clipboard.writeText(telegram)
      textToCopy = telegram
    } else if (value === 'Phone') {
      navigator.clipboard.writeText(phone)
      textToCopy = phone
    }

    addCopyText(textToCopy)
    if (contactTitleRef.current) {
      contactTitleRef.current.classList.replace(
        'contact-info-title',
        'contact-info-title-change'
      )
    }

    // setTimeout(() => {
    //   if (contactTitleRef.current) {
    //     contactTitleRef.current.classList.replace(
    //       'contact-info-title-change',
    //       'contact-info-title'
    //     )
    //     infoTitle = 'КОНТАКТЫ'
    //   }
    // }, 3000)
  }

  return (
    <>
      <h2
        className="contact-info-title"
        ref={contactTitleRef}
      >
        {infoTitle}
      </h2>

      <div className="contact-info-div">
        <div
          className="contact-info-link"
          onClick={() => CopyLink('Email')}
        >
          Email
        </div>
        <div
          className="contact-info-link"
          onClick={() => CopyLink('Telegram')}
        >
          Telegram
        </div>
        <div
          className="contact-info-link"
          onClick={() => CopyLink('Phone')}
        >
          Phone
        </div>
      </div>
    </>
  )
}

export default Contact
