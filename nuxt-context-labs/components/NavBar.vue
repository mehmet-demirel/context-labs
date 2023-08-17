<template>
    <header class="nav-bar">
        <nav class="nav-bar__nav">
            <a href="https://contextlabs.com" class="nav__logo-link">
                <div class="nav-bar__logo">
                    <svg class="logo" viewBox="0 0 81 80" style="height: 84px; width: 84px;">
                        <defs>
                            <mask>
                                <rect width="100%" height="100%" fill="white"></rect>
                                <path class="logo__inner" vector-effect="non-scaling-stroke"
                                    d="M36.0284 20.1633C38.637 18.268 42.1695 18.268 44.7782 20.1633L57.6131 29.4885C60.2218 31.3838 61.3134 34.7433 60.317 37.81L55.4145 52.8984C54.418 55.9651 51.5602 58.0415 48.3357 58.0415H32.4708C29.2463 58.0415 26.3885 55.9652 25.3921 52.8985L20.4896 37.81C19.4931 34.7433 20.5847 31.3838 23.1934 29.4885L36.0284 20.1633Z"
                                    fill="black"></path>
                            </mask>
                        </defs>

                        <g mask="url(#hole)">
                            <path
                                d="M15.0379 21.344L50.0966 9.96545L50.1017 9.97238L50.1013 9.97399L71.7524 39.8033L71.7533 39.8033L71.7564 39.8076L50.0855 69.6283L50.0858 69.6296L50.0848 69.6293L50.0846 69.6296L50.0844 69.6291L15.0314 58.2185L15.0314 58.2132L15.0318 58.2128L15.0312 58.2131L15.0384 21.3529L15.0379 21.3525L15.0379 21.344Z"
                                fill="transparent"></path>
                            <path d="M50.0861 69.6295L71.758 39.8075L71.7549 39.8032L40.4008 39.7879L50.0861 69.6295Z"
                                fill="#740937" class="maroon"></path>
                            <path d="M71.7549 39.8032L50.1026 9.97232L40.4008 39.7879L71.7549 39.8032Z" fill="#FD4E56"
                                class="red"></path>
                            <path
                                d="M50.0976 9.96539L15.0388 21.3439L15.0388 21.3524L40.4008 39.7879L50.1026 9.97232L50.0976 9.96539Z"
                                fill="#215FFF" class="blue"></path>
                            <path d="M15.0388 21.3524L15.0317 58.2131L40.4008 39.7879L15.0388 21.3524Z" fill="#48BD64"
                                class="light-green"></path>
                            <path d="M15.0317 58.2184L50.0861 69.6295L40.4008 39.7879L15.0317 58.2131L15.0317 58.2184Z"
                                fill="#BAE6FF" class="sky-blue"></path>
                        </g>
                    </svg>
                </div>
            </a>
            <ul class="nav-bar__list">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-bar {
    border-bottom: 1px solid black;
    padding: 0 16px;

    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__list {
        display: flex;
        gap: 24px;
        list-style: none;
    }

    &__list a {
        color: black;
        font-weight: 500;
        text-decoration: none;
    }

    &__list a:hover {
        text-decoration: underline;
    }
}
</style>