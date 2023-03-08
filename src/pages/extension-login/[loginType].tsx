import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './components/GoogleLogin';
import SocialTem from './components/SocialTem';
import { useRouter } from 'next/router';
// import { ThreeWayLogin } from '@portkey-wallet/types/types-ca/wallet';

export default function ExtensionLogin() {
  const router = useRouter();
  const { loginType } = router.query;
  console.log(loginType, 'router===');

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_APP_ID || ''}>
        <GoogleLogin />
      </GoogleOAuthProvider>
      <SocialTem loginType={loginType as any} />
    </div>
  );
}
