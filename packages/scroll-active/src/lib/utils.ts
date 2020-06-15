import Task from 'tween-task';

/**
 * 获取当前滚动条高度
 *
 * @export
 * @returns {number}
 */
export function getScrollTop(): number {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

/**
 * 设置滚动条高度
 *
 * @export
 * @param {number} scrollTop 滚动条高度
 */
export function setScrollTop(scrollTop: number): void {
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
}

/**
 * 获取元素绝对位置
 *
 * @export
 * @param {HTMLElement} ele 元素
 * @returns {{x: number, y: number}}
 */
export function getAbsPoint(ele: HTMLElement): { x: number; y: number } {
    let x = ele.offsetLeft;
    let y = ele.offsetTop;
    while ((ele = ele.offsetParent as HTMLElement)) {
        x += ele.offsetLeft;
        y += ele.offsetTop;
    }
    return { x, y };
}

let task: Task<any>;

/**
 * 使用缓动函数滚动到某个位置
 *
 * @export
 * @param {number} to 目标位置
 * @param {number} duration 完成动作耗时
 * @returns {void}
 */
export function tweenScroll(to: number, duration: number): void {
    if (task) {
        task.dispose();
    }
    task = Task.run({
        from: {
            y: getScrollTop()
        },
        to: { y: to },
        duration,
        // Cubic easeInOut
        tween(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return (c / 2) * t * t * t + b;
            }
            return (c / 2) * ((t -= 2) * t * t + 2) + b;
        },
        onUpdate({ y }) {
            setScrollTop(y);
        }
    });
}

/**
 * 替换地址栏中的hash
 *
 * @export
 * @param {string} id
 */
export function pushState(id: string): void {
    const url = location.href.split('#')[0] + '#' + encodeURIComponent(id);
    history.pushState(null, '', url);
}
