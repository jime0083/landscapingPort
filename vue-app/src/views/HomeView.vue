<template>
  <div>
    <!-- イベントセクション -->
    <section class="event-section" :class="{ fadeIn: true, active: sectionsVisible.event }">
      <h2 class="section-title">イベント<span>CLASS & EVENT</span></h2>

      <div class="event-grid">
        <div class="event-card">
          <img src="/img/green-man5.png" alt="スプリングフェア">
          <div class="event-info">
            <p class="date">2025.4.3</p>
            <h3>スプリングフェア</h3>
          </div>
        </div>

        <div class="event-card">
          <img src="/img/garden-child.jpg" alt="春のお花大相談会">
          <div class="event-info">
            <p class="date">2025.3.5</p>
            <h3>春のお花大相談会</h3>
          </div>
        </div>

        <div class="event-card">
          <img src="/img/flower.jpg" alt="暮らしを楽しむハーブのワークショップ">
          <div class="event-info">
            <p class="date">2025.2.17</p>
            <h3>暮らしを楽しむハーブのワークショップ</h3>
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
          <img src="/img/garden5.jpg" alt="緑の庭園" class="philosophy-single-image">
        </div>
      </div>
    </section>

    <!-- GreenLaboセクション -->
    <section class="greenlabo-section" :class="{ fadeIn: true, active: sectionsVisible.greenlabo }">
      <div class="greenlabo-image">
        <img src="/img/garden1.jpg" alt="Green Labo">
        <div class="greenlabo-overlay">
          <h2 class="greenlabo-title">人と緑の関係を科学する<br>新たな拠点「GreenLabo」</h2>
        </div>
      </div>
      <div class="greenlabo-text">
        <p>植物の生育には「光、水、土、温」の適切なコントロールが必要不可欠ですが、テクノロジーの発達とともに、特殊な環境や条件のもとでも緑化が可能となり、その手法も進化を続けています。「Green Labo」では最先端の緑化技術をはじめ、新しいサービスや情報を発信するとともに、多様な人々と交流を図りながら、緑のある豊かなライフスタイルデザインを探究しています。</p>
      </div>
    </section>

    <!-- サービスセクション -->
    <section class="service-section" :class="{ fadeIn: true, active: sectionsVisible.service }">
      <div class="service-grid">
        <div class="service-item">
          <img src="/img/garden-company.png" alt="Barns">
          <div class="service-content">
            <h3>Barns<span>SHOWROOM & ATELIER</span></h3>
            <p>育てる園芸を楽しむ人の納屋のような存在でありたいと名付けられた「バーンズ」では、花苗、観葉植物、ガーデングッズといった植物と共に暮らすアイテムを取りそろえております。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/img/garden-office6.png" alt="Café Musee">
          <div class="service-content">
            <h3>Café Musee<span>GREEN HEALING RELAXATION</span></h3>
            <p>緑の癒し効果を体感しながらくつろげるカフェ。店内では壁面緑化や観葉植物をご覧になりながら、自家栽培の無農薬野菜を使用したグリーンピザ、ハーブティーなどをお楽しみいただけます。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/img/green-book2.png" alt="Planning">
          <div class="service-content">
            <h3>Planning<span>GARDEN EXTERIOR</span></h3>
            <p>庭から始まる暮らしの物語。最初の庭から、生活を楽しむための庭へ豊かな暮らしのご提案をさせていただきます。</p>
          </div>
        </div>

        <div class="service-item">
          <img src="/img/green-man5.png" alt="Maintenance">
          <div class="service-content">
            <h3>Maintenance<span>GARDEN SERVICE</span></h3>
            <p>春先の施肥から冬の雪吊りまで、年間を通じて様々な庭のメンテナンス作業をお受けいたしております。大切なお庭の管理、ぜひプロの庭師にお任せください。</p>
          </div>
        </div>

        <div class="service-item wide">
          <img src="/img/garden-company2.png" alt="Office Green">
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
      sectionsVisible: {
        event: false,
        philosophy: false,
        greenlabo: false,
        service: false,
        contact: false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
    }
  }
}
</script>
