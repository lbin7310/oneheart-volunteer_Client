import * as React from 'react';

interface Props {
  onKakaoLogin(): void;
  onFacebookLogin(): void;
}

const Login: React.SFC<Props> = ({ onKakaoLogin, onFacebookLogin }) => (
  <div>
    <div>
      <img src="https://www.freeiconspng.com/uploads/volunteer-icon-23.png" />
    </div>
    <div
      onClick={onKakaoLogin}
    >
      <span></span>
      <span>
        카카오톡으로 로그인
      </span>
    </div>
    <div
      onClick={onFacebookLogin}
    >
      <span></span>
      <span>
        페이스북으로 로그인
      </span>
    </div>
  </div>
);

export default Login;