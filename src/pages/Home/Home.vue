<template>
  <Navbar />
  <Container>
    <main class="home">
      <div class="home__left">
        <h1 class="home__title">SisProForm</h1>
        <h2 class="home__subtitle">Criação de projetos com mais agilidade</h2>

        <Button
          class="home__button"
          type="button"
          size="small"
          label="CRIAR PROJETO"
        />
      </div>
      <div class="home__right">
        <img
          class="home__logo"
          src="@/assets/images/logo400x400.svg"
          alt="sisproform logo"
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
  .home {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: $sm) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }

    &__title {
      font-size: $fs-64;
      font-weight: 700;

      @media screen and (max-width: $sm) {
        font-size: $fs-48;
      }
    }

    &__subtitle {
      font-size: $fs-16;
      font-weight: 400;
      margin-bottom: $m-28;

      @media screen and (max-width: $sm) {
        font-size: $fs-14;
      }
    }

    &__button {
      font-size: $fs-16;
      font-weight: 500;
      border-radius: 100px;
      padding: $p-16 $p-32;

      @media screen and (max-width: $sm) {
        font-size: $fs-14;
        padding: $p-12 $p-16;
      }
    }

    &__logo {
      width: 100%;
      max-width: 400px;

      @media screen and (max-width: $sm) {
        max-width: 200px;
      }
    }
  }
</style>
