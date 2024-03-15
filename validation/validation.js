const accountValidation = account => {
    if (typeof account.accountName !== 'string')
        return { validation: false, message: 'Invalid account name' }
    if (account.count === Infinity || account.count === -Infinity || isNaN(account.count) || typeof account.count !== 'number')
        return { validation: false, message: 'Invalid account amount' }
    if (account.accountName.length < 1 || account.accountName.length > 15)
        return { validation: false, message: 'Name length out of range' }
    if (account.count.toString().length < 1 || account.count.toString().length > 15)
        return { validation: false, message: 'Amount out of range' }
    if (account.accountType !== 'cash' && account.accountType !== 'card')
        return { validation: false, message: 'Invalid account type' }
    if (
        typeof account.accountSignColor[0] !== 'string'
        || typeof account.accountSignColor[1] !== 'string'
        || !Array.isArray(account.accountSignColor)
        || account.accountSignColor.length !== 2
    ) return { validation: false, message: 'Invalid account color' }
    return { validation: true }
}

module.exports = { accountValidation }