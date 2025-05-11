export default class ApiRespone {
    constructor(statusCode, data, message="Success"){
        this.status = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
