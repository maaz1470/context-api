import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter'
import React from 'react'
import Section from './components/Section'
import ThemeContext from './components/contexts/ThemeContext'
export default class App extends React.Component{
  state = {
    theme: 'dark'
  }
  render() {
    const {theme} = this.state
    return (
      <>
        <ThemeContext.Provider value={{theme: theme}}><Section /></ThemeContext.Provider>
      </>
    )
  }
}