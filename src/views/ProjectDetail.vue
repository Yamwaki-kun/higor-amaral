<template>
  <div class="project-details">
    <!-- Tela de carregamento -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <!-- Conteúdo do post -->
    <div v-else>
      <!-- Versão Mobile -->
      <div v-if="isMobile" class="content-mobile">
        <h1 class="title">{{ project.title }}</h1>

        <div class="media-container">
          <template v-for="(media, index) in project.media" :key="index">
            <img v-if="media.type === 'image'" :src="media.url" class="project-media" />
            <div v-else-if="media.type === 'iframe'" class="iframe-container" v-html="media.url"></div>
          </template>
        </div>

        <div class="text-container">
          <div class="description" v-html="project.description"></div>
          <p class="date">Publicado em: {{ formatDate(project.published_at) }}</p>
        </div>
      </div>

      <!-- Versão Desktop -->
      <div v-else class="content-container">
        <div class="media-container">
          <template v-for="(media, index) in project.media" :key="index">
            <img v-if="media.type === 'image'" :src="media.url" class="project-media" />
            <div v-else-if="media.type === 'iframe'" class="iframe-container" v-html="media.url"></div>
          </template>
        </div>
      <div class="center-space"></div>
        <div class="text-container">
          <h1 class="title">{{ project.title }}</h1>
          <div class="description" v-html="project.description"></div>
          <p class="date">Date: {{ formatDate(project.published_at) }}</p>
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
      project: {},
      loading: true,
      isMobile: window.innerWidth <= 768, // Define se está no mobile inicialmente
    };
  },
  async created() {
    window.addEventListener("resize", this.checkScreenSize); // Detecta mudança de tela
    this.checkScreenSize(); // Verifica o tamanho inicial da tela

    const projectId = this.$route.params.id; // Obtém o ID da URL

    try {
      // Tenta carregar os detalhes do projeto da API
      const response = await axios.get(`http://localhost:3000/api/projects/${projectId}`);

      console.log("Detalhes do Projeto:", response.data);

      this.project = {
        title: response.data.title,
        description: response.data.description || "<p>Sem descrição disponível.</p>",
        published_at: response.data.published_at || new Date().toISOString(),
        media: response.data.assets.map((asset) => ({
          url: asset.player_embedded || asset.image_url,
          type: asset.player_embedded ? "iframe" : "image",
        })),
      };
    } catch (error) {
      console.error("Erro ao carregar detalhes do projeto, tentando cache local...");

      try {
        // Se a API falhar, busca os dados do cache local
        const cacheResponse = await axios.get(`/cache/projects_details_cache/${projectId}.json`);

        console.log("Carregado do cache local:", cacheResponse.data);

        this.project = {
          title: cacheResponse.data.title,
          description: cacheResponse.data.description || "<p>Sem descrição disponível.</p>",
          published_at: cacheResponse.data.published_at || new Date().toISOString(),
          media: cacheResponse.data.assets.map((asset) => ({
            url: asset.player_embedded || asset.image_url,
            type: asset.player_embedded ? "iframe" : "image",
          })),
        };
      } catch (cacheError) {
        console.error("Erro ao carregar cache local:", cacheError);
      }
    } finally {
      this.loading = false;
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize); // Remove o evento ao destruir o componente
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Atualiza se é mobile
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style>
.center-space{
  width: 10%;
}
/* LOADING */
.loading-container {
  position: fixed; /* Garante que o loading fique sobre toda a tela */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8); /* Leve transparência opcional */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Certifica-se de que fica acima de tudo */
}

.project-details {
  text-align: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  
}

/* Layout Desktop */
.content-container {
  display: flex;
  align-items: flex-start;
  width: 100vw;
  margin: 20px auto;
  max-width: 100vw;
  gap: 30px;
}

/* Layout Mobile */
.content-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

/* Mídias */
.media-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  margin-left: 50px;
  width: 100%;
}

.project-media {
  width: 100%;
  max-width: 100%; /* Ocupa toda a largura do container */
  height: auto;
  object-fit: cover;
  margin-top: 30px;
  margin-left: 10%;
}

/* Container para iframes */
.iframe-container {
  width: 100%;
  max-width: 100%; /* Garante que o iframe ocupe toda a largura */
  margin-top: 30px;
}

.iframe-container iframe {
  width: 100%;
  height: 400px; /* Mantém uma altura adequada */
}

/* Texto */
.text-container {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-left: 0%;
  margin-right: 10%;
  padding-left: 10%;
  margin-left: 0%;
  gap: 10px;
}

.title {
  font-size: 34px;
  font-weight: bold;
  color: #000;
}

.description {
  font-size: 16px;
  color: #000;
}

.date {
  font-size: 14px;
  color: #777;
}

/* Ajuste para Mobile */
@media (max-width: 768px) {
  .media-container {
    width: 90%;
    margin-left: 0px; /* Remove o deslocamento lateral no mobile */
  }
  .title {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.project-media {
  margin-left: 0;
}

  /* Texto */
.text-container {
  width: 90%;
  margin-right: 0%;
  margin-left: 0%;
  padding-left: 0%;
  padding-right: 0%;
  text-align: center;
}

.project-details {
  text-align: center;
  min-height: 100vh;
  width: 100%;
  
  display: flex;
  
}
}
</style>