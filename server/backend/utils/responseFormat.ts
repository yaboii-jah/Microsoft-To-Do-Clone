export class errorResponse {
  success : boolean;
  message : string;
  error : string;

  constructor (success : boolean, message : string, error : string) { 
    this.success = success;
    this.message = message;
    this.error = error;
  }
}

export class successResponse<T = unknown> {
  success : boolean;
  data : T;
  message : string;

  constructor (success : boolean, data : T, message : string) {
    this.success = success;
    this.data = data;
    this.message = message;
  }
}
