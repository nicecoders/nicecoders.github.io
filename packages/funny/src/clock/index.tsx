// @ts-nocheck
import React, { useRef, useEffect } from 'react';

export default () => {
    const clockRef = useRef()

    function clock() {
        var theCanv = clockRef.current;
        var theCanvObject = theCanv.getContext('2d');
        var x = 200;
        var y = 200;

        startTime();

        function startTime() {

            //分秒刻度和表盘
            theCanvObject.lineWidth = 1;
            for (var i = 0; i < 60; i++) {
                drawArc(150, i*6, (i+1)*6);
            }
            drawArc(145, 0, 360, true);

            //时刻度
            theCanvObject.lineWidth = 2;
            for (var i = 0; i < 12; i++) {
                drawArc(150, i*30, (i+1)*30);
            }
            drawArc(140, 0, 360, true);

            //针
            drawHand(getTime().hour,5,60,'#ECFC00');
            drawHand(getTime().min,4,100,'#00BB3F');
            drawHand(getTime().sec,3,130,'#D60062');

            setInterval(function () {
                drawArc(135,0,360,true);
                drawHand(getTime().hour,5,60,'#ECFC00');
                drawHand(getTime().min,4,100,'#00BB3F');
                drawHand(getTime().sec,3,130,'#D60062');
            },1000);
        }

        function drawArc(iRadius, iBeginAngle, iEndAngle, ifClear) {
            var beginRadian = iBeginAngle*Math.PI/180;
            var endRadian = iEndAngle*Math.PI/180;

            theCanvObject.beginPath();      //创建一个路径
            theCanvObject.moveTo(x, y);     //将路径移到x，y
            theCanvObject.arc(x, y, iRadius, beginRadian, endRadian, false);
                                            //画弧
            !ifClear && theCanvObject.stroke();

            if (ifClear) {
                theCanvObject.fillStyle = 'white';
                theCanvObject.fill();
            }

        }


        function drawHand(iAngle, iWidth, iLength, iColor) {

            theCanvObject.save();           //保存的是canvas的属性，不是截图
            theCanvObject.lineWidth = iWidth;
            theCanvObject.strokeStyle = iColor;
            drawArc(iLength, iAngle, iAngle);
            theCanvObject.restore();        //弹出栈中的状态

        }

        //根据当前时间返回各个针要指的度数
        function getTime() {

            var jTime = {};
            var iNow = new Date();
            jTime.sec = -90 + iNow.getSeconds()*6;
            jTime.min = -90 + iNow.getMinutes()*6 + iNow.getSeconds()/20;
            jTime.hour = -90 + iNow.getHours()*30 + iNow.getMinutes()/2;

            return jTime;
        }
    }

    useEffect(() => {
        clock()
    }, [])

    return (
        <div>
            <canvas ref={clockRef} width="600" height="600" />
        </div>
    )
}
