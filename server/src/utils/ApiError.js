export default class ApiError extends Error{
    constructor(statusCode, message, errors){
        super()
        this.status = statusCode
        this.errors = errors
        this.message = message
        this.success = false
    }
}
