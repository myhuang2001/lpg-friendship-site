<template>
  <div class="app-container">
    <nav class="main-nav">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/introl">人物介绍</RouterLink>
      <RouterLink to="/bigthing">大事记</RouterLink>
      <RouterLink to="/funny">精选糗事</RouterLink>
      <RouterLink to="/letter">信和心</RouterLink>

    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
.app-container {
  background: #fdf6ec;
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  color: #333;
}
.main-header {
  font-size: 32px;
  padding: 20px;
  text-align: center;
  background: #ffecd2;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.main-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  background: #fff7e6;
  padding: 10px 0;
  a {
    color: #d17b4f;
    font-weight: bold;
    text-decoration: none;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
.main-content {
  padding: 30px;
}

</style>