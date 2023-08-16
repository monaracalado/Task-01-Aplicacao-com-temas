import React from "react";
import { ButtonContainer, btnVariantType } from "./styles";

interface HouseButtonProps {
    children: React.ReactNode;
    variantColor: btnVariantType;
    onClick: () => void;
}

const HouseButton: React.FC<HouseButtonProps> = ({children, variantColor, onClick}) => {
    return <ButtonContainer variant={variantColor} onClick={onClick}>{children}</ButtonContainer>
}

export default HouseButton;