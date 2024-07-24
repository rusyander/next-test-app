export class AuthorizationError extends Error {
  constructor(message: string = "AuthorizationError") {
    super(message);
  }
}

export class NeedAuthError extends Error {
  constructor(message: string = "NeedAuthError") {
    super(message);
  }
}
