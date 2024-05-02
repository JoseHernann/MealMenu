<script setup lang="ts">
  import { BoltIcon, ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/vue/24/outline';
  import DegradadoC from '@/assets/degradadoC.vue';
  import preguntas from '@/utils/options';
  import { ref } from 'vue';
  import iconSatar from '@/assets/iconSatar.vue';
  import openAi from '../services/openAi.ts';
  const response = ref('');
  const selected = ref();
  const promptBody = ref();
  const currentQuestion = ref(0);
  const generateRecipe = ref(false);
  function getSelectedOption(index: number, opcion: string, pregNum: number) {
    selected.value = index;
    if (!promptBody.value) {
      promptBody.value = [];
    }
    const existingIndex = promptBody.value.findIndex((item) => item.pregNum === pregNum);
    if (existingIndex !== -1) {
      promptBody.value[existingIndex].opcion = opcion;
    } else {
      promptBody.value.push({
        pregNum,
        opcion,
      });
    }
    console.log(promptBody.value);
  }

  function nextQuestion() {
    currentQuestion.value = currentQuestion.value + 1;
    selected.value = -1;
  }
  function prevQuestion() {
    currentQuestion.value = currentQuestion.value - 1;
  }

  async function genRecipe() {
    generateRecipe.value = true;
    const chat = await openAi.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Crea una receta para una preferencia alimentaria : ${promptBody.value[0]} tambien que no contenga :  ${promptBody.value[1]} porque soy alergico, considera que mi actividad fisica es :  ${promptBody.value[2]} y dispongo de un tiempo para hacer da reseta de :  ${promptBody.value[3]} , dame la receta en markdown  `,
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    response.value = <string>chat.choices[0].message.content;
    console.log(chat);
  }
</script>

<template>
  <div class="w-screen h-screen flex p-14 gap-5 overflow-hidden bg-[#F5F5F5]">
    <DegradadoC class="absolute z-10 -top-3 h-[101%] w-[50%]" />
    <div id="sabiasQue" class="w-full h-full border flex flex-col p-20 rounded-xl glass mr-20 z-20">
      <BoltIcon class="w-14 h-14 border-2 p-2 rounded-xl border-blue-800 stroke-blue-800" />
      <p class="text-4xl mt-20 font-bold">Sabias que...</p>
      <p class="mt-10 text-3xl">
        La temperatura de los alimentos puede influir en cuánto comes. Los alimentos calientes
        suelen ser más satisfactorios
      </p>
    </div>

    <!--    -&#45;&#45;-->

    <div id="inputForms" class="w-full h-full">
      <div v-for="(pregunta, index) in preguntas" :key="index">
        <h2 class="text-3xl font-semibold m-10" v-show="pregunta.indice == currentQuestion">
          {{ pregunta.pregunta }}
        </h2>
        <p class="ml-10 text-2xl" v-show="pregunta.indice == currentQuestion">
          {{ pregunta.descripcion }}
        </p>
        <div class="grid grid-cols-2 p-10 gap-10" v-show="pregunta.indice == currentQuestion">
          <div
            v-for="(item, index) in pregunta.opciones"
            :key="index"
            :class="{
              'border-2 border-black': selected == index,
              'flex items-center justify-center w-60 h-24 rounded-xl bg-white shadow-lg hover:border-2 hover:border-black transition-color': true,
            }"
            @click="getSelectedOption(index, pregunta.opciones[index], pregunta.indice)"
          >
            <iconSatar class="absolute w-7 h-7 mb-20 ml-56" v-if="selected == index" />
            <span class="font-semibold">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <button
          class="text-white bg-black px-10 rounded-md py-3 flex items-center gap-5"
          v-if="currentQuestion != 0"
          @click="prevQuestion"
        >
          <ArrowLongLeftIcon class="w-5 h-5" /> Atras
        </button>
        <span class="py-3 hover:text-blue-500 ml-20" v-if="currentQuestion == 0">Cancelar</span>
        <button
          class="text-white bg-black px-10 rounded-md py-3 flex items-center gap-5"
          v-if="currentQuestion != 3"
          @click="nextQuestion"
        >
          Siguiente <ArrowLongRightIcon class="w-5 h-5" />
        </button>
        <button
          class="text-white bg-black px-10 rounded-md py-3 flex items-center gap-5"
          v-if="currentQuestion == 3"
          @click="genRecipe"
        >
          Generar Receta <BoltIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
  .glass {
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.7px);
    -webkit-backdrop-filter: blur(6.7px);
    border: 1px solid rgba(255, 255, 255, 0.09);
  }
</style>
