import styled from 'styled-components';

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    border-radius: 8px;
    background-color: #f59e0b;
    cursor: pointer;
    font-size: 16px;
    color: white;
    padding: 4px 24px;
    border: none;

    &:hover {
        background-color: #d97706;
        transform: scale(0.95);
    }
`;
