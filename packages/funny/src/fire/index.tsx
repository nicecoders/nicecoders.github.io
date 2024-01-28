import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    function init() {
        var c = canvasRef.current,
          $ = c.getContext('2d'),
          w = c.width = window.innerWidth / 2,
          h = c.height = window.innerHeight / 2,
          particles = []

      /**
       *  随机获取颜色
       *
       * @returns rgb(x,x,x)
       */
      function randomColor() {
          var r = 100 + Math.floor(Math.random() * 255),
              g = Math.floor(Math.random() * 150),
              b = Math.floor(Math.random() * 15)
          return 'rgb(' + r + ',' + g + ',' + b + ')'
      }

      function particle() {
          this.location = {
              x: w / 2,
              y: h / 2
          }
          this.speed = {
              x: -1.5 + Math.random() * 3,
              y: 1 + Math.random() * 5.5
          }
          this.life = 50
          this.radius = 1 + Math.floor(Math.random() * 25)
          this.color = randomColor()
          this.opacity = 1
          this.dead = false
          this.draw = function () {
              $.globalCompositeOperation = 'lighter'
              $.fillStyle = this.color
              $.beginPath()
              $.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2)
              $.globalAlpha = this.opacity
              $.fill()
              $.closePath()
          }
          this.update = function () {
              if (this.location.x < 0 || this.life == 0 || this.opacity === 0 || this.radius < 1) {
                  this.dead = true
              }
              if (!this.dead) {
                  this.location.x += this.speed.x
                  this.location.y -= this.speed.y
                  this.life--
                  this.opacity -= 0.05
                  this.radius--
              }
          }
      }

      // 将火焰置于背景之后
      function stage() {
          $.globalCompositeOperation = 'source-over'
          $.fillStyle = 'rgba(0, 0, 0, 1)'
          $.fillRect(0, 0, w, h)
      }

      // 重置画布大小
      function reset() {
          w = c.width = window.innerWidth / 2
          h = c.height = window.innerHeight / 2
      }

      function loop() {
          stage()
          var L = particles.length
          if (L < 100) {
              particles.push(new particle())
          }
          for (var i = 0; i < L; i++) {
              var p = particles[i]
              p.draw()
              p.update()
              if (p.dead) {
                  particles[i] = new particle()
              }
          }
          requestAnimationFrame(loop)
      }

      function _init() {
          reset()
          loop()
      }

      window.addEventListener('resize', reset)
      _init()
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
