
/**
 * @description 检查 textArea 输入的文字个数
 * @author Kanglang
 * @date 2019-03-28
 * @export
 * @param {*} str
 * @param {*} maxLength
 * @returns
 */
export function checkStrLengths (str, maxLength) {
    var maxLen = maxLength;
    var result = 0;
    if (str && str.length > maxLen) {
        result = maxLen;
    } else {
        result = str.length;
    }
    return result;
}