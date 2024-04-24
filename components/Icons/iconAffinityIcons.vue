<template>
  <svg id="svgAffinityCS" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Affinity Creative Suite</title>
    <g class="groupAffinity">
      <transition name="affinityIconsFade" appear>
        <g class="affPublisherIcon" v-if="affPublisher" >
          <path class="back" d="M64 18.8c0-4.857-3.943-8.8-8.8-8.8H32.8c-4.857 0-8.8 3.943-8.8 8.8v22.4c0 4.857 3.943 8.8 8.8 8.8h22.4c4.857 0 8.8-3.943 8.8-8.8V18.8Z" />
          <path class="front" d="m32.15 29.59 10.103 17.497h-8.505a6.838 6.838 0 0 1-6.835-6.835v-1.624l5.238-9.039Zm3.718-6.417 13.808 23.914h-5.853L33.67 29.504a2.54 2.54 0 0 1 .002-2.542l2.195-3.789Zm3.64-6.281 17.176 29.75a6.812 6.812 0 0 1-2.43.445h-3.009l-14.59-25.27 2.853-4.925Zm5.047-3.98 16.44 28.474a6.844 6.844 0 0 1-3.093 4.646L40.294 15.535l1.52-2.622h2.74Zm1.57 0h8.128a6.838 6.838 0 0 1 6.835 6.836V38.83L46.124 12.913Z" />
        </g>
      </transition>
      <transition name="affinityIconsFade" appear>
        <g class="affDesignerIcon" v-if="affDesigner" >
          <path class="back" d="M64 18.8c0-4.857-3.943-8.8-8.8-8.8H32.8c-4.857 0-8.8 3.943-8.8 8.8v22.4c0 4.857 3.943 8.8 8.8 8.8h22.4c4.857 0 8.8-3.943 8.8-8.8V18.8Z" />
          <path class="front" d="M26.913 40.252v-1.624l14.9-25.715h5.814l-12.6 21.826 7.238 12.348h-8.517a6.813 6.813 0 0 1-4.803-1.974 6.815 6.815 0 0 1-2.032-4.86Zm22.136-27.34h5.204a6.795 6.795 0 0 1 4.75 1.923 6.815 6.815 0 0 1 2.085 4.913v14.33H47.496L42.11 24.95l6.94-12.038Zm-7.607 13.204 4.695 7.962h-6.249c-1.365-.003-2.014-1.813-1.506-2.622l3.06-5.34Zm2.398 20.971-6.83-11.65h24.078v4.816a6.838 6.838 0 0 1-6.835 6.834H43.84Z" />
        </g>
      </transition>
      <transition name="affinityIconsFade" appear>
        <g class="affPhotoIcon" v-if="affPhoto" >
          <path class="back" d="M64 18.8c0-4.857-3.943-8.8-8.8-8.8H32.8c-4.857 0-8.8 3.943-8.8 8.8v22.4c0 4.857 3.943 8.8 8.8 8.8h22.4c4.857 0 8.8-3.943 8.8-8.8V18.8Z" />
          <path class="front" d="m39.668 29.225 1.628-2.82c.242-.419.69-.677 1.173-.677h3.063c.484 0 .93.258 1.173.678l1.628 2.82c.242.419.242.935 0 1.354l-1.628 2.82c-.242.42-.69.678-1.173.678h-3.063c-.483 0-.93-.259-1.173-.678l-1.628-2.82a1.354 1.354 0 0 1 0-1.355Zm.6-13.79 5.238 8.934H35.102l5.167-8.935Zm20.75 18.662H47.643l11.292-19.262a6.815 6.815 0 0 1 2.085 4.913v14.35Zm-3.05-20.04L49.42 28.641l-8.451-14.417.758-1.311h12.457a6.8 6.8 0 0 1 3.785 1.144Zm-8.77 33.03-6.829-11.65h18.65v4.815a6.838 6.838 0 0 1-6.835 6.835h-4.985Zm-20.323-1.974a6.814 6.814 0 0 1-2.031-4.86V38.65l7.43-12.85h5.922l-11.32 19.312Zm1.071.865 8.57-14.619 9.22 15.728H33.679a6.8 6.8 0 0 1-3.733-1.11Z" />
        </g>
      </transition>
    </g>
  </svg>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const affDesigner = ref(true)
  const affPhoto = ref(false)
  const affPublisher = ref(false)
  
  let currentIndex = 0
  const affinityItems = [affDesigner, affPhoto, affPublisher]

  const rotateItems = () => {
    // Hide the current item
    affinityItems[currentIndex].value = false;

    // Move to the next item
    currentIndex = (currentIndex + 1) % affinityItems.length;

    // Show the next item after a short delay for transition
    setTimeout(() => {
      affinityItems[currentIndex].value = true;
    }, 50); // Adjust this delay as needed for transition speed
  };

  onMounted(() => {
    // Initially show only the first item without delay
    affinityItems[0].value = true;

    // Start rotating icons
    setInterval(rotateItems, 5000);
  })
  
</script>

<style scoped>

  svg {
    width: 88px;

    &:hover {
      @apply cursor-pointer;
    }
  }

  #svgAffinityCS { 
    position: relative;
    
    .groupAffinity {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(0%, 0%);
    }
    
    .affDesignerIcon, .affPhotoIcon, .affPublisherIcon {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: center;
      z-index: 200;
    }
    
    .affPublisherIcon {
      .front { 
        fill: #FFA869; 
      }
      .back {
        fill: #891B26;
        stroke: hsla(0, 0%, 100%, 0.5);
        stroke-width: .5px;
      }
    }
    
    .affDesignerIcon {

      .front { 
        fill: #5CD6FB; 
      }
      .back {
        fill: #134881; 
        stroke: hsla(0, 0%, 100%, 0.5);
        stroke-width: .5px;
      }
    }
    
    .affPhotoIcon {
      .front { 
        fill: #F69BFF; 
      }
      .back {
        fill: #4E3188; 
        stroke: hsla(0, 0%, 100%, 0.5);
        stroke-width: .5px;
      }
    }
   
    &:hover .groupAffinity {

      .affDesignerIcon, .affPhotoIcon, .affPublisherIcon{
        /* opacity: 1; */
      }
      
    }
  }
  
  .affinityIconsFade-enter-from, 
  .affinityIconsFade-leave-to {
    opacity: 0;
    z-index: 50;
    transform: scale(0);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; 
  }

  .affinityIconsFade-enter-to, 
  .affinityIconsFade-leave-from {
    opacity: 1; 
    z-index: 100;
    transform: scale(1);
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }

</style>
