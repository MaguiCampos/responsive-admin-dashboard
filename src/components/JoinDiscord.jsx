import React from "react";
import styled from "styled-components";
import { SiDiscord } from "react-icons/si";
import { darkThemeColor, hoverEffect, themeColor } from "../utils";

function JoinDiscord() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Discord>
          <DiscordLogo>
            <SiDiscord />
          </DiscordLogo>
          <DiscordText>
            <DiscordHead>Engage with clients</DiscordHead>
            <DiscordFoot>Join Discord channel</DiscordFoot>
          </DiscordText>
        </Discord>
        <DiscordJoin>Join Now</DiscordJoin>
      </CardContent>
    </JoinChannel>
  );
}

const JoinChannel = styled.div`
  background-color: #5567E3;
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;
const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Discord = styled.div`
  display: flex;
`;
const DiscordLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;
const DiscordText = styled.div`
  color: white;
`;
const DiscordHead = styled.h2`
  font-weight: 500;
`;
const DiscordFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const DiscordJoin = styled.button`
  background-color: ${themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default JoinDiscord;