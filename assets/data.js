/* =====================================================================
   SITRAIN Hub — demo content (window.SITE_DATA)
   DEMO DATA: grounded in real Siemens Digital Industries topics, but all
   course IDs, instructor names and numeric stats are illustrative samples,
   NOT official Siemens figures. Shared by index / catalog / course pages.
   ===================================================================== */
window.SITE_DATA = {
  identity: {
    brand: "SIEMENS",
    product_en: "SITRAIN Hub",
    product_zh: "西门子工业培训学院",
    tagline_en: "Master the Digital Enterprise — from PLC to cloud.",
    tagline_zh: "掌握数字化企业 —— 从 PLC 到云端，一站精通。"
  },

  nav: [
    { label: "首页", href: "index.html#top" },
    { label: "学习路径", href: "index.html#paths" },
    { label: "课程目录", href: "catalog.html" },
    { label: "资料与工具", href: "index.html#resources" },
    { label: "学员反馈", href: "index.html#voices" }
  ],

  stats: [
    { value: "240", suffix: "", label: "在线课程", en: "Courses" },
    { value: "3,800", suffix: "h", label: "课程总时长", en: "Hours" },
    { value: "62,000", suffix: "+", label: "累计学员", en: "Learners" },
    { value: "96", suffix: "%", label: "学员满意度", en: "Satisfaction" }
  ],

  // icon = key into the SVG sprite defined in the page
  tracks: [
    {
      id: "track-automation-fundamentals", index: "01", icon: "chip",
      name_zh: "自动化基础", name_en: "Automation Fundamentals",
      desc_zh: "工业自动化核心概念：控制架构、传感器/执行器，以及 SIMATIC 系统的整体协同。",
      topics: ["控制系统架构", "SIMATIC 产品组合", "电气原理图识读", "TIA 全集成理念"]
    },
    {
      id: "track-simatic-tia", index: "02", icon: "code",
      name_zh: "SIMATIC S7 与 TIA 博途编程", name_en: "SIMATIC S7 & TIA Portal",
      desc_zh: "在 TIA 博途中工程组态并编程 S7-1200/S7-1500 控制器 —— 从 LAD/FBD 到 SCL 结构化编程。",
      topics: ["硬件组态与网络", "LAD / FBD 编程", "SCL 结构化编程", "WinCC Unified HMI"]
    },
    {
      id: "track-sinamics-motion", index: "03", icon: "drive",
      name_zh: "SINAMICS 驱动与运动控制", name_en: "SINAMICS Drives & Motion",
      desc_zh: "调试、参数化并优化 SINAMICS G120/S120/S210 驱动器及协调运动控制。",
      topics: ["G120 变频器调试", "S120 闭环控制", "工艺对象运动控制", "驱动安全集成"]
    },
    {
      id: "track-profinet-networks", index: "04", icon: "network",
      name_zh: "PROFINET 与工业网络", name_en: "PROFINET & Networks",
      desc_zh: "设计、组态并诊断 PROFINET、工业以太网及 SCALANCE 网络基础架构。",
      topics: ["PROFINET 组态诊断", "SCALANCE 网络安全", "OPC UA 工业互联", "拓扑与 IRT"]
    },
    {
      id: "track-digitalization-edge", index: "05", icon: "edge",
      name_zh: "数字化 · 工业边缘与 Insights Hub", name_en: "Digitalization & Edge",
      desc_zh: "打通 OT 与 IT：在工业边缘构建并部署应用，并将数据上传至 Insights Hub（原 MindSphere）。",
      topics: ["工业边缘入门", "Edge 应用开发部署", "Insights Hub 数据分析", "OT/IT 数据打通"]
    },
    {
      id: "track-safety-maintenance", index: "06", icon: "shield",
      name_zh: "功能安全与维护", name_en: "Safety & Maintenance",
      desc_zh: "实现安全集成功能、故障安全 (F) 编程及结构化诊断，保障设备高可用性。",
      topics: ["Safety Integrated", "故障安全 (F) 编程", "结构化故障排查", "预防性维护策略"]
    }
  ],

  courses: [
    { id: "AUT-101", track: "track-automation-fundamentals", level: "Beginner", hours: 8, format: "视频课程",
      title_zh: "工业自动化导论", title_en: "Industrial Automation Essentials",
      desc_zh: "系统讲解控制系统、SIMATIC 产品组合与全集成自动化 (TIA) 理念的入门课程。",
      instructor: "Markus Brandt", instructor_title: "SITRAIN 高级自动化讲师",
      learn: ["识别自动化单元的组成（PLC、HMI、驱动、I/O）", "认识 SIMATIC 控制器家族并选型 CPU", "理解 TIA 博途作为统一工程框架的角色"] },
    { id: "AUT-110", track: "track-automation-fundamentals", level: "Beginner", hours: 6, format: "图文文档",
      title_zh: "电气与控制原理图识读", title_en: "Reading Control Schematics",
      desc_zh: "学习识读西门子工厂中常用的工业接线图、端子图与 I/O 分配表。",
      instructor: "Sabine Vogel", instructor_title: "电气系统讲师",
      learn: ["读懂 IEC 标准符号与参考标识", "从现场设备追踪信号到 PLC 输入", "将端子图映射到 TIA 硬件组态"] },
    { id: "TIA-201", track: "track-simatic-tia", level: "Beginner", hours: 40, format: "实操实验",
      title_zh: "TIA 博途 SIMATIC 编程（一）", title_en: "SIMATIC Programming 1 in TIA Portal",
      desc_zh: "S7-1500 工程组态的核心入门课程：硬件组态、LAD/FBD 基础、变量与程序结构。",
      instructor: "Andreas Hofer", instructor_title: "SITRAIN 首席 PLC 讲师",
      learn: ["组态 S7-1500 硬件与网络连接", "用梯形图 (LAD) 与功能块图 (FBD) 编程", "用 OB/FC/FB 与数据块构建程序结构"] },
    { id: "TIA-202", track: "track-simatic-tia", level: "Intermediate", hours: 40, format: "实操实验",
      title_zh: "TIA 博途 SIMATIC 编程（二）· 进阶", title_en: "SIMATIC Programming 2 — Advanced",
      desc_zh: "通过结构化编程、间接寻址与高效代码复用，深入掌握 S7-1500 进阶技能。",
      instructor: "Andreas Hofer", instructor_title: "SITRAIN 首席 PLC 讲师",
      learn: ["应用多重背景与可参数化功能块", "使用间接寻址与 ARRAY/STRUCT 数据类型", "诊断并优化程序执行"] },
    { id: "TIA-230", track: "track-simatic-tia", level: "Intermediate", hours: 24, format: "视频课程",
      title_zh: "SIMATIC SCL 结构化编程", title_en: "Structured Programming with SCL",
      desc_zh: "使用 SCL（结构化控制语言）编写高级、易维护的控制逻辑，处理复杂算法。",
      instructor: "Dr. Lena Krause", instructor_title: "软件方法专家",
      learn: ["将算法逻辑转化为 SCL", "高效使用循环、条件与函数", "将 SCL 块与图形化语言结合"] },
    { id: "TIA-260", track: "track-simatic-tia", level: "Intermediate", hours: 32, format: "实操实验",
      title_zh: "TIA 博途 WinCC Unified 人机界面", title_en: "WinCC Unified HMI in TIA Portal",
      desc_zh: "使用 SIMATIC WinCC Unified 设计现代化、基于 Web 的操作员界面，含面板与动态图形。",
      instructor: "Carlos Reyes", instructor_title: "HMI/SCADA 讲师",
      learn: ["用 WinCC Unified 构建响应式画面", "组态报警、趋势与用户管理", "创建可复用面板与自定义控件"] },
    { id: "SIN-301", track: "track-sinamics-motion", level: "Beginner", hours: 24, format: "实操实验",
      title_zh: "SINAMICS G120 调试", title_en: "SINAMICS G120 Commissioning",
      desc_zh: "使用 Startdrive 对 SINAMICS G120 变频器进行标准驱动应用的实操调试。",
      instructor: "Thomas Lindqvist", instructor_title: "驱动调试工程师 & 讲师",
      learn: ["用 BOP-2 与 Startdrive 快速调试", "设置电机与应用参数", "整定斜坡时间与基本闭环控制"] },
    { id: "SIN-320", track: "track-sinamics-motion", level: "Advanced", hours: 40, format: "实操实验",
      title_zh: "SINAMICS S120 驱动与闭环控制", title_en: "SINAMICS S120 & Closed-Loop Control",
      desc_zh: "针对高要求运动任务，对高性能 SINAMICS S120 伺服/矢量驱动进行参数化与优化。",
      instructor: "Thomas Lindqvist", instructor_title: "驱动调试工程师 & 讲师",
      learn: ["组态驱动对象、报文与 PROFINET 连接", "优化速度与位置控制环", "应用驱动级安全集成功能"] },
    { id: "SIN-340", track: "track-sinamics-motion", level: "Advanced", hours: 32, format: "在线直播",
      title_zh: "基于 SIMATIC 工艺对象的运动控制", title_en: "Motion Control with Technology Objects",
      desc_zh: "使用 S7-1500T 控制器的工艺对象编程实现协调运动（定位、齿轮、凸轮）。",
      instructor: "Yuki Tanaka", instructor_title: "运动控制应用工程师",
      learn: ["创建并组态轴工艺对象", "编程 MC_ 运动控制指令 (PLCopen)", "实现同步齿轮与凸轮"] },
    { id: "NET-401", track: "track-profinet-networks", level: "Intermediate", hours: 24, format: "实操实验",
      title_zh: "PROFINET 组态与诊断", title_en: "PROFINET — Configuration & Diagnostics",
      desc_zh: "搭建 PROFINET IO 系统，分配设备名称与拓扑，并诊断通信故障。",
      instructor: "Ingrid Bauer", instructor_title: "工业通信讲师",
      learn: ["组态 PROFINET IO 控制器与设备", "设置拓扑、设备命名与 IRT", "用 TIA 与 Web 诊断定位故障"] },
    { id: "NET-420", track: "track-profinet-networks", level: "Advanced", hours: 24, format: "在线直播",
      title_zh: "SCALANCE 与工业网络安全", title_en: "SCALANCE & Network Security",
      desc_zh: "运用 SCALANCE 交换机/路由器与纵深防御原则，设计分段、安全的工业网络。",
      instructor: "Daniel Wolf", instructor_title: "OT 安全与网络专家",
      learn: ["组态 SCALANCE 交换机、VLAN 与路由", "应用防火墙、VPN 与单元保护", "依 IEC 62443 实现纵深防御"] },
    { id: "NET-430", track: "track-profinet-networks", level: "Intermediate", hours: 16, format: "视频课程",
      title_zh: "面向工业互联的 OPC UA", title_en: "OPC UA for Industrial Connectivity",
      desc_zh: "在 SIMATIC 控制器上使用 OPC UA，实现 OT 设备与 IT/云系统之间的安全数据交换。",
      instructor: "Ingrid Bauer", instructor_title: "工业通信讲师",
      learn: ["在 S7-1500 上组态 OPC UA 服务器", "用信息模型与节点建模数据", "用证书与策略保护连接"] },
    { id: "DIG-501", track: "track-digitalization-edge", level: "Intermediate", hours: 16, format: "视频课程",
      title_zh: "工业边缘 (Industrial Edge) 入门", title_en: "Getting Started with Industrial Edge",
      desc_zh: "理解工业边缘生态：Edge Management、Edge 设备与应用市场。",
      instructor: "Priya Nair", instructor_title: "数字化解决方案讲师",
      learn: ["描述工业边缘架构", "将 Edge 设备纳管到 Edge Management", "安装与管理 Edge 应用"] },
    { id: "DIG-520", track: "track-digitalization-edge", level: "Advanced", hours: 32, format: "实操实验",
      title_zh: "工业边缘应用开发与部署", title_en: "Developing & Deploying Edge Apps",
      desc_zh: "开发、容器化并打包自定义应用，并发布至工业边缘生态系统。",
      instructor: "Priya Nair", instructor_title: "数字化解决方案讲师",
      learn: ["用 Docker 容器化应用", "打包并签名工业边缘应用", "通过 Edge Management 部署与更新"] },
    { id: "DIG-540", track: "track-digitalization-edge", level: "Intermediate", hours: 20, format: "在线直播",
      title_zh: "Insights Hub（原 MindSphere）数据分析", title_en: "Data Analytics with Insights Hub",
      desc_zh: "将资产连接至 Insights Hub，可视化实时数据，并构建生产洞察仪表板。",
      instructor: "Omar Haddad", instructor_title: "IIoT 与分析顾问",
      learn: ["纳管资产并组态变量", "可视化时序数据与 KPI", "构建仪表板与规则告警"] },
    { id: "SAF-601", track: "track-safety-maintenance", level: "Advanced", hours: 32, format: "实操实验",
      title_zh: "SIMATIC Safety Integrated · 故障安全编程", title_en: "SIMATIC Safety Integrated",
      desc_zh: "依据功能安全标准，在 S7-1500F 控制器上工程组态安全集成功能与故障安全 (F) 程序。",
      instructor: "Frank Müller", instructor_title: "功能安全首席讲师 (TÜV 认证)",
      learn: ["组态 F-CPU、F-I/O 与 PROFIsafe", "编程故障安全逻辑并评估响应时间", "按 IEC 61508/62061 记录安全功能"] },
    { id: "SAF-620", track: "track-safety-maintenance", level: "Intermediate", hours: 24, format: "实操实验",
      title_zh: "SIMATIC 系统维护与诊断", title_en: "Maintenance & Diagnostics",
      desc_zh: "系统化故障排查与预防性维护，最大化 SIMATIC 自动化系统可用性。",
      instructor: "Sabine Vogel", instructor_title: "维护系统讲师",
      learn: ["应用结构化故障排查方法", "使用在线诊断、诊断缓冲区与 Web 服务器", "规划预防性维护与备件策略"] }
  ],

  testimonials: [
    { quote_zh: "TIA 博途编程课程让我从复制粘贴程序块，进步到能写出真正引以为傲的结构化代码，我们的调试时间明显缩短了。",
      name: "Lukas Berger", role_zh: "自动化工程师 · 汽车一级供应商", initials: "LB" },
    { quote_zh: "维护与诊断课程正是我团队所需。培训推行后，产线的平均修复时间大幅下降。",
      name: "María González", role_zh: "维护主管 · 食品饮料工厂", initials: "MG" },
    { quote_zh: "我们整个团队都统一在 SITRAIN Hub 上学习。三班倒人员技能水平一致，对设备正常运行时间是质的飞跃。",
      name: "David Chen", role_zh: "工厂经理 · 离散制造业", initials: "DC" },
    { quote_zh: "工业边缘与 Insights Hub 课程打通了我们 OT 与 IT 团队之间的鸿沟。我们终于能把机器数据转化为决策了。",
      name: "Anika Sharma", role_zh: "数字化经理 · 流程工业", initials: "AS" }
  ],

  resources: [
    { icon: "doc", type: "速查表 · PDF", title_zh: "TIA 博途快捷键与工作流速查表", desc_zh: "一页纸汇总最常用的 TIA 博途快捷键、编辑器技巧与工程工作流。" },
    { icon: "drive", type: "参数表 · PDF", title_zh: "SINAMICS G120/S120 参数速查清单", desc_zh: "精选关键调试与优化参数，并附推荐初始值。" },
    { icon: "network", type: "现场指南 · PDF", title_zh: "PROFINET 诊断现场指南", desc_zh: "针对最常见的 PROFINET 通信与拓扑故障，提供分步排查流程。" },
    { icon: "play", type: "在线工具", title_zh: "虚拟 PLC 仿真器（S7-PLCSIM 实验环境）", desc_zh: "基于浏览器的虚拟练习实验室，无需物理硬件即可测试 S7-1500 程序。" },
    { icon: "badge", type: "备考工具包", title_zh: "认证考试备考工具包", desc_zh: "包含练习题、学习清单与模拟考试，助力 SITRAIN 认证考试。" },
    { icon: "chip", type: "下载合集", title_zh: "SIMATIC 与 SINAMICS 数据手册库", desc_zh: "可搜索的产品数据手册与技术规格下载合集。" }
  ],

  // editorial "how it works" / value props block
  pillars: [
    { kicker: "01 / 学", title_zh: "官方体系课程", desc_zh: "对标西门子 SITRAIN 官方培训体系，从入门到专家分级编排，覆盖 SIMATIC、SINAMICS、PROFINET 全产品线。" },
    { kicker: "02 / 练", title_zh: "虚拟练习实验室", desc_zh: "浏览器内的 Virtual Exercise Lab，无需物理硬件即可上手 S7-1500 与驱动调试，边学边练。" },
    { kicker: "03 / 证", title_zh: "可验证的能力认证", desc_zh: "完成学习路径并通过考核，获得可追溯的 SITRAIN 能力认证，让团队技能标准化、可量化。" }
  ]
};
