# scroll-active

[![npm](https://img.shields.io/npm/v/scroll-active?logo=npm&style=flat-square)](https://www.npmjs.com/package/scroll-active)
[![file size](https://img.shields.io/github/size/shalldie/scroll-active/dist/scroll-active.js?style=flat-square)](https://github.com/shalldie/scroll-active)
[![Build Status](https://img.shields.io/github/actions/workflow/status/shalldie/scroll-active/ci.yml?branch=master&label=build&logo=github&style=flat-square)](https://github.com/shalldie/scroll-active/actions)

A lightweight lib for making navigation elements active as you scroll.

在滚动时激活对应导航的轻量级库。

## Related

[v-scroll-active][v-scroll-active]: A version of vue component. Vue 版本。

## Live Demo

[live demo](https://shalldie.github.io/demos/scroll-active/)

## Installation

    npm install scroll-active --save

## Usage

```html
<!-- nav bar -->
<div class="navbar">
    ...
    <span data-scroll-active="menuOne">menu one</span>
</div>

<!-- main page -->
<div class="container">
    ...
    <div id="menuOne"></div>
</div>
```

```ts
// window
// const ScrollActive = window['ScrollActive'];
// commonjs like
// const ScrollActive = require('scroll-active');
// es module, typescript
import ScrollActive from 'scroll-active';

new ScrollActive({
    activeClass: 'active', // 激活导航使用的 class
    offset: 0, // 触发 active 元素的偏移量
    hash: false, // 点击变更导航后，改变 hash
    update(id) {
        // hook: 当 active id 改变当时候触发
    }
});
```

Add `data-scroll-active` to the navigation menu and assign an element id. When the page scrolls to the element, it will add `active` to the class of the navigation menu.

At the same time, clicking the navigation menu will also make the page scroll to the corresponding element position.

在导航菜单上添加 `data-scroll-active` ，赋值一个元素 id，在页面滚动到该元素的时候，就会给导航菜单的 class 添加 `active`。

同时点击该导航菜单也会让页面滚动到对应元素位置。

## Options

| name        |    type    |   default   | description                                                                                |
| :---------- | :--------: | :---------: | :----------------------------------------------------------------------------------------- |
| activeClass |  `string`  |  `active`   | class used for navigation activation <br> 导航激活时使用的 class                           |
| offset      |  `number`  |     `0`     | offset used to activate navigation <br> 距离激活导航使用的偏移量                           |
| hash        | `boolean`  |   `false`   | offset used to activate navigation <br> 距离激活导航使用的偏移量                           |
| update      | `Function` | `undefined` | callbacks triggered when a navigation change is active <br> 在激活的导航变更时，触发的回调 |

## Dispose

Sometimes you are using an `mvvm` lib, such as `react` or `vue`, you may need to call the `dispose` function and renew `ScrollActive`, if the nav items change.

在使用一些 `mvvm` 库的时候，如果组件的更新会影响导航元素，需要去释放资源并重新初始化该组件。

example:

```js
// react:
class ReactComponent extends React {
    componentDidMount() {
        this.sa = new ScrollActive();
    }

    componentDidUpdate() {
        this.sa.dispose();
        this.sa = new ScrollActive();
    }

    componentWillUnmount() {
        this.sa.dispose();
    }
}
```

Here is a version for vue: [v-scroll-active][v-scroll-active]

```js
// vue:
export default {
    mounted() {
        this.sa = new ScrollActive();
    },
    updated() {
        this.sa.dispose();
        this.sa = new ScrollActive();
    },
    beforeDestroy() {
        this.sa.dispose();
    }
};
```

## Enjoy it! :D

[v-scroll-active]: https://github.com/shalldie/scroll-active/tree/master/packages/v-scroll-active
