import bcrypt from 'bcryptjs'

export const hashPassword = password => {
    return bcrypt.hashSync(password, 8)
}

export const isPasswordValid = async (password, hash) => {
    try {
        const valid = await bcrypt.compare(password, hash);
        return valid;
    } catch (err) {
        throw err;
    }
}
