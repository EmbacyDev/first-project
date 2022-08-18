<template>
  <section class="footer">
    <div class="container-footer">
      <div class="made-by">
        <p>Made by Embacy</p>
      </div>
      <div class="logo-w">
        <router-link class="logo-w"
                     to="/">
          <img class="logo"
               alt="icon"
               src="../assets/images/png/Slash-icon.png">
        </router-link>
      </div>
      <div class="main-links">
        <router-link to="/brands">Brands</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="other-links">
        <router-link to="/brands">Privacy</router-link>
        <router-link to="/career">Terms of Use</router-link>
        <router-link to="/blog">EULA</router-link>
      </div>
      <div class="rating-block">
        <p>Trustpilot</p>
        <p>chrome</p>
      </div>
      <div class="secure-block">
        <p>Secure</p>
      </div>
      <div class="feedback-block">
        <p>Your feedback</p>
        <a>support@slash.com</a>
      </div>
      <div class="social-block">
        <p>Follow us</p>
        <div class="social-link-w">
          <icon-base :iconWidth="24"
                     :iconHeight="24">
            <path d="M24 0H0v24h24V0Zm-3.732 7.005H18.35c-1.503 0-1.794.714-1.794 1.764v2.313h3.588l-.468 3.621h-3.12V24h-3.741v-9.294h-3.13v-3.624h3.13v-2.67c0-3.099 1.893-4.788 4.659-4.788 1.326 0 2.463.099 2.796.144v3.237h-.003"
                  fill="#0432D3"/>
          </icon-base>
          <icon-base :iconWidth="24"
                     :iconHeight="24">
            <path d="M24 0H0v24h24V0ZM9.497 12a2.506 2.506 0 0 1 2.501-2.501A2.506 2.506 0 0 1 14.499 12a2.506 2.506 0 0 1-2.501 2.501A2.506 2.506 0 0 1 9.497 12Zm10.002-.379a478.046 478.046 0 0 0 0 .803c.002.892.003 1.78-.049 2.672-.058 1.2-.33 2.264-1.21 3.145-.878.878-1.944 1.151-3.144 1.21a48.3 48.3 0 0 1-2.717.049h-.757c-.906 0-1.809.002-2.718-.05-1.2-.058-2.265-.33-3.144-1.21-.879-.878-1.152-1.943-1.21-3.144a47.319 47.319 0 0 1-.05-2.718v-.756a47.355 47.355 0 0 1 .05-2.718c.058-1.2.33-2.264 1.21-3.144.878-.879 1.943-1.152 3.144-1.21a47.29 47.29 0 0 1 2.717-.05 341.282 341.282 0 0 0 .757 0 47.351 47.351 0 0 1 2.718.05c1.2.058 2.264.33 3.144 1.21.878.878 1.152 1.943 1.21 3.144.051.908.05 1.81.05 2.717ZM8.15 12a3.843 3.843 0 0 0 3.849 3.848A3.843 3.843 0 0 0 15.846 12a3.843 3.843 0 0 0-3.848-3.848A3.843 3.843 0 0 0 8.15 12Zm6.956-4.006a.898.898 0 1 0 1.797 0 .898.898 0 1 0-1.797 0Z"
                  fill="#0432D3"/>
          </icon-base>
          <icon-base :iconWidth="24"
                     :iconHeight="24">
            <path fill="#0432D3"
                  d="M24 0H0v24h24V0Zm-5.54 8.7v.42c0 4.4-3.35 9.48-9.48 9.48a9.45 9.45 0 0 1-5.11-1.5 6.68 6.68 0 0 0 4.94-1.38 3.33 3.33 0 0 1-3.12-2.3c.52.07.98.07 1.5-.06a3.33 3.33 0 0 1-2.66-3.27v-.05c.44.25.96.4 1.5.43A3.33 3.33 0 0 1 5 6a9.46 9.46 0 0 0 6.87 3.49 3.34 3.34 0 0 1 5.69-3.05 6.58 6.58 0 0 0 2.11-.8 3.32 3.32 0 0 1-1.46 1.83 6.59 6.59 0 0 0 1.92-.52 6.98 6.98 0 0 1-1.67 1.73Z"/>
          </icon-base>
          <icon-base :iconWidth="24"
                     :iconHeight="24">
            <path fill="#0432D3"
                  fill-rule="evenodd"
                  d="M0 2.005V0h24v24H0V2.005Zm9.5 7.146h3.25v1.632C13.218 9.844 14.417 9 16.221 9c3.457 0 4.276 1.869 4.276 5.297v6.352H17v-5.57c0-1.953-.47-3.055-1.66-3.055-1.653 0-2.34 1.188-2.34 3.055v5.57H9.5V9.15Zm-6 11.348H7V9H3.5v11.5Zm4-15.25a2.25 2.25 0 1 1-4.5.1 2.25 2.25 0 0 1 4.5-.1Z"
                  clip-rule="evenodd"/>
          </icon-base>
        </div>
      </div>
      <div class="copyright-block">
        <p>© 2022 Slash</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MainFooter',
  components: {
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.footer {
  padding: em($in-92) em($in-100) em($in-32) em($in-100);

  .container-footer {
    display: grid;
    grid-template-columns: repeat(2, min-content) repeat(3, auto);
    grid-template-rows: repeat(2, min-content);
    gap: em(77) 0;
    grid-auto-flow: row;

    .made-by {
      grid-area: 2 / 2 / 3 / 4;
      grid-template-columns: 1fr;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }
    }

    .logo-w {
      margin-right: em($in-140);
      grid-area: 1 / 1 / 2 / 2;
    }

    .main-links {
      margin-right: em(55);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: em(16) 0;
      grid-area: 1 / 2 / 2 / 3;

      a {
        @include linkHeader;
        @include body-r($size: em(16))
      }
    }

    .other-links {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: em(16) 0;
      grid-area: 1 / 3 / 2 / 4;

      a {
        @include linkHeader;
        @include body-r($size: em(16))
      }
    }

    .rating-block {
      grid-area: 1 / 4 / 2 / 5;
    }

    .secure-block {
      grid-area: 2 / 4 / 3 / 5;
    }

    .feedback-block {
      display: flex;
      align-items: center;
      grid-area: 2 / 5 / 3 / 6;

      p {
        @include body-r($color: $gray-m, $size: em(16));
        margin-right: em($in-6);
      }

      a {
        @include body-r($size: em(16));
        @include linkInside;
      }
    }

    .social-block {
      display: flex;
      grid-area: 1 / 5 / 2 / 6;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }

      .social-link-w {
        margin-left: em(16);
        display: grid;
        grid-template-columns: repeat(4, min-content);
        grid-template-rows: min-content;
        gap: 0 em(16);
      }
    }

    .copyright-block {
      grid-area: 2 / 1 / 3 / 2;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }
    }
  }
}
</style>
