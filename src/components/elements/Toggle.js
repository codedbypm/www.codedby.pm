import React, { Component } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size:0.8rem;
//   padding: 0.6rem;
//   }
// `;

// const Toggle = ({ theme, toggleTheme }) => {
//   return <Button onClick={toggleTheme}>Switch Theme</Button>;
// };

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };
// export default Toggle;

class Toggle extends Component {
  render() {
    return (
      <div id='page' className='theme-dark row'>
        <div class='col-12 justify-content-end d-flex'>
          <input type='checkbox' id='theme-toggle' class='nightMode' />
          <label for='theme-toggle'>
            <span></span>
          </label>
        </div>
      </div>
    );
  }
}
export default Toggle;
