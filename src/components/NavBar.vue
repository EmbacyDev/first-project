<template>
  <div class="navBar">
    <div class="menu">
      <router-link class="logo-w"
                   to="/">
        <img class="logo"
             alt="icon"
             src="../assets/images/Slash-icon.png">
      </router-link>
      <nav>
        <router-link to="/brands">Brands</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/blog">Blog</router-link>
      </nav>
    </div>
    <div class="btn-w">
      <main-button style="margin-right: 16px "
                   title="Log in"
                   class="solid"
                   :icons="true"
      />
      <main-button title="Add to Chrome"
                   class="primary"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
@include mobile-u {
.navBar {
  display: flex;
  justify-content: space-between;
  padding: 50px $in-100 50px $in-100;
  background-color: $white-m;
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-w {
      width: 76px;
      .logo {
        max-width: $in-76;
      }
    }
    nav {
      margin-left: $in-140;
      width: 268px;
      display: flex;
      justify-content: space-between;
      a {
        @include newsArticles;
      }
    }
  }
  .btn-w {
    display: flex;
  }
}
}
@include mobile-d {
  .navBar {
    display: flex;
    justify-content: space-between;
    padding: 50px $in-100 50px $in-100;
    background-color: red;
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-w {
        width: 76px;
        .logo {
          max-width: $in-76;
        }
      }
      nav {
        margin-left: $in-140;
        width: 268px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        a {
          @include newsArticles;
        }
      }
    }
    .btn-w {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
