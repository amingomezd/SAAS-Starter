import React, { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';

// import '../styles/globals.css';
// import 'antd/dist/reset.css';

import AuthContext from '../utils/authContext';
import { authReducer, initialStateAuth } from '../store/reducers/authReducer';
import { Login, Logout } from '../store/actions/actions';

import OrgContext from '../utils/orgContext';
import { orgReducer, initialStateOrg } from '../store/reducers/orgReducer';
import { Remove_Org, Set_Org } from '../store/actions/actions';

import ApiContext from '../utils/apiContext';
import { apiReducer, initialStateApi } from '../store/reducers/apiReducer';
import { Fetch_failure, Fetch_init, Fetch_success } from '../store/actions/actions';

import CaslContext from '../utils/caslContext';
import { ability } from '../utils/caslAbility';

import { firebaseApp as firebase } from '../services/firebase';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { pageView } from '../services/analytics';

import { silentAuth } from '../utils/helpers';
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();
const NoLayout = ({ children }) => children;

function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [authState, dispatchAuth] = useReducer(authReducer, initialStateAuth);
  const [apiState, dispatchApi] = useReducer(apiReducer, initialStateApi);
  const [orgState, dispatchOrg] = useReducer(orgReducer, initialStateOrg);
  const router = useRouter();
  const Layout = Component.Layout || NoLayout;

  const LogIn = (user) => {
    dispatchAuth(Login(user));
  };

  const LogOut = () => {
    dispatchAuth(Logout);
    dispatchOrg(Remove_Org);
    firebase.auth().signOut();
  };

  const fetchFailure = (error) => {
    console.log('error', error);
    dispatchApi(Fetch_failure(error));
    throw new Error('Error Detected, code execution stopped');
  };

  const fetchInit = () => {
    dispatchApi(Fetch_init);
  };

  const fetchSuccess = () => {
    dispatchApi(Fetch_success);
  };

  const SetOrg = (payload) => {
    dispatchOrg(Set_Org(payload));
  };

  useEffect(() => {
    silentAuth(LogIn, LogOut);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthContext.Provider value={{ authState, LogIn, LogOut, firebase }}>
      <ApiContext.Provider value={{ apiState, fetchFailure, fetchInit, fetchSuccess }}>
        <OrgContext.Provider value={{ SetOrg, orgState }}>
          <CaslContext.Provider value={ability}>
            <CacheProvider value={emotionCache}>
              <Head>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
              </Head>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </CacheProvider>
          </CaslContext.Provider>
        </OrgContext.Provider>
      </ApiContext.Provider>
    </AuthContext.Provider>
  );
}

export default MyApp;
