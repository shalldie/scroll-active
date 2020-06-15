# vue-scroll-active

[![npm](https://img.shields.io/npm/v/vue-scroll-active)](https://www.npmjs.com/package/vue-scroll-active)
[![file size](https://img.shields.io/github/size/shalldie/scroll-active/dist/vue-scroll-active.js)](https://github.com/shalldie/scroll-active)
[![Build Status](https://travis-ci.org/shalldie/scroll-active.svg?branch=master)](https://travis-ci.org/shalldie/scroll-active)

A vue component for making navigation elements active as you scroll, a wrapper of [scroll-active][scroll-active] .

在滚动时激活对应导航的 vue 组件，封装自 [scroll-active][scroll-active] 。

## Installation

    npm install vue-scroll-active --save

## Usage

```html
<!-- nav bar -->
<div class="navbar">
    <VueScrollActive offset="40" :hash="true" @update="handleNavbarChange">
        ...
        <span data-scroll-active="menuOne">menu one</span>
    </VueScrollActive>
</div>

<!-- main page -->
<div class="container">
    ...
    <div id="menuOne"></div>
</div>
```

```ts
// window
// const VueScrollActive = window['VueScrollActive'];
// commonjs like
// const VueScrollActive = require('vue-scroll-active');
// es module, typescript
import VueScrollActive from './VueScrollActive.vue';

export default {
    components: {
        VueScrollActive
    },
    methods: {
        handleNavbarChange(id) {
            console.log('current active id is ' + id);
        }
    }
};
```

Add `data-scroll-active` to the navigation menu and assign an element id. When the page scrolls to the element, it will add `active` to the class of the navigation menu.

At the same time, clicking the navigation menu will also make the page scroll to the corresponding element position.

在导航菜单上添加 `data-scroll-active` ，赋值一个元素 id，在页面滚动到该元素的时候，就会给导航菜单的 class 添加 `active`。

同时点击该导航菜单也会让页面滚动到对应元素位置。

## Props

| name        |   type    | default  | description                                                      |
| :---------- | :-------: | :------: | :--------------------------------------------------------------- |
| activeClass | `string`  | `active` | class used for navigation activation <br> 导航激活时使用的 class |
| offset      | `number`  |   `0`    | offset used to activate navigation <br> 距离激活导航使用的偏移量 |
| hash        | `boolean` | `false`  | offset used to activate navigation <br> 距离激活导航使用的偏移量 |

## Event

| name   | arguments |                                    description                                    |
| :----- | :-------: | :-------------------------------------------------------------------------------: |
| update |   `id`    | event emit when a navigation change is active <br> 在激活的导航变更时，触发的事件 |

## Enjoy it! :D

[scroll-active]: https://github.com/shalldie/scroll-active
