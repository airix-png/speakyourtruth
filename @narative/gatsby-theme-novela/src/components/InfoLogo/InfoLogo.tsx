import React from 'react';

import { Icon } from '@types';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

const InfoLogo: Icon = ({ fill }) => {
  return (
    <LogoContainer className="Logo">
      <svg
        width="24"
        height="24"
        enable-background="new 0 0 512.001 512.001"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo"
        fill = "#878787"
      >
<g><path d="m426 495.983h-340c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"/><path d="m496 263.958c-4.095 0-8.189-1.562-11.313-4.687l-198.989-198.987c-16.375-16.376-43.02-16.376-59.396 0l-198.988 198.988c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l198.988-198.989c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627-3.123 3.125-7.218 4.687-11.313 4.687z"/><path d="m320 495.983h-128c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z"/></g>      </svg>
    </LogoContainer>
  );
};

export default InfoLogo;

const LogoContainer = styled.div`
  .Logo:hover {
    fill: #e45e4d
  }
  ${mediaqueries.tablet`
  .Logo {
    display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;

    &:hover {
      opacity: 0.5;
    }
  `}
  }
`;
