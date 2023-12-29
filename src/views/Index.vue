<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-container class="wh100">
    <el-header app-drag="true">Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<style scoped></style>
