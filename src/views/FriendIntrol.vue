<template>
  <div style="max-width: 1100px; margin: 0 auto;">
    <h2>人物介绍</h2>
    <div class="person-list">
      <div class="person-card" v-for="person in persons" :key="person.name">
        <img :src="person.avatar" alt="avatar" class="person-avatar" />
        <div class="person-info">
          <div class="person-name">{{ person.name }}</div>
          <div>生日：{{ person.birthday }}</div>
          <div>星座：{{ person.constellation }}</div>
          <div>最喜欢的事：{{ person.favorite }}</div>
          <div>糗事：{{ person.embarrassing }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const persons = [
  {
    name: '陈怡君',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    birthday: '2001-05-01',
    constellation: '金牛座',
    favorite: '吃火锅',
    embarrassing: '爱拉屎',
  },
  {
    name: '黄梦娇',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    birthday: '2000-08-15',
    constellation: '狮子座',
    favorite: '打篮球',
    embarrassing: '上课睡觉被老师点名',
  },
  {
    name: '黄梦媛',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    birthday: '农历2001年9月初4',
    constellation: '天秤座',
    favorite: '唱歌',
    embarrassing: '鞋子掉进水里',
  },
  {
    name: '黄玉淋',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    birthday: '2001-12-09',
    constellation: '射手座',
    favorite: '旅游',
    embarrassing: '迷路找不到回酒店',
  },
  {
    name: '廖雪莲',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    birthday: '2000-10-30',
    constellation: '天蝎座',
    favorite: '看电影',
    embarrassing: '电影院睡着了',
  },
  {
    name: '肖薪莉',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    birthday: '2002-07-18',
    constellation: '巨蟹座',
    favorite: '画画',
    embarrassing: '想想',
  },
]
</script>

<style scoped>
.person-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.person-card {
  background: var(--main-yellow);
  border-radius: 18px;
  box-shadow: 0 2px 8px #ffd6e033;
  padding: 28px 22px 18px 22px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  margin-bottom: 16px;
}
.person-card:hover {
  box-shadow: 0 8px 24px #b5ead799, 0 2px 8px #ffd6e055;
  transform: translateY(-6px) scale(1.03);
}
.person-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 4px solid var(--main-pink);
  background: #fff;
}
.person-info {
  text-align: center;
  color: var(--main-text);
}
.person-name {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #d17b4f;
}
</style> 