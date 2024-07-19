<template>
  <div>
    <h2>О нас</h2>
    <router-link :to="{ name: 'user', params: { userId: 2 } }">Перейти к пользователю 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>
