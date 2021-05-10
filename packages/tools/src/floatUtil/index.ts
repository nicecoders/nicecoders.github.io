/**
 * 乘法
 * @param a number
 * @param b number
 * @returns number
 */
function multiply(a: number, b: number) {
  var c = 0,
      d = a.toString(),
      e = b.toString();
  try {
      c += d.split(".")[1].length;
  } catch (f) {}
  try {
      c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}


export default {
  /**
   * 加法
   * @param a number
   * @param b number
   * @returns number
   */
  add(a: number, b: number) {
      var c: number, d: number, e: number;
      try {
          c = a.toString().split(".")[1].length;
      } catch (f) {
          c = 0;
      }
      try {
          d = b.toString().split(".")[1].length;
      } catch (f) {
          d = 0;
      }
      return e = Math.pow(10, Math.max(c, d)), (multiply(a, e) + multiply(b, e)) / e;
  },

  /**
   * 减法
   * @param a number
   * @param b number
   * @returns number
   */
  sub(a: number, b: number) {
      var c: number, d: number, e: number;
      try {
          c = a.toString().split(".")[1].length;
      } catch (f) {
          c = 0;
      }
      try {
          d = b.toString().split(".")[1].length;
      } catch (f) {
          d = 0;
      }
      return e = Math.pow(10, Math.max(c, d)), (multiply(a, e) - multiply(b, e)) / e;
  },

  multiply,

  /**
   * 除法
   * @param a number
   * @param b number
   * @returns number
   */
  divide(a: number, b: number) {
      var c: number, d: number, e = 0,
          f = 0;
      try {
          e = a.toString().split(".")[1].length;
      } catch (g) {}
      try {
          f = b.toString().split(".")[1].length;
      } catch (g) {}
      return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), multiply(c / d, Math.pow(10, f - e));
  }
}

