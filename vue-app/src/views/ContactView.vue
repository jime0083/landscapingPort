<template>
  <div>
    <div class="page-header contact-page-header">
      <div class="page-header-overlay"></div>
      <h1 class="page-title">Contact</h1>
    </div>

    <section class="contact-form-section">
      <div class="contact-form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="form-label">
              お問い合わせ項目<span class="required">*</span>
            </label>
            <p class="form-sublabel">INQUIRY DETAILS *</p>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.inquiryTypes" value="gardening">
                ガーデニングについて
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.inquiryTypes" value="exterior">
                外構・造園工事について
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.inquiryTypes" value="other">
                その他
              </label>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">
              お名前<span class="required">*</span>
            </label>
            <p class="form-sublabel">Your Name *</p>
            <input type="text" v-model="form.name" class="form-input" required>
          </div>

          <div class="form-group">
            <label class="form-label">
              お名前(フリガナ)<span class="required">*</span>
            </label>
            <p class="form-sublabel">Name Reading *</p>
            <input type="text" v-model="form.nameReading" class="form-input" required>
          </div>

          <div class="form-group">
            <label class="form-label">
              メールアドレス<span class="required">*</span>
            </label>
            <p class="form-sublabel">Mail Address *</p>
            <input type="email" v-model="form.email" class="form-input" required>
          </div>

          <div class="form-group">
            <label class="form-label">
              メールアドレス(確認用)<span class="required">*</span>
            </label>
            <p class="form-sublabel">Mail Address Confirm *</p>
            <input type="email" v-model="form.emailConfirm" class="form-input" required>
          </div>

          <div class="form-group">
            <label class="form-label">
              電話番号<span class="required">*</span>
            </label>
            <p class="form-sublabel">Phone Number</p>
            <input type="tel" v-model="form.phone" class="form-input">
          </div>

          <div class="form-group">
            <label class="form-label">
              お問い合わせの内容<span class="required">*</span>
            </label>
            <p class="form-sublabel">Mail Contents *</p>
            <textarea v-model="form.message" class="form-textarea" rows="8" required></textarea>
          </div>

          <p class="required-note"><span class="required">*</span> は必須項目です。</p>

          <div class="form-submit">
            <button type="submit" class="submit-button">メールを送信する</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        inquiryTypes: [],
        name: '',
        nameReading: '',
        email: '',
        emailConfirm: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert('お問い合わせを送信しました。')
    }
  }
}
</script>
