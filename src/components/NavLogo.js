import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.svg`
  width: 100%;
  max-width: 280px;
  margin-left: 1em;
  padding-top: 0.4em;
  fill: #fdd136;
`;

const Logo = () => {
  console.log('sanity');
  return (
    <LogoStyles viewBox="0 0 1103 173" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.6 34.6l-.5 56c0 3.1-2.5 5.5-5.6 5.5-3.1 0-5.6-2.5-5.6-5.6l.2-20.3-30.8-.2-.2 20.3c0 3.1-2.5 5.5-5.6 5.5-3.1 0-5.5-2.5-5.5-5.6l.5-56c0-3.1 2.5-5.5 5.6-5.5 3.1 0 5.5 2.5 5.5 5.6l-.2 24.6 30.9.3.2-24.6c0-3.1 2.6-5.5 5.7-5.5 3-.1 5.4 2.4 5.4 5.5zM156.8 96.5c-.8.4-1.5.5-2.3.5-2.1 0-4.1-1.3-5-3.4l-5.6-13.2-27.3-.2-5.8 13.1c-1.3 2.9-4.5 4.1-7.4 2.8-2.8-1.3-4-4.5-2.8-7.3l25-55.8c.9-2.1 2.9-3.3 5.1-3.3 2.2 0 4.2 1.3 5 3.4l24.1 56.2c1.1 2.8-.2 6-3 7.2zm-17.7-27.2l-8.6-20.1-9 20 17.6.1zM246 55c-.1 13.5-11.1 24.3-24.5 24.2l-13.1-.2-.1 12.9c0 3.2-2.5 5.6-5.6 5.6-3.1 0-5.5-2.5-5.5-5.7l.5-56c0-3.1 2.5-5.5 5.6-5.5l18.6.2c13.4.1 24.2 11.1 24.1 24.5zm-11.1-.1c.1-7.3-5.8-13.1-13.1-13.2l-13.1-.1-.2 26.3 13.1.1c7.2 0 13.2-5.8 13.3-13.1zM332.5 55.8c-.2 13.5-11.1 24.3-24.5 24.2l-13.1-.1-.1 12.9c0 3.2-2.5 5.6-5.6 5.6-3.1 0-5.5-2.5-5.5-5.7l.5-56c0-3.1 2.5-5.5 5.6-5.5l18.6.2c13.4.1 24.2 11.1 24.1 24.4zm-11.1-.1c.1-7.3-5.8-13.1-13.1-13.2l-13.1-.1-.2 26.3 13.1.1c7.2.1 13.2-5.7 13.3-13.1zM416 41.2l-18.4 26.4-.2 26.3c0 3.1-2.5 5.5-5.7 5.5-3.1 0-5.5-2.5-5.5-5.6l.2-26.3-17.9-26.7c-1.7-2.6-1-6 1.5-7.7 2.6-1.7 6-1 7.7 1.5L392 56l14.8-21.2c1.7-2.5 5.2-3.1 7.8-1.4 2.5 1.8 3.1 5.2 1.4 7.8zM504.3 80.3c0-2.9-.7-5.3-2-7.4-1.4-2-3.5-3.8-6.4-5.3-2.9-1.5-7.3-3.1-13.2-4.7-5.9-1.6-10.3-3.3-13.2-4.9-2.9-1.6-5.1-3.6-6.5-5.7-1.4-2.2-2.1-4.8-2.1-7.9 0-4.9 2.1-9 6.3-12 4.2-3.1 9.6-4.6 16.3-4.6 4.4 0 8.3.8 11.7 2.5 3.5 1.7 6.2 4.1 8.1 7.1 1.9 3.1 2.8 6.5 2.8 10.4h-2.5c0-5.1-1.9-9.3-5.6-12.6-3.7-3.3-8.6-5-14.5-5-6 0-10.8 1.3-14.5 4-3.7 2.7-5.5 6-5.5 10 0 4.1 1.6 7.4 4.8 9.8 3.2 2.5 8.5 4.7 15.9 6.6 7.4 1.9 12.8 4.1 16.2 6.7 4.4 3.2 6.5 7.5 6.5 12.9 0 3.4-1 6.4-2.9 9.1-1.9 2.6-4.7 4.7-8.2 6.1s-7.5 2.1-11.9 2.1c-4.9 0-9.3-.8-13.3-2.5-3.9-1.6-6.9-4-8.8-7-2-3-3-6.6-3-10.7h2.5c0 5.6 2.1 9.9 6.3 13 4.2 3.1 9.6 4.6 16.3 4.6 5.9 0 10.8-1.4 14.7-4.1 3.7-2.6 5.7-6.2 5.7-10.5zM602.2 96.6h-2.5V62.9h-43.4v33.7h-2.5v-68h2.5v31.7h43.4V28.6h2.5v68zM787.9 60.8l-10.9 10v25.7h-2.5v-68h2.5v39.3l11.2-11 28.2-28.3h3.6L789.7 59l32.6 37.5H819l-31.1-35.7zM908.6 76.3h-33.3l-7.6 20.3H865l25.4-68h3.1l25.4 68h-2.8l-7.5-20.3zm-32.3-2.5h31.4L892 31.7l-15.7 42.1zM727.2 103.1l-7.6-2.7c-.3-.1-.7-.1-1 0-.3.1-.6.4-.7.7-.1.3-.1.7 0 1 .1.3.4.6.7.7l7.6 2.8c3.1 1.1 3.9 3.8 3.2 6-.9 3-4.4 5.4-10.1 3.9-15.5-3.8-34.4-8.3-36.4-8.3h-2.5c-11.3 0-15.9 0-20.6-4.4-5.8-5.8-9.1-13.6-9.1-21.9 0-8.3 3.2-16 9.1-21.9 2.5-2.6 14.8-17.2 8.9-44-.3-1.1 0-1.5.3-1.8 1.1-1.2 4.2-1.3 6.7-.9 12.1 2.2 11.7 11.2 9.6 31.3l-.1 1c-.1.7.4 1.3 1.1 1.4l25.9 5.1c4 .8 6.7 2.8 7.6 5.4.7 2.2.1 4.7-1.6 6.4-1.7 1.8-4.2 2.5-6.7 1.9h-.2l-7.1-1.5c-.7-.1-1.4.3-1.5 1-.1.7.3 1.4 1 1.5l7.2 1.5c3.5.8 5.8 2.7 6.6 5.4.7 2.3.1 4.8-1.5 6.4-1.5 1.5-3.6 2-6 1.4l-8.8-2.5c-.3-.1-.7-.1-1 .1-.3.2-.5.5-.6.8-.2.7.2 1.4.9 1.6l8.9 2.5c4.8 1.4 6.3 5.9 5.3 9.6-.7 2.6-2.9 5-7 4l-9.9-2.8c-.7-.2-1.4.2-1.6.9-.2.7.2 1.4.9 1.6l10 2.8c.9.2 1.8.4 2.6.4 4.3 0 6.7-3.2 7.6-6.2.9-3.5.1-7.2-2.3-9.8l-.4-.5.6-.2c1-.4 2-1 2.8-1.9 2.2-2.3 3.1-5.8 2.1-9-.5-1.7-1.5-3.2-2.9-4.4l-.5-.4.6-.3c1.1-.5 2.1-1.2 2.9-2.1 2.3-2.5 3.2-5.9 2.2-9-.7-2.1-2.8-5.8-9.5-7.2l-24.7-4.8v-.4c1.9-17.9 3.2-30.9-11.9-33.6-2-.3-6.8-.7-9.1 1.8-.7.8-1.4 2.1-.9 4.2 5.7 25.5-5.8 39.1-8.2 41.5-6.3 6.3-9.8 14.8-9.8 23.7 0 9 3.5 17.4 9.9 23.7 5.5 5.2 10.8 5.1 22.5 5.1h2.5c2 .1 23 5.1 35.7 8.2 1.4.4 2.7.5 4 .5 5.4 0 8.4-3.4 9.3-6.2.8-3.3-.5-7.6-5-9.1z"/>
    </LogoStyles>
  );
};

export default Logo;


