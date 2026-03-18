<template>
  <div>
    <div class="page-header faq-header">
      <div class="page-header-overlay"></div>
      <h1 class="page-title page-title-faq">
        <span class="title-pc">QFA</span>
        <span class="title-sp">FAQ</span>
      </h1>
    </div>

    <section class="faq-section">
      <div class="faq-container">
        <h2 class="faq-title">よくあるご質問</h2>
        <p class="faq-description">
          お客様から多く寄せられているご質問にお答えいたします。「よくあるご質問」で解決しない場合は、お問い合わせよりご連絡ください。
        </p>

        <div class="faq-list">
          <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
            <button class="faq-question" @click="toggleFaq(index)">
              <span class="faq-q">Q</span>
              <span class="faq-question-text">{{ item.question }}</span>
              <span class="faq-icon" :class="{ active: item.isOpen }">+</span>
            </button>
            <div class="faq-answer" v-show="item.isOpen">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      faqItems: [
        {
          question: '小さな工事でもお願いできますか？',
          answer: 'はい、小さな工事でもお気軽にご相談ください。',
          isOpen: false
        },
        {
          question: '見積りや図面作成は有料ですか？',
          answer: 'お見積りは無料です。図面作成については、内容によって異なりますのでご相談ください。',
          isOpen: false
        },
        {
          question: '日中は留守がちなのですが、測量時や工期中は家にいる必要はありますか？',
          answer: 'お打ち合わせ時以外は、基本的にご在宅いただく必要はございません。',
          isOpen: false
        },
        {
          question: '植木がすぐに枯れてしまった場合、対応してもらえますか？',
          answer: '植栽後の保証期間内であれば、対応させていただきます。詳しくはお問い合わせください。',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen
    }
  }
}
</script>
