<template>
  <form class="news-form"
        method="post">
    <p class="header-form">Your email</p>
    <div class="line-form">
      <label for="email">Your email
        <input name="email"
               id="email"
               class="email"
               type="email"
               required
               v-model="email">
      </label>
    </div>    
    <main-button> Subscrybe </main-button>
  </form>
</template>

<script>
export default {
  name: 'NewstForm',  
  props: {},
  data() {
    return {
      email: '',
      textarea: '',
      selectedFile: null
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
  .news-form {
    max-width: 592px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    grid-row-gap: 20px;
    background: #F2F5FC;
    .header-form {
      @include h3;
      display: flex;
      margin-bottom: 40px;
    }
    .line-form {
      margin-top: 24px;
      @include left-colum;
      label {
        position: relative;
        @include left-colum;
        width: 100%;
        input {
          margin-top: 6px;
          border: 0;
        }
        .email {
          width: 100%;
          height: 56px;
        } 
      }
    }    
  }
</style>