/**
 * 获取经纬信息
 * @param lngLat 位置信息
 * @returns @object { long, lat }
 */
export const fixedLngLat = (lngLat?: string) => {
  if (!lngLat) {
    return '';
  }
  const lngLatArr = lngLat.split(',');
  const longitude = Number(lngLatArr[0]).toFixed(6);
  const latitude = Number(lngLatArr[1]).toFixed(6);
  if (lngLatArr.length < 2) {
    return '';
  }
  return `${longitude},${latitude}`;
};

export const transformLngLat = (lngLat?: string) => {
  if (lngLat) {
    const lngLatArr = lngLat ? lngLat.split(',') : [];
    const longitude = Number(lngLatArr[0]);
    const latitude = Number(lngLatArr[1]);
    if (lngLatArr.length < 2) {
      return null;
    }
    return { longitude, latitude };
  }
  return null;
};
