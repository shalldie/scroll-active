import './dev.scss';
import ScrollActive from './ScrollActive';

window['sa'] = new ScrollActive({
    offset: 30,
    hash: true,
    update(id: string) {
        document.getElementById('tip')!.innerText = `当前active的id为：${id}`;
    }
});

export default {};
