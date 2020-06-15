import './dev.scss';
import ScrollActive from './ScrollActive';

window['saTop'] = new ScrollActive({
    wrapper: document.querySelector('.top-menu') as HTMLElement,
    offset: 30,
    hash: true
});

window['saRight'] = new ScrollActive({
    wrapper: document.querySelector('.right-menu') as HTMLElement,
    offset: 30,
    hash: true,
    update(id: string) {
        document.getElementById('tip')!.innerText = `当前active的id为：${id}`;
    }
});

export default {};
