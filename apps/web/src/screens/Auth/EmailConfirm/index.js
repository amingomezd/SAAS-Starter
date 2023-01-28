import React from 'react';
import SEO from '../../../components/Marketing/Layout/seo';
import { Container, Typography } from '@mui/material';

const EmailConfirm = () => {
  const seoData = {
    title: 'Saas Starter Kit Pro Confirm Email Page',
    description: 'Saas Starter Kit Pro Confirm Email Page'
  };

  return (
    <>
      <SEO seoData={seoData} />

      <Container maxWidth="xs">
          <Typography variant='h5'>We have Sent you an email confirmation please check your inbox to continue</Typography>
      </Container>
    </>
  );
};

export default EmailConfirm;
