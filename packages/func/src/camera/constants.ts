/**
 * 设备类型枚举
 */
export const DeviceType = {
  VMS: 'vms',
  DIR: 'dir',
  CAMERA: 'camera',
};

export const LOCAL_KEY = 'local'; //离线摄像头key 约定
export const DIRE_CONNECT_KEY = 'direconnect';
export const BOX_LIST_KEY = 'boxlist';

export enum VmsplatformOpt {
  VMSPLATFORMOPT_ID = 0,
  VMSPLATFORMOPT_PLATFORMNAME = 1,
  VMSPLATFORMOPT_PLUGINNAME = 2,
  VMSPLATFORMOPT_IP = 3,
  VMSPLATFORMOPT_PORT = 4,
  VMSPLATFORMOPT_USERNAME = 5,
  VMSPLATFORMOPT_PASSWORD = 6,
}

export enum OPT {
  OR = 0,
  AND = 1,
  ORNOT = 2,
  ANDNOT = 3,
}

export enum DevicemanagerCameraType {
  DEVICEMANAGER_CAMERA_TYPE_DEFAULT = 0,
  DEVICEMANAGER_CAMERA_TYPE_NORMAL = 1,
  DEVICEMANAGER_CAMERA_TYPE_1400 = 97,
  DEVICEMANAGER_CAMERA_TYPE_DHGRABBER = 98,
  DEVICEMANAGER_CAMERA_TYPE_HKGRABBER = 99,
  DEVICEMANAGER_CAMERA_TYPE_LOCAL = 100,
}

// 盒子 直连 平台
export const BOX_DIRECONNECT_PLATFORM_FILTER = {
  filtervmsplatformList: [
    {
      opt: OPT.OR,
      vmsplatformOpt: VmsplatformOpt.VMSPLATFORMOPT_PLATFORMNAME,
      value: 'direconnect',
    },
    {
      opt: OPT.OR,
      vmsplatformOpt: VmsplatformOpt.VMSPLATFORMOPT_PLATFORMNAME,
      value: 'boxlist',
    },
  ],
};
