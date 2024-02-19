const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
const lengthUnitRegex =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/


export function isArbitraryLength(value: string) {
    return getIsArbitraryValue(value, 'length', isLengthOnly)
}

export function isTshirtSize(value: string) {
    return tshirtUnitRegex.test(value)
}


function getIsArbitraryValue(
    value: string,
    label: string | Set<string>,
    testValue: (value: string) => boolean,
) {
    const result = arbitraryValueRegex.exec(value)

    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1])
        }

        return testValue(result[2]!)
    }

    return false
}

function isLengthOnly(value: string) {
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
}