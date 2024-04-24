<template>
  <Navbar />
  <Container>
    <main class="home">
      <div class="home__left">
        <h1 class="home__title">SisProForm</h1>
        <h2 class="home__subtitle">
          Iniciação de projetos com mais agilidade e eficiência
        </h2>

        <Button
          class="home__button"
          type="button"
          label="CRIAR PROJETO"
          icon="pi pi-arrow-right"
          iconPos="right"
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

    &__title {
      font-size: $fs-64;
      font-weight: 700;
    }

    &__subtitle {
      font-size: $fs-16;
      font-weight: 400;
      margin-bottom: $m-28;
    }

    &__button {
      border-radius: 100px;
      padding: $p-16 $p-32;
    }
  }
</style>
