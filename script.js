const stringLength = (string) => {
    let length = string.length
    if (length < 1 || length > 10) {
        return undefined
    } else {
        return length
    }
}

module.exports = stringLength