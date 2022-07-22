import { rgbToHex } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <footer style = {{ 
        position: 'fixed',
        width: '100%',
        textAlign: 'center',
        bottom: 0,
        padding: 20,
        background: '#999',
    }}>
      &copy; 2022, XR Academy. All rights reserved.
    </footer>
  );
}

export default Footer;