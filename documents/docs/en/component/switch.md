# Switch 开关

::: warning

:::

## 基础使用

**示例**（移入鼠标即可预览）：

<df-template>
  <template #demo>
    <div class="magnifier-container" >
      <!-- <df-switch
        activeColor="success"
        :showLabel="false"
        labelText="卧槽"
        @handleChangeStatus="handleChangeStatus"
      ></df-switch>
      <br> -->
      <df-switch class='df-p-3'>
        <template #label> Label </template>
      </df-switch>
    </div>
  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div class="magnifier-container" align="center">
    <df-magnifier
      :blank="true"
      imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
      imgAlt="放大镜"
      cursor="crosshair"
      :scale="1.7"
    />
  </div>
</template>
```

:::
</template>

</df-template>
