
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const KAKAO_LOGIN = 'KAKAO_LOGIN';

interface KakaoLoginAction {
  type: typeof KAKAO_LOGIN;

}

interface FacebookLoginAction {
  type: typeof FACEBOOK_LOGIN;
}

export type LoginActionTypes =
  | KakaoLoginAction
  | FacebookLoginAction;
// actions

export function facebookLogin () {
  return { type: FACEBOOK_LOGIN };
}

export function kakaoLogin () {
  return { type: KAKAO_LOGIN };
}

// reducers

export function LoginReducer(state, action) {
  switch (action.type) {
    case KAKAO_LOGIN:
      return {};
    case FACEBOOK_LOGIN:
      return {};
  }
}
