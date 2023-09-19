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
    <!-- <div class="sticky top-0 z-10">
        <div :class="['absolute w-screen h-16 flex justify-start items-center px-5 drop-shadow-md ease-in-out duration-300', navActive ? 'bg-secondary' : '']">
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
    </div> -->
    <div class="bg-yellow-500 sticky top-0 z-10">
        <div class="bg-yellow-500 h-16 md:w-5/6 md:px-0 px-5 flex items-center justify-between mx-auto nav">
            <a class="font-bold text-2xl" href="/">
                ANG
            </a>
            <ul :class="['absolute top-16 w-full h-screen bg-yellow-500 ease-in-out duration-300 md:h-fit md:w-fit md:flex md:items-center md:justify-center md:static md:py-0',
                        toggleClass ? 'left-0' : 'left-[-100%]']">
                <li :class="['px-3 text-lg py-2 text-center cursor-pointer md:py-0 font-semibold md:font-normal', props.path == '/' ? 'active' : '']">
                    <a href="/">
                        Home
                    </a>
                </li>
                <li :class="['px-3 text-lg py-2 text-center cursor-pointer md:py-0 font-semibold md:font-normal', props.path == '/about-us' ? 'active' : '']">
                    <a href="/about-us">
                        About Us
                    </a>
                </li>
                <li :class="['px-3 text-lg py-2 text-center cursor-pointer md:py-0 font-semibold md:font-normal', props.path == '/products' ? 'active' : '']">
                    <a href="/products">
                        Our Product
                    </a>
                </li>
                <li :class="['px-3 text-lg py-2 text-center cursor-pointer md:py-0 font-semibold md:font-normal', props.path == '/blogs' ? 'active' : '']">
                    <a href="/blogs">
                        Our Blog
                    </a>
                </li>
                <li :class="['px-3 text-lg py-2 text-center cursor-pointer md:py-0 font-semibold md:font-normal', props.path == '/contact-us' ? 'active' : '']">
                    <a href="/contact-us">
                        Contact Us
                    </a>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                class="w-10 h-10 cursor-pointer md:hidden" @click="toggleMenu">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </div>
</template>

<style>
.hide {
    background-color: rgba(0, 0, 0, 0);
}

.active
{
    background-color: black;
    color: white;
}
</style>

