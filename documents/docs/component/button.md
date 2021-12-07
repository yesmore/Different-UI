# Button 按钮

按钮组件

## 基础按钮

可以通过 `color`、`size`、`radius`、`round`、`plain`、`disabled` 来控制 `<df-button>` 基本样式。下面是所有属性及其可选值。

### color 颜色

通过 `color` 属性来设置按钮大小，默认值为 `default`/`primary`

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

通过 `size` 属性来设置按钮大小，默认值为 `default`/`middle`

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

通过 `radius` 属性来设置按钮圆角半径，默认值为 `default`/`middle`

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

通过 `round` 属性来设置按钮是否为圆形，默认值为 `false`.

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

### plain 扁平

通过 `plain` 属性来设置按钮是扁平效果，默认值为 `false`.

**示例**：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' :plain="true">plain</df-button>
    <df-button color='success' :plain="true">plain</df-button>
    <df-button color='warning' :plain="true">plain</df-button>
    <df-button color='danger' :plain="true">plain</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" :plain="true">plain</df-button>
    <df-button color="success" :plain="true">plain</df-button>
    <df-button color="warning" :plain="true">plain</df-button>
    <df-button color="danger" :plain="true">plain</df-button>
  </div>
</template>
```

:::
</template>

</df-template>

### disabled 禁用

通过 `disabled` 属性来设置按钮是否禁用.

**示例**：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' disabled>primary</df-button>
    <df-button color='success' disabled>success</df-button>
    <df-button color='warning' disabled>warning</df-button>
    <df-button color='danger' disabled>danger</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" disabled>primary</df-button>
    <df-button color="success" disabled>success</df-button>
    <df-button color="warning" disabled>warning</df-button>
    <df-button color="danger" disabled>danger</df-button>
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

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

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

### trans 边框绘制

- `type='trans-[color]'`
- 边框动态绘制效果。

**示例**：

<df-template>

<template #demo>

  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='trans-primary'>primary</df-button>
    <df-button color='success' type='trans-success'>success</df-button>
    <df-button color="warning" type='trans-warning'>warning</df-button>
    <df-button color="danger" type='trans-danger'>danger</df-button>
    <df-button color="error" type='trans-error'>error</df-button>
    <df-button color="info" type='trans-info'>info</df-button>
    <df-button color="black" type='trans-black'>black</df-button>
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button color="primary" type="trans-primary">primary</df-button>
    <df-button color="success" type="trans-success">success</df-button>
    <df-button color="warning" type="trans-warning">warning</df-button>
    <df-button color="danger" type="trans-danger">danger</df-button>
    <df-button color="error" type="trans-error">error</df-button>
    <df-button color="info" type="trans-info">info</df-button>
    <df-button color="black" type="trans-black">black</df-button>
  </div>
</template>
```

:::

</template>

</df-template>

::: tip
`type='trans-[color]'`中的 [color] 为边框颜色，可与 `color` 属性同时使用。
:::

### curtain 幕布

- `type='curtain-[dirction]-[color]'`
- 幕布效果。

> [color] 为幕布颜色，若`color`属性与[color]相同，幕布应为透明效果，两者可随意搭配不同颜色组合。

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="btn-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-button type="curtain-up-primary">curtain-up-primary</df-button>
    <df-button color="success" type="curtain-down-success"
      >curtain-down-success</df-button
    >
    <df-button color="warning" type="curtain-left-warning"
      >curtain-left-warning</df-button
    >
    <df-button color="info" type="curtain-right-danger"
      >curtain-right-danger</df-button
    >
    <df-button color="primary" type="curtain-down-success"
      >curtain-down-success</df-button
    >
    <df-button color="error" type="curtain-up-primary"
      >curtain-up-primary</df-button
    >
  </div>
</template>
```

:::

</template>

</df-template>

## API

...
