# Button

Button component

## Basic

You can control the basic style of `<df-button>` through `color`, `size`,`radius`,`round`, `plain`, `disabled`. Below are all attributes and their optional values.

### color

df-button provides the `color` attribute to set different color themes for buttons.

**Examples**:

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

### size

Set the button size through the `size` attribute. The default value is `default / middle`.

**Examples**:

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

### radius

Set the button fillet radius through the `radius` attribute. The default value is `default / middle`.

**Examples**:

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

### round

Set whether the button is round through the `round` attribute. The default value is `false`.

**Examples**:

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

### plain

Set the button to have a flat effect through the `plain` attribute. The default value is `false`.

**Examples**:

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

::: details <i class="iconfont icon-script"></i>

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

### disabled

Set whether the button is disabled through the `1disabled` attribute.

**Examples**:

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

::: details <i class="iconfont icon-script"></i>

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

## Advanced

`<df-button>` provides the `type` attribute to set different style types of buttons. The default style is `default / simple` . The following is an example of optional values for `type`.

### concave

- `type='concave'`
- When you click the mouse, it will produce a depression effect.

**Examples**:

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

### bling

- `type='bling'`
- blingbling effect.

**Examples**:

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

### transx

- `type='transx-[color]'`
- Button border dynamic drawing effect.

**Examples**:

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

### transy

- `type='transy-[color]'`
- Button border dynamic drawing (half) effect.

**Examples**:

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

### curtain

- `type='curtain-[dirction]-[color]'`
- Curtain effect.

::: warning
[color] is the color of the curtain. If the `color` attribute is the same as [color], the curtain should be transparent, and the two can be combined with different colors at will.
:::

**Examples**:

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
