"use client";

import React from 'react';
import styled from 'styled-components';
import { FaHome, FaFileAlt, FaUserLock, FaTrashAlt, FaPencilRuler, FaBell, FaCog, FaCreditCard, FaAppStore, FaBullhorn, FaUserFriends, FaShareAlt, FaApple, FaFlag } from 'react-icons/fa';
import { SiBrave } from 'react-icons/si';

const Settings = () => {
  return (
    <Container>
      <Sidebar>
        <Logo>Settings</Logo>
        <Menu>
          <MenuItem>
            <FaCog /> General
          </MenuItem>
          <MenuItem>
            <FaCreditCard /> Billing
          </MenuItem>
          <MenuItem>
            <FaBell /> Notifications
          </MenuItem>
          <MenuItem>
            <FaAppStore /> Apps
          </MenuItem>
          <MenuItem>
            <FaPencilRuler /> Branding
          </MenuItem>
          <MenuItem>
            <FaUserFriends /> Refer a friend
          </MenuItem>
          <MenuItem>
            <FaShareAlt /> Sharing
          </MenuItem>
        </Menu>
      </Sidebar>
      <MainContent>
        <Section>
          <SectionTitle>Security</SectionTitle>
          <Content>
            <SecurityStatus>
              <StatusText>Your account security is 90%</StatusText>
              <StatusButton>Review security</StatusButton>
            </SecurityStatus>
            <SecurityDetails>
              <DetailItem>
                <DetailTitle>Basics</DetailTitle>
                <DetailContent>
                  <Label>Password</Label>
                  <Value>********</Value>
                </DetailContent>
              </DetailItem>
              <DetailItem>
                <DetailTitle>Two-step verification</DetailTitle>
                <DetailContent>
                  <Label>Enabled</Label>
                </DetailContent>
              </DetailItem>
              <DetailItem>
                <DetailTitle>Browsers and devices</DetailTitle>
                <DetailContent>
                  <Device>
                    <DeviceIcon><SiBrave /></DeviceIcon>
                    <DeviceName>Brave on Mac OS X</DeviceName>
                    <Location><FaFlag /> Ninh Binh, Vietnam</Location>
                    <Action>Current session</Action>
                    <RemoveButton>Remove</RemoveButton>
                  </Device>
                  <Device>
                    <DeviceIcon><FaApple /></DeviceIcon>
                    <DeviceName>Mia's MacBook Pro</DeviceName>
                    <Location><FaFlag /> Ninh Binh, Vietnam</Location>
                    <Action>Current session</Action>
                    <RemoveButton>Remove</RemoveButton>
                  </Device>
                  <Device>
                    <DeviceIcon><SiBrave /></DeviceIcon>
                    <DeviceName>Brave on Mac OS X</DeviceName>
                    <Location><FaFlag /> Mexico City, Mexico</Location>
                    <Action>1 month ago</Action>
                    <RemoveButton>Remove</RemoveButton>
                  </Device>
                  <Device>
                    <DeviceIcon><FaApple /></DeviceIcon>
                    <DeviceName>Mia's MacBook Pro</DeviceName>
                    <Location><FaFlag /> Mexico City, Mexico</Location>
                    <Action>1 month ago</Action>
                    <RemoveButton>Remove</RemoveButton>
                  </Device>
                </DetailContent>
              </DetailItem>
            </SecurityDetails>
          </Content>
        </Section>
      </MainContent>
    </Container>
  );
};

export default Settings;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #181818;
  color: white;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  svg {
    margin-right: 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #1e1e1e;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #2e2e2e;
  padding: 20px;
  border-radius: 8px;
`;

const SecurityStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StatusText = styled.div`
  font-size: 18px;
`;

const StatusButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecurityDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-size: 14px;
  color: #888;
`;

const Device = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const DeviceIcon = styled.span`
  margin-right: 10px;
`;

const DeviceName = styled.span`
  font-size: 14px;
`;

const Location = styled.span`
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const Action = styled.span`
  font-size: 14px;
  color: #888;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d63031;
  }
`;
