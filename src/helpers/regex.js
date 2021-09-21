export const regex = {
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    //eslint-disable-next-line
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/
}

export default regex;