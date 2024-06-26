<template>
  <Navbar />
  <Container>
    <main class="principal">
      <div class="principal__esquerda">
        <h1 class="principal__title">SisProForm</h1>
        <h2 class="principal__subtitle">
          Criação de projetos com mais agilidade
        </h2>

        <router-link to="/projetos/criar">
          <Button class="principal__button" label="CRIAR PROJETO" />
        </router-link>
      </div>
      <div class="principal__direita">
        <img
          class="principal__logo"
          src="@/assets/images/logo400x400.svg"
          alt="Logo do SisProForm"
        />
      </div>
    </main>
  </Container>
</template>

<script setup lang="ts">
  import Container from '@/components/Container/Container.vue'
  import Navbar from '@/components/Navbar/Navbar.vue'
  import Button from 'primevue/button'
</script>

<style scoped lang="scss">
  .principal {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (width <= $sm) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }

    &__title {
      font-size: $fs-64;
      font-weight: 700;

      @media (width <= $sm) {
        font-size: $fs-48;
      }
    }

    &__subtitle {
      font-size: $fs-16;
      font-weight: 400;
      margin-bottom: $m-28;

      @media (width <= $sm) {
        font-size: $fs-14;
      }
    }

    &__button {
      font-size: $fs-16;
      font-weight: 500;
      border-radius: 100px;
      padding: $p-16 $p-32;

      @media (width <= $sm) {
        font-size: $fs-14;
        padding: $p-12 $p-16;
      }
    }

    &__logo {
      width: 100%;
      max-width: 400px;

      @media (width <= $sm) {
        max-width: 200px;
      }
    }
  }
</style>
