<template>
    <div id="app">
        <div class="container">
            <div v-for="(id, index) in idList" :key="index" :id="id" class="row">{{ id }}</div>
        </div>
        <div class="top-menu">
            <VueScrollActive offset="40" :hash="true">
                <div v-for="(id, index) in idList" :key="index" class="item" :data-scroll-active="id">{{ id }}</div>
            </VueScrollActive>
        </div>
        <div class="right-menu">
            <VueScrollActive offset="40" :hash="true" @update="handleNavbarChange">
                <div id="tip">{{ tip }}</div>
                <div v-for="(id, index) in idList" :key="index" class="item" :data-scroll-active="id">{{ id }}</div>
            </VueScrollActive>
        </div>
    </div>
</template>

<script>
import VueScrollActive from './VueScrollActive.vue';

export default {
    components: {
        VueScrollActive
    },
    data() {
        return {
            tip: '',
            idList: ['section 1', 'section 2', 'section 3', 'section4', '第五项', '第 六 项']
        };
    },
    methods: {
        handleNavbarChange(id) {
            this.tip = `当前 active id 为：${id}`;
        }
    }
};
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    color: #333;
}

.container {
    position: relative;
    width: 500px;
    margin: 100px auto;
    padding-bottom: 500px;

    .row {
        min-height: 300px;
        margin-bottom: 30px;
        background: #ddd;
    }
}

.top-menu {
    background: #2ad;
    padding: 0 50px;
    color: #fff;
    position: fixed;
    // width: 280px;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    .item {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        margin: 0 10px;

        &.active {
            color: #f00;
        }
    }
}

.right-menu {
    position: fixed;
    width: 280px;
    left: 50%;
    top: 100px;
    margin-left: 300px;

    .item {
        margin-top: 20px;
        cursor: pointer;

        &.active {
            color: #f00;
        }
    }
}
</style>
