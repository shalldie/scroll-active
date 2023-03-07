import ActiveOptions from './lib/ActiveOptions';
import { getScrollTop, getAbsPoint, tweenScroll, pushState } from './lib/utils';

const ATTR_SCROLL_ACTIVE = 'data-scroll-active'; // 要监听的 menu item，需要添加这个 attribute

export default class ScrollActive {
    private options: ActiveOptions;

    private activeIndex = -1; // 当前活动的索引

    private idList: string[] = []; // id 列表

    private navbarList: HTMLElement[] = []; // 所有菜单元素

    private targetList: HTMLElement[] = []; // 页面中要监听的所有元素

    constructor(options: Partial<ActiveOptions> = {}) {
        this.options = Object.assign({}, new ActiveOptions(), options);
        this.initialize();
    }

    private initialize() {
        // init listener
        window.addEventListener('scroll', this.handleScroll);

        const wrapper = this.options.wrapper;

        this.navbarList = [].slice.call(wrapper.querySelectorAll(`[${ATTR_SCROLL_ACTIVE}]`)) as HTMLElement[];
        this.idList = this.navbarList.map(ele => ele.getAttribute(ATTR_SCROLL_ACTIVE)) as string[];
        this.targetList = this.idList.map(id => document.getElementById(id)) as HTMLElement[];

        this.navbarList.forEach(ele => {
            ele.addEventListener('click', this.handleMenuClick);
        });

        this.handleScroll();
    }

    private handleMenuClick = (ev: MouseEvent) => {
        const el = ev.currentTarget as HTMLElement;
        const id = el.getAttribute(ATTR_SCROLL_ACTIVE) as string;
        const targetIndex = this.idList.indexOf(id);

        const targetEl = this.targetList[targetIndex];
        if (!targetEl) {
            return;
        }

        tweenScroll(getAbsPoint(targetEl).y - this.options.offset, 500);
        this.options.hash && pushState(id);
    };

    private handleScroll = () => {
        const scrollTop = getScrollTop();
        let activeIndex = 0;

        for (let i = 0; i < this.targetList.length; i++) {
            const targetEl = this.targetList[i];
            if (!targetEl) {
                continue;
            }
            const offsetTop = getAbsPoint(targetEl).y;
            if (scrollTop >= offsetTop - this.options.offset) {
                activeIndex = i;
            } else {
                break;
            }
        }
        this.update(activeIndex);
    };

    private update(activeIndex: number) {
        if (this.activeIndex === activeIndex) {
            return;
        }

        const activeClass = this.options.activeClass;

        this.activeIndex = activeIndex;
        this.options.update && this.options.update(this.idList[activeIndex]);
        this.navbarList.forEach(ele => {
            ele?.classList.remove(activeClass);
        });
        this.navbarList[activeIndex]?.classList.add(activeClass);
    }
    /**
     * 释放资源
     *
     * @memberof ScrollActive
     */
    public dispose(): void {
        window.removeEventListener('scroll', this.handleScroll);
        this.navbarList.forEach(ele => {
            ele.removeEventListener('click', this.handleMenuClick);
        });
        this.idList = [];
        this.targetList = [];
        this.navbarList = [];
    }
}
