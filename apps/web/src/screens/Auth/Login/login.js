import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { LoginAuth } from '../helpers';

import SEO from '../../../components/Marketing/Layout/seo';

import {
  Box,
  Button, Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import GoogleButton from 'react-google-button';

const Login = () => {
  const location = useRouter();
  const { firebase, LogIn } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [invite_key, setInviteKey] = useState();
  const [isInviteFlow, setInviteFlow] = useState();

  const handleSubmit = async (values) => {
    fetchInit();
    let email = values.email;
    let password = values.password;

    let authRes = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        fetchFailure(error);
      });

    LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
  };

  //Google OAuth2 Sign in
  const GoogleSignin = async () => {
    fetchInit();
    let provider = new firebase.auth.GoogleAuthProvider();

    let authRes = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        fetchFailure(error);
      });

    LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
  };

  const seoData = {
    title: 'Saas Starter Kit Pro Login Page',
    description: 'Saas Starter Kit Pro Login Page'
  };

  //extract data from query params
  useEffect(() => {
    if (!location.isReady) return;
    setInviteFlow(location.query.isInviteFlow);
    setInviteKey(location.query.verify_key);
  }, [location.isReady]);

  useEffect(() => {
    return () => fetchSuccess();
  }, []);

  return (
    <>
      <SEO seoData={seoData} />

      <Container maxWidth="xs">
        {isLoading && <CircularProgress />}
        <Box textAlign="center" py={5}>
          <Typography variant="h4" fontWeight="bold">
            Sign-In to Your Account
          </Typography>
          <Link component={NextLink} href="/auth/signup">
            Don't have an Account? Sign Up here
          </Link>
        </Box>

        <Card variant="outlined">
          <CardContent>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      helperText= {errors.email}
                      error={touched.email && Boolean(errors.email)}
                    />

                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      helperText= {errors.password}
                      error={touched.password && Boolean(errors.password)}
                    />

                    <Button type="submit" variant="contained">
                      Sign In
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>

            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <FormControlLabel control={<Checkbox id="remember_me" name="remember_me" />} label="Remember me" />
              <Link component={NextLink} href="/auth/passwordreset">
                Forgot your password?
              </Link>
            </Stack>

            <Stack spacing={2} alignItems='center' pt={2}>
              <Divider sx={{width: '100%'}}>Or Continue With</Divider>
              <GoogleButton label="Sign-In with Google" onClick={GoogleSignin} />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login;
