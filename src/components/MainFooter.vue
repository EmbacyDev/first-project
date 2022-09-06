<!-- eslint-disable vue/max-len -->
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
          <icon-base :iconWidth="32"
                     :iconHeight="32">
            <path d="M24 0 0 0C0 .375 0 .429 0 .96L0 24C.75 24 .429 24 .96 24L23.04 24C23.571 24 23.625 24 24 24L24 .531C24 0 24 .375 24 0ZM20.268 7.005 18.351 7.005C16.848 7.005 16.557 7.719 16.557 8.769L16.557 11.082 20.145 11.082 19.677 14.703 16.557 14.703V24H12.816L12.816 14.706H9.687V11.082H12.816V8.412C12.816 5.313 14.709 3.624 17.475 3.624 18.801 3.624 19.938 3.723 20.271 3.768V7.005H20.268Z"
                  fill="#0432D3"/>
          </icon-base>
        </div>
        <div class="social-link-w">
          <icon-base :iconWidth="32"
                     :iconHeight="32">
            <path d="M32 0H0v32h32V0zM12.663 16a3.342 3.342 0 0 1 3.334-3.335c1.836 0 3.335 1.499 3.335 3.335s-1.499 3.335-3.335 3.335A3.342 3.342 0 0 1 12.663 16zm13.336-.505V16.565c.002 1.19.004 2.372-.065 3.563-.078 1.6-.44 3.02-1.614 4.193-1.17 1.17-2.591 1.536-4.193 1.613-1.21.068-2.412.067-3.622.066a424.832 424.832 0 0 0-1.01 0c-1.208.001-2.41.002-3.623-.066-1.601-.077-3.02-.44-4.193-1.613-1.17-1.171-1.536-2.592-1.613-4.193-.068-1.21-.067-2.415-.066-3.624A445.48 445.48 0 0 0 6 16a445.48 445.48 0 0 0 0-.504c-.001-1.209-.002-2.411.066-3.624.077-1.6.44-3.02 1.613-4.193 1.171-1.17 2.592-1.536 4.193-1.613 1.21-.068 2.413-.067 3.623-.066a447.073 447.073 0 0 0 1.009 0c1.208-.001 2.411-.002 3.623.066 1.602.077 3.02.44 4.193 1.613 1.171 1.171 1.536 2.592 1.614 4.193.068 1.21.067 2.413.065 3.623zM10.866 16a5.124 5.124 0 0 0 5.131 5.131c2.84 0 5.131-2.292 5.131-5.131a5.124 5.124 0 0 0-5.13-5.131A5.124 5.124 0 0 0 10.865 16zm9.274-5.341a1.197 1.197 0 0 0 2.046.848 1.197 1.197 0 0 0-.848-2.046c-.663 0-1.198.535-1.198 1.198z"
                  fill="#0432D3"/>
          </icon-base>
        </div>
        <div class="social-link-w">
          <icon-base :iconWidth="32"
                     :iconHeight="32">
            <path d="M32 0H0v32h32V0zm-7.388 11.588c.012.188.012.384.012.576 0 5.872-4.472 12.636-12.644 12.636a12.6 12.6 0 0 1-6.824-1.992c.36.04.704.056 1.072.056 2.08 0 3.992-.704 5.516-1.896a4.444 4.444 0 0 1-4.152-3.08c.684.1 1.3.1 2.004-.08a4.44 4.44 0 0 1-3.556-4.36v-.056c.588.332 1.28.536 2.004.564a4.445 4.445 0 0 1-1.98-3.696c0-.828.216-1.584.604-2.24a12.611 12.611 0 0 0 9.16 4.644C15.2 9.644 17.456 7.2 20.168 7.2c1.28 0 2.432.536 3.244 1.4a8.776 8.776 0 0 0 2.82-1.068 4.422 4.422 0 0 1-1.952 2.444 8.786 8.786 0 0 0 2.56-.692 9.31 9.31 0 0 1-2.228 2.304z"
                  fill="#0432D3"/>
          </icon-base>
        </div>
        <div class="social-link-w">
          <icon-base :iconWidth="32"
                     :iconHeight="32">
            <path fill="#0432D3"
                  fill-rule="evenodd"
                  d="M16.042 24.97h.004c5.018 0 9.102-4.065 9.104-9.061a8.985 8.985 0 0 0-2.664-6.41A9.064 9.064 0 0 0 16.05 6.84c-5.022 0-9.107 4.065-9.109 9.06 0 1.713.481 3.38 1.392 4.822l.217.343-.92 3.344 3.446-.9.332.197c1.398.825 3 1.262 4.634 1.263zm3.128-7.673c.25.091 1.596.75 1.87.887l.15.073c.19.091.32.153.374.245.069.113.069.659-.16 1.295-.227.636-1.32 1.217-1.847 1.295-.471.07-1.068.1-1.723-.108a15.797 15.797 0 0 1-1.56-.574c-2.566-1.102-4.3-3.577-4.628-4.045a3.066 3.066 0 0 0-.048-.067l-.003-.004c-.145-.192-1.115-1.48-1.115-2.814 0-1.255.62-1.913.904-2.215l.054-.058c.25-.273.547-.34.73-.34.182 0 .365.001.524.009h.062c.16 0 .358-.001.554.468.076.18.186.448.303.73.235.57.495 1.2.541 1.292.069.136.114.296.023.477a7.759 7.759 0 0 0-.039.078c-.068.14-.118.242-.235.377-.046.053-.093.11-.14.168-.095.114-.189.228-.27.309-.137.136-.28.283-.12.556.16.273.709 1.165 1.522 1.887.875.777 1.636 1.105 2.02 1.271a4 4 0 0 1 .181.081c.274.136.434.114.593-.068.16-.182.685-.795.867-1.068.182-.273.365-.227.616-.137z"
                  clip-rule="evenodd"/>
            <path fill="#0432D3"
                  fill-rule="evenodd"
                  d="M32 0H0v32h32V0zM16.046 5a10.91 10.91 0 0 1 7.748 3.197A10.81 10.81 0 0 1 27 15.91c-.003 6.011-4.917 10.902-10.954 10.902h-.004c-1.834 0-3.635-.459-5.235-1.327L5 27l1.554-5.649a10.843 10.843 0 0 1-1.462-5.45C5.094 9.89 10.008 5 16.046 5z"
                  clip-rule="evenodd"/>
          </icon-base>
        </div>
        <div class="social-link-w">
          <icon-base :iconWidth="32"
                     :iconHeight="32">
            <g clip-path="url(#a)">
              <path fill="#0432D3"
                    fill-rule="evenodd"
                    d="M0 2.674V0H32V32H0V2.674zM12.666 12.2H17v2.176c.626-1.25 2.226-2.377 4.63-2.377 4.61 0 5.702 2.492 5.702 7.064v8.468h-4.665v-7.427c0-2.604-.625-4.073-2.213-4.073-2.204 0-3.12 1.584-3.12 4.073v7.427h-4.667V12.2zm-8 15.132h4.666V12H4.666v15.333zM10 7a3 3 0 0 1-.855 2.164A3 3 0 0 1 7 10.066 3 3 0 0 1 4 7a3 3 0 0 1 3-2.935 3 3 0 0 1 2.098.856A3 3 0 0 1 10 7z"
                    clip-rule="evenodd"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff"
                      d="M0 0h32v32H0z"/>
              </clipPath>
            </defs>
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
