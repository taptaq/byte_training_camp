// 封装手势库(兼容PC和移动端)
// 常用事件：start，move，end。pressstart，pressend。tap。penstart，pan，panend
// 自定义事件：new CustomEvent（定义自定义事件），element.dispatchEvent（触发自定义事件）

function enableGesture(ele) {
    let context = {};

    let mouseType = Symbol('mouse');

    // 判断是否在移动端中
    // 移动端中直接使用touch事件
    if ('ontouchstart' in document) {
        ele.addEventListener('touchstart', (e) => {
            for (let touch of e.changedTouches) { //手指的坐标在changedTouches中
                context[touch.identifier] = {};
                onStart(touch, context[touch.identifier]);
            }
        })

        ele.addEventListener('touchmove', (e) => {
            for (let touch of e.changedTouches) { //手指的坐标在changedTouches中
                onMove(touch, context[touch.identifier]);
            }
        })
        ele.addEventListener('touchend', (e) => {
            for (let touch of e.changedTouches) { //手指的坐标在changedTouches中
                onEnd(touch, context[touch.identifier]);
                delete context[touch.identifier];
            }
        })
    }

    // pc端中使用mousedown相关事件
    else {
        ele.addEventListener('mousedown', (e) => {
            context[mouseType] = {};

            onStart(e, context[mouseType]);

            let move = (e) => {
                onMove(e, context[mouseType]);
            }

            let end = (e) => {
                onEnd(e, context[mouseType]);
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', end);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', end);
        })
    }

    // 封装start，move，end事件
    let onStart = (e, context) => {
        // 要把对应的坐标也合并到自定义事件对象中
        ele.dispatchEvent(Object.assign(new CustomEvent('start'), {
            clientX: e.clientX,
            clientY: e.clientY
        }));
        context.isTap = true;
        context.startX = e.clientX;
        context.startY = e.clientY;
        clearInterval(context.timeout);
        // 长按的情况
        context.timeout = setTimeout(() => {
            context.isTap = false;
            context.isPress = true;
            ele.dispatchEvent(Object.assign(new CustomEvent('longPressStart'), {
                clientX: e.clientX,
                clientY: e.clientY
            }));
        }, 500)
    }

    let onMove = (e, context) => {
        ele.dispatchEvent(Object.assign(new CustomEvent('move'), {
            clientX: e.clientX,
            clientY: e.clientY,
        }));

        //  根据移动距离判断是否发生了移动
        let disX = e.clientX - context.startX;
        let disY = e.clientY - context.startY;
        if (disX ** 2 + disY ** 2 > 100 && (!context.isPan)) { //用户移动超过10px才算发生了移动，并且之前没有发生过滑屏
            context.isPan = true;
            //取消长按
            if (context.isPress) {
                ele.dispatchEvent(Object.assign(new CustomEvent('longPressCancel'), {
                    clientX: e.clientX,
                    clientY: e.clientY
                }));
            }
            clearInterval(context.timeout);
            context.isTap = false;
            context.isPress = false;
            ele.dispatchEvent(Object.assign(new CustomEvent('panStart'), {
                clientX: e.clientX,
                clientY: e.clientY,
                startX: context.startX,
                startY: context.startY
            }));
            return;
        }
        // 已经在滑屏了
        if (context.isPan) {
            ele.dispatchEvent(Object.assign(new CustomEvent('pan'), {
                clientX: e.clientX,
                clientY: e.clientY,
                startX: context.startX,
                startY: context.startY
            }));
        }

    }

    let onEnd = (e, context) => {
        clearInterval(context.timeout);
        if (context.isPan) {
            ele.dispatchEvent(Object.assign(new CustomEvent('panEnd'), {
                clientX: e.clientX,
                clientY: e.clientY,
                startX: context.startX,
                startY: context.startY
            }));
            context.isPan = false;
        }

        if(context.isTap){
            ele.dispatchEvent(Object.assign(new CustomEvent('tap'), {
                clientX: e.clientX,
                clientY: e.clientY,
                startX: context.startX,
                startY: context.startY
            }))
            context.isTap=false;
        }

        if(context.isPress){
            ele.dispatchEvent(Object.assign(new CustomEvent('longPressEnd'), {
                clientX: e.clientX,
                clientY: e.clientY,
                startX: context.startX,
                startY: context.startY
            }))
            context.isPress=false;
        }


        ele.dispatchEvent(Object.assign(new CustomEvent('end'), {
            clientX: e.clientX,
            clientY: e.clientY
        }));
    }
}