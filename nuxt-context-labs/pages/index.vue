<template>
    <div class="home-page">
        <h1>Context Labs JS Homework</h1>
        <div class="home-page__wrapper">
            <div class="home-page__left-col">
                <p>Did a basic Nuxt setup with three pages with a default layout that has a nav and footer included.
                    Used BEM for CSS styling mostly in the ClientCard.vue and CLientCardList.vue components.
                </p>
                <p>The home page makes an api call to grab the JSON you provided.
                    The inital JSON object is passed as a prop to ClientCardList file that loops the data and passes data to
                    the ClientCard component</p>

                <p>Inside the ClientCard component button label, details, and image size are controlled with isDetailVisible
                    boolean which is toggled with button click.
                </p>
                <p>The filtering happens inside the filterList function that generates a filtered array of objects.
                    Array filter method is used to look at name and title cause detials is hiddent.
                    During filter name and title are set to lowercase and html tags removed </p>
                <p>The computed property is always monitoring the input field value and if there is any character is uses
                    the filtered array object to populate ClientCardList.vue </p>
            </div>
            <div class="home-page__right-col">
                <h2>Clients</h2>
                <input class="home-page__filter" v-model='filterInput' @input="filterList" placeholder="Filter" />
                <ClientCardList :clients="clients" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { data: list } = await useFetch('/api/clients/');

if (!list.value) {
    throw createError({ statusCode: 404, statusMessage: 'Something went wrong', fatal: true })
}

const filterInput = ref('');
const filteredList = ref([]);

const filterList = (event) => {
    const searchStr = event.target.value.toLowerCase();
    const regEx = new RegExp(/(<([^>]+)>)/, 'ig');
    filteredList.value = list.value.clients.filter((item) => {
        return item.name?.toLowerCase().replace(regEx, '').includes(searchStr) || item.title?.toLowerCase().replace(regEx, '').includes(searchStr);
    })
}

const clients = computed(() => {
    return filterInput.value.length > 0 ? filteredList.value : list?.value?.clients;
});

</script>
  
<style lang="scss" scoped>
.home-page {
    max-width: 1020px;
    margin: 0 auto;

    padding: 16px;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    &__right-col h2 {
        margin-top: 0
    }

    &__filter {
        margin-bottom: 8px;
        padding: 8px;
        width: 100%;
    }

    @media screen and (min-width: 640px) {
        &__wrapper {
            flex-direction: row;
        }

        &__right-col {
            flex-basis: 375px;
            flex-shrink: 0;
        }
    }
}
</style>