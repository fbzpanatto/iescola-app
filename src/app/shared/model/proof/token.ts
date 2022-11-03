import {User} from "./user";

export class Token {
  value: string;
  user: User;
  iat: number;
  exp: number;

  constructor(token: string) {
    this.value = token;

    const _token = Token.decode(token);
    this.user = _token.user;
    this.iat = +(_token.iat ?? 0);
    this.exp = +(_token.exp ?? 0);
  }

  private static decode(token: string): Token {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = decodeURIComponent(atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''));

    return JSON.parse(payload);
  }
}
