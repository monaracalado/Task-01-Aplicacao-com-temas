import background from '../assets/backgroundImg.jpg'
import gryffindor from '../assets/Gryffindor.jpg'
import hufflepuff from '../assets/Hufflepuff.jpg'
import ravenclaw from '../assets/Ravenclaw.jpg'
import slytherin from '../assets/Slytherin.jpg'

type HouseTheme ={
    bgImage: string;
    gryffindor: string;
    hufflepuff: string;
    ravenclaw: string;
    slytherin: string;
}


export const houseThemes: Record<string, HouseTheme> = {

    defaultTheme:{
        bgImage: `url(${background})`,
        gryffindor:"#740001",
        hufflepuff: "#FFD700",
        ravenclaw: "#000080",
        slytherin: "#2E8B57",
    },

    gryffindor:{
        bgImage: `url(${gryffindor})`,
        gryffindor:"#740001",
        hufflepuff: "#FFD700",
        ravenclaw: "#000080",
        slytherin: "#2E8B57",

    },
    hufflepuff: {
        bgImage: `url(${hufflepuff})`,
        gryffindor:"#740001",
        hufflepuff: "#FFD700",
        ravenclaw: "#000080",
        slytherin: "#2E8B57",
    },
    ravenclaw: {
        bgImage: `url(${ravenclaw})`,
        gryffindor:"#740001",
        hufflepuff: "#FFD700",
        ravenclaw: "#000080",
        slytherin: "#2E8B57",
    },
    slytherin: {
        bgImage: `url(${slytherin})`,
        gryffindor:"#740001",
        hufflepuff: "#FFD700",
        ravenclaw: "#000080",
        slytherin: "#2E8B57",
    }
}
