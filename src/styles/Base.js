import style, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle``;

export const MainContainer = style.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgb(49, 121, 186);
  padding: 30px;
  align-items: flex-start;
`;

export const Column = style.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: auto;
    margin-right: 10px;
    border-radius: 2px;
    background-color: rgb(227, 227, 227);
`;

export const Title = style.h2``;

export const TasksList = style.div``;

export const Card = style.div`
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: rgb(255, 255, 255);
`;

export const CardBody = style.div``;
