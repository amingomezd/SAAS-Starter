import React from 'react';
import GoogleButton from 'react-google-button';

const GoogleStyledButton = ({ GoogleSignin }) => {
  return <GoogleButton label="Sign-Up with Google" onClick={GoogleSignin} />;
};

export default GoogleStyledButton;
