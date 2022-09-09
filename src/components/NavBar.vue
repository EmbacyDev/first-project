<template>
  <div class="navBar">
    <div class="menu">
      <router-link class="logo-w"
                   to="/">
        <img class="logo"
             alt="icon"
             src="../assets/images/png/Slash-icon.png">
      </router-link>
      <nav :class="{ active: isActive }">
        <router-link to="/brands">Brands</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/blog">Blog</router-link>
      </nav>
    </div>
    <div class="btn-w">
      <main-button title="Log in"
                   class="solid"
      />
      <main-button title="Add to Chrome"
                   class="primary"
      />
    </div>
    <button :class="{ active: isActive }"
            type="button"
            class="burger"
            @click="openMenu">
      <span class="burger-lines_first"/>
      <span class="burger-lines_second"/>
      <span class="burger-lines_third"/>
      <span class="burger-lines_fourth"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  props: {},
  data() {
    return {
      isActive: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    openMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
.navBar {
  display: flex;
  justify-content: space-between;
  padding: em(50) em($in-100) em(50) em($in-100);
  background-color: $white-m;
  //background-color: red;
  .menu {
    width: em(483);
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      margin: 0 em($in-16) 0 em($in-16);
      width: em(268);
      display: flex;
      justify-content: space-between;
      a {
        @include linkHeader;
        @include body-r($size: em(16))
      }
    }
  }
  .btn-w {
    display: flex;
    .solid {
      margin-right: em($in-16);
    }
  }
  .burger {
    display: none;
  }
}

@include tablet {
  .navBar {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: px($in-20) px($in-60) px($in-20) px($in-60);
    //background-color: red;
    align-items: center;
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-w {
        width: px($in-76);
        .logo {
          max-width: px($in-76);
        }
      }
      nav.active {
        height: 100%;
        top: px(65);
        opacity: 100%;
      }
      nav {
        height: 0;
        opacity: 0;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        background: white;
        a {
          @include body-r($size: px(16));
          @include linkHeader;
        }
      }
    }
    .btn-w {
      display: flex;
      flex-direction: row;
    }
    .burger {
      display: flex;
      width: px(20);
      height: px(20);
      position: relative;
      border: 0;
      padding: 0;
      background: transparent;
      cursor: pointer;
      transition: 0.1s;
      transition-delay: 0.10s;
      span {
        display: block;
        text-indent: 100%;
        overflow: hidden;
        white-space: nowrap;
        height: px(2);
        background-color: #000;
        width: 100%;
        position: absolute;
        left: 0;
        transition: .3s all linear;
      }
      .burger-lines_first {
        top:0;
      }
      .burger-lines_second, .burger-lines_third {
        top:50%;
        transform: translateY(-50%);
      }
      .burger-lines_fourth {
        bottom: 0;
      }
    }
  }

  .active.burger {
    .burger-lines_first, .burger-lines_fourth {
      opacity: 0;
    }
    .burger-lines_second {
      transform: translateY(-50%) rotate(45deg);
    }
    .burger-lines_third {
      transform: translateY(-50%) rotate(-45deg);
    }
  }
}
</style>
