<template>
  <div>
    <h2>Главная страница</h2>
    <router-link :to="{ name: 'about' }">Перейти на страницу "О нас"</router-link>
    <router-link :to="{ name: 'user', params: { userId: 1 } }">Перейти к пользователю 1</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
