import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.png";
import { darkThemeColor } from "../utils";
import { FcHome, FcRatings, FcDocument, FcStatistics } from "react-icons/fc";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Username</Name>
        <Badge content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <FcHome />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <FcRatings />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FcDocument />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <FcStatistics />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  padding: 1.3rem;
  height: auto;
  border-radius: 2rem;
  background-color: #03045e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
    padding: 0;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
`;
const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;
const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;
const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Link = styled.li`
  margin-left: 5%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  font-size: 12px h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.5rem;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: #0077b6;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
