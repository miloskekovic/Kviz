import { createContext } from 'react'

export const Colors = {
  green: '#00c914',
  red: '#fd1c00',
  pink: '#BC60C5',
  purple: '#5D63F8',
  orange: '#F69332',
  white: '#FFFFFF',
  offWhite: '#F5F5F8',
  transparent: 'transparent',
  offBlack: '#21212C',
  blackMetal: '#16161f',
  darkGrey: '#393948',
  darkGrey2: '#2B2B38',
  grey: '#959DAD',
  lightGrey: '#454F63',
  veryLightGrey: '#a2a2a3',
  blueGrey: '#384152',
  yellow: '#FDFF5F',
  blue: '#3883fc',
}

export const DarkTheme = {
  mode: 'dark',
  selected: Colors.green,
  background: Colors.offBlack,
  darkBackground: Colors.blackMetal,
  secondaryBackground: Colors.darkGrey,
  text: Colors.white,
  subtext: Colors.lightGrey,
  highlight: Colors.blue,
  shadow: Colors.transparent,
  backgroundReverse: Colors.offWhite,
  line: Colors.lightGrey,
  highlight2: Colors.orange,
}

export const LightTheme = {
  mode: 'light',
  selected: Colors.green,
  background: Colors.offWhite,
  secondaryBackground: Colors.white,
  text: Colors.blueGrey,
  subtext: Colors.grey,
  highlight: Colors.purple,
  shadow: Colors.lightGrey,
  backgroundReverse: Colors.offBlack,
  line: Colors.blueGrey,
  highlight2: Colors.blue,
}

export const ThemeContext = createContext(null)
