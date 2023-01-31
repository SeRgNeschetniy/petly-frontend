import { theme } from '../../styles/theme';
import styled from "styled-components";

export const Overlay = styled.div `
    position: fixed;
    top: 0rem;
    left: 0rem;
    width: 105vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${theme.colors.mainBackground};
    border: 1px solid ${theme.colors.accent};
    border-radius: 40px;
    overflow-y: scroll;
    z-index: 12;`   
    export const ModalContainer = styled.div `
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);` 

    //top: 50%;
    // left: 50%;
    // width: 100vw;
    // height: 100vh;