import { css } from '@emotion/core';

export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'San Francisco',
      'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI',
      'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'San Francisco',
      'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI',
      'Arial', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
    color: #e45e4d;
  }

  a:focus {
    outline: none;

  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'San Francisco',
      'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI',
      'Arial', sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

.video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
   
}
.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 91%;
    margin: auto;
    display: block;
}

.newpixel {
  position: relative;
  padding-bottom: 20px;
}
.rozette {
  position: relative;
  top: 15px;
}
.box{
  :global{
    .slick-prev, .slick-next{
      z-index: 1;
      opacity: 0;
      transition: .5s all;
    }
    .slick-prev{
      left: -30px;
    }
    .slick-next{
      right: -10px;
    }
    .slick-prev:before, .slick-next:before{
      color: #4C96FF;
      font-size: 30px;
    }
  }
  &:hover{
    :global{
      .slick-prev, .slick-next{
        opacity: 1;
      }
    }
  }
}
.slick-dots li button:before{
  color: #878787;
  opacity: 0.5;
  text-align: center;
  font-size: 13px;

}

.slick-dots li button {
  color: #878787;
  
}
.slick-dots li.slick-active button:before{
  color: #e45e4d;
  border-radius: 50%;
  border: 1px solid #878787
  text-align: center;
  transform: 
}

.slick-prev:before{
  /* background-color: blue !important; */
  width: 46px;
  height: 46px;
  content: '' !important;
  position: absolute;
  top: -11px;
  left: -40px;
  background-image: url('../../images/arrow_left.png');
  background-repeat: no-repeat;
  vertical-align: middle;
  background-size: 46px;
  opacity: 1 !important;
  }


.slick-next:before{
  /* background-color: blue !important; */
  width: 46px;
  height: 46px;
  content: '' !important;
  position: absolute;
  top: -11px;
  left: 20px;
  background-image: url('../../images/arrow_left.png');
  background-repeat: no-repeat;
  vertical-align: middle;
  background-size: 46px;
  opacity: 1 !important;
  }
  
.logo {
  max-height: 140px; 
  max-width: 100%;
}
  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type='number'] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`;
