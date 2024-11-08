import React, { useCallback } from 'react'
import '../css/Themes.css'

function ThemeSwitcher() {
  // Функция для смены темы
  const toggleTheme = useCallback((theme) => {
    const themes = ['barbie-theme', 'green-theme', 'red-theme', 'blue-theme']
    if (document.body.classList.contains(theme)) {
      document.body.classList.remove(theme)
    } else {
      document.body.classList.remove(...themes)
      document.body.classList.add(theme)
    }
  }, [])

  return (
    <div className="themes">
      <div
        className="theme blue"
        onClick={() => toggleTheme('blue-theme')}
      ></div>
      <div
        className="theme red"
        onClick={() => toggleTheme('red-theme')}
      ></div>
      <div
        className="theme green"
        onClick={() => toggleTheme('green-theme')}
      ></div>
      <div
        className="theme barbie"
        onClick={() => toggleTheme('barbie-theme')}
      ></div>
    </div>
  )
}

export default ThemeSwitcher
