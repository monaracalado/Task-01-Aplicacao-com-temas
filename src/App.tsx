import {ThemeProvider} from 'styled-components'
import { houseThemes } from './styles/themes'
import { GlobalStyle } from './styles/global'
import { AppWrapper } from './styles/App'
import HouseButton from './components/Button/Button'
import { useState } from 'react'

function App() {
  
  const [theme, setTheme] = useState(houseThemes.defaultTheme);

  const handleHouseButtonClick = (houseName: keyof typeof houseThemes) => {
    const houseTheme = houseThemes[houseName];
    setTheme(houseTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <h1>Qual sua casa de Hogawarts?</h1>
          <div className='btn-wrapper'>
          <HouseButton variantColor='gryffindor' onClick={() => handleHouseButtonClick('gryffindor')}>
          Gryffindor
        </HouseButton>
        <HouseButton variantColor='hufflepuff' onClick={() => handleHouseButtonClick('hufflepuff')}>
          Hufflepuff
        </HouseButton>
        <HouseButton variantColor='ravenclaw' onClick={() => handleHouseButtonClick('ravenclaw')}>
          Ravenclaw
        </HouseButton>
        <HouseButton variantColor='slytherin'  onClick={() => handleHouseButtonClick('slytherin')}>
          Slytherin
        </HouseButton>
          </div>
        </AppWrapper>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}

export default App
