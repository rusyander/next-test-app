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

export class ParsingError extends Error {
  constructor(
    public source: string,
    message = "ParsingError",
    cause?: unknown,
  ) {
    super(message, { cause });
  }
}

export class ValidationError extends Error {
  constructor(
    public errors: unknown[],
    message = "ValidationError",
  ) {
    super(message);
  }
}
