export const isValiEmail = (stringEmail) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))

export const isValiPassword = (stringPassword) => stringPassword.length >= 3