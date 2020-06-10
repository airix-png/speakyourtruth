import React from 'react';

import { Icon } from '@types';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

const StatsLogo: Icon = ({ fill }) => {
  return (
    <LogoContainer>
      <svg
        width="26"
        height="26"
        enable-background="new 0 0 512.001 512.001"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo"
        fill = '#878787'
        stroke="#878787" 
        stroke-width="10"
      >
      <path d="m224.53125 47.992188c-4.417969 0-8 3.582031-8 8v26.238281l-42.039062 14.007812-79.5625 15.914063c-.964844.191406-1.890626.558594-2.726563 1.085937l-88 56c-3.730469 2.371094-4.828125 7.320313-2.457031 11.050781l56 88c1.273437 1.988282 3.355468 3.3125 5.695312 3.621094 2.34375.308594 4.699219-.429687 6.441406-2.023437l18.648438-16.902344v219.007813c0 4.417968 3.582031 8 8 8h256c4.417969 0 8-3.582032 8-8v-217.296876l18.9375 15.488282c1.714844 1.425781 3.953125 2.054687 6.160156 1.726562 2.203125-.296875 4.183594-1.507812 5.453125-3.335937l56-80c2.503907-3.570313 1.679688-8.488281-1.847656-11.054688l-88-64c-.933594-.679687-2.003906-1.144531-3.132813-1.367187l-79.53125-15.914063-42.039062-14.007812v-19.375c16.0625-4.1875 26.242188-19.972657 23.425781-36.332031-2.816406-16.355469-17.6875-27.832032-34.222656-26.40625-16.539063 1.425781-29.226563 15.277343-29.203125 31.875 0 4.417968 3.582031 8 8 8s8-3.582032 8-8c0-8.835938 7.164062-16 16-16s16 7.164062 16 16c0 8.835937-7.164062 16-16 16zm0 48.429687 39.441406 13.167969c-2.699218 19.714844-19.542968 34.410156-39.441406 34.410156s-36.738281-14.695312-39.441406-34.410156zm204.945312 89.417969-46.546874 66.503906-25.324219-20.726562c-2.394531-1.964844-5.707031-2.371094-8.503907-1.042969-2.792968 1.324219-4.574218 4.144531-4.570312 7.242187v226.175782h-240v-229.097657c0-3.167969-1.867188-6.035156-4.761719-7.316406-2.898437-1.28125-6.277343-.734375-8.621093 1.398437l-24.96875 22.703126-46.609376-73.230469 80-50.90625 69.761719-13.953125c4.65625 26.835937 27.941407 46.429687 55.175781 46.429687 27.234376 0 50.519532-19.59375 55.175782-46.429687l69.535156 13.914062zm0 0"/></svg>
    </LogoContainer>
  );
};

export default StatsLogo;

const LogoContainer = styled.div`
.Logo:hover {
  fill: #e45e4d;
  stroke: #e45e4d;
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
