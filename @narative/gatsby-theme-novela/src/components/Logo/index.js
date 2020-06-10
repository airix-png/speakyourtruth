import React from 'react';
import celloworld from './syt.png';
import styled from '@emotion/styled';


// TODOS: LOGO NAME ANIMATION...
export default function Logo() {
  return (
    <img
      className="logo"
      height="auto"
      fill={'primary'}
      src={celloworld}
      alt="Speak Your Truth"
    />
  );
}