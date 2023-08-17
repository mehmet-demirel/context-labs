<template>
    <div class="client-card">
        <img :src="client.avatar" alt="client-card"
            :class="[{ 'client-card__thumb--display-lg-img': isDetailVisible }, 'client-card__thumb']">
        <div class="client-card__info">
            <h2 class="client-card__name" v-html="client.name"></h2>
            <span class="client-card__title">{{ client.title }}</span>
            <template v-if="isDetailVisible">
                <p class="client-card__quote">{{ client.quote }}</p>
                <span class="client-card__nationality">{{ client.nationality }}</span>
            </template>
            <button class="client-card__btn" @click="detailsClicked"> {{ btnLabel }}</button>
        </div>
    </div>
</template>

<script setup>
const { client } = defineProps(['client']);
const isDetailVisible = ref(false);
const detailsClicked = () => {
    if (isDetailVisible.value) {
        isDetailVisible.value = false;
    } else {
        isDetailVisible.value = true;
    }
}
const btnLabel = computed(() => {
    return isDetailVisible.value ? 'Hide Details' : 'Show Details';
});
</script>

<style lang="scss" scoped>
.client-card {
    display: flex;
    padding: 16px;
    gap: 16px;
    border-radius: 3px;
    align-items: flex-start;

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__thumb {
        width: 64px;

        &--display-lg-img {
            width: 128px;
        }
    }

    &__name {
        margin-bottom: 0;
        margin-top: 0;
    }

    &__quote {
        margin: 16px 0 4px 0;
    }

    &__btn {
        background-color: rgb(33, 95, 255);
        border: none;
        color: white;
        margin-top: 16px;
        padding: 4px;
        width: 100px;
    }
}
</style>