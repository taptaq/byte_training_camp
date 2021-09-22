<template>
  <div class="home-banner">
    <div class="home-banner-background">
      <img
        alt="background"
        src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ"
      />
      <svg viewBox="0 0 1440 448">
        <g transform="translate(380, 30)" opacity="1" frame="0">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 170, 170)">
              <svg>
                <defs>
                  <filter id="banner-circle-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)" />
                  </filter>
                  <linearGradient id="banner-circle-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FAFCFE" />
                    <stop offset="100%" style="stop-color:#F9FCFE" />
                  </linearGradient>
                </defs>
                <circle
                  cx="170"
                  cy="170"
                  r="140"
                  fill="url(#banner-circle-fill-1)"
                  filter="url(#banner-circle-shadow-1)"
                />
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(-230, 218)" opacity="1" frame="0">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 230, 230)">
              <svg>
                <defs>
                  <filter id="banner-circle-shadow-2">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)" />
                  </filter>
                  <linearGradient id="banner-circle-fill-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FAFCFE" />
                    <stop offset="50%" style="stop-color:#F3F9FC" />
                  </linearGradient>
                </defs>
                <circle
                  cx="230"
                  cy="230"
                  r="200"
                  fill="url(#banner-circle-fill-2)"
                  filter="url(#banner-circle-shadow-2)"
                />
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(1280, 180)" opacity="1" frame="0">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 120, 120)">
              <svg>
                <defs>
                  <filter id="banner-rect-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)" />
                  </filter>
                  <linearGradient id="banner-rect-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="25%" style="stop-color:#F8FCFF" />
                    <stop offset="100%" style="stop-color:#F8FBFF" />
                  </linearGradient>
                </defs>
                <rect
                  x="30"
                  y="30"
                  width="180"
                  height="180"
                  fill="url(#banner-rect-fill-1)"
                  filter="url(#banner-rect-shadow-1)"
                />
              </svg>
            </g>
          </g>
        </g>
        <g transform="translate(670, -660)" opacity="1" frame="0">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 430, 430)">
              <svg width="860" height="860">
                <defs>
                  <filter id="banner-diamond-shadow-1">
                    <feDropShadow dx="10" dy="10" stdDeviation="10" flood-color="rgba(0,0,0,0.05)" />
                  </filter>
                  <linearGradient id="banner-diamond-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="60%" style="stop-color:#FCFDFF" />
                    <stop offset="100%" style="stop-color:#FCFDFE" />
                  </linearGradient>
                </defs>
                <path
                  d="M 30 430 430 30 830 430 430 830 Z"
                  fill="url(#banner-diamond-fill-1)"
                  filter="url(#banner-diamond-shadow-1)"
                />
              </svg>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="home-banner-holder">
      <div class="home-banner-content">
        <div>
          <div class="home-card-logo">
            <img
              alt="Ant Design"
              src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg"
              class="home-banner-mini"
            />
            <img
              width="500"
              height="87"
              alt="Ant Design"
              src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"
              class="home-banner-normal"
              @mouseenter="changeIcon"
              @mouseleave="cancelChange"
            />
            <svg viewBox="0 0 64 64" class="home-card-logo-icon">
              <g transform="translate(16, 16)" opacity="1" frame="0" cubic="0.25,0.1,0.25,1">
                <g transform="matrix(1, 0, 0, 1, 0, 0)">
                  <g transform="rotate(0, 16, 16)">
                    <svg v-show="init">
                      <circle cx="16" cy="16" r="9" fill="#F74455" />
                    </svg>

                    <svg viewBox="0 0 32 32" v-show="!init">
                      <image :href="nowIcon" alt height="16" width="16" />
                    </svg>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
        <a class="banner-video">
          <span role="img" aria-label="play-circle" class="anticon anticon-play-circle">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="play-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"
              />
            </svg>
          </span>
          <!-- -->
          播放视频
        </a>
        <div class="banner-qr">
          <a>
            <img
              alt="mobile"
              src="https://gw.alipayobjects.com/zos/basement_prod/d2fa63a8-3e9d-4f59-80c7-1fd1d0cd9118.svg"
            />4.0 正式版发布
          </a>
        </div>
        <div class="home-banner-content-operations">
          <a href="https://ant.design/docs/react/introduce-cn">
            <button type="button" class="ant-btn ant-btn-primary ant-btn-round">开始使用</button>
          </a>
          <a href="https://ant.design/docs/spec/introduce-cn">
            <button type="button" class="ant-btn ant-btn-round ant-btn-background-ghost">设计语言</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBg",
  data() {
    return {
      changeIcons: [
        "https://gw.alipayobjects.com/zos/basement_prod/7002f57b-bf16-4640-8373-2c4cfcfa7f8c.svg",
        "https://gw.alipayobjects.com/zos/basement_prod/1fdf5981-2d9d-4315-bb84-4590d5c5b989.svg",
        "https://gw.alipayobjects.com/zos/basement_prod/43d010fa-71ac-44e3-8475-bb77d95c331c.svg",
        "https://gw.alipayobjects.com/zos/basement_prod/ad510b94-5f85-4b30-b929-2e3a34ad673c.svg",
      ],
      nowIcon: "",
      nowIconIndex: 0,
      timer: null,
      init:true
    };
  },

  mounted() {
    this.nowIcon = this.changeIcons[this.nowIconIndex];
  },

  methods: {
    changeIcon() {
      this.init=false;
      this.timer = setInterval(() => {
        this.nowIconIndex++;
        this.nowIconIndex = this.nowIconIndex % this.changeIcons.length;
        // console.log(this.nowIconIndex);
        this.nowIcon = this.changeIcons[this.nowIconIndex];
      }, 150);
    },

    cancelChange(){
        clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.home-banner {
  position: relative;
  height: 512px;
  overflow: hidden;
  background: url(https://gw.alipayobjects.com/zos/basement_prod/a8cf2dfe-ff6a-4a2e-ab73-f72dced0df99.svg);
  background-size: cover;
}
.home-banner-holder {
  position: relative;
  z-index: 1;
  margin-top: 160px;
}
.home-banner-content {
  margin: 0 auto;
  padding: 0 16px;
  font-size: 14px;
  text-align: center;
}
.home-banner-content p {
  margin: 16px 0 0;
  font-weight: lighter;
}
.home-banner-content .banner-video {
  display: none;
  margin: 20px auto 0;
  color: #0170fe;
}
.home-banner-content .banner-qr {
  margin: 8px auto 0;
  font-weight: 400;
  text-align: center;
}
.home-banner-content .banner-qr a {
  color: #0170fe;
}
.home-banner-content .banner-qr img {
  display: inline-block;
  width: 18px;
  margin-right: 8px;
  vertical-align: text-bottom;
}
.rtl .home-banner-content .banner-qr img {
  margin-right: 0;
  margin-left: 8px;
}
.home-banner-content-operations {
  margin-top: 72px;
  white-space: nowrap;
}
.home-banner-content-operations a {
  margin: 0 8px;
}
.home-banner-content-operations button.ant-btn {
  height: auto;
  padding: 8px 24px;
  color: #0170fe;
  font-size: 14px;
  border-color: #0170fe;
}
.home-banner-content-operations button.ant-btn:hover {
  color: #348dfe;
  border-color: #348dfe;
}
.home-banner-content-operations button.ant-btn.ant-btn-primary {
  color: #fff;
  background: #0170fe;
}
.home-banner-content-operations button.ant-btn.ant-btn-primary:hover {
  background-color: #348dfe;
}
.banner-qr-code .ant-popover-inner-content {
  padding: 12px;
}
.banner-qr-code img {
  width: 136px;
  height: 136px;
}
.banner-qr-code p {
  margin: 8px 0 0;
  color: #314659;
  text-align: center;
}
@media (min-width: 576px) {
  .home-banner {
    height: 448px;
  }
  .home-banner-holder {
    margin-top: 130px;
  }
  .home-banner-content {
    font-size: 16px;
  }
  .home-banner-content p {
    margin-top: 24px;
  }
  .home-banner-content .video {
    margin: 8px auto;
  }
  .home-banner-content-operations {
    margin-top: 40px;
  }
  .home-banner-content-operations button.ant-btn {
    font-size: 16px;
  }
}
.home-banner-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.home-banner-background > * {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.home-banner-background > img {
  display: block;
}
.home-banner-background > svg {
  display: none;
}
@media (min-width: 576px) {
  .home-banner-background > img {
    display: none;
  }
  .home-banner-background > svg {
    display: block;
  }
}
.home-card-logo {
  position: relative;
  display: inline-block;
  max-width: 500px;
  margin: 0 32px;
  cursor: pointer;
}
.home-card-logo .home-card-logo-icon {
  position: absolute;
  top: -38px;
  left: 339px;
  display: none;
  width: 64px;
  height: 64px;
}
.home-card-logo .home-banner-mini {
  display: block;
  max-width: 100%;
}
.home-card-logo .home-banner-normal {
  display: none;
}
@media (min-width: 576px) {
  .home-card-logo {
    height: 90px;
    vertical-align: top;
  }
  .home-card-logo .home-banner-mini {
    display: none;
  }
  .home-card-logo .home-banner-normal {
    display: block;
  }
  .home-card-logo .home-card-logo-icon {
    display: block;
  }
}
</style>