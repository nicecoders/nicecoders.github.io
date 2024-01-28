/**
 * 星空初始化
 */
class NightSky {
    opt: any;
    ctx: any;
    starList: any[];
    constructor(opt) {
        this.opt = {
            width: 500,
            height: 500,
            num: 120,
            canvas: null,
            ...opt
        }
        this.opt.canvas.width = this.opt.width
        this.opt.canvas.height = this.opt.height
        this.ctx = this.opt.canvas && this.opt.canvas.getContext('2d')
        this.opt.canvas.style.backgroundColor = '#000'
        this.starList = []
        this.draw = this.draw
        this.init()
    }

    init() {
        this.drawStar()
        this.animate()
    }

    drawStar() {
        let { width, height, num } = this.opt

        for (let i = 0; i < num; i++) {
            this.starList[i] = new Star({
                maxRadius: 3,
                ctx: this.ctx,
                width,
                height
            })
            this.starList[i].draw()
        }
    }

    animate() {
        let ctx = this.ctx
        let starList = this.starList
        let { width, height } = this.opt

        function _move() {
            ctx.clearRect(0, 0, width, height)
            for (const i in starList) {
                starList[i].move()
            }
            window.requestAnimationFrame(_move)
        }

        window.requestAnimationFrame(_move)
    }

    draw(val) {
        return val
    }
}

class Star {
    ctx: any;
  x: number;
  y: number;
  height: any;
  width: any;
  speed: any;
  maxRadius: any;
  r: number;
  color: string;
    constructor(opt) {
        let { width, height, maxRadius = 2, ctx, speed = 0.5 } = opt
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.height = height
        this.width = width
        this.speed = speed
        this.maxRadius = maxRadius
        this.ctx = ctx
        this.r = Math.random() * maxRadius
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10
        this.color = `rgba(255, 255, 255, ${alpha})`
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.shadowBlur = this.r * 2
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r * Math.random(), 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()
    }

    move() {
        this.y -= this.speed
        if (this.y <= -10) {
            this.y = this.height + 10
        }
        this.draw()
    }
}

export default NightSky
