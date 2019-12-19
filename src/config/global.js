export const showBackIcon = (callback) => {
    // 获取document
    let documentBody = document.documentElement || document.body;
    let oldScrolloTop, requestFrame;

    // 监听滚动
    window.addEventListener('scroll', () => {
        showBackFunc();
    }, false);

    // 监听触摸开始
    // passive 监听器能保证的只有一点，那就是调用 preventDefault() 无效
    window.addEventListener('touchstart', () => {
        showBackFunc();
    }, {
        passive: true
    });

    // 监听触摸 移动
    window.addEventListener('touchmove', () => {
        showBackFunc();
    }, {
        passive: true
    });

    // 监听触摸 结束
    window.addEventListener('touchend', () => {

    }, {
        passive: true
    });

    const moveEnd = () => {
        // 函数节流
        // 将动画的频率和屏幕刷新频率设置一样
        // 参考:https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
        requestFrame = requestAnimationFrame(() => {
            if (documentBody.scrollTo !== oldScrolloTop) {
                oldScrolloTop = documentBody.scrollTo;
                // 递归调用
                moveEnd();
            } else {
                // 直到滑动距离和原始距离一样时取消
                cancelAnimationFrame(requestFrame);
            }
            showBackFunc();
        });
    };
    // 根据滚动到顶部的scrollTo距离来做处理
    const showBackFunc = () => {
        if (documentBody.scrollTop >= 200) {
            callback(true);
        } else {
            callback(false);
        }
    }
};

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode === 'float' ? parseFloat(target) : parseInt(target);
};

/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
    clearInterval(element.timer);
    //判断不同参数的情况
    if (duration instanceof Function) {
        callback = duration;
        duration = 400;
    } else if (duration instanceof String) {
        mode = duration;
        duration = 400;
    }

    //判断不同参数的情况
    if (mode instanceof Function) {
        callback = mode;
        mode = 'ease-out';
    }

    //获取dom样式
    const attrStyle = attr => {
        if (attr === "opacity") {
            return Math.round(getStyle(element, attr, 'float') * 100);
        } else {
            return getStyle(element, attr);
        }
    };
    //根字体大小，需要从此将 rem 改成 px 进行运算
    const rootSize = parseFloat(document.documentElement.style.fontSize);

    const unit = {};
    const initState = {};

    //获取目标属性单位和初始样式值
    Object.keys(target).forEach(attr => {
        if (/[^\d^\.]+/gi.test(target[attr])) {
            unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
        } else {
            unit[attr] = 'px';
        }
        initState[attr] = attrStyle(attr);
    });

    //去掉传入的后缀单位
    Object.keys(target).forEach(attr => {
        if (unit[attr] === 'rem') {
            target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
        } else {
            target[attr] = parseInt(target[attr]);
        }
    });

    let flag = true; //假设所有运动到达终点
    const remberSpeed = {}; //记录上一个速度值,在ease-in模式下需要用到
    element.timer = setInterval(() => {
        Object.keys(target).forEach(attr => {
            let iSpeed = 0; //步长
            let status = false; //是否仍需运动
            let iCurrent = attrStyle(attr) || 0; //当前元素属性址
            let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
            let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
            switch (mode) {
                case 'ease-out':
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration * 20 / 400;
                    break;
                case 'ease-in':
                    let oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
                    remberSpeed[attr] = iSpeed;
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
            }
            if (mode !== 'ease-in') {
                iSpeed = (target[attr] - speedBase) / intervalTime;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            }
            //判断是否达步长之内的误差距离，如果到达说明到达目标点
            switch (mode) {
                case 'ease-out':
                    status = iCurrent !== target[attr];
                    break;
                case 'linear':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent !== target[attr];
            }

            if (status) {
                flag = false;
                //opacity 和 scrollTop 需要特殊处理
                if (attr === "opacity") {
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                } else if (attr === 'scrollTop') {
                    element.scrollTop = iCurrent + iSpeed;
                } else {
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            } else {
                flag = true;
            }

            if (flag) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            }
        })
    }, 20);
};

// 本地化存储
export const setLocalStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

// 本地化获取
export const getLocalStore = (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

// 本地化删除
export const removeLocalStore = (name) => {
    if (!name) return;
    return window.localStorage.removeItem(name);
}
/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
export const isPhoneNum = (str) => {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
export const getCookie = (name) => {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
export const setCookie = (name, value, days) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
export const removeCookie = (name) => {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

/**
 * 
 * @desc 获取浏览器类型和版本
 * @return {String} 
 */
export const getExplore = () => {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
}

/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
export const stringfyQueryString = (obj) => {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}


// 版本信息
export const _VERSION_ = "1.0.0";