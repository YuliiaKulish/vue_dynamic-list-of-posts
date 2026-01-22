<script setup>
import { ref, onMounted } from "vue";
import * as postsApi from "./api/posts";
import Header from "./components/Header.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import Loader from "./components/Loader.vue";

const posts = ref([]);
const isLoading = ref(true);
const errorMessage = ref(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    posts.value = await postsApi.getPosts();
    console.log(posts.value);
  } catch (error) {
    errorMessage.value.show("Unable to load posts");
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Header></Header>

  <main>
    <ErrorMessage class="is-danger" ref="errorMessage">
      <template #header>
        <p>Server Error</p>
      </template>

      <template #default="{ text }">
        <p>{{ text }}</p>
      </template>
    </ErrorMessage>
    <div
      v-if="isLoading"
      class="is-flex is-justify-content-center is-align-items-center mt-2"
    >
      <Loader />
    </div>
  </main>
</template>

<style scoped></style>
