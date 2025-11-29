<template>
  <div class="timeline-bg">
    <h1 class="timeline-title">六匹哥相识时间轴</h1>
    <div class="timeline-container">
      <div class="timeline-horizontal">
        <div v-for="(event, idx) in timeline" :key="idx" class="timeline-event">
          <div class="event-dot"></div>
          <div class="event-card">
            <img :src="event.avatar" class="event-avatar" />
            <div class="event-info">
              <div class="event-name">{{ event.name }}</div>
              <div class="event-date">{{ event.date }}</div>
              <div class="event-desc">{{ event.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeline = [
  {
    name: '黄梦媛',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    date: '2017年9月',
    desc: '初中开学，第一次见面，成为同桌。',
  },
  {
    name: '李四',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    date: '2018年3月',
    desc: '一起参加学校运动会，成为朋友。',
  },
  {
    name: '王五',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    date: '2018年9月',
    desc: '新学期分班，加入同一个小组。',
  },
  {
    name: '赵六',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    date: '2019年5月',
    desc: '班级春游，大家一起出游，感情升温。',
  },
  {
    name: '钱七',
    avatar: 'https://img.icons8.com/color/96/000000/user-male-circle.png',
    date: '2019年9月',
    desc: '共同备战中考，互相鼓励。',
  },
  {
    name: '孙八',
    avatar: 'https://img.icons8.com/color/96/000000/user-female-circle.png',
    date: '2020年6月',
    desc: '毕业旅行，六人友谊正式确立。',
  },
]
</script>

<style scoped>
.timeline-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--main-yellow) 0%, var(--main-pink) 100%);
  padding: 0;
}
.timeline-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--main-text);
  margin: 40px 0 32px 0;
  letter-spacing: 2px;
}
.timeline-container {
  overflow-x: auto;
  padding-bottom: 40px;
}
.timeline-horizontal {
  display: flex;
  align-items: flex-end;
  gap: 60px;
  padding: 0 40px;
  min-width: 900px;
}
.timeline-event {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.event-dot {
  width: 18px;
  height: 18px;
  background: var(--main-green);
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 2px 8px #b5ead799;
  margin-bottom: 10px;
  z-index: 2;
}
.event-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px #ffd6e055;
  padding: 22px 18px 16px 18px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
}
.event-card:hover {
  box-shadow: 0 12px 36px #b5ead799, 0 4px 24px #ffd6e099;
  transform: scale(1.05);
}
.event-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid var(--main-pink);
  background: #fff;
}
.event-info {
  text-align: center;
}
.event-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d17b4f;
  margin-bottom: 4px;
}
.event-date {
  font-size: 0.95rem;
  color: var(--main-green);
  margin-bottom: 6px;
}
.event-desc {
  font-size: 0.98rem;
  color: var(--main-text);
}
/* 横向连线 */
.timeline-horizontal::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  height: 4px;
  background: linear-gradient(90deg, var(--main-green) 0%, var(--main-pink) 100%);
  z-index: 1;
}
.timeline-horizontal {
  position: relative;
}
</style>