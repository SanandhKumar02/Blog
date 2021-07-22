import styled from "styled-components";

export const NavContainer = styled.div`
    height: 60px;
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    padding: 0 10vw;
    font-weight: bold;
    z-index: 99;
`
export const NavUl = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const NavItem = styled.li`
    margin-left: ${(props) => props.left ? "auto" : "0"};
    margin-right: ${(props) => props.right ? "auto" : "0"};
    cursor: pointer;
`
export const NavImg = styled.img`
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    cursor: pointer;
`