<template>
    <div id="GoodList">
        <h1>I am another page</h1>
        <a>written by {{ author }}</a>
        <p>Thanks to <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    </div>
</template>

<script>
    export default {
        name: "GoodList",
        data() {
            return {
                author: "Wechat ID jinkey-love",
                articles: [],
            }
        }
    }
</script>

<style scoped>

</style>