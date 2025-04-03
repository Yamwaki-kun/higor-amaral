<template>
    <div class="contact-container">
        <div class="contact-form">
            <h2>Contact Me</h2>

            <div class="contact-info">
                <p>Please use this contact form or send me an email at</p>
                <p class="email-highlight">
                    <i class="fa-solid fa-square-envelope"></i><span>  higor.1203@outlook.com</span>
                </p>
            </div>

            <form @submit.prevent="sendEmail">
                <div class="input-group">
                    <label>Name</label>
                    <input type="text" v-model="formData.name" required />
                    <span class="highlight"></span>
                </div>

                <div class="input-group">
                    <label>Email</label>
                    <input type="email" v-model="formData.email" required />
                    <span class="highlight"></span>
                </div>

                <div class="input-group">
                    <label>Message</label>
                    <input type="text" v-model="formData.message" required />
                    <span class="highlight"></span>
                </div>

                <button type="submit" :disabled="isLoading">
                    <span v-if="isLoading" class="loading-spinner"></span>
                    <span v-else>Send Message</span>
                </button>
            </form>

            <p v-if="successMessage" class="success">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
      isLoading: false, // Indica se o envio está em andamento
    };
  },
  methods: {
    
    clearForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
  },
};
</script>

<style>
/* Container */
.contact-container {
    max-width: 100%;
    margin: auto;
    padding: 40px;
    background: #fff;
    color: black;
    font-family: "Poppins", sans-serif;
    text-align: left;
}

.contact-info {
    padding-top: 0px;
    margin-top: 0px;
}

.contact-info p {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.email-highlight {
    background-color: #C7EA46;
    width: auto;
    min-width: 100px;
    max-width: 100%;
}

.contact-form {
    width: 500px;
}

/* Título */
h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
}

/* Grupo de entrada */
.input-group {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
}

.input-group label {
    font-size: 14px;
    margin-bottom: 5px;
    color: black;
    text-align: left;
}

/* Campos de entrada estilo linha */
input {
    width: 100%;
    padding: 8px 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
    font-size: 16px;
    color: black;
    outline: none;
    transition: border-color 0.3s ease;
    text-align: left;
}

input:focus {
    border-color: #C7EA46;
}

/* Linha de destaque */
.highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #C7EA46;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

input:focus+.highlight {
    transform: scaleX(1);
}

/* Botão de envio */
button {
    width: 30%;
    padding: 12px;
    background: #C7EA46;
    border: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.2s ease;
    text-align: center;
    position: relative;
}

button:hover {
    transform: scale(1.05);
}

/* Desativa o botão durante o carregamento */
button:disabled {
    background: gray;
    cursor: not-allowed;
}

/* Loader (spinner) */
.loading-spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-top: 3px solid black;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Mensagens de feedback */
.success,
.error {
    margin-top: 10px;
    text-align: left;
}

.success {
    color: green;
}

.error {
    color: red;
}

/* Ajuste para Mobile */
@media (max-width: 768px) {

    .contact-form {
    width: 100%;
}

/* Container */
.contact-container {
    max-width: 100%;
    margin: auto;
    padding: 10px;
    background: #fff;
    color: black;
    font-family: "Poppins", sans-serif;
    text-align: left;
}
}
</style>
