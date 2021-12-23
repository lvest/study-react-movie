import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  width: 20%;
  padding: 2px 8px;
  margin-top: 20px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.li`
  font-size: 20px;
  color: white;
`;

const StyleLink = styled(Link)`
  all: unset;
`;

/* 여기에 라우터를 만들고 각각 컴포넌트 만들어서 또 달아줘야됨*/

export const DetailsTab = () => {
  return (
    <Container>
      <TabList>
        <StyleLink to='crew'>
          <Tab>Crew</Tab>
        </StyleLink>
        <StyleLink to='cast'>
          <Tab>Cast</Tab>
        </StyleLink>
        <StyleLink to='video'>
          <Tab>Video</Tab>
        </StyleLink>
      </TabList>
      <Outlet />
    </Container>
  );
};
