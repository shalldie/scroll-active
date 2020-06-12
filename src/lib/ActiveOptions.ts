/**
 * scroll active 初始化配置
 *
 * @export
 * @class ActiveOptions
 */
export default class ActiveOptions {
    /**
     * 触发 active 时给元素添加的 className
     *
     * @memberof ActiveOptions
     */
    activeClass? = 'active';
    /**
     * 触发 active 的偏移量
     *
     * @memberof ActiveOptions
     */
    offset? = 0;
    /**
     * 点击导航，是否改变 hash
     *
     * @memberof ActiveOptions
     */
    hash? = false;
    /**
     * active 项改变时触发
     *
     * @memberof ActiveOptions
     */
    update?: (id: string) => void;
}
