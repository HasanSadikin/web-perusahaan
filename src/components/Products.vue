<script setup>
import { ref, computed } from 'vue'; 
import product1 from '../images/product-1-compress.jpg';
import product2 from '../images/product-2-compress.jpg';
import product3 from '../images/product-3-compress.jpg';

const detailFlag = ref(false)

const products = [
    {
        name: 'Coconut',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae?',
        image: product1.src,
    },
    {
        name: 'Nutmeg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae!',
        image: product2.src,
    },
    {
        name: 'Clove',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae,',
        image: product3.src,
    },
]

const toggleDetails = () => {
    detailFlag.value = !detailFlag.value
}

const currentIndex = ref(0)

const nextSlide = () => 
{
    if (currentIndex.value < products.length - 1) 
    {
        currentIndex.value++;
        currProduct.value = products[currentIndex.value % products.length]
    }
}

const prevSlide = () =>
{
    if (currentIndex.value > 0)
    {
        currentIndex.value--;
        currProduct.value = products[currentIndex.value % products.length]
    }
}

const currProduct = ref(products[currentIndex.value % products.length]);

</script>

<template>
    <div class="carousel relative h-screen w-screen bg-white overflow-hidden">
        <!-- IMAGE -->
        <div class="slides h-full w-full" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="slide h-full w-full flex flex-col" v-for="(product, index) in products" :key="index">
                <img :src="product.image" class="h-full w-full object-cover" alt="">
            </div>
        </div>
        
        <!-- BOTTOM CARD -->
        <span class="fade absolute bottom-40 left-0 w-full h-36"></span>
        <div class="absolute bottom-0 left-0 w-full h-40 bg-secondary px-5 text-white">
            <h2 class="text-3xl font-bold">{{ currProduct.name }}</h2>
            <p class="pt-2 pb-5 text-sm">{{ currProduct.desc }}</p>
            <button class="border-2 rounded-md text-white px-10 py-2" @click="toggleDetails">See Details</button>
        </div>

        <!-- DETAILS -->
        <div :class="['bg-secondary absolute w-screen h-5/6 ease-in-out duration-300 flex flex-col px-5 py-5 justify-end z-[2]', detailFlag ? 'bottom-0' : 'bottom-[-100%]' ]">
            <button class="border-2 rounded-md text-secondary bg-white px-10 py-2 font-semibold" @click="toggleDetails">Close Details</button>
        </div>

        <!-- ARROWS -->
        <div class="absolute mid left-abs w-12 h-12 fade-round rounded-full flex justify-center items-center ease-in-out duration-300" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="z-[1] text-white w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg> 
        </div>
        <div class="absolute mid right-abs w-12 h-12 fade-round rounded-full flex justify-center items-center ease-in-out duration-300" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="z-[1] text-white w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg> 
        </div>
    </div>

</template>

<style scoped>

.carousel {
    /* Add your carousel container styles here */
    overflow: hidden;
    position: relative;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 100%; /* Make each slide take up 100% of the container's width */
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 200px;  */
    /* background-color: #f0f0f0; */
    /* font-size: 24px;  */
  }

.fade-round{
    background-color: rgba(62, 137, 20, .5);
}

.fade-round:hover{
    background-color: rgba(62, 137, 20, 1);
}


.mid {
    top: 50%
}

.left-abs {
    left: 10px;
}

.right-abs {
    right: 10px;
}

.fade {
    background-image: linear-gradient(to top, rgba(62, 137, 20, 1), rgba(62, 137, 20, 0));
}
</style>