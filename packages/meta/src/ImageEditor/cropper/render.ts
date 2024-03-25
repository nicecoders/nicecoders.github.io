//@ts-nocheck
import { set, getOuterWidth, getOuterHeight } from 'rc-util/lib/Dom/css';
import { addClass, removeClass } from 'rc-util/lib/Dom/class';
import { getTransforms } from '../utils';
import { CLASS_MASK, CLASS_HIDDEN } from './constants';

export default {
  cropBoxData: null,
  viewBoxImage: null,
  render() {
    this.initContainer();
    this.initCropBox();
    this.limitCropBox(true, true);
  },

  initContainer() {
    //通过样式设置 不依赖父元素的prosition
    const { element, container } = this;
    const containerData = {
      width: getOuterWidth(element),
      height: getOuterHeight(element),
    };
    this.containerData = containerData;
    set(container, containerData);
  },
  initCropBox() {
    const { containerData, options } = this;

    const cropBoxData = {
      // width: containerData.width,
      // height: containerData.height,
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      minWidth: 0,
      minHeight: 0,
      maxWidth: containerData.width,
      maxHeight: containerData.height,
      minLeft: 0,
      maxLeft: containerData.width,
      minTop: 0,
      maxTop: containerData.height,
      oldLeft: 0,
      oldTop: 0,
    };

    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true);
  },
  renderCropBox() {
    const { cropBoxData } = this;

    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }

    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }

    cropBoxData.width = Math.min(
      Math.max(cropBoxData.width, cropBoxData.minWidth),
      cropBoxData.maxWidth
    );
    cropBoxData.height = Math.min(
      Math.max(cropBoxData.height, cropBoxData.minHeight),
      cropBoxData.maxHeight
    );
    this.limitCropBox(false, true);

    cropBoxData.left = Math.min(
      Math.max(cropBoxData.left, cropBoxData.minLeft),
      cropBoxData.maxLeft
    );
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    set(
      this.cropBox,
      Object.assign(
        {
          width: cropBoxData.width,
          height: cropBoxData.height,
        },
        getTransforms({
          translateX: cropBoxData.left,
          translateY: cropBoxData.top,
        })
      )
    );

    if (this.options.showMask) {
      this.renderPreview();
    }
  },

  clearCropBox() {
    // Clear the crop box
    if (this.cropped && !this.disabled) {
      Object.assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      });

      this.cropped = false;
      this.renderCropBox();

      // Render canvas after crop box rendered
      // this.renderCanvas();
      removeClass(this.dragBox, CLASS_MASK);
      addClass(this.cropBox, CLASS_HIDDEN);
    }

    return this;
  },

  limitCropBox(sizeLimited, positionLimited) {
    // return
    const { options, containerData, cropBoxData, limited } = this;
    const { cropBoxLimited = {} } = options;

    if (sizeLimited) {
      let minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      let minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      const maxCropBoxWidth = limited
        ? Math.min(
            containerData.width,
            cropBoxLimited.width,
            cropBoxLimited.width + cropBoxLimited.left,
            containerData.width - cropBoxLimited.left
          )
        : containerData.width;
      const maxCropBoxHeight = limited
        ? Math.min(
            containerData.height,
            cropBoxLimited.height,
            cropBoxLimited.height + cropBoxLimited.top,
            containerData.height - cropBoxLimited.top
          )
        : containerData.height;

      // The min/maxCropBoxWidth/Height must be less than container's width/height
      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

      // The minWidth/Height must be less than maxWidth/Height
      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }

    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, cropBoxLimited.left);
        cropBoxData.minTop = Math.max(0, cropBoxLimited.top);
        cropBoxData.maxLeft =
          Math.min(containerData.width, cropBoxLimited.left + cropBoxLimited.width) -
          cropBoxData.width;
        cropBoxData.maxTop =
          Math.min(containerData.height, cropBoxLimited.top + cropBoxLimited.height) -
          cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
};
