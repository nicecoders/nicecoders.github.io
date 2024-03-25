//@ts-nocheck
import { set } from 'rc-util/lib/Dom/css';
import { getTransforms } from '../utils';

export default {
  //var
  previewBox: null,

  //method
  initPreview() {
    const { showMask, img, viewer } = this.options;
    if (!showMask) return;

    if (viewer) {
      //如果是传了一个viewer 进来
      //整一个canvas 渲染
      const canvas = document.createElement('canvas');
      canvas.width = this.containerData.width;
      canvas.height = this.containerData.height;
      this.viewBox.appendChild(canvas);
      this.previewBox = canvas;
      //设置canvas 监听
    } else {
      //如果是传了图片 则渲染图片
      const image = document.createElement('img');
      image.src = img;
      this.viewBox.appendChild(image);
      this.previewBox = image;
    }
  },

  renderPreview() {
    const { showMask, img, viewer } = this.options;
    if (!showMask) return;

    const { containerData, cropBoxData } = this;
    const { width, height } = containerData;
    const left = cropBoxData.left;
    const top = cropBoxData.top;

    if (!this.cropped || this.disabled) {
      return;
    }

    set(
      this.previewBox,
      Object.assign(
        {
          width,
          height,
        },
        getTransforms(
          Object.assign({
            translateX: -left,
            translateY: -top,
          })
        )
      )
    );
  },
};
