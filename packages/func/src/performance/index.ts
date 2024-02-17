
// 1.bps KB/s or MB/s or GB/s  2.保留两位小数  3.默认是bps
export const speedConvert = (bps: number, contertUnit = 8) => {
  if (bps === undefined) return `0KB/s`;

  const byte = bps / contertUnit;

  if (bps > 1024 * 1024 * 1024) {
    return `${(byte / 1024 / 1024 / 1024).toFixed(2)}GB/s`;
  } else if (byte > 1024 * 1024) {
    return `${(byte / 1024 / 1024).toFixed(2)}MB/s`;
  } else if (byte > 1024) {
    return `${(byte / 1024).toFixed(2)}KB/s`;
  }

  return `${byte}KB/s`;
};
