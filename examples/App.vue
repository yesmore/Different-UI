<template>
  <!-- <h2>组件示例<i class="iconfont df-icon-script"></i></h2> -->

  <!-- <div class="card-container">
    <df-card
      :bodyStyle="{ borderRadius: '10px', width: '300px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/02.jpg"
    >
      <template #title> <h2>标题</h2> </template>

      卧槽
      <template #action>
        <df-button color="primary" type="trans-error" size="large"
          >success</df-button
        >
      </template>
    </df-card>
  </div> -->

  <!-- 动画 -->
  <df-button @click="show">显示</df-button>
  <transition name="df-fade-in">
    <div v-if="showMod">
      <h1>卧槽</h1>
    </div>
  </transition>

  <!-- <div class="btn-container">
    <df-button
      @click="handleClick"
      type="bling"
      size="large"
      radius="small"
      :plain="true"
      disabled
    >
      按钮
    </df-button>
    <df-button color="success" type="trans-success">success</df-button>
    <df-button type="curtain-down-success">success</df-button>
    <df-button @click="handleClick" color="success"> 按钮 </df-button>
    <df-button :plain="true" color="primary"> 按钮 </df-button>
    <df-button type="concave" color="primary"> 按钮 </df-button>
    <df-button type="bling" color="primary"> 按钮 </df-button>
  </div> -->

  <!-- <div class="car-container card df-m-5">
    <df-carousel
      :autoplay="true"
      :duration="3000"
      :initialIndex="0"
      :showDot="true"
      :showDirector="true"
      animation="df-slide"
      :dotBgColor="'grey'"
    >
      <df-carousel-item v-for="(item, index) in carousel_data" :key="index">
        <img :src="item.img_name" alt="" />
      </df-carousel-item>
    </df-carousel>
  </div> -->

  <!-- <div class="tree-container">
    <div class="df-side-bar">
      <df-tree-menu>
        <template v-for="menu in tree_menu_data">
          <df-tree-menu-item v-if="!menu.children" :key="menu.id">
            <a href="javascript:;">{{ menu.title }}</a>
          </df-tree-menu-item>

          多级递归
          <df-tree-resub-menu v-else :key="menu" :data="menu">
          </df-tree-resub-menu>

          二级菜单
          <df-tree-sub-menu v-else :key="menu.title">
            <template #sub-menu-title>{{ menu.title }}</template>
            <template v-for="child in menu.children" :key="child.id">
              <df-tree-menu-item>
                {{ child.title }}
              </df-tree-menu-item>
            </template>
          </df-tree-sub-menu>
        </template>
      </df-tree-menu>
    </div>
  </div> -->

  <!-- <div class="sec-container" style="margin-top: 15px">
    <df-selector
      placeholder="请选择框架"
      :data="selector_data"
      @setItemValue="setItemValue"
    />
  </div> -->

  <!-- <div class="magnifier-container">
    <df-magnifier
      link="https://github.com/yesmore"
      :blank="true"
      imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/2/09.jpg"
      imgAlt="可放大的图片"
      :imgWidth="375"
      :imgHeight="600"
      :magWidth="100"
      :magHeight="100"
      magRadius="10%"
      cursor="crosshair"
      :scale="1.7"
    />
  </div> -->

  <!-- <div class="star-container">
    <df-starsrate
      :rate="3"
      :size="24"
      :totalStars="6"
      icon="df-icon-collection-fill"
      activeColor="red"
      @getStarsNum="getStarsNum"
    />
  </div> -->

  <!-- <df-button @click="show">显示 {{ showMod }} </df-button>
  <div class="modal-container">
    <df-modal
      v-show="showMod"
      animate="df-list"
      :mask="false"
      :modalStyle="{
        width: '300px',
        borderRadius: '5px',
        // backgroundColor: 'yellow',
      }"
      :headerStyle="{
        // color: 'pink',
        // backgroundColor: 'orange',
      }"
      :contentStyle="{
        // color: '#fff',
        height: '100px',
      }"
      :footerStyle="{
        // backgroundColor: 'cyan',
      }"
      headText="模态框标题"
      contentText="模态框内容"
      position="center"
      :showHead="true"
      :actionBtn="false"
      confirmText="确定哈哈"
      cancelText="取消按钮"
      @confirm="modalConfirm"
      @cancel="modalClose"
    />
  </div> -->

  <!-- <div class="df-row is-justify-space-around">
    <div class="text-primary">sfs</div>
    <div
      class="bg-warning my-5"
      style="font-size: var(--df-font-size-extra-large)"
    >
      sfs
    </div>
    <div>sfs</div>
  </div> -->

  <!-- <div class="loginbar">
    <df-loginbar></df-loginbar>
  </div> -->

  <div class="switch-container">
    <df-switch></df-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import carousel_data from './data/carousel'
import tree_menu_data from './data/treeMenu'
import selector_data from './data/selector'
// import { DfCarousel, DfCarouselItem, DfButton, DfTreeMenu } from '~/index'
// import { DfModal } from '~/index'

export default defineComponent({
  name: 'App',
  // components: { DfModal },
  setup() {
    const count = ref(0)

    const handleClick = () => {
      console.log('click-btn')
    }
    const setItemValue = (value: string | undefined) => {
      console.log(value)
    }

    const state = reactive({
      imgUrl: 'https://cdn.jsdelivr.net/gh/yesmore/img/v2/2/09.jpg',
      imgAlt: '可放大的图片',
      blank: true,
      link: 'https://github.com/yesmore',
      imgWidth: '375',
      imgHeight: 481,
      magWidth: 100,
      magHeight: 100,

      magRadius: '50%',
      showMod: false,
    })

    const getStarsNum = (num: number) => {
      console.log(num)
    }

    const modalConfirm = (data: { msg: string; show: boolean }) => {
      console.log(data.msg, data.show)
      state.showMod = data.show
    }
    const modalClose = (data: { msg: string; show: boolean }) => {
      console.log(data.msg, data.show)
      state.showMod = data.show
    }

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      carousel_data,
      handleClick,
      count,
      tree_menu_data,
      selector_data,
      setItemValue,
      getStarsNum,
      ...toRefs(state),
      modalConfirm,
      modalClose,
      show,
    }
  },
})
</script>

<style scoped>
/* .magnifier-container, */
.df-side-bar {
  width: 200px;
}

.car-container {
  width: 400px;
}
</style>
