<template>
  <div class="gallery-container">
    <!-- Loading -->
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <!-- Galeria -->
    <div v-else class="gallery-grid">
      <div 
        v-for="item in images" 
        :key="item.id" 
        class="gallery-item-wrapper"
        @click="goToProject(item.id)"
      >
        <img :src="item.src" class="gallery-item" alt="Masonry Image" />
        <div class="gallery-overlay">
          <span class="gallery-title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images: [],
      isLoading: true, // Começa carregando
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://www.artstation.com/users/higoramarall/projects.json"
      );

      this.images = response.data.data.map((project) => ({
        id: project.hash_id,
        src: project.cover.thumb_url,
        title: project.title,
      }));

      // Simulando um pequeno delay para a animação ser visível
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      this.isLoading = false; // Esconde o loading mesmo se houver erro
    }
  },
  methods: {
    goToProject(id) {
      this.$router.push(`/project/${id}`);
    }
  }
};
</script>

<style>
/* LOADING */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* GALERIA */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Cria colunas responsivas */
  margin-left: 60px; /* Margem de 60px na esquerda */
}

.gallery-item-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1; /* Mantém os itens quadrados */
  overflow: hidden;
  cursor: pointer;
}

.gallery-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(199, 234, 70, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.gallery-item-wrapper:hover .gallery-overlay {
  opacity: 1;
}

.gallery-title {
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
</style>