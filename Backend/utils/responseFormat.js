export class errorResponse { 
  constructor (success, message, error) { 
    this.success = success;
    this.message = message;
    this.error = error;
  }
}

export class successResponse {
  constructor (success, data) {
    this.success = success;
    this.data = data;
  }
}
