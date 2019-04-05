<template>
    <article>
        <h1 style="margin-bottom: 20px">Trade or View your Portfolio</h1>
        <p>You may Save & Load Data</p><br>
        <p>Click on 'End Day' to begin a new Day</p>
        <hr>
        <h4><strong>Your Funds: {{ $store.getters.funds }} €</strong></h4>
        <input @input="changed" type="number">
    </article>
</template>

<script>
    export default {
        name: "Homepage",
        methods: {
            changed (event) {
                this.$store.commit('change', event.target.value)
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