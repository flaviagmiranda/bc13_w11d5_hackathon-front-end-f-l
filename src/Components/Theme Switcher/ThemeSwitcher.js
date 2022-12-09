import React from 'react'

export default function ThemeSwitcher({ colour, setColour }) {

  function changeThemeColour() {
    if (colour === 'light'){
      setColour('dark')
    } else if (colour === 'dark'){
      setColour('light')
    }
  }

  return (
    <button onClick={changeThemeColour}>ThemeSwitcher</button>
  )
}
