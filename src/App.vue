<template>
    <div class="container">
        <router-view name="header"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>
