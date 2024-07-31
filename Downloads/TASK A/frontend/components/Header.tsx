"use client";

import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <Container>
      <Profile>
        <FaUser style={{ marginRight: '10px' }} />
        Mia de Silva
      </Profile>
      <Actions>
        <InviteButton>Invite</InviteButton>
        <UpgradeButton>Upgrade</UpgradeButton>
        <ProfileButton>Profile</ProfileButton>
      </Actions>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1e1e1e;
  color: white;
  border-bottom: 1px solid #333;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:last-child {
    margin-right: 0;
  }
`;

const InviteButton = styled(Button)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const UpgradeButton = styled(Button)`
  background-color: #ffc107;
  color: black;

  &:hover {
    background-color: #e0a800;
  }
`;

const ProfileButton = styled(Button)`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #218838;
  }
`;
