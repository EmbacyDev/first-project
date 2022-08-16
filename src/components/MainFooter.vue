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
      <div class="rating-block"/>
      <div class="secure-block"/>
      <div class="feedback-block"/>
      <div class="social-block"/>
      <div class="copyright-block">
        <p>© 2022 Slash</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainFooter',
  components: {},
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
    grid-template-columns: repeat(5, min-content);
    grid-template-rows: repeat(2, min-content);
    gap: em(77) 0;
    grid-auto-flow: row;

    .made-by {
      grid-area: 2 / 2 / 3 / 4;
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
      }
    }

    .rating-block {
      grid-area: 1 / 4 / 2 / 5;
    }

    .secure-block {
      grid-area: 2 / 4 / 3 / 5;
    }

    .feedback-block {
      grid-area: 2 / 5 / 3 / 6;
    }

    .social-block {
      grid-area: 1 / 5 / 2 / 6;
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
