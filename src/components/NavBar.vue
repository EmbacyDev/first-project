<template>
  <div class="navBar">
    <div class="menu">
      <router-link class="logo-w"
                   to="/">
        <img class="logo"
             alt="icon"
             src="../assets/images/Slash-icon.png">
      </router-link>
      /* переключение классов active: isActive */
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
    <button class="burger-btn"
            @click="openMenu">
      /* переключение классов active: isActive */
      <span class="first"/>
      <span class="midl"/>
      <span class="last"/>
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
    .burger-btn {
      display: none;
    }
  }
}
@include mobile-d {
  .navBar {
    position: relative;
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
        /*  класс display none */
        top: 100px;
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
      /*  классов active */
      .active {
        display: flex;
      }
    }
    .btn-w {
      display: none;
      flex-direction: column;
    }
    .burger-btn {
      border: 0;
      background: transparent;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 24px;
      height: 24px;
      padding: 2px;
      span {
        width: 100%;
        height: 2px;
        background: black;
      }
      /*  состояние открытой бургер кнопки */
      .first {
        transform: translate3d(0px, -7px, 0px) rotateZ(-45deg);
      }
      .midl {
        opacity: 0;
      }
      .last {
        transform: rotate(45deg) translate(5px);
      }
    }
  }

}
</style>
