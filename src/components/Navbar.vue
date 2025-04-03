<template>
  <div class="sidebar-container">
    <!-- Primeira barra fixa com nome e menu -->
    <div class="sidebar" :class="{ sidebaropen: isOpen }">
      <!---<span class="artist-name" @click="goToHome">Higor Amaral</span> -->
      <button class="menu-btn" :class="{ active: isOpen }" @click="toggleMenu">
        <div class="menu-text">
          <span class="menu-word">MENU</span>
          <span class="menu-icon">☰</span>
        </div>
      </button>
    </div>

    <!-- Segunda barra escondida com menu -->
    <div class="menu-sidebar" :class="{ 'open': isOpen }">
      <button class="close-btn" v-if="isOpen" @click="toggleMenu">✖</button>
      <nav class="menu">
        <ul>
          <li @click="navigateTo('/')">Home page</li>
          <li @click="navigateTo('/resume')">Resume</li>
          <li @click="navigateTo('/')">Portfolio</li>
          <li><a href="https://www.instagram.com/higorarts/" class="menu-link" target="_blank">Instagram</a></li>
          <li @click="navigateTo('/contact')">Contact</li>
        </ul>

        <!-- Seção inferior com redes sociais e direitos reservados -->
        <div class="bottom-section">
          <div class="social-icons">
            <a href="https://www.behance.net/higoramaral" target="_blank">
              <i class="fa-brands fa-square-behance"style="color: black;"></i>
            </a>
            <a href="https://www.linkedin.com/in/higor-amaral-b66498178/" target="_blank">
              <i class="fa-brands fa-linkedin"style="color: black;"></i>
            </a>
            <a href="https://x.com/hiigorarts" target="_blank">
              <i class="fa-brands fa-x-twitter" style="color: black;"></i>
            </a>
            <a href="https://www.instagram.com/higorarts/" target="_blank">
              <i class="fa-brands fa-instagram" style="color: black;"></i>
            </a>
          </div>
          <p class="copyright">© 2025 Higor Amaral. Todos os direitos reservados.</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    goToHome() {
      this.$router.push('/');
    },
    navigateTo(route) {
      this.$router.push(route);
      this.isOpen = false; // Fecha o menu ao navegar
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  display: flex;
  position: relative;
  align-items: stretch;
}

.menu-icon {
  margin-top: 5px;
  margin-left: 3px;
  font-size: 20px;
  transform: rotate(90deg);
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 100dvh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  transition: background 0.3s;
  z-index: 1000;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .1)
    /* Adicionando a linha na direita */
}

.sidebaropen {
  background: #C7EA46;
}

.artist-name {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 25px;
  font-weight: bold;
  color: #000;
  position: absolute;
  top: 20px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

.artist-name:hover {
  color: #C7EA46;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  font-size: 18px;
  transition: color 0.3s ease-in-out;
  outline: none;
}

.menu-btn:hover,
.menu-btn:focus-visible,
.menu-btn.active {
  color: #C7EA46;
}

.menu-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}

.menu-word {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 18px;
  font-weight: 100;
}

/* Sidebar do menu */
.menu-sidebar {
  position: fixed;
  top: 0;
  left: 60px;
  width: 0;
  height: 100dvh;
  background: #c7ea46;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
}

.menu-sidebar.open {
  width: 350px;
}

/* Botão de fechar */
.close-btn {
  position: absolute;
  top: 10px;
  right: 0px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  transition: color 0.3s;
  outline: none;
}

.close-btn:hover {
  color: #748a25;
}

/* Menu principal */
.menu {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.menu ul {
  list-style: none;
  padding: 0;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  flex-direction: column;
}

.menu li {
  position: relative;
  padding: 15px;
  cursor: pointer;
  color: black;
  text-align: center;
  transition: background 0.2s ease-in-out;
}

.menu-link {
  position: relative;
  padding: 15px;
  cursor: pointer;
  color: black;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease-in-out;
}

.menu li::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background-color: black;
  margin: auto;
  transition: width 0.2s ease-in-out;
}

.menu li:hover::after {
  width: 100%;
}

.menu li:hover {
  background: #C7EA46;
}

/* Ícones sociais */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: black;
  font-size: 30px;
}

/* Texto de direitos reservados */
.copyright {
  font-size: 14px;
  color: black;
  margin-top: 10px;
  margin: 10px;
  text-align: center;
}

/* Ajuste para Mobile */
@media (max-width: 768px) {

  .menu-sidebar.open {
    height: 100vh;
    width: min(250px, 100vw);
  }

  /*.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 40px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  transition: background 0.3s;
  z-index: 1000;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .1) /* Adicionando a linha na direita */
}

/*.artist-name {
  writing-mode: horizontal-tb;
  transform: rotate(0deg);
  font-size: 25px;
  font-weight: bold;
  color: #000;
  position: absolute;

  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
.menu-word {
  writing-mode: horizontal-tb;
  font-size: 0px;
  font-weight: 100;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  font-size: 18px;
  transition: color 0.3s ease-in-out;
  outline: none;
}
}*/
</style>