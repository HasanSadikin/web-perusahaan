<template>
    <div class="carousel w-screen relative">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="slide w-full flex flex-col" v-for="(slide, index) in slides" :key="index">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full aspect-square">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-col items-center pt-5">
                <h5 class="text-2xl font-bold">{{ slide.name }}</h5>
                <h5 class="text-lg text-[#666]">{{ slide.title }}</h5>	
            </div>
        </div>
      </div>
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
  
  <script>
  export default {
    data() {
      return {
        slides: [
            {
                name: "Haznam Amirullah",
                title: "Direktur Utama"
            },
            {
                name: "Muhammad Sofyan Ays",
                title: "Wakil Direktur Utama"
            },
            {
                name: "Nur Rahma Azaliyah",
                title: "Direktur Bendahara"
            },
            {
                name: "Hasan Sadikin",
                title: "Direktur Informasi"
            },
            {
                name: "Muh. Syuyono Dharmo D. Ays",
                title: "Direktur SDM"
            },
        ],
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.slides.length - 1) {
          this.currentIndex++;
        }
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
  };
  </script>
  
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