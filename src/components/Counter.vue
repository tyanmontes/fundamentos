<template>
    <h2>Counter</h2>
    <p>{{ counter }} <sup>2</sup> =  {{squareCounter}}</p>
</template>

<script>
    export default {
        name: 'Counter',

        data(){

            return{
                counter: 5

            }
        },
        methods: {

        },
        computed: {
            squareCounter() {
                console.log('computed squareCounter')
                return this.counter * this.counter
            }
        }
    }
</script>

<style>

</style>