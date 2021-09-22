<template>
<div class='header'>
  <div class="ant-row">
    <div class="ant-col">
      <h1>
        <a id="logo" href="https://ant.design/index-cn">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
          Ant Design
        </a>
      </h1>
    </div>

    <div class="menu-row">
      <!-- 搜索框 -->
      <div class="serach_box">
        <a-icon type="search" class="searchIcon" />
        <a-input placeholder="搜索" class="searchInput" />
        <span>Ctr</span>
        <span>K</span>
      </div>

      <!-- 菜单栏 -->
      <a-menu mode="horizontal" class="menu">
        <a-menu-item>设计</a-menu-item>
        <a-menu-item>文档</a-menu-item>

        <a-menu-item>组件</a-menu-item>
        <a-menu-item>资源</a-menu-item>
        <a-menu-item>国内镜像</a-menu-item>

        <!-- <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="unordered-list" />
          </span>
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">Option 3</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>-->
      </a-menu>

      <!-- 选择功能栏 -->
      <ul class="selectMenu">
        <li>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              4.17.0-alpha.3
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>3.x</a-menu-item>
              <a-menu-item>2.x</a-menu-item>
              <a-menu-item>1.x</a-menu-item>
              <a-menu-item>0.12.x</a-menu-item>
              <a-menu-item>0.11.x</a-menu-item>
              <a-menu-item>0.10.x</a-menu-item>
              <a-menu-item>0.09.x</a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
        <li>English</li>
        <li>RTL</li>
        <li>
          <a-dropdown placement="bottomRight">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">Ant Design Charts</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Ant Design Pro</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Ant Design Pro Components</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Ant Design Angular(社区实现)</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Ant Design Vue(社区实现)</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
        <li>
          <a-icon type="github" />
        </li>
        <li>
          74735
          <a-icon type="left" class="arrowLeft" />
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    max-width: 1280px;
    margin-right:auto;
    margin-left: auto;
    z-index: 10;
}


.ant-row {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ant-col {
  width: 210px;
  height: 64px;
  font-size: 9px;
}

.ant-col #logo {
  color: #000;
}

.ant-col img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
  position: relative;
  top:-2px
}

.menu-row {
  margin-top: -32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu-row .serach_box {
  width: 280px;
  margin-top: 5px;
}

.menu-row .serach_box .searchIcon {
  position: relative;
  top: 2px;
  color: #ced4d9;
}

.menu-row .serach_box .searchInput {
  width: 150px;
  margin-left: 2px;
  outline: none;
  border: none;
  background: transparent;
}

.menu-row .serach_box .searchInput:focus {
  box-shadow: none;
}

.menu-row .serach_box span {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: #9696960f;
  color: #ced4d9;
  margin: 0 3px;
  border-radius: 5px;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-bottom-width: 2px;
  text-align: center;
  line-height: 20px;
}

.menu-row .menu {
  width: 370px;
  border-bottom: none;
  margin-left: -23px;
    background: transparent;
}

.menu-row .selectMenu {
  width: 500px;
  position: relative;
  top: 5px;
}

.menu-row .selectMenu li {
  display: inline-block;
  margin: 0 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 2px;
  padding: 2px 5px;
}

.menu-row .selectMenu li a {
  color: #000000a6;
}

.menu-row .selectMenu li:nth-child(5) {
  background: transparent;
  border: none;
  font-size: 20px;
}

.menu-row .selectMenu li:nth-child(6) {
  margin-left: 0px;
  position: relative;
}

.menu-row .selectMenu li:nth-child(6):hover {
  color: blueviolet;
}

.menu-row .selectMenu li:nth-child(6) .arrowLeft {
  position: absolute;
  left: -11px;
  top: 50%;
  color: #ccc;
  transform: translateY(-50%);
}




</style>