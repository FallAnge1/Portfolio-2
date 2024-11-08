import React, { useEffect, useState } from 'react'
import '../css/Hero.css'

function Hero() {
  const names = ['Сагынгали.']
  const [text, setText] = useState('')
  const [nameIndex, setNameIndex] = useState(0)
  const [isAdding, setIsAdding] = useState(true) // Определяет, добавляем или удаляем текст
  const speed = isAdding ? 300 : 100 // Скорость: медленнее добавление, быстрее удаление

  useEffect(() => {
    const handleTextAnimation = () => {
      setText((currentText) => {
        const currentName = names[nameIndex]

        // Логика добавления текста
        if (isAdding) {
          const updatedText = currentName.slice(0, currentText.length + 1)
          if (updatedText === currentName) {
            // Если полностью добавили имя, ждем и начинаем удаление
            setTimeout(() => setIsAdding(false), 1000)
          }
          return updatedText
        }

        // Логика удаления текста
        else {
          const updatedText = currentName.slice(0, currentText.length - 1)
          if (updatedText === '') {
            // Если полностью удалили, переключаем имя и начинаем добавлять
            setIsAdding(true)
            setNameIndex((prevIndex) => (prevIndex + 1) % names.length)
          }
          return updatedText
        }
      })
    }

    const interval = setInterval(handleTextAnimation, speed)

    return () => clearInterval(interval) // Очищаем интервал при размонтировании компонента
  }, [isAdding, nameIndex]) // Повторное выполнение при изменении флагов

  return (
    <section className="hero-section">
      <h1 className="privet">Привет!</h1>
      <div className="welcome-text2">
        <h1 className="hero-text">Меня зовут</h1>
        <div className="names-div">
          <span className="names">{text}</span>
          <div className="text-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
