<template>
    <div class="login-bg">
      <form class="login-card" @submit.prevent="onLogin">
        <div class="login-title">登录</div>
        <input v-model="username" type="text" placeholder="账号" required />
        <input v-model="password" type="password" placeholder="密码" required />
        <button type="submit">登录</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
  function onLogin() {
    // 这里只做演示，实际可加验证逻辑
    alert('登录成功！')
  }
  </script>
  
  <style scoped>
  .login-bg {
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(135deg, var(--main-pink) 0%, var(--main-yellow) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-card {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px #ffd6e055;
    padding: 40px 32px 32px 32px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .login-card:hover {
    box-shadow: 0 12px 36px #b5ead799, 0 4px 24px #ffd6e099;
    transform: scale(1.03);
  }
  .login-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--main-pink);
    margin-bottom: 24px;
  }
  input {
    width: 220px;
    padding: 10px 14px;
    margin-bottom: 18px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    background: var(--main-bg);
    color: var(--main-text);
  }
  button {
    width: 100%;
    background: var(--main-green);
    color: var(--main-text);
    font-size: 1.1rem;
    border: none;
    border-radius: 24px;
    padding: 10px 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background: var(--main-pink);
  }
  </style>
  