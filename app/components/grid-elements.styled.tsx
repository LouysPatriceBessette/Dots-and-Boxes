'use client'

import styled from "styled-components";

export const GridStyled = styled.div<{size: number}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, auto);
`;

export const SquareStyled = styled.div<{isFenced: boolean, wasFencedBy: number}>`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${props => props.wasFencedBy === 1 ? "green" : props.wasFencedBy === 2 ? "blue" : "white"};
`;

export const DotStyled = styled.div<{isFriend: boolean, isOrigin: boolean, origin: number}>`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.origin === -1 ? 'black' :props.isOrigin ? "orange" : props.isFriend ? "green" : "lightgrey"};
  border-radius: 50%;
  cursor: ${(props) => props.origin === -1 || (props.isOrigin || props.isFriend) ? "pointer" : "default"};
`;

export const VlineStyled = styled.div<{isUsed: boolean}>`
  display: inline-block;
  width: 10px;
  height: 40px;
  background-color: ${(props => props.isUsed ? "black" : "lightgrey")};
`;

export const HlineStyled = styled.div<{isUsed: boolean}>`
  display: inline-block;
  width: 40px;
  height: 10px;
  background-color: ${(props => props.isUsed ? "black" : "lightgrey")};
`;

export const Cell = styled.div`
 border: 1px solid black;
 width: 40px;
 height: 40px;
`;