# Button 按钮

按钮组件

## 基础按钮

df-button 提供了 `color` 属性来设置按钮不同颜色主题，示例如下：

### color 颜色

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary'>primary</df-button>
    <df-button color='success'>success</df-button>
    <df-button color='warning'>warning</df-button>
    <df-button color='danger'>danger</df-button>
    <df-button color='error'>error</df-button>
    <df-button color='info'>info</df-button>
    <df-button color='black'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary">primary</df-button>
    <df-button color="success">success</df-button>
    <df-button color="warning">warning</df-button>
    <df-button color="danger">danger</df-button>
    <df-button color="error">error</df-button>
    <df-button color="info">info</df-button>
    <df-button color="black">black</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### size 尺寸

通过 `size` 属性来设置按钮大小，默认值为 `default`/`middle` 示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' size="mini">mini</df-button>
    <df-button color='success' size="small">small</df-button>
    <df-button color='warning' size="middle">middle</df-button>
    <df-button color='danger' size='large'>large</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" size="mini">mini</df-button>
    <df-button color="success" size="small">small</df-button>
    <df-button color="warning" size="middle">middle</df-button>
    <df-button color="danger" size="large">large</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### radius 圆角

通过 `radius` 属性来设置按钮圆角半径，默认值为 `default`/`middle` 示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' radius="mini">mini</df-button>
    <df-button color='success' radius="small">small</df-button>
    <df-button color='warning' radius="middle">middle</df-button>
    <df-button color='danger' radius='large'>large</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" radius="mini">mini</df-button>
    <df-button color="success" radius="small">small</df-button>
    <df-button color="warning" radius="middle">middle</df-button>
    <df-button color="danger" radius="large">large</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### round 圆形

通过 `round` 属性来设置按钮是否为圆形，默认值为 `false`，示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' size='mini' :round="true">i</df-button>
    <df-button color='success' size='small' :round="true">i</df-button>
    <df-button color='warning' size='middle' :round="true">i</df-button>
    <df-button color='danger' size='large' :round="true">i</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" size="mini" :round="true">i</df-button>
    <df-button color="success" size="small" :round="true">i</df-button>
    <df-button color="warning" size="middle" :round="true">i</df-button>
    <df-button color="danger" size="large" :round="true">i</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

## 进阶按钮

df-button 提供了 `type` 属性来设置按钮不同样式类型，其中，默认样式为 `default`/`simple`。下面是 `type` 的可选值示例。

### concave 凹陷

- `type='concave'`
- 当你鼠标点击时，会产生凹陷效果。

示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='concave'>primary</df-button>
    <df-button color='success' type='concave'>success</df-button>
    <df-button color="warning" type='concave'>warning</df-button>
    <df-button color="danger" type='concave'>danger</df-button>
    <df-button color="error" type='concave'>error</df-button>
    <df-button color="info" type='concave'>info</df-button>
    <df-button color="black" type='concave'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="concave">primary</df-button>
    <df-button color="success" type="concave">success</df-button>
    <df-button color="warning" type="concave">warning</df-button>
    <df-button color="danger" type="concave">danger</df-button>
    <df-button color="error" type="concave">error</df-button>
    <df-button color="info" type="concave">info</df-button>
    <df-button color="black" type="concave">black</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### bling 闪烁

- `type='bling'`
- 闪动效果。

示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='bling'>primary</df-button>
    <df-button color='success' type='bling'>success</df-button>
    <df-button color="warning" type='bling'>warning</df-button>
    <df-button color="danger" type='bling'>danger</df-button>
    <df-button color="error" type='bling'>error</df-button>
    <df-button color="info" type='bling'>info</df-button>
    <df-button color="black" type='bling'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="bling">primary</df-button>
    <df-button color="success" type="bling">success</df-button>
    <df-button color="warning" type="bling">warning</df-button>
    <df-button color="danger" type="bling">danger</df-button>
    <df-button color="error" type="bling">error</df-button>
    <df-button color="info" type="bling">info</df-button>
    <df-button color="black" type="bling">black</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### transx 边框绘制 x

- `type='transx-[color]'`
- 边框动态绘制效果。

示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='transx-primary'>primary</df-button>
    <df-button color='success' type='transx-success'>success</df-button>
    <df-button color="warning" type='transx-warning'>warning</df-button>
    <df-button color="danger" type='transx-danger'>danger</df-button>
    <df-button color="error" type='transx-error'>error</df-button>
    <df-button color="info" type='transx-info'>info</df-button>
    <df-button color="black" type='transx-black'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="transx-primary">primary</df-button>
    <df-button color="success" type="transx-success">success</df-button>
    <df-button color="warning" type="transx-warning">warning</df-button>
    <df-button color="danger" type="transx-danger">danger</df-button>
    <df-button color="error" type="transx-error">error</df-button>
    <df-button color="info" type="transx-info">info</df-button>
    <df-button color="black" type="transx-black">black</df-button>
  </div>
</template>
```

:::

</template>

</df-template>

::: tip
`type='transx-[color]'`中的 [color] 为边框颜色，可与 `color` 属性同时使用。
:::

### transy 边框绘制 y

- `type='transy-[color]'`
- 边框动态绘制(一半)效果。

示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='transy-primary'>primary</df-button>
    <df-button color='success' type='transy-success'>success</df-button>
    <df-button color="warning" type='transy-warning'>warning</df-button>
    <df-button color="danger" type='transy-danger'>danger</df-button>
    <df-button color="error" type='transy-error'>error</df-button>
    <df-button color="info" type='transy-info'>info</df-button>
    <df-button color="black" type='transy-black'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="transy-primary">primary</df-button>
    <df-button color="success" type="transy-success">success</df-button>
    <df-button color="warning" type="transy-warning">warning</df-button>
    <df-button color="danger" type="transy-danger">danger</df-button>
    <df-button color="error" type="transy-error">error</df-button>
    <df-button color="info" type="transy-info">info</df-button>
    <df-button color="black" type="transy-black">black</df-button>
  </div>
</template>
```

:::

</template>

</df-template>

### curtain 幕布

- `type='curtain-[dirction]-[color]'`
- 幕布效果。

> [color] 为幕布颜色，若`color`属性与[color]相同，幕布应为透明效果，两者可随意搭配不同颜色组合。

示例如下：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button type='curtain-up-primary'>curtain-up-primary</df-button>
    <df-button color="success" type='curtain-down-success'>curtain-down-success</df-button>
    <df-button color="warning" type='curtain-left-warning'>curtain-left-warning</df-button>
    <df-button color="info" type='curtain-right-danger'>curtain-right-danger</df-button>
    <df-button color="primary" type='curtain-down-success'>curtain-down-success</df-button>
    <df-button color="error" type='curtain-up-primary'>curtain-up-primary</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="transy-primary">primary</df-button>
    <df-button color="success" type="transy-success">success</df-button>
    <df-button color="warning" type="transy-warning">warning</df-button>
    <df-button color="danger" type="transy-danger">danger</df-button>
    <df-button color="error" type="transy-error">error</df-button>
    <df-button color="info" type="transy-info">info</df-button>
    <df-button color="black" type="transy-black">black</df-button>
  </div>
</template>
```

:::

</template>

</df-template>
