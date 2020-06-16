<template>
    <div>
        <slot />
    </div>
</template>

<script>
import ScrollActive from 'scroll-active';
const INSTANCE_KEY = '__scroll_active__';

export default {
    name: 'v-scroll-active',
    props: {
        activeClass: {
            default: 'active'
        },
        offset: {
            default: 0
        },
        hash: {
            default: false
        }
    },
    methods: {
        initScrollActive() {
            this[INSTANCE_KEY] = new ScrollActive({
                wrapper: this['$el'],
                activeClass: this.activeClass,
                offset: this.offset,
                hash: this.hash,
                update: id => {
                    this.$emit('update', id);
                }
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initScrollActive();
        });
    },
    beforeUpdate() {
        if (this[INSTANCE_KEY]) {
            this[INSTANCE_KEY].dispose();
            this[INSTANCE_KEY] = undefined;
        }
    },
    updated() {
        this.initScrollActive();
    },
    beforeDestroy() {
        if (this[INSTANCE_KEY]) {
            this[INSTANCE_KEY].dispose();
            this[INSTANCE_KEY] = undefined;
        }
    }
};
</script>
