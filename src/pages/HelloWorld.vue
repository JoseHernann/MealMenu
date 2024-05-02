<script setup lang="ts">
  import openAi from '../services/openAi.ts';
  import { ref } from 'vue';
  const response = ref('');
  async function start() {
    const chat = await openAi.chat.completions.create({
      messages: [{ role: 'system', content: 'Entiendes español' }],
      model: 'gpt-3.5-turbo',
    });
    response.value = <string>chat.choices[0].message.content;
    console.log(chat);
  }
</script>
<template>
  <div class="flex flex-col">
    <button class="bg-gray-400 p-5 rounded-xl m-20" @click="start">Generar receta</button>
    <span>{{ response }}</span>
  </div>
</template>
