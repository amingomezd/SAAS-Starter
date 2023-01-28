import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import SEO from '../../../components/Marketing/Layout/seo';
import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import axios from '../../../services/axios';
import { setAnalyticsUserId, sendEventToAnalytics } from '../../../services/analytics';

import { Box, Card, CardContent, CircularProgress, Container, Link, Stack, TextField, Typography } from '@mui/material';

const ConfirmedEmail = () => {
  const location = useRouter();

  const [email, setEmail] = useState();
  const [user_id, setUserId] = useState();
  const [username, setUsername] = useState();
  const [jwt_token, setToken] = useState();
  const [org_id, setOrgId] = useState();

  const [loadingSpin, setLoading] = useState(false);
  const { LogIn } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;

  const [verify_key, setVerifyKey] = useState();
  const [isInviteFlow, setInviteFlow] = useState();
  const [invite_key, setInviteKey] = useState();

  const createUser = async () => {
    fetchInit();

    let data = {
      verify_key
    };

    let result = await axios.post('/auth/create-user', data).catch((err) => {
      fetchFailure(err);
    });

    let id = result.data.user_id;
    let username = result.data.username;
    let jwt_token = result.data.token;
    let email = result.data.email;

    setEmail(email);
    setUserId(id);
    setUsername(username);
    setToken(jwt_token);

    //save event and user id to Google Analytics
    setAnalyticsUserId(id);
    sendEventToAnalytics('signup', { method: 'email' });

    if (isInviteFlow === 'true') {
      verifyInvite(id);
    } else {
      fetchSuccess();
    }
  };

  const verifyInvite = async (user_id) => {
    //verify invite key, returing org id.
    let data = { invite_key };
    let result = await axios.post('/api/users/verify-invite', data).catch((err) => fetchFailure(err));

    console.log(result);
    let org_id = result.data.org_id;
    setOrgId(org_id);
    createRole(org_id, user_id);
  };

  //if the signup process is part of the invite flow
  //then create role
  const createRole = async (org_id, user_id) => {
    fetchInit();
    let role = 'user';

    let data = {
      org_id,
      user_id,
      role
    };

    await axios.post(`/api/post/role`, data).catch((err) => {
      fetchFailure(err);
    });

    // Save user data to global state
    let user = { id: user_id, username, jwt_token, email };
    await LogIn(user);

    fetchSuccess();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let org_name = event.target.org_name.value;
    let role = 'admin';
    let token = jwt_token;
    const headers = { Authorization: `Bearer ${token}` };

    let data = {
      email,
      org_name,
      user_id,
      role
    };

    await axios.post('/api/org', data, { headers }).catch((err) => {
      fetchFailure(err);
    });

    // Save user data to global state
    let user = { id: user_id, username, jwt_token, email };
    await LogIn(user);

    location.push('/user/dashboard');
  };

  useEffect(() => {
    if (!location.isReady) return;

    setVerifyKey(location.query.key);
    setInviteFlow(location.query.isInviteFlow);
    setInviteKey(location.query.invite_key);

    console.log(verify_key, isInviteFlow, invite_key);
    if (verify_key) createUser();
  }, [location.isReady, verify_key, invite_key, isInviteFlow]);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const seoData = {
    title: 'Saas Starter Kit Pro Email Confirmed Page',
    description: 'Saas Starter Kit Pro Email Confirmed Page'
  };

  return (
    <>
      <SEO seoData={seoData} />

      <Container maxWidth="xs">
        {isLoading && <CircularProgress />}
        <Typography variant="h5" fontWeight="bold" align="center">
          Thank You for confirming your email, your account is almost ready to use
        </Typography>

        {loadingSpin && (
          <Stack pt={2}>
            <Stack direction="row" spacing={2} py={2} justifyContent="center">
              <CircularProgress size={20} />
              <Typography>Please wait while we setup your account...</Typography>
            </Stack>

            <Card variant="outlined">
              {isInviteFlow === true ? (
                <CardContent>
                  <Typography variant="subtitle1">Click below to navigate to the app your were invited to</Typography>
                  <Box textAlign='center'><Link component={NextLink} href={`/app/${org_id}/dashboard`}>Go to App</Link></Box>
                </CardContent>
              ) : (
                <CardContent>
                  <Typography variant="subtitle1">Enter an Organization Name to get Started</Typography>
                  <Box pt={2}>
                    <form onSubmit={handleSubmit}>
                      <TextField fullWidth id="org_name" label="Organization Name" variant="outlined" name="org_name" />
                    </form>
                  </Box>
                </CardContent>
              )}
            </Card>
          </Stack>
        )}
      </Container>
    </>
  );
};

export default ConfirmedEmail;
