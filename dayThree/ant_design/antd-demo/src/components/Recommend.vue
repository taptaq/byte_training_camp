<template>
  <div class="recommend_body">
    <h3>精彩推荐</h3>
    <div class="container">
      <div class="firstCol">
        <a href="https://zhuanlan.zhihu.com/p/407704739" class="wrap">
          <img
            src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QYwIR6Zk0QMAAAAAAAAAAAAAARQnAQ"
            alt="设计模式｜悬浮工具：如何做小工具的交互设计？"
          />
          <span class="tuiguang">推广</span>

          <div class="content">
            <h4>设计模式｜悬浮工具：如何做小工具的交互设计？</h4>
            <p>我们开启了一趴新的设计模式类型：交互操作。本期是交互操作的第二个模式：悬浮工具。</p>
          </div>
        </a>
      </div>
      <div class="secondCol">
        <div class="item1">
          <a href="https://zhuanlan.zhihu.com/p/405851080" class="wrap">
            <img
              src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*GfFhSbmdIGgAAAAAAAAAAAAAARQnAQ"
              alt="设计模式 | 按钮组：大量的操作按钮如何排布与设计？"
            />
            <span class="tuiguang">推广</span>

            <div class="content">
              <h4>设计模式 | 按钮组：大量的操作按钮如何排布与设计？</h4>
              <p>这一期，我们来介绍一趴新的设计模式类型：交互操作。本期是交互操作的第一组模式：按钮组。</p>
            </div>
          </a>
        </div>

        <div class="item2">
          <a href="https://www.yuque.com/yingxi/readings/so7qk6" class="wrap">
            <img
              src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w7W3Q5S93iMAAAAAAAAAAAAAARQnAQ"
              alt="Ant Design 4.0 的一些杂事儿：抽屉"
            />
            <span class="tuiguang">推广</span>

            <div class="content">
              <h4>Ant Design 4.0 的一些杂事儿：抽屉</h4>
              <p>以下更新将在 antd 4.17.0-alpha.0 版本中发布。</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style scoped>
.recommend_body {
  margin-top: 120px;
  padding: 0 50px;
  height: 500px;
}

.recommend_body h3 {
  font-size: 35px;
}

.container {
  display: flex;
  justify-content: space-between;
}

.container .firstCol {
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc;
}

.container .firstCol .tuiguang {
  position: absolute;
  left: 0;
  top: 0;
  background: #ffd75a;
  color: #000;
  padding: 2px 4px;
  border-bottom-right-radius: 4px;
}

.container .firstCol img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.container .firstCol .content {
  position: absolute;
  bottom: -85px;
  left: 0;
  right: 0;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  padding: 0 16px;
  padding-top: 5px;
  transition: all 0.5s;
  height: 35%;
  font-size: 16px;
}

.container .firstCol .content h4 {
  font-size: 22px;
  color: #fff;
  font-weight: 800;
}

.container .firstCol .wrap:hover img {
  transform: scale(1.1);
}

.container .firstCol .wrap:hover .content {
  padding-top: 4%;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}

.container .secondCol {
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.container .secondCol .item1,
.container .secondCol .item2 {
  width: 80%;
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc;
  margin: 10px 0;
}

.container .secondCol .item1 {
  margin-top: 0;
}

.container .secondCol .item1 img,
.container .secondCol .item2 img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.container .secondCol .item1 .content {
  position: absolute;
  bottom: -110px;
  left: 0;
  right: 0;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  padding: 0 16px;
  padding-top: 5px;
  transition: all 0.5s;
  height: 100%;
  font-size: 16px;
}

.container .secondCol .item2 .content {
  position: absolute;
  bottom: -135px;
  left: 0;
  right: 0;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  padding: 0 16px;
  padding-top: 5px;
  transition: all 0.5s;
  height: 100%;
  font-size: 16px;
}

.container .secondCol .item1 .content h4,
.container .secondCol .item2 .content h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 800;
}

.container .secondCol .item1 .wrap:hover img,
.container .secondCol .item2 .wrap:hover img {
  transform: scale(1.1);
}

.container .secondCol .item1 .wrap:hover .content{
  padding-top: 4%;
  bottom: -30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}

.container .secondCol .item2 .wrap:hover .content {
  padding-top: 4%;
  bottom: -80px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}

.container .secondCol .item1 .tuiguang,
.container .secondCol .item2 .tuiguang {
  position: absolute;
  left: 0;
  top: 0;
  background: #ffd75a;
  color: #000;
  padding: 2px 4px;
  border-bottom-right-radius: 4px;
}
</style>