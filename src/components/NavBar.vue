<template>
  <div class="navBar">
    <div class="menu">
      <router-link class="logo-w"
                   to="/">
        <img class="logo"
             alt="icon"
             src="../assets/images/Slash-icon.png">
      </router-link>
      <nav :class="{ active: isActive }">
        <router-link to="/brands">Brands</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/blog">Blog</router-link>
      </nav>
    </div>
    <div class="btn-w">
      <main-button style="margin-right: 16px "
                   title="Log in"
                   class="solid"
      />
      <main-button title="Add to Chrome"
                   class="primary"
      />
    </div>
    <button :class="{ active: isActive }"
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
          @include linkHeader;
        }
      }
    }
    .btn-w {
      display: flex;
    }
    .burger {
      display: none;
    }
  }
}
@include mobile-d {
  .navBar {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: $in-20 $in-24 $in-20 $in-24;
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
      nav.active {
        height: 100%;
        top: 65px;
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
          @include linkHeader;
        }
      }
    }
    .btn-w {
      display: none;
      flex-direction: column;
    }
    .burger {
      width: 20px;
      height: 20px;
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
        height: 2px;
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
