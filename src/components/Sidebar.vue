<script setup></script>

<template>
  <div class="tile is-parent is-8-desktop Sidebar Sidebar--open">
    <div class="tile is-child box is-success">
      <div class="tile is-child box is-success">
        <div class="content">
          <!-- Content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Sidebar {
  overflow: hidden;
  opacity: 0;
  transition-property: max-width, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.Sidebar--open {
  opacity: 1;
}
@media (max-width: 768px) {
  .Sidebar {
    max-width: 100%;
  }
  .Sidebar--open {
    max-width: 100%;
  }
}
</style>
