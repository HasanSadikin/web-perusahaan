<script setup>
import { ref, onBeforeUnmount } from 'vue'

const toggleClass = ref(false)

const toggleMenu = () => {
    toggleClass.value = !toggleClass.value
}

const props = defineProps(['color', 'path'])

const yValue = window.screen.height
const navActive = ref(false)

const handleScroll = () => {
    if(window.scrollY > yValue)
    {
        navActive.value = true
    }else{
        navActive.value = false
    }
}

onBeforeUnmount(() => [
    window.removeEventListener('scroll', handleScroll)
])

window.addEventListener('scroll', handleScroll)
</script>

<template>
    <div class="sticky top-0 z-10">
        <div :class="['absolute w-screen h-16 bg-yellow-500 flex justify-start items-center px-5 drop-shadow-md ease-in-out duration-300', navActive ? 'bg-secondary' : '']">
            <h2 :class="['text-2xl font-bold', props.color]">ANG</h2>
        </div>
        <div :class="[`absolute top-0 ease-in-out duration-200 min-h-screen w-screen bg-secondary flex-col justify-center items-center`, toggleClass ? 'left-0' : 'left-[-100%]']">
            <h1 class="h-32 flex justify-center items-center text-5xl font-bold text-white">ANG</h1>
            <ul class="flex flex-col justify-center items-center text-white">
                <a href="/">
                    <li :class="['text-lg font-semibold h-16 flex w-screen justify-center items-center px-3', props.path == '/' ? 'active' : '']">
                        Home
                    </li>
                </a>
                <a href="/products">
                    <li :class="['text-lg font-semibold h-16 flex w-screen justify-center items-center px-3', props.path == '/products' ? 'active' : '']">
                        Our Products
                    </li>
                </a>
                <a href="/about-us">
                    <li :class="['text-lg font-semibold h-16 flex w-screen justify-center items-center px-3', props.path == '/about-us' ? 'active' : '']">
                        About Us
                    </li>
                </a>
                <a href="/contact-us">
                    <li :class="['text-lg font-semibold h-16 flex w-screen justify-center items-center px-3', props.path == '/contact-us' ? 'active' : '']">
                        Contact Us
                    </li>
                </a>
            </ul>
        </div>
        <div class="h-16 w-screen absolute top-0 right-0 flex justify-end items-center px-4">
            <div :class="['w-10 h-10 flex justify-center items-center z-[11]', props.color]" @click="toggleMenu">
                <svg v-if="toggleClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                class="w-10 h-10 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-if="!toggleClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style>
.hide {
    background-color: rgba(0, 0, 0, 0);
}

.active
{
    background-color: white;
    color: #3E8914;
}
</style>
