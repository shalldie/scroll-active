<template>
    <div>
        <slot />
    </div>
</template>

<script>
import ScrollActive from 'scroll-active';

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
            this.sa = new ScrollActive({
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
        this.sa && this.sa.dispose();
    },
    updated() {
        this.initScrollActive();
    }
};
</script>
