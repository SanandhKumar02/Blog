import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        padding: 24px 48px 0;
        flex-direction: column;
    }

    @media screen and (max-width: 640px) {
        padding: 0;

        width: calc(100vw - 32px);
        flex-direction: column;
    }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-family: sans-serif;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: white;
  -webkit-background-clip: text;
  margin-bottom: 16px;
  padding: 58px 0 16px;

  @media screen and (max-width: 768px) {
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 12px;
    padding: 40px 0 12px;
  }

  @media screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 8px;
    padding: 16px 0 8px;
    max-width: 100%;
  }
`

export const Button = styled.button`
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin: 10px;
  padding: 10px;

  &:hover{
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`