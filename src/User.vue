<template>
  <div>
    <h2>Профиль пользователя {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['userId']
};
</script>
