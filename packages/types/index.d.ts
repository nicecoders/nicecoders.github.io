/// <reference path="BigImageModal.d.ts" />
export * from './BigImageModal'

export type CamerasStatusList = [string[], string[], string[]];

export type Rect = { x: number; y: number; w: number; h: number };

export type StatusList = {
  taskOverview: any;
  taskIndex: {
    deviceId: string;
    solutionId: string;
  };
}[];

export enum OperationType {
  OPERATION_TYPE_UNKNOW, // 未知状态，传该值会报错
  OPERATION_TYPE_START,
  OPERATION_TYPE_STOP
}


export enum AlgorithmVersion {
  VERSION_MGN_BNN, // MGN+BNN算法
  VERSION_BNN_PRO, // BNNPRO算法
  VERSION_BNN_PRO_ATTR, // BNNPROATTR算法
  VERSION_BNN_PRO_ATTR_SCORE, // BNNPROATTR算法
  VERSION_FACE, // 人脸算法
  VERSION_HEAD, // 头肩算法
  VERSION_NON_MOTOR_VEHICLE, // 非机动车的算法
  VERSION_REID_HEAD_ATTR, // 形体头肩属性三种特征融合的算法
  VERSION_MOTOR_VEHICLE, // 机动车的算法
}

export enum AlgorithmVersionStr {
  VERSION_MGN_BNN = 'VERSION_MGN_BNN', // MGN+BNN算法
  VERSION_BNN_PRO = 'VERSION_BNN_PRO', // BNNPRO算法
  VERSION_BNN_PRO_ATTR = 'VERSION_BNN_PRO_ATTR', // BNNPROATTR算法
  VERSION_BNN_PRO_ATTR_SCORE = 'VERSION_BNN_PRO_ATTR_SCORE', // BNNPROATTR算法
  VERSION_FACE = 'VERSION_FACE', // 人脸算法
  VERSION_HEAD = 'VERSION_HEAD', // 头肩算法
  VERSION_NON_MOTOR_VEHICLE = 'VERSION_NON_MOTOR_VEHICLE', // 非机动车的算法
  VERSION_REID_HEAD_ATTR = 'VERSION_REID_HEAD_ATTR', // 形体头肩属性三种特征融合的算法
  VERSION_MOTOR_VEHICLE = 'VERSION_MOTOR_VEHICLE', // 机动车的算法
}

类型枚举
export enum ObjectType {
  OBJECT_TYPE_NULL,
  OBJECT_TYPE_PEDESTRAIN,
  OBJECT_TYPE_BICYCLE,
  OBJECT_TYPE_CAR,
  OBJECT_TYPE_MOTORBIKE,
  OBJECT_TYPE_AEROPLANE,
  OBJECT_TYPE_BUS,
  OBJECT_TYPE_TRAIN,
  OBJECT_TYPE_TRUCK,
  OBJECT_TYPE_MOTOR_RIDER,
  OBJECT_TYPE_BIKE_RIDER,
  OBJECT_TYPE_MAX,
  OBJECT_TYPE_FACE = 101,
}

// 性别
export enum Gender {
  GENDER_NONE = 'GENDER_NONE',
  GENDER_MAN = 'GENDER_MAN',
  GENDER_WOMAN = 'GENDER_WOMAN',
}

// 年龄
export enum Age {
  AGE_ALL = 'AGE_ALL',
  AGE_ZERO = 'AGE_ZERO',
  AGE_OVERENGHTEEN = 'AGE_OVERENGHTEEN',
  AGE_OVERSIXTY = 'AGE_OVERSIXTY',
}

// 戴帽子状态
export enum Hat {
  HAT_ALL = 'HAT_ALL',
  HAT_NONE = 'HAT_NONE',
  HAT_OWNED = 'HAT_OWNED',
}

// 颜色
export enum Color {
  COLOR_ALL = 'COLOR_ALL',
  COLOR_BLACK = 'COLOR_BLACK',
  COLOR_WHITE = 'COLOR_WHITE',
  COLOR_GRAY = 'COLOR_GRAY',
  COLOR_BROWN = 'COLOR_BROWN',
  COLOR_PINK = 'COLOR_PINK',
  COLOR_REDANDORANGE = 'COLOR_REDANDORANGE',
  COLOR_YELLOW = 'COLOR_YELLOW',
  COLOR_GREEN = 'COLOR_GREEN',
  COLOR_BLUE = 'COLOR_BLUE',
  COLOR_PURPLE = 'COLOR_PURPLE',
}

// 背包
export enum Package {
  PACKAGE_ALL = 'PACKAGE_ALL',
  PACKAGE_HANDBAG = 'PACKAGE_HANDBAG',
  PACKAGE_BACKPACK = 'PACKAGE_BACKPACK',
  PACKAGE_SHOULDERBAG = 'PACKAGE_SHOULDERBAG',
  PACKAGE_OTHER = 'PACKAGE_OTHER',
  PACKAGE_NONE = 'PACKAGE_NONE',
}

// 行走模式
export enum WalkPattern {
  WALKPATTERN_ALL = 'WALKPATTERN_ALL',
  WALKPATTERN_WALK = 'WALKPATTERN_WALK',
  WALKPATTERN_RIDING = 'WALKPATTERN_RIDING',
}

// 人类属性
export interface HumanProperty {
  age: Age;
  downColor: Color;
  gender: Gender;
  hat: Hat;
  package: Package;
  upColor: Color;
  walkPattern: WalkPattern;
}

// 人类属性枚举
export interface EnumHumanProperty {
  Gender: typeof Gender;
  Age: typeof Age;
  Hat: typeof Hat;
  Color: typeof Color;
  Package: typeof Package;
  WalkPattern: typeof WalkPattern;
}

export interface IScreenshotButtonProp {
    model: 'VIDEO' | 'IMAGE';
    getCropInfo: () => Promise<RESP>;
    setShowCrop: React.Dispatch<React.SetStateAction<boolean>>;
    cropType: typeof cropType[number];
    selectAlgorithmVersion?: number | null;
}

export interface AlignType {
    /**
     * move point of source node to align with point of target node.
     * Such as ['tr','cc'], align top right point of source node with center point of target node.
     * Point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right) */
    points?: AlignPoint[];
    /**
     * offset source node by offset[0] in x and offset[1] in y.
     * If offset contains percentage string value, it is relative to sourceNode region.
     */
    offset?: number[];
    /**
     * offset target node by offset[0] in x and offset[1] in y.
     * If targetOffset contains percentage string value, it is relative to targetNode region.
     */
    targetOffset?: number[];
    /**
     * If adjustX field is true, will adjust source node in x direction if source node is invisible.
     * If adjustY field is true, will adjust source node in y direction if source node is invisible.
     */
    overflow?: {
        adjustX?: boolean | number;
        adjustY?: boolean | number;
    };
    /**
     * Whether use css right instead of left to position
     */
    useCssRight?: boolean;
    /**
     * Whether use css bottom instead of top to position
     */
    useCssBottom?: boolean;
    /**
     * Whether use css transform instead of left/top/right/bottom to position if browser supports.
     * Defaults to false.
     */
    useCssTransform?: boolean;
    ignoreShake?: boolean;
}

export type ODRECT = {
    topleft: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
};

export interface ViewOption {
  /* 图片url */
  image?: string | HTMLImageElement;

  /* 缩放灵敏度(0,1],default: 0.1 */
  wheelZoomRatio?: number;

  /*
   * 是否允许缩放
   * @default: true
   */
  scaleAble?: boolean;

  /*
   * 是否允许拖拽
   * @default: true
   */
  dragAble?: boolean;

  /*
   * fit scale 作为 最小缩放
   * @default: false
   */
  fitScaleAsMinScale?: boolean;
}

export type IOdRectOrigin {
  objectIndex: {
    objectId: string
    solutionId: string
    deviceId: string
    fragmentId: string
  }
  objectType: ObjectType,
  sourceObjectId: string,
  level: string
  confidence: string | number,
  pathInfo: any,
  frameInfo: {
    frameId: string
    frameTimestamp: string | number
    width: number
    height: number
    originWidth: number
    originHeight: number
    offsetTime: number
    skipNumber: number
  },
  deviceInfo: any
  infoOnSource:{
    bboxInSource:any
    bboxInFrame: {
      bbox: any,
      bboxRatio: Rect
      extendBbox: any
      extendBoxRatio: number
    },
    countInSource: any
    indexInSource: any
  },
  qualityScore: number
  frameImage: any
  objectImage: any
  objectExtImage: any
  feature: {
      name: string
      type: ObjectType,
      featureId: number
      featureByte: string
      featureBool:any[]
      featureUint8: any[]
      featureUint16: any[]
      featureUint32: any[]
      featureUint64: any[]
      featureInt8: any[]
      featureInt16: any[]
      featureInt32: any[]
      featureInt64: any[]
      featureFloat32: any[]
      featureString: any[]
    }
  subObjects: any[]
  objects: any[]
}
