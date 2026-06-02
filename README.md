# SITRAIN Hub — 西门子工业培训学院（演示站 / Demo）

一个对标西门子 **SITRAIN** 官方培训体系的工业培训查看网站 **演示 demo**。
结构参考 `sc.yaowee.cn`，内容换为西门子数字化工业题材（SIMATIC / SINAMICS / PROFINET / Industrial Edge / 功能安全）。

> ⚠️ **演示用途**：课程、讲师、统计数字均为示例数据，非西门子官方数据；`SIEMENS` 字标为演示占位，未使用受商标保护的官方 logo 文件。

## 页面
- `index.html` — 首页（Hero + 工业控制台面板 + 数据 + 6 条学习路径 + 学练证 + 精选课程 + 资料工具 + 学员反馈 + CTA + 页脚）
- `catalog.html` — 课程目录（按路径 / 等级筛选 + 搜索，支持 `?track=` 预筛选）
- `course.html` — 课程查看页（视频播放器 + 章节目录 + 你将学到 + 讲师 + 侧栏报名/进度，`?id=` 指定课程）

## 设计
- **Engineered Editorial** 风格：Archivo + IBM Plex Mono，结构化网格，蓝图栅格底纹。
- **Siemens iX 品牌令牌**（已核实）：Petrol `#009999`、交互主色 `#006e93`、电光青 `#00eaff`，4px 直角，企业级阴影。
- 亮色 / 暗色「工业驾驶舱」双主题，右上角可切换（记忆于 localStorage）。
- 无构建步骤，纯静态 HTML/CSS/JS；响应式；遵循 WCAG 2.2 AA、`prefers-reduced-motion`。

## 本地运行
```bash
# 任选其一
python -m http.server 8140        # 然后访问 http://localhost:8140/
npx serve .
```

## 部署
纯静态，可托管于 GitHub Pages / Netlify / Vercel / Railway 任意静态托管。

## 文件结构
```
siemens-training/
├── index.html
├── catalog.html
├── course.html
└── assets/
    ├── styles.css   # 设计系统 + 组件 + 双主题
    ├── data.js      # 课程/路径/数据/评价/资料 内容
    └── app.js       # 主题切换 / 导航 / 渲染 / 滚动入场
```
