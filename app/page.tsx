"use client";

import { useState } from "react";

type Lang = "en" | "zh";

const content = {
  en: {
    nav: ["About", "Capabilities", "Projects", "Process", "Contact"],
    eyebrow: "MECHANICAL ENGINEERING · ROBOTICS · PRODUCT DEVELOPMENT",
    headline: "Engineering ideas into\nbuildable products.",
    intro:
      "Mechanical engineering researcher and product-development designer working across mechanical systems, mechatronics, robotics, electronics integration and underwater sensing.",
    cta: "Discuss a project",
    secondary: "Explore projects",
    status: "OPEN TO ENGINEERING COLLABORATIONS",
    aboutLabel: "01 / ABOUT",
    aboutTitle: "From concept to engineering reality.",
    about:
      "My work combines mechanical design, manufacturing thinking and applied electronics. I focus on turning technical requirements into clear CAD assemblies, engineering drawings, prototypes and testable systems. Based in China, I am interested in collaborating with manufacturers, engineering teams and international product developers.",
    facts: [
      ["BACKGROUND", "Mechanical engineering · Robotics research"],
      ["LOCATION", "China"],
      ["LANGUAGES", "Arabic · English · Chinese"],
      ["FOCUS", "Design · Prototyping · Manufacturing"],
    ],
    capLabel: "02 / CAPABILITIES",
    capTitle: "Engineering services",
    capabilities: [
      ["Mechanical CAD & assemblies", "3D parts, assemblies, mechanisms, drawings, tolerance-aware design and design revisions."],
      ["Product development & DFM", "Concept development, material selection, manufacturing review, BOM preparation and prototype support."],
      ["Robotics & mechatronics", "Actuators, linkages, joints, motor integration, sensor mounts and electromechanical packaging."],
      ["PCB & electronics integration", "PCB enclosure integration, connector placement, mounting features, cable routing and system-level packaging."],
      ["Industrial machinery", "Custom mechanisms, fixtures, machine components, equipment modifications and reverse-engineering support."],
      ["Underwater sensing research", "Forward-looking sonar hardware, transducer arrays, acquisition electronics and signal-processing research."],
    ],
    projectLabel: "03 / SELECTED WORK",
    projectTitle: "Projects & technical interests",
    projectNote:
      "The items below describe research and design areas. Add verified drawings, photos, test data and outcomes before presenting any item as a completed commercial delivery.",
    projects: [
      {
        n: "01",
        title: "Forward-looking imaging sonar",
        type: "RESEARCH · SONAR HARDWARE",
        desc: "Research direction covering an ultrasonic transducer array, analog front-end, FPGA-based acquisition and underwater imaging signal processing.",
        tags: ["Transducer array", "AFE", "FPGA", "DSP"],
        color: "cyan",
      },
      {
        n: "02",
        title: "Linear actuator-driven thumb mechanism",
        type: "MECHANISM DESIGN · ROBOTICS",
        desc: "A compact pivoting mechanism concept using linear actuator motion, linkage geometry and a fixed rotational axis for a dexterous robotic hand.",
        tags: ["Linkage", "Actuator", "Kinematics", "CAD"],
        color: "violet",
      },
      {
        n: "03",
        title: "Gearbox condition monitoring",
        type: "MASTER'S RESEARCH · FAULT DIAGNOSIS",
        desc: "Vibration-based gearbox fault diagnosis using time/frequency-domain features, continuous wavelet transforms and CNN-based classification.",
        tags: ["Vibration", "CWT", "CNN", "MATLAB"],
        color: "amber",
      },
      {
        n: "04",
        title: "Electromechanical product integration",
        type: "PRODUCT DEVELOPMENT · MECHATRONICS",
        desc: "Design interest in integrating PCBs, sensors, motors, connectors and mechanical enclosures into manufacturable product assemblies.",
        tags: ["PCB integration", "Enclosure", "Sensors", "DFM"],
        color: "green",
      },
    ],
    processLabel: "04 / HOW I WORK",
    processTitle: "A practical engineering workflow.",
    steps: [
      ["01", "Understand", "Clarify requirements, loads, operating environment, interfaces, budget and deliverables."],
      ["02", "Design", "Develop concepts, CAD parts and assemblies, engineering calculations and drawings."],
      ["03", "Review", "Check fit, function, materials, manufacturing constraints, tolerances and risks."],
      ["04", "Deliver", "Provide agreed CAD files, drawings, BOM and prototype/manufacturing coordination."],
    ],
    contactLabel: "05 / CONTACT",
    contactTitle: "Have an engineering challenge?",
    contactText:
      "For mechanical design, product development, robotics mechanisms or China manufacturing collaboration, send a short project brief.",
    email: "YOUR_EMAIL@example.com",
    footer: "ENGINEERING PORTFOLIO · BUILT FOR TECHNICAL COLLABORATION",
    services: "Available for project-based work and technical collaboration.",
  },
  zh: {
    nav: ["关于", "能力", "项目", "流程", "联系"],
    eyebrow: "机械工程 · 机器人 · 产品研发",
    headline: "将工程构想\n转化为可制造的产品。",
    intro:
      "机械工程与机器人方向研究人员，关注机械系统、机电一体化、机器人、电子集成及水下声学感知。",
    cta: "讨论项目",
    secondary: "查看项目",
    status: "欢迎工程项目合作",
    aboutLabel: "01 / 关于我",
    aboutTitle: "从概念设计到工程实现。",
    about:
      "我的工作结合机械设计、制造工艺思维与应用电子技术，致力于将技术需求转化为清晰的CAD装配体、工程图纸、原型及可测试系统。目前在中国学习和开展研究，希望与制造企业、工程团队及国际产品开发团队合作。",
    facts: [
      ["专业背景", "机械工程 · 机器人研究"],
      ["所在地", "中国"],
      ["语言", "阿拉伯语 · 英语 · 中文"],
      ["方向", "设计 · 原型 · 制造"],
    ],
    capLabel: "02 / 专业能力",
    capTitle: "工程设计服务",
    capabilities: [
      ["机械CAD与装配设计", "三维零件、装配体、机构、工程图、尺寸公差及设计修改。"],
      ["产品研发与DFM", "概念开发、材料选择、制造评估、BOM及原型支持。"],
      ["机器人与机电一体化", "执行器、连杆、关节、电机集成、传感器支架及机电结构设计。"],
      ["PCB与电子集成", "PCB结构集成、连接器布局、安装结构、线缆布置及系统封装。"],
      ["工业设备设计", "定制机构、工装夹具、机械零件、设备改造及逆向工程支持。"],
      ["水下声学研究", "前视成像声呐硬件、换能器阵列、数据采集电子及信号处理研究。"],
    ],
    projectLabel: "03 / 项目方向",
    projectTitle: "项目与技术研究",
    projectNote:
      "以下内容为研究和设计方向。正式展示为已完成商业项目之前，请补充真实图纸、照片、测试数据和项目成果。",
    projects: [
      { n: "01", title: "前视成像声呐", type: "研究 · 声呐硬件", desc: "围绕超声换能器阵列、模拟前端、FPGA数据采集及水下成像信号处理开展研究。", tags: ["换能器阵列", "AFE", "FPGA", "DSP"], color: "cyan" },
      { n: "02", title: "直线执行器驱动拇指机构", type: "机构设计 · 机器人", desc: "面向灵巧手的紧凑型转动机构概念，结合直线执行器、连杆几何与固定旋转轴。", tags: ["连杆", "执行器", "运动学", "CAD"], color: "violet" },
      { n: "03", title: "齿轮箱状态监测", type: "硕士研究 · 故障诊断", desc: "利用振动信号、时频域特征、连续小波变换及CNN开展齿轮箱故障诊断研究。", tags: ["振动", "CWT", "CNN", "MATLAB"], color: "amber" },
      { n: "04", title: "机电产品集成设计", type: "产品开发 · 机电一体化", desc: "研究PCB、传感器、电机、连接器与机械外壳集成到可制造产品装配体中的设计方法。", tags: ["PCB集成", "外壳", "传感器", "DFM"], color: "green" },
    ],
    processLabel: "04 / 工作流程",
    processTitle: "务实的工程工作流程。",
    steps: [
      ["01", "需求分析", "明确技术要求、载荷、工作环境、接口、预算与交付内容。"],
      ["02", "设计开发", "开展方案设计、CAD零件与装配、工程计算及图纸制作。"],
      ["03", "设计评审", "检查装配、功能、材料、制造约束、公差与风险。"],
      ["04", "交付", "按约定提供CAD文件、工程图、BOM及原型/制造对接支持。"],
    ],
    contactLabel: "05 / 联系方式",
    contactTitle: "有工程项目需要解决？",
    contactText: "欢迎就机械设计、产品研发、机器人机构或中国制造合作发送项目简介。",
    email: "YOUR_EMAIL@example.com",
    footer: "工程作品集 · 面向技术合作",
    services: "可承接项目制设计及技术合作。",
  },
};

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="mark">{children}</span>;
}

function ProjectVisual({ index, color }: { index: string; color: string }) {
  return (
    <div className={`project-visual ${color}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-core"><span>{index}</span></div>
      <div className="visual-cross cross-one" />
      <div className="visual-cross cross-two" />
      <span className="visual-caption">ENGINEERING / {index}</span>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-symbol">A</span><span>ENGINEERING<span className="brand-muted"> / PORTFOLIO</span></span></a>
        <nav className="nav-links" aria-label="Main navigation">
          {t.nav.map((item, i) => <a key={item} href={`#${["about", "capabilities", "projects", "process", "contact"][i]}`}>{item}</a>)}
        </nav>
        <button className="lang-button" onClick={() => setLang(lang === "en" ? "zh" : "en")} aria-label="Switch language">{lang === "en" ? "中文" : "EN"}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-noise" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" />{t.eyebrow}</div>
            <h1>{t.headline.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{t.cta}<span>↗</span></a>
              <a className="button button-ghost" href="#projects">{t.secondary}<span>↓</span></a>
            </div>
            <div className="hero-status"><span className="status-dot" />{t.status}</div>
          </div>
          <div className="hero-art" aria-label="Abstract engineering technical illustration">
            <div className="art-label label-top">MECHANICAL SYSTEMS <span>01—04</span></div>
            <div className="blueprint">
              <div className="blueprint-ring ring-a" /><div className="blueprint-ring ring-b" /><div className="blueprint-ring ring-c" />
              <div className="blueprint-axis axis-x" /><div className="blueprint-axis axis-y" />
              <div className="blueprint-block block-a" /><div className="blueprint-block block-b" />
              <div className="blueprint-node node-a" /><div className="blueprint-node node-b" />
              <div className="blueprint-node node-c" />
              <div className="blueprint-line line-a" /><div className="blueprint-line line-b" />
              <div className="blueprint-center">MECH<br/>DESIGN</div>
            </div>
            <div className="art-label label-bottom">CAD / DESIGN / PROTOTYPE / VALIDATE</div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>CHINA · GLOBAL COLLABORATION</span><span>EST. 2026</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading"><Mark>{t.aboutLabel}</Mark><span className="section-line" /></div>
        <div className="about-grid">
          <h2>{t.aboutTitle}</h2>
          <div className="about-content"><p>{t.about}</p><div className="facts">{t.facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div>
        </div>
      </section>

      <section className="section capabilities-section" id="capabilities">
        <div className="section-heading"><Mark>{t.capLabel}</Mark><span className="section-line" /></div>
        <div className="section-title-row"><h2>{t.capTitle}</h2><p>{t.services}</p></div>
        <div className="cap-grid">{t.capabilities.map(([title, desc], i) => <article className="cap-card" key={title}><span className="cap-number">0{i + 1}</span><div className="cap-icon">{["⌘", "◈", "⌬", "▦", "⚙", "〰"][i]}</div><h3>{title}</h3><p>{desc}</p><span className="card-arrow">↗</span></article>)}</div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading"><Mark>{t.projectLabel}</Mark><span className="section-line" /></div>
        <div className="section-title-row"><h2>{t.projectTitle}</h2><p className="project-note">{t.projectNote}</p></div>
        <div className="project-grid">{t.projects.map((project) => <article className="project-card" key={project.n}><ProjectVisual index={project.n} color={project.color} /><div className="project-body"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading"><Mark>{t.processLabel}</Mark><span className="section-line" /></div>
        <h2>{t.processTitle}</h2>
        <div className="process-grid">{t.steps.map(([n, title, desc]) => <article className="process-step" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner"><div><Mark>{t.contactLabel}</Mark><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-links"><a href={`mailto:${t.email}`} className="contact-email">{t.email}<span>↗</span></a><p>Replace the email and add your real professional profiles before publishing.</p><div className="social-placeholder"><span>LINKEDIN — ADD YOUR URL</span><span>GITHUB — ADD YOUR URL</span><span>WECHAT — ADD YOUR ID</span></div></div></div>
      </section>
      <footer><a className="brand" href="#home"><span className="brand-symbol">A</span><span>ENGINEERING<span className="brand-muted"> / PORTFOLIO</span></span></a><span>{t.footer}</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
