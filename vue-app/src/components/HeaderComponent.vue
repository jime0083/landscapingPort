<template>
  <header class="header">
    <div class="header-container">
      <h1 class="site-title">
        <router-link to="/">Jime Company</router-link>
      </h1>
      <button
        class="menu-toggle"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="メニュー"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="global-nav" :class="{ active: isMenuOpen }">
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/works" @click="closeMenu">Work</router-link></li>
          <li><router-link to="/company" @click="closeMenu">Company</router-link></li>
          <li><router-link to="/news" @click="closeMenu">News</router-link></li>
          <li><router-link to="/faq" @click="closeMenu">QFA</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>
