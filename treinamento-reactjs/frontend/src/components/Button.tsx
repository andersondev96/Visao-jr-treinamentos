import { ReactNode } from 'react';

import { ButtonContainer } from '../styles/components/Button';

interface ButtonProps {
    children?: ReactNode;
    name: string;
    type?: "button" | "submit";
    color: string;
}

export function Button({
    name,
    type,
    children,
    color
}: ButtonProps) {
    return (
        <ButtonContainer>
            <button className="button" type={type} style={{background: `${color}`}}>
                {children}
                <strong>{name}</strong> 
            </button>
        </ButtonContainer>
    );
}