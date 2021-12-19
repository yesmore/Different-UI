## 任务

### 1.本地开发组件

```shell
# cd /
$ yarn serve
$ yarn w:css

# cd /documents
$ yarn docs:dev
```

### 2.打包核心组件`packages`

```shell
$ yarn build
# 打包所有内容
```

### 3.发布 npm

```shell
$ npm publish
# 自动打包核心库、Scss样式、自动测试生成Codecov
```

### 4.部署文档

```shell
# cd /documents
$ yarn deploy
# 自动打包文档、提交git
```

---

## Scripts in Package.json

#### serve - 本地调试

```shell
$ yarn serve
```

#### docs:dev - vuepress 文档本地调试

```shell
$ yarn docs:dev
```

#### docs:build - 打包 vuepress

```shell
$ yarn docs:build
```

#### deploy - 单独部署 gh-pages

```shell
$ yarn deploy
```

#### build - 打包组件库及 SCSS

```shell
$ yarn build
```

#### build:css - 单独打包 SCSS

```shell
$ yarn build:css
```

#### prepublishOnly - 发布 npm 包

```shell
$ npm publish
```

#### test:unit - jest 测试

```shell
$ yarn test:unit
```

#### test:cov - 测试并生成 Codecov

```shell
$ yarn test:cov
```

#### lint - ESlint & Prettier

```shell
$ yarn lint
```
