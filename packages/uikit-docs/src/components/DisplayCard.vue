<template>
  <div class="">
    <div ref="boxRef">
      <slot></slot>
    </div>
    <p class="whitespace-pre-line" v-text="code"></p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const boxRef = ref<HTMLDivElement>();

const code = computed(() => {
  var txt = document.createElement("textarea");
  txt.innerHTML = boxRef.value ? boxRef.value.innerHTML : "";
  console.log(txt.value);

  return txt.value;
});
</script>
