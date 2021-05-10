/**
 * 乘法
 * @param a number
 * @param b number
 * @returns number
 */
declare function multiply(a: number, b: number): number;
declare const _default: {
    /**
     * 加法
     * @param a number
     * @param b number
     * @returns number
     */
    add(a: number, b: number): number;
    /**
     * 减法
     * @param a number
     * @param b number
     * @returns number
     */
    sub(a: number, b: number): number;
    multiply: typeof multiply;
    /**
     * 除法
     * @param a number
     * @param b number
     * @returns number
     */
    divide(a: number, b: number): number;
};
export default _default;
