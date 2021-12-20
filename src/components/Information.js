import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  height: 90vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BackdropImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.9;
`;

const BackdropColor = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: -1;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const PosterImg = styled.img``;

const InfoContainer = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 20px;
  padding: 20px;
  background-color: none;
  color: white;
`;

const Title = styled.h1`
  margin: 20px 0;
`;

const BasicInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 18px;
`;

const BasicInfo = styled.span``;

const Anchor = styled.a`
  all: unset;
  cursor: pointer;
  margin: 0 10px;
  padding: 4px 8px;
  background-color: orange;
  border-radius: 5px;
`;

const Language = styled.div`
  display: inline-block;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: black;
  opacity: 0.8;
  border-radius: 5px;
`;

const Summary = styled.p`
  width: 80%;
  margin: 10px 0;
`;

export const Information = ({ info }) => {
  return (
    <Main>
      <BackdropImg
        src={
          'http://image.tmdb.org/t/p/original/' + `${info && info.backdropPath}`
        }
      ></BackdropImg>
      <BackdropColor></BackdropColor>
      <Container>
        <PosterImg
          src={
            'http://image.tmdb.org/t/p/original/' + `${info && info.posterPath}`
          }
        />
        <InfoContainer>
          <Title>{info && info.title}</Title>
          <BasicInfoContainer>
            <BasicInfo>
              {info && info.releaseDate.split('-')[0]} ⚫{' '}
              {info && info.runtime + ` min`} ⚫ {info && info.genres} ⚫
            </BasicInfo>
            <Anchor href={info && info.homeLink} target='_blank'>
              HOME
            </Anchor>
          </BasicInfoContainer>
          <Language>{info && info.language}</Language>
          <Summary>{info && info.summary}</Summary>
        </InfoContainer>
      </Container>
    </Main>
  );
};