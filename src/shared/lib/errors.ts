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

export class BadRequest extends Error {
  constructor(message: string = "BadRequest") {
    super(message);
  }
}
