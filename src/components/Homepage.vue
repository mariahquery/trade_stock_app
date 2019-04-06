<template>
    <article>
        <h1 style="margin-bottom: 20px">Trade or View your Portfolio</h1>
        <h6>You may Save & Load Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{ funds | currency}}</p>
    </article>
</template>

<script>
    export default {
        name: "Homepage",
        computed: {
            funds () {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>
    article {
        border: 1px solid #EAE9EB;
        padding: 20px;
        border-radius: 5px;
    }
</style>
