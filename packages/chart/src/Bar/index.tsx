import React, { FC, useEffect } from 'react';
import type { IBase } from '../common/BaseType'

export interface Ibar extends IBase {
  /**
   * @description       数据格式
   * @default           []
   */
  data: Array<{
    name: string
    value: number
  }>;

  /**
   * @description       类型
   * @default           canvas
   */
  type?: 'svg' | 'canvas'
}

const Bar: FC<Ibar> = ({
  className,
  data = [],
  type = 'canvas',
}) => {
  const chartWidth = 480
  const chartHeight = 200
  const margin = 15

  const containerWidth = chartWidth * margin * 2    // 容器宽度
  const containerHeight = chartHeight * margin * 2    // 容器高度

  const names = Array.from(data, d => d.name)   // 键
  const values = Array.from(data, d => d.value)  // 值
  const idx = Array.from(data, (_,i) => i)    // 索引

  /**
   * 计算每一个bar左下角顶点横坐标坐标
   * 位置和idx有关
   */
  const step = chartWidth / names.length  // 图标分割为数据宽
  const barWidth = step * 0.8 // 柱状图宽度
  const xs = Array.from(idx, i => i * step)

  const y = chartHeight // 左下角纵坐标

  const vMax = Math.max(...values)  // 最高的bar值
  const barHeights = Array.from(values, v => chartHeight * (v / vMax))

  // 获得每一个柱子的颜色
  const nameColor = {
    questions: "#5B8FF9",
    philosophers: "#61DDAA",
    schools: "#65789B",
  }

  const colors = Array.from(names, (name) => nameColor[name]);

  const initCanvas = () => {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement

    // 设置 canvas 的宽高
    canvas.style.width = chartWidth + 'px'
    canvas.style.height = chartHeight + 'px'

    // 设置画布宽高
    canvas.width = chartWidth * 2
    canvas.height = chartHeight * 2


    // 获得绘制上下文
    const ctx = canvas.getContext("2d")
    // 抵消画布宽高的影响
    ctx.scale(2, 2)
    ctx.translate(margin, margin)

    for (const index of idx) {
      // 将图绘制出来
      const color = colors[index]
      const x = xs[index]
      const barHeight = barHeights[index]
      const value = values[index]

      // 绘制bar
      ctx.fillStyle = color
      ctx.fillRect(x, y - barHeight, barWidth, barHeight)

      // 绘制文字
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'white'
      ctx.font = '25px PingFangSC-Regular'
      ctx.fillText(value, x + barWidth / 2, y - barHeight / 2)
    }
  }

  const initSvg = () => {
    const svg = document.getElementById('barSvg')

    svg.style.width = chartWidth + 'px'
    svg.style.height = chartHeight + 'px'

    // 设置 svg 的坐标原点和大小
    svg.setAttribute('width', String(containerWidth))
    svg.setAttribute('height', String(containerHeight))
    svg.setAttribute('viewBox', [0, 0, chartWidth, chartHeight])

    // 创建一个 g 元素用于平移
    const g = _createSVGElement('g')
    g.setAttribute('transform', `translate(${margin}, ${margin})`)
    svg.appendChild(g)

    for (const index of idx) {
      // 取得对应的属性
      const color = colors[index]
      const x = xs[index]
      const barHeight = barHeights[index]
      const value = values[index]

      // 绘制 bar
      const rect = _createSVGElement('rect')
      rect.setAttribute('x', x)
      rect.setAttribute('y', y - barHeight)
      rect.setAttribute('fill', color)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('height', barHeight)
      g.appendChild(rect)

      // 绘制文字
      const text = _createSVGElement('text')
      text.textContent = String(value)
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('fill', 'white')
      text.setAttribute('font-family', 'PingFangSC-Regular')
      text.setAttribute('font-size', 25)
      text.setAttribute('alignment-baseline', 'middle')
      text.setAttribute('x', x + barWidth / 2)
      text.setAttribute('y', y - barHeight / 2)

      g.appendChild(text)
    }
  }

  const _createSVGElement = (type) => {
    return document.createElementNS('http://www.w3.org/2000/svg', type) as SVGElement
  }

  useEffect(() => {
    if (type === 'svg') {
      initSvg()
    } else {
      initCanvas()
    }
  }, [])

  return (
    <div className={className}>
      {type === 'canvas' ?
        <canvas id="barChart"></canvas>
        :
        <svg id="barSvg"></svg>
      }
    </div>
  )
}

export default Bar
