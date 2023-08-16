import {styled} from 'styled-components'

export type btnVariantType = 'gryffindor' | 'hufflepuff' | 'ravenclaw' | 'slytherin';

export const ButtonContainer = styled.button<{variant: btnVariantType}>`
    border-radius: 20px;
    border: 2px solid #000;
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.40);
    padding: 0.6rem;
    width: 170px;
    height: 43px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
    background-color: ${(props) => props.theme[props.variant]};
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
    color: white;
`;