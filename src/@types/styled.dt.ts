import 'styled-components'
import {houseThemes} from '../styles/themes'

type ThemeType = typeof houseThemes;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}