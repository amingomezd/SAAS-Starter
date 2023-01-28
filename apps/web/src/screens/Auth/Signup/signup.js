import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { ValidSchema, SignupAuth } from '../helpers';

import SEO from '../../../components/Marketing/Layout/seo';
import {
  Box,
  Button,
  Card,
  CardContent, CircularProgress,
  Container, Divider,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import NextLink from 'next/link';
import GoogleButton from 'react-google-button';

// TODO: replace with actual data
const getData = () => ({
  site: {
    siteMetadata: {
      siteUrl: 'http://localhost:3000'
    }
  }
});

const Signup = () => {
  const location = useRouter();
  const data = getData();
  const domainUrl = data.site.siteMetadata.siteUrl;
  const { firebase } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [invite_key, setInviteKey] = useState();
  const [isInviteFlow, setInviteFlow] = useState();

  const handleSubmit = async (values) => {
    fetchInit();

    let email = values.email;
    let password = values.password;
    let username = values.username;

    let authRes = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(authRes, firebase, fetchFailure, username, domainUrl, isInviteFlow, invite_key, location);
  };

  //Google OAuth2 Signin
  const GoogleSignin = async () => {
    fetchInit();
    let provider = new firebase.auth.GoogleAuthProvider();

    //wait for firebase to confirm signup
    let authRes = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(authRes, firebase, fetchFailure, null, domainUrl, isInviteFlow, invite_key, location);
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

  const seoData = {
    title: 'Saas Starter Kit Pro Sign up Page',
    description: 'Saas Starter Kit Pro Sign up Page'
  };

  return (
    <>
      <SEO seoData={seoData} />

      <Container maxWidth="xs">
        {isLoading && <CircularProgress />}
        <Box textAlign="center" py={5}>
          <Typography variant="h4" fontWeight="bold">
            Sign-Up for an Account
          </Typography>
          <Link component={NextLink} href="/auth/login">
            Already Have an Account? Login here
          </Link>
        </Box>

        <Card variant="outlined">
          <CardContent>
            <Formik
              validationSchema={ValidSchema}
              initialValues={{ email: '', password: '', username: '' }}
              onSubmit={handleSubmit}
            >
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
                      data-test-id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      helperText= {errors.email}
                      error={touched.email && Boolean(errors.email)}
                    />

                    <TextField
                      fullWidth
                      id="username"
                      label="First and Last Name:"
                      variant="outlined"
                      name="username"
                      data-test-id="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      helperText= {errors.username}
                      error={touched.username && Boolean(errors.username)}

                    />

                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      variant="outlined"
                      name="password"
                      type='password'
                      data-test-id="password"
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

            <Stack spacing={2} alignItems='center' pt={3}>
              <Divider sx={{width: '100%'}}>Or Continue With</Divider>
              <GoogleButton label="Sign-Up with Google" onClick={GoogleSignin} />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Signup;
