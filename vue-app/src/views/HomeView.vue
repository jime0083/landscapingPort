<template>
  <div>
    <!-- ヒーローセクション（スライダー） -->
    <section class="hero-slider">
      <div class="hero-slides">
        <div
          v-for="(slide, index) in heroSlides"
          :key="index"
          class="hero-slide"
          :class="{ active: currentHeroSlide === index }"
        >
          <img :src="slide.image" :alt="slide.alt">
        </div>
      </div>
      <!-- モバイル用イベント情報オーバーレイ -->
      <div class="hero-mobile-event">
        <p class="hero-event-date">{{ events[currentEventSlide].date }}</p>
        <h3 class="hero-event-title">{{ events[currentEventSlide].title }}</h3>
      </div>
    </section>

    <!-- イベントセクション -->
    <section class="event-section" :class="{ fadeIn: true, active: sectionsVisible.event }">
      <h2 class="section-title">イベント<span>CLASS & EVENT</span></h2>

      <div class="event-slider-container">
        <div class="event-slider" :style="{ transform: `translateX(-${currentEventSlide * (100 / visibleEventCount)}%)` }">
          <div
            v-for="(event, index) in events"
            :key="index"
            class="event-card"
          >
            <img :src="event.image" :alt="event.title">
            <div class="event-info">
              <p class="date">{{ event.date }}</p>
              <h3>{{ event.title }}</h3>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- フィロソフィーセクション -->
    <section class="philosophy-section" :class="{ fadeIn: true, active: sectionsVisible.philosophy }">
      <div class="philosophy-container">
        <div class="philosophy-text">
          <h2 class="philosophy-title">PHILOSOPHY</h2>
          <h3 class="philosophy-heading">豊かな心、潤いのある暮らし。<br>それは一輪の花と緑から。</h3>
          <p class="philosophy-description">
            空間に一輪の花があるだけで、人は優しい気持ちになれます。<br>
            花と緑があることで、私たちは安らぎを感じ、<br>
            豊かな未来を想像できるのです。
          </p>
          <p class="philosophy-description">
            お花や観葉植物が飾られたお部屋、花壇や畑など趣味を愉しむお庭、樹木や草花が映える外構、植物を取り入れる目的や空間は十人十色。<br>
            それぞれに美しい植物を、時にシンプルに、時に組み合わせながら、<br>
            みなさまの想いに添った花と緑のある豊かな暮らしをご提案させていただきます。
          </p>
        </div>
        <div class="philosophy-image-wrapper">
          <img src="/landscapingPort/img/garden5.jpg" alt="緑の庭園" class="philosophy-image-back">
          <img src="/landscapingPort/img/flower.jpg" alt="花" class="philosophy-image-front">
        </div>
      </div>
    </section>

    <!-- GreenLaboセクション -->
    <section class="greenlabo-section" :class="{ fadeIn: true, active: sectionsVisible.greenlabo }">
      <div class="greenlabo-image">
        <img src="/landscapingPort/img/green2.jpg" alt="Green Labo">
      </div>
      <div class="greenlabo-content">
        <h2 class="greenlabo-title">人と緑の関係を科学する<br>新たな拠点「GreenLabo」</h2>
        <p class="greenlabo-description">植物の生育には「光、水、土、温」の適切なコントロールが必要不可欠ですが、テクノロジーの発達とともに、特殊な環境や条件のもとでも緑化が可能となり、その手法も進化を続けています。「Green Labo」では最先端の緑化技術をはじめ、新しいサービスや情報を発信するとともに、多様な人々と交流を図りながら、緑のある豊かなライフスタイルデザインを探究しています。</p>
      </div>
    </section>

    <!-- サービスセクション -->
    <section class="service-section" :class="{ fadeIn: true, active: sectionsVisible.service }">
      <div class="service-grid">
        <div class="service-item">
          <img src="/landscapingPort/img/garden-company.png" alt="Barns">
          <div class="service-content">
            <h3>Barns<span>SHOWROOM & ATELIER</span></h3>
            <p>育てる園芸を楽しむ人の納屋のような存在でありたいと名付けられた「バーンズ」では、花苗、観葉植物、ガーデングッズといった植物と共に暮らすアイテムを取りそろえております。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/landscapingPort/img/garden-office6.png" alt="Café Musee">
          <div class="service-content">
            <h3>Café Musee<span>GREEN HEALING RELAXATION</span></h3>
            <p>緑の癒し効果を体感しながらくつろげるカフェ。店内では壁面緑化や観葉植物をご覧になりながら、自家栽培の無農薬野菜を使用したグリーンピザ、ハーブティーなどをお楽しみいただけます。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/landscapingPort/img/green-book2.png" alt="Planning">
          <div class="service-content">
            <h3>Planning<span>GARDEN EXTERIOR</span></h3>
            <p>庭から始まる暮らしの物語。最初の庭から、生活を楽しむための庭へ豊かな暮らしのご提案をさせていただきます。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/landscapingPort/img/green-man5.png" alt="Maintenance">
          <div class="service-content">
            <h3>Maintenance<span>GARDEN SERVICE</span></h3>
            <p>春先の施肥から冬の雪吊りまで、年間を通じて様々な庭のメンテナンス作業をお受けいたしております。大切なお庭の管理、ぜひプロの庭師にお任せください。</p>
          </div>
        </div>

        <div class="service-item wide">
          <img src="/landscapingPort/img/garden-company2.png" alt="Office Green">
          <div class="service-content">
            <h3>Office Green<span>BIOPHILIC DESIGN</span></h3>
            <p>総合温室では、時代に先駆けてバイオフィリックデザインやハイドロカルチャーを導入。また屋上緑化や壁面緑化などの特殊緑化も設計を施工いたします。「Green Labo」は、オフィスに限らず、居種や性まいなど、人が過ごす様々な空間の緑花を積極的に提案しております。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- コンタクトセクション -->
    <section class="contact-section" :class="{ fadeIn: true, active: sectionsVisible.contact }">
      <div class="contact-overlay"></div>
      <div class="contact-container">
        <h2 class="contact-title">CONTACT</h2>
        <p class="contact-description">
          外構工事・お庭のご依頼はこちらからお気軽にご連絡ください。お問い合わせの多いご質問や、よくいただくご質問は別途「よくあるご質問」ページに掲載しておりますので、ご活用ください。
        </p>
        <a href="/contact" class="recruit-link">
          <span class="circle-arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentHeroSlide: 0,
      currentEventSlide: 0,
      heroSlideInterval: null,
      eventSlideInterval: null,
      sectionsVisible: {
        event: false,
        philosophy: false,
        greenlabo: false,
        service: false,
        contact: false
      },
      heroSlides: [
        { image: '/landscapingPort/img/garden1.jpg', alt: '庭園1' },
        { image: '/landscapingPort/img/garden5.jpg', alt: '庭園2' },
        { image: '/landscapingPort/img/green2.jpg', alt: '緑の風景' },
        { image: '/landscapingPort/img/garden3.jpg', alt: '庭園3' }
      ],
      events: [
        { image: '/landscapingPort/img/green-man5.png', date: '2025.4.3', title: 'スプリングフェア' },
        { image: '/landscapingPort/img/garden-child.jpg', date: '2025.3.5', title: '春のお花大相談会' },
        { image: '/landscapingPort/img/flower.jpg', date: '2025.2.17', title: '暮らしを楽しむハーブのワークショップ' },
        { image: '/landscapingPort/img/garden-child2.jpg', date: '2025.1.20', title: '冬の庭づくり講座' },
        { image: '/landscapingPort/img/green-man3.png', date: '2024.12.15', title: 'クリスマスリース作り' }
      ]
    }
  },
  computed: {
    visibleEventCount() {
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return 1
      }
      return 3
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.handleScroll()
    this.startHeroSlider()
    this.startEventSlider()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
    this.stopHeroSlider()
    this.stopEventSlider()
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY

      const sections = {
        event: document.querySelector('.event-section'),
        philosophy: document.querySelector('.philosophy-section'),
        greenlabo: document.querySelector('.greenlabo-section'),
        service: document.querySelector('.service-section'),
        contact: document.querySelector('.contact-section')
      }

      Object.keys(sections).forEach(key => {
        const el = sections[key]
        if (el) {
          const elemPos = el.offsetTop
          if (scrollTop > elemPos - windowHeight + 150) {
            this.sectionsVisible[key] = true
          }
        }
      })
    },
    handleResize() {
      this.$forceUpdate()
    },
    startHeroSlider() {
      this.heroSlideInterval = setInterval(() => {
        this.currentHeroSlide = (this.currentHeroSlide + 1) % this.heroSlides.length
      }, 5000)
    },
    stopHeroSlider() {
      if (this.heroSlideInterval) {
        clearInterval(this.heroSlideInterval)
      }
    },
    startEventSlider() {
      this.eventSlideInterval = setInterval(() => {
        const maxSlide = this.events.length - this.visibleEventCount
        if (this.currentEventSlide >= maxSlide) {
          this.currentEventSlide = 0
        } else {
          this.currentEventSlide++
        }
      }, 4000)
    },
    stopEventSlider() {
      if (this.eventSlideInterval) {
        clearInterval(this.eventSlideInterval)
      }
    }
  }
}
</script>

<style scoped>
/* ヒーローセクション */
.hero-slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 0;
}

.hero-slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.hero-slide.active {
  opacity: 1;
}

.hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* モバイル用イベントオーバーレイ */
.hero-mobile-event {
  display: none;
}

/* イベントセクションのスライダー */
.event-slider-container {
  overflow: hidden;
  width: 100%;
}

.event-slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.event-slider .event-card {
  flex: 0 0 calc(100% / 3);
  padding: 0 15px;
  box-sizing: border-box;
}

/* フィロソフィー画像の重ね合わせ */
.philosophy-image-wrapper {
  position: relative;
  flex: 1;
  max-width: 500px;
  min-height: 500px;
}

.philosophy-image-back {
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: auto;
  object-fit: cover;
  z-index: 1;
}

.philosophy-image-front {
  position: absolute;
  top: 45%;
  left: 0;
  width: 65%;
  height: auto;
  object-fit: cover;
  z-index: 2;
}

/* GreenLaboセクション新レイアウト */
.greenlabo-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.greenlabo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.greenlabo-content {
  max-width: 980px;
  margin: 0 auto;
  padding: 60px 20px;
}

.greenlabo-title {
  font-size: 32px;
  font-weight: normal;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #333;
}

.greenlabo-description {
  font-size: 15px;
  line-height: 2;
  color: #333;
}

/* レスポンシブデザイン - 768px以下 */
@media (max-width: 768px) {
  .hero-slider {
    height: 70vh;
  }

  .hero-mobile-event {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    color: #fff;
  }

  .hero-event-date {
    font-size: 14px;
    margin-bottom: 8px;
    opacity: 0.9;
  }

  .hero-event-title {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }

  /* イベントセクションを非表示（モバイルではヒーローに統合） */
  .event-section {
    display: none;
  }

  /* フィロソフィーセクション */
  .philosophy-container {
    flex-direction: column;
    gap: 30px;
  }

  .philosophy-heading {
    font-size: 20px !important;
    line-height: 1.6 !important;
  }

  .philosophy-description {
    font-size: 14px !important;
    line-height: 1.8 !important;
  }

  .philosophy-description br {
    display: none;
  }

  .philosophy-image-wrapper {
    width: 100%;
    max-width: 100%;
    order: -1;
    min-height: auto;
    position: relative;
  }

  .philosophy-image-back {
    position: relative;
    width: 100%;
    top: auto;
    right: auto;
  }

  .philosophy-image-front {
    display: none;
  }

  /* GreenLaboセクション */
  .greenlabo-image {
    height: 250px;
  }

  .greenlabo-content {
    padding: 30px 20px;
  }

  .greenlabo-title {
    font-size: 20px !important;
    line-height: 1.6 !important;
    margin-bottom: 20px !important;
  }

  .greenlabo-description {
    font-size: 14px !important;
    line-height: 1.8 !important;
  }

  /* サービスセクション */
  .service-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }

  .service-item img {
    height: 200px !important;
  }

  .service-item.wide {
    grid-column: auto !important;
  }

  .service-item.wide img {
    height: 200px !important;
  }

  .service-content h3 {
    font-size: 18px;
  }

  .service-content h3 span {
    font-size: 11px;
  }

  .service-content p {
    font-size: 13px;
    line-height: 1.7;
  }

  /* コンタクトセクション */
  .contact-section {
    height: 300px !important;
    margin-top: 40px !important;
  }

  .contact-title {
    font-size: 28px !important;
    letter-spacing: 0.15em !important;
  }

  .contact-description {
    font-size: 13px !important;
    line-height: 1.7 !important;
  }
}
</style>
