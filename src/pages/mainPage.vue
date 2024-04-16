<script setup lang="ts">
  import degradadoA from '@/assets/degradadoaA.vue';
  import logoSaporiia from '@/assets/logoSaporiia.vue';
  import saporiIa from '@/assets/saporiIa.vue';
  import DegradadoB from '@/assets/degradadoB.vue';
  import { SparklesIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <nav class="w-full h-10 shadow flex pt-2 items-center">
    <logoSaporiia class="w-5 h-5 ml-4" /> <span class="px-2 font-semibold"> saporiia</span>
  </nav>
  <div class="flex flex-col w-full h-full">
    <div class="w-full h-full flex justify-center flex-col items-center">
      <degradadoA class="w-full h-full absolute -z-10 mt-60" />
      <h1
        class="xl:text-[7rem] lg:text-[5rem] md:text-[3.5rem] text-[1.5rem] font-regular mt-56 text-center"
      >
        ¡Deja que <span class="font-thin italic">Saporiia</span> <br />
        te inspire en la cocina!
      </h1>
      <button
        class="bg-black text-white rounded-xl px-5 py-3 flex mt-20 text-3xl items-center justify-center gap-5 hover:bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-colors"
        @click="$router.push({ name: 'Recipe' })"
      >
        <span>Comenzar a crear</span>
        <SparklesIcon class="w-8 h-8" />
      </button>
    </div>
    <div>
      <div class="flex w-full h-full p-20 mt-72 mb-60 gap-20">
        <div>
          <DegradadoB class="absolute -mt-72 -ml-20 -z-10" />
          <div class="text-3xl" data-taos-offset="400">
            Saporiia nace de la idea de fusionar la inteligencia artificial con la pasión por la
            cocina. ¡Descubre un universo de sabores adaptados a tu estilo de vida con nuestras
            recomendaciones personalizadas de recetas!
          </div>
        </div>
        <div>
          <saporiIa class="w-72 xl:w-[60rem]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
