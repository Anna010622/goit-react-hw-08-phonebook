import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0px;
    display: block;

    width: 95%;
    height: 5px;
    border-radius: 2px;

    background-color: #b2f5ea;
    opacity: 0;
    transform: translateX(-50%) scaleX(0.3);
    transition: transform 300ms linear, opacity 300ms linear;
  }
  &.active::after,
  &:hover::after,
  &:focus::after {
    transform: translateX(-50%) scaleX(1);
    opacity: 1;
  }
`;
