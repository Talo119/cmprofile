<template>
    <div class="container">
        <h2 class="display-1 accent--text mb-5">{{title}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    },
}
</script>

