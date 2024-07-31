"use client";

import React from 'react';
import styled from 'styled-components';
import { FaHome, FaFileAlt, FaUserLock, FaTrashAlt, FaPencilRuler, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Container>
      <Logo>Untitled UI</Logo>
      <Content>
        <Menu>
          <MenuItem>
            <FaHome /> Home
          </MenuItem>
          <MenuItem>
            <FaFileAlt /> All files
          </MenuItem>
          <MenuItem>
            <FaUserLock /> Private files
          </MenuItem>
          <MenuItem>
            <FaFileAlt /> Shared with me
          </MenuItem>
          <MenuItem>
            <FaTrashAlt /> Deleted files
          </MenuItem>
          <MenuItem>
            <FaPencilRuler /> Design
          </MenuItem>
          <MenuItem>
            <FaBell /> Notifications
          </MenuItem>
          <MenuItem>
            <FaCog /> Settings
          </MenuItem>
        </Menu>
        <Storage>
          <StorageInfo>
            <StorageText>Storage</StorageText>
            <StorageUsage>20GB used of 100GB</StorageUsage>
          </StorageInfo>
          <StorageBar>
            <UsageBar width="20%" />
          </StorageBar>
        </Storage>
      </Content>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  svg {
    margin-right: 10px;
  }
`;

const Storage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const StorageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StorageText = styled.span`
  font-size: 14px;
`;

const StorageUsage = styled.span`
  font-size: 14px;
  color: #888;
`;

const StorageBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
`;

interface UsageBarProps {
  width: string;
}

const UsageBar = styled.div<UsageBarProps>`
  width: ${props => props.width};
  height: 100%;
  background-color: #0070f3;
`;
