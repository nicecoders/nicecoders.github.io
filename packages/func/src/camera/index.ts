import { get, has, isString } from 'lodash-es';
import { DevicemanagerCameraType, DeviceType } from './constants'

export const isFaceCamera = (type: DevicemanagerCameraType) => {
  return [
    DevicemanagerCameraType.DEVICEMANAGER_CAMERA_TYPE_1400,
    DevicemanagerCameraType.DEVICEMANAGER_CAMERA_TYPE_HKGRABBER,
    DevicemanagerCameraType.DEVICEMANAGER_CAMERA_TYPE_DHGRABBER,
  ].includes(type);
};

/**
 *
 * @param value 传入的数据 可以是 item（camera/vms/dirs）/ deviceID
 * @param isId
 */
export function getDeviceType(value: { [x: string]: any; id: any; } | string) {
  let type;
  let isDeviceKey = isString(value);
  if (isDeviceKey) {
    type = value.split('_')[0];
  } else {
    if (has(value, 'longitude')) {
      type = DeviceType['CAMERA'];
    }
    if (has(value, 'ip')) {
      type = DeviceType['VMS'];
    }
    if (!type) {
      type = DeviceType['DIR'];
    }
  }
  return type;
}

/**
 * 后端设备id/vmsid/dirid是三张表 合并在一起不保证唯一 前端生成唯一key
 * @param id  设备id
 * @param type  设备类型
 */
export function deviceIDToDeviceKey(id: any, type: string, vmsId?: any) {
  if (type == DeviceType['DIR']) {
    return `${type}_${id}_${vmsId}`;
  } else {
    return `${type}_${id}`;
  }
}

/**
 * 后端设备id/vmsid/dirid是三张表 合并在一起不保证唯一 前端生成唯一key
 * @param item  camera/vms/dirs
 */
export function deviceToDeviceKey(item: { [x: string]: any; id: any; }) {
  let deviceKey = '';
  let type = getDeviceType(item);
  if (!type) {
    console.error('device type is null!');
  }
  switch (type) {
    case DeviceType['DIR']:
      {
        let dirId = item['dirid'] || item['dirId'];
        if (!dirId && dirId !== 0) {
          console.error('dirId type is null!');
        }
        let vmsId = get(item, 'extendInfo.vmsPlatformId');
        if (!vmsId && vmsId !== 0) {
          console.error('vmsId type is null!');
        }
        deviceKey = `${type}_${dirId}_${vmsId}`;
      }
      break;
    case DeviceType['VMS']:
      deviceKey = `${type}_${item['id']}`;
      break;
    case DeviceType['CAMERA']:
      {
        let vmsId = get(item, 'extendInfo.vmsPlatformId');
        if (!vmsId && vmsId !== 0) {
          console.error('vmsId type is null!');
        }
        deviceKey = `${type}_${item.id}`;
      }
      break;
  }
  return deviceKey;
}

/**
 * 设备树key 转 后端设备原始id dirid是string/vms&camera 是number 和后端保持一致
 * @param deviceKey 设备树的id
 */
export function deviceKeyToDeviceId(deviceKey: { split: (arg0: string) => [any, any]; }) {
  let [type, id] = deviceKey.split('_');

  return type === DeviceType['DIR'] ? id : Number(id);
}

export const getVmsIdByDeviceId = (key: string) => {
  const type = getDeviceType(key);
  let vmsId = '';
  switch (type) {
    case DeviceType['CAMERA']:
    case DeviceType['DIR']:
      vmsId = key.split('_')[2];
      break;
    case DeviceType['VMS']:
      vmsId = key.split('_')[1];
      break;
  }
  if (!vmsId) {
    console.error('vmsid is null!');
  }
  return vmsId;
};
