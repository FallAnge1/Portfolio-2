import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import '../css/Second.css'
import Themes from './Themes'
import Swiper from './Swiper_photo'
import Contact from './Contact'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Projects'
function Second() {
  const [content, setContent] = useState('Home')

  // Функция для обработки нажатий на ссылки
  const ContentChange = (newContent) => {
    setContent(newContent)
  }

  //  -------------------------------------ABOUT SLIDER

  const skillsSlides = [
    { src: '/public/img/figma.png', text: 'Figma [Photoshop]' },
    { src: '/public/img/git.png', text: 'Git / GitHub' },
    { src: '/public/img/sass.png', text: 'Sass' },
    { src: '/public/img/wordpress.png', text: 'WordPress ' },
    { src: '/public/img/shadcn.png', text: 'Shad.cn' },
    { src: '/public/img/mobile.png', text: 'Адаптивная верстка' },
  ]

  const languageSlides = [{ src: '/public/img/js.png', text: 'JavaScript' }]

  const dataBaseSlides = [
    { src: '/public/img/db.png', text: 'MySQL ' },
    { src: '/public/img/db.png', text: 'PostgreSQL  ' },
  ]
  const frameworkSlides = [
    { src: '/public/img/react.png', text: 'React ' },
    { src: '/public/img/tailwind.png', text: 'TailWindCSS  ' },
    { src: '/public/img/nextjs.png', text: 'Next.JS ' },
  ]

  // ------------------------------------- Project langes

  const NFTLang = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Swiper' },
  ]
  const SakoCars = [
    { name: 'JavaScript' },
    { name: 'Swiper' },
    { name: 'Tailwind CSS' },
  ]

  // --------------------------------------GSAP ANIMATION

  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    '.Sidebar',
    { x: -400, opacity: 0 },
    {
      scrollTrigger: {
        trigger: '.Sidebar',
        end: '20px',
        scrub: true,
      },
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: 'power4.out',
    }
  )

  useEffect(() => {
    if (content === 'About-graphic') {
      gsap.from('.skill', {
        scale: 0,
        duration: 2,
        stagger: 0.2,
        ease: 'power4.out',
      })
    }
  }, [content])
  useEffect(() => {
    if (content === 'Choice-about') {
      gsap.from('.about-choice-graphic', {
        filter: 'blur(20px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }
  }, [content])
  useEffect(() => {
    if (content === 'Projects') {
      gsap.from('.card-section', {
        filter: 'blur(20px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }
  }, [content])
  useEffect(() => {
    if (content === 'Contact') {
      gsap.from('.contact-info', {
        filter: 'blur(20px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }
  }, [content])

  return (
    <section
      className="second"
      id="info"
    >
      <div className="Sidebar">
        <img
          src="/public/icon/favicon.ico"
          alt="Logo"
          width={'80px'}
        />
        <h1 className="my-name">Касым Сагынгали</h1>
        <ul className="sidebar-links links">
          <a href="#">
            <li className="sidebar-link link">Home</li>
          </a>
          <a
            href="#info"
            onClick={() => ContentChange('Choice-about')}
          >
            <li className="sidebar-link link">About</li>
          </a>
          <a
            href="#info"
            onClick={() => ContentChange('Projects')}
          >
            <li className="sidebar-link link">Projects</li>
          </a>
          <a
            href="#info"
            onClick={() => ContentChange('Contact')}
          >
            <li className="sidebar-link link">Contact</li>
          </a>
        </ul>
        <Themes />
      </div>

      <div className="right-part">
        {content === 'About-text' && (
          <div className="about-info">
            <ul className="data-left data">
              <li className="info">Навыки:</li>
              <li className="info">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Языки:
              </li>
            </ul>
            <ul className="data-right data">
              <ul className="data-list">
                <div className="info-list">
                  <img
                    src="/public/img/figma.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// Figma [Photoshop]</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/git.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info"> // Git / GitHub</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/sass.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info"> // Sass</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/wordpress.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info"> // WordPress</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/shadcn.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info"> // Shad.cn</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/mobile.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// Адаптивная верстка</li>
                </div>
              </ul>
              <ul className="data-list">
                <br />
                <div className="info-list">
                  <img
                    src="/public/img/js.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// JavaScript</li>
                </div>
              </ul>
            </ul>
            <ul className="data-left data">
              <li className="info">База данных: </li>
              <li className="info">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Фреймворки:
              </li>
            </ul>
            <ul className="data-right data">
              <ul className="data-list">
                <div className="info-list">
                  <img
                    src="/public/img/db.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// MySQL</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/db.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// PostgreSQL </li>
                </div>
              </ul>

              <ul className="data-list">
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="info-list">
                  <img
                    src="/public/img/react.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// React</li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/tailwind.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// TailWindCSS </li>
                </div>
                <div className="info-list">
                  <img
                    src="/public/img/nextjs.png"
                    alt=""
                    width={'25px'}
                  />
                  <li className="info">// Next.JS </li>
                </div>
              </ul>
            </ul>
          </div>
        )}
        {content === 'About-graphic' && (
          <div className="skills-div">
            <div className="skill">
              <h1>Навыки</h1> <Swiper slides={skillsSlides} />
            </div>
            <div className="skill">
              <h1>Языки</h1> <Swiper slides={languageSlides} />
            </div>
            <div className="skill">
              <h1>База данных</h1> <Swiper slides={dataBaseSlides} />
            </div>
            <div className="skill">
              <h1>Фреймворки</h1> <Swiper slides={frameworkSlides} />
            </div>
          </div>
        )}
        {content === 'Choice-about' && (
          <div className="choice-about">
            <a
              href="#info"
              onClick={() => {
                ContentChange('About-graphic')
              }}
              className="about-choice-graphic"
            >
              <button className="choice-about-btn">Графический вариант</button>
            </a>
            <a
              href="#info"
              onClick={() => ContentChange('About-text')}
              className="about-choice-graphic"
            >
              <button className="choice-about-btn">Текстовый вариант</button>
            </a>
          </div>
        )}
        {content === 'Projects' && (
          <div className="card-section">
            <Projects
              img={'NFT_GO-site-landpage.webp'}
              name={'NFT MARKET'}
              desc={
                'Lorem akjsd sajdnsad saj,dnaskjndas asdjnsadkj asjkdnkjasnd'
              }
              langes={NFTLang}
            />
            <Projects
              img={'Sako_cars-Delorian.webp'}
              name={'SAKO CARS'}
              desc={
                'Lorem akjsd sajdnsad saj,dnaskjndas asdjnsadkj asjkdnkjasnd'
              }
              langes={SakoCars}
            />
            <Projects
              img={'Масла-Очистки-site-landPage.webp'}
              name={'Масла Очистки'}
              desc={
                'Lorem akjsd sajdnsad saj,dnaskjndas asdjnsadkj asjkdnkjasnd'
              }
              langes={NFTLang}
            />
            <Projects
              img={'Ресторан-page-1.webp'}
              name={'Сеть Ресторанов'}
              desc={
                'Lorem akjsd sajdnsad saj,dnaskjndas asdjnsadkj asjkdnkjasnd'
              }
              langes={NFTLang}
            />
            <Projects
              img={'Sako_cars-Mercedes.webp'}
              name={'SAKO CARS'}
              desc={
                'Lorem akjsd sajdnsad saj,dnaskjndas asdjnsadkj asjkdnkjasnd'
              }
              langes={NFTLang}
            />
          </div>
        )}
        {content === 'Contact' && (
          <div className="contact-info">
            <Contact />
          </div>
        )}
      </div>
    </section>
  )
}

export default Second
