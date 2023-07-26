
export const registerBody = { email: "", password: "", name: "", lastName: "" }

export function validateRegisterBody(register: typeof registerBody): String | typeof registerBody {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (register.name == '') return 'Name is Empty'
    if (register.lastName == '') return 'Lastname is Empty'
    if (register.email == '') return 'Email is Empty'
    if (register.email == '') return 'Email is Empty'
    if (register.password == '') return 'Password is Empty'
    if (register.password.length <= 7 ) return 'Password too short'
    if (!expression.test(register.email)) return 'Email is Incorrect'
    return register
}