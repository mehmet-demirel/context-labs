<template>
    <div class="client-card-list" v-for="client in clients">
        <ClientCard class="client-card-list__item" :client="client" />
    </div>
</template>

<script setup>
const { clients } = defineProps(['clients']);
</script>

<style lang="scss" scoped>
.client-card-list {
    &__item {
        margin-bottom: 16px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    }
}
</style>