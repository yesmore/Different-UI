# ToolClass 工具类

`Different` 在 [layout](./layout.md)（栅格布局）基础上，添加了一些工具类，它们提供了**细节**上布局所需的样式。

所有工具类通过在你的任意 `HTML` 标签的 `class` 属性中使用。

### 基本使用

你不需要额外引入资源，内部加载的 index.css 文件中已经依赖了 ToolClass，直接在 `HTML` 标签中使用即可。

### 颜色

ToolClass 提供了默认颜色类来定义你的文本颜色已及背景颜色。

- `class='df-text-primary'`
- `class='df-bg-primary'`

**示例**：

<df-template>

<template #demo>

  <div class="container">
    <ul>
      <li class='df-text-primary'>primary</li>
      <li class='df-text-success'>success</li>
      <li class='df-text-warning'>warning</li>
      <li class='df-text-danger'>danger</li>
      <li class='df-text-error'>error</li>
      <li class='df-text-info'>info</li>
      <li class='df-text-black'>black</li>
      <li class='df-text-white'>white</li>
    </ul>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <ul>
    <li class="df-text-primary">primary</li>
    <li class="df-text-success">success</li>
    <li class="df-text-warning">warning</li>
    <li class="df-text-danger">danger</li>
    <li class="df-text-error">error</li>
    <li class="df-text-info">info</li>
    <li class="df-text-black">black</li>
    <li class="df-text-white">white</li>
  </ul>
</template>
```

:::
</template>

</df-template>

<df-template>
<template #demo>

  <div class="container df-text-center">
    <ul style='list-style:none;padding:0'>
      <li class='df-bg-primary df-text-white'>primary</li>
      <li class='df-bg-success df-text-white'>success</li>
      <li class='df-bg-warning df-text-white'>warning</li>
      <li class='df-bg-danger df-text-white'>danger</li>
      <li class='df-bg-error df-text-white'>error</li>
      <li class='df-bg-info df-text-white'>info</li>
      <li class='df-bg-black df-text-white'>black</li>
      <li class='df-bg-white df-text-white'>white</li>
    </ul>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <ul>
    <li class="df-bg-primary df-text-white">primary</li>
    <li class="df-bg-success df-text-white">success</li>
    <li class="df-bg-warning df-text-white">warning</li>
    <li class="df-bg-danger df-text-white">danger</li>
    <li class="df-bg-error df-text-white">error</li>
    <li class="df-bg-info df-text-white">info</li>
    <li class="df-bg-black df-text-white">black</li>
    <li class="df-bg-white df-text-white">white</li>
  </ul>
</template>
```

:::
</template>

</df-template>

### 字体

ToolClass 提供了 `font-size` 类来定义你的字体大小。

- `class='df-fs-xl'`

**示例**：

<df-template>

<template #demo>

  <div class="container">
    <ul>
      <li class='df-fs-xs'>xs - 12px</li>
      <li class='df-fs-sm'>sm - 13px</li>
      <li class='df-fs-base'>base - 14px</li>
      <li class='df-fs-md'>md - 16px</li>
      <li class='df-fs-lg'>lg - 18px</li>
      <li class='df-fs-xl'>xl - 20px</li>
    </ul>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <ul>
    <li class="df-fs-xs">xs - 12px</li>
    <li class="df-fs-sm">sm - 13px</li>
    <li class="df-fs-base">base - 14px</li>
    <li class="df-fs-md">md - 16px</li>
    <li class="df-fs-lg">lg - 18px</li>
    <li class="df-fs-xl">xl - 20px</li>
  </ul>
</template>
```

:::
</template>

</df-template>

### 定位

ToolClass 提供了 `text-align` 类来布局元素中的文本的水平对齐方式。

- `class='df-text-left'`

**示例**：

<df-template>

<template #demo>

  <div class="container">
    <ul style='list-style:none;padding:0'>
      <li class='df-text-left'>left</li>
      <li class='df-text-center'>center</li>
      <li class='df-text-right'>right</li>
    </ul>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <ul>
    <li class="df-fs-xs">xs - 12px</li>
    <li class="df-fs-sm">sm - 13px</li>
    <li class="df-fs-base">base - 14px</li>
    <li class="df-fs-md">md - 16px</li>
    <li class="df-fs-lg">lg - 18px</li>
    <li class="df-fs-xl">xl - 20px</li>
  </ul>
</template>
```

:::
</template>

</df-template>

### 布局

ToolClass 提供了 `margin`/`padding` 类来布局块级元素和行内元素。

- `class='df-m-0'`，其源码如下：

```css
.df-m-0 {
  margin: 0;
}
```

- `class='df-mx-1'`，表示上下边距为 0.25rem 单位距离

```css
.df-mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
```

ToolClass 所有布局类如下：

| 类名      | CSS                                |
| --------- | ---------------------------------- |
| df-m-[x]  | margin: x;                         |
| df-mx-[x] | margin-left: x; margin-right: x;   |
| df-my-[x] | margin-top: x; margin-bottom: x;   |
| df-mt-[x] | margin-top: x;                     |
| df-mb-[x] | margin-bottom: x;                  |
| df-ml-[x] | margin-left: x;                    |
| df-mr-[x] | margin-right: x;                   |
| df-p-[x]  | padding: x;                        |
| df-px-[x] | padding-left: x; padding-right: x; |
| df-py-[x] | padding-top: x; padding-bottom: x; |
| df-pt-[x] | padding-top: x;                    |
| df-pb-[x] | padding-bottom: x;                 |
| df-pl-[x] | padding-left: x;                   |
| df-pr-[x] | padding-right: x;                  |

::: tip
ToolClass 中的每个类型均提供了 **6** 个等级的距离（上表中的`[x]`），例如 `.df-m-0` `.df-m-1` `.df-m-2` `.df-m-3` `.df-m-4` `.df-m-5`，其边距值对应如下：

- 0 - 0
- 1 - 0.25rem
- 2 - 0.5rem
- 3 - 1rem
- 4 - 1.5rem
- 5 - 3rem
  :::

**示例**：

<df-template>

<template #demo>

  <div class="container">
    <div>
      <div class='df-m-0 df-bg-primary'>margin-0</div>
      <div class='df-m-1 df-bg-primary'>margin-1</div>
      <div class='df-m-2 df-bg-primary'>margin-2</div>
      <div class='df-m-3 df-bg-primary'>margin-3</div>
      <div class='df-m-4 df-bg-primary'>margin-4</div>
    </div>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div>
    <div class="df-m-0 df-bg-primary">margin-0</div>
    <div class="df-m-1 df-bg-primary">margin-1</div>
    <div class="df-m-2 df-bg-primary">margin-2</div>
    <div class="df-m-3 df-bg-primary">margin-3</div>
    <div class="df-m-4 df-bg-primary">margin-4</div>
  </div>
</template>
```

:::
</template>

</df-template>

<df-template>

<template #demo>

  <div class="container">
    <div>
      <div class="df-mt-0 df-bg-success">margin-top-0</div>
      <div class="df-mt-1 df-bg-success">margin-top-1</div>
      <div class="df-mt-2 df-bg-success">margin-top-2</div>
      <div class="df-mt-3 df-bg-success">margin-top-3</div>
      <div class="df-mt-4 df-bg-success">margin-top-4</div>
    </div>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div>
    <div class="df-mt-0 df-bg-success">margin-top-0</div>
    <div class="df-mt-1 df-bg-success">margin-top-1</div>
    <div class="df-mt-2 df-bg-success">margin-top-2</div>
    <div class="df-mt-3 df-bg-success">margin-top-3</div>
    <div class="df-mt-4 df-bg-success">margin-top-4</div>
  </div>
</template>
```

:::
</template>

</df-template>

<df-template>

<template #demo>

  <div class="container">
    <div>
      <div class="df-mt-0 df-p-0 df-bg-error">padding-0</div>
      <div class="df-mt-1 df-p-1 df-bg-error">padding-1</div>
      <div class="df-mt-2 df-p-2 df-bg-error">padding-2</div>
      <div class="df-mt-3 df-p-3 df-bg-error">padding-3</div>
      <div class="df-mt-4 df-p-4 df-bg-error">padding-4</div>
    </div>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div>
    <div class="df-mt-0 df-p-0 df-bg-error">padding-0</div>
    <div class="df-mt-1 df-p-1 df-bg-error">padding-1</div>
    <div class="df-mt-2 df-p-2 df-bg-error">padding-2</div>
    <div class="df-mt-3 df-p-3 df-bg-error">padding-3</div>
    <div class="df-mt-4 df-p-4 df-bg-error">padding-4</div>
  </div>
</template>
```

:::
</template>

</df-template>

### 边框

ToolClass 提供了 `.df-radius-[size]` 类来设置边框圆角；`.df-shadow-[size]`来设置边框阴影。

- `class='df-radius-base'`
- `class='df-shadow-base'`

**示例**：

<df-template>

<template #demo>

  <div class="container">
    <div class='df-radius-base df-bg-primary '>radius-base</div>
    <div class='df-radius-small df-bg-primary df-mt-2'>radius-small</div>
    <div class='df-radius-round df-bg-primary df-mt-2'>radius-round</div>
    <div class='df-radius-circle df-bg-primary df-mt-2' style='width:40px;height:40px'>circle</div>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div class="df-radius-base df-bg-primary ">radius-base</div>
  <div class="df-radius-small df-bg-primary df-mt-2">radius-small</div>
  <div class="df-radius-round df-bg-primary df-mt-2">radius-round</div>
  <div
    class="df-radius-circle df-bg-primary df-mt-2"
    style="width:40px;height:40px"
  >
    circle
  </div>
</template>
```

:::
</template>

</df-template>

<df-template>

<template #demo>

  <div class="container">
    <div class='df-shadow-base df-bg-primary '>radius-base</div>
    <div class='df-shadow-light df-bg-primary df-mt-5'>radius-small</div>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div class="df-shadow-base df-bg-primary ">shadow-base</div>
  <div class="df-shadow-light df-bg-primary df-mt-5">shadow-small</div>
</template>
```

:::
</template>

</df-template>
