export const loginBody = { email: "", password: "" }

export function validateLoginBody(register: typeof loginBody): String | typeof loginBody {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (register.email == '') return 'Email is Empty'
    if (register.email == '') return 'Email is Empty'
    if (register.password == '') return 'Password is Empty'
    if (register.password.length <= 7 ) return 'Password too short'
    if (!expression.test(register.email)) return 'Email is Incorrect'
    return register
}