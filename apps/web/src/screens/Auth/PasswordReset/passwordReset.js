import React, { useContext, useState } from 'react';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';

import SEO from '../../../components/Marketing/Layout/seo';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const PasswordReset = () => {
  const { firebase } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchInit();

    let email = event.target.email.value;

    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .catch((err) => {
        fetchFailure(err);
      });

    setSuccess(true);
    fetchSuccess();
  };

  const seoData = {
    title: 'Saas Starter Kit Pro Reset Password Page',
    description: 'Saas Starter Kit Pro Reset Password Page'
  };

  return (
    <>
      <SEO seoData={seoData} />

      <Container maxWidth="xs">
        {isLoading && <CircularProgress />}
        {!success ? (
          <>
            <Typography variant="h4" fontWeight="bold" textAlign="center" py={5}>
              Enter In Email to reset Password
            </Typography>

            <Card variant="outlined">
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField fullWidth id="email" label="Email" variant="outlined" type="email" name="email" />
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </>
        ) : (
          <Typography variant='h5'>A Reset Link Has been Sent to your Email</Typography>
        )}
      </Container>
    </>
  );
};

export default PasswordReset;
