<template>
  <div>
    <div class="page-header news-header">
      <div class="page-header-overlay"></div>
      <h1 class="page-title">News</h1>
    </div>

    <section class="news-page-section">
      <div class="news-page-container">
        <div class="news-page-items">
          <p class="news-page-item">
            <span class="news-page-date">4月 1, 2025</span>
            <span class="news-page-text">ホームページをリニューアルしました</span>
          </p>

          <p class="news-page-item">
            <span class="news-page-date">3月 31, 2025</span>
            <span class="news-page-text">投稿機能実装</span>
          </p>
        </div>

        <router-link to="/" class="back-to-top">← BACK TO TOP</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsView'
}
</script>
