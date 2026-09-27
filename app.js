const dialog = document.querySelector('#viewer');
const title = document.querySelector('#viewer-title');
const content = document.querySelector('#viewer-content');
function pauseVideos() { document.querySelectorAll('video').forEach(video => video.pause()); }
function openViewer(label) {
  pauseVideos();
  title.textContent = label;
  content.replaceChildren();
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
}
// Pause the previous film when another one is played.
document.addEventListener('play', event => {
  if (event.target instanceof HTMLVideoElement) {
    document.querySelectorAll('video').forEach(video => {
      if (video !== event.target) video.pause();
    });
  }
}, true);
document.addEventListener('click', event => {
  const imageButton = event.target.closest('[data-image]');
  if (imageButton) {
    openViewer(imageButton.dataset.title);
    const image = document.createElement('img');
    image.src = 'assets/' + imageButton.dataset.image + '.jpg';
    image.alt = imageButton.dataset.title;
    image.className = 'viewer-image';
    content.append(image);
  }
});
document.querySelector('#close-viewer').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  content.querySelectorAll('video').forEach(video => video.pause());
  content.replaceChildren();
  document.body.classList.remove('modal-open');
});
const resource=(url,name,meta)=>`<a class="resource-link" href="${url}" target="_blank" rel="noopener"><span>${name}<small>${meta}</small></span><span aria-hidden="true">↗</span></a>`;
const evidence=(id,name)=>`<button data-image="${id}" data-title="${name}"><img src="assets/${id}.jpg" alt="${name}" loading="lazy"><span>${name} ↗</span></button>`;
const cases={
mengniu:{title:'蒙牛 · AI 品牌创作探索',html:`<p class="case-intro">通过两版人物持产品的生活场景视频，让客户直观看到 AI 在品牌内容中的表现能力。</p><div class="case-facts"><div><h3>需求</h3><p>帮助客户判断目前 AI 创作能达到的效果。</p></div><div><h3>我的角色</h3><p>独立完成两版 AI 视频 Demo。</p></div><div><h3>成果与反馈</h3><p>交付可观看的样片，获得客户内部认可。</p></div></div><div class="duo"><figure class="film portrait"><div class="video-frame"><video controls playsinline preload="none" poster="assets/mengniu-1.jpg" aria-label="蒙牛 样片 A"><source src="works/mengniu-1.mp4" type="video/mp4"></video></div><figcaption><h4>样片 A</h4><p>AI 生成 · 5 秒</p></figcaption></figure><figure class="film portrait"><div class="video-frame"><video controls playsinline preload="none" poster="assets/mengniu-2.jpg" aria-label="蒙牛 样片 B"><source src="works/mengniu-2.mp4" type="video/mp4"></video></div><figcaption><h4>样片 B</h4><p>AI 生成 · 5 秒</p></figcaption></figure></div><section class="case-section"><h3>看作品时，可以关注什么？</h3><p>两版 Demo 都采用人物与产品共同出镜的生活场景。观看时可以关注人物的真实感、持产品的动作，以及产品能否自然地进入生活场景。这些具体画面，为客户讨论 AI 内容的适用方式提供了样本。</p></section><div class="case-callout">项目性质：基于客户需求的创作练习。这里展示的是能力验证样片，暂无实际投放数据。</div>`},
analysis:{title:'客户需求 → Prompt → 分析成果',html:`<p class="case-intro">围绕游戏素材拆解与策略分析，把客户的问题转成结构化的分析任务，再交付可阅读的成果。</p><div class="case-facts"><div><h3>需求</h3><p>拆解素材的吸引机制，寻找可借鉴的创意方向。</p></div><div><h3>我的角色</h3><p>独立完成 Prompt 调试、报告与演示案例。</p></div><div><h3>应用</h3><p>结合诗悦、益世界等客户需求持续迭代。</p></div></div><section class="case-section"><h3>从分析任务，到可阅读的交付物</h3><p>两份 HTML 报告可查看 Hook 分类与素材分析；明星资产文档进一步展开了创意方向与脚本结构。建议先看报告的分类框架，再查看一条具体素材，观察分析是否能支持后续创作。</p><div class="resource-list">${resource('works/hook-specific.html','指定游戏 Hook 拆解','HTML · 保卫向日葵 / 向僵尸开炮 / 城主别慌张')}${resource('works/hook-report.html','游戏行业创意素材 Hook 方向深度分析','HTML · Hook 分类、素材明细与策略建议')}${resource('works/changan.html','长安幻想 × 张若昀：明星资产与素材矩阵','分析文档 · 资产盘点、创意方向与脚本结构')}</div></section><section class="case-section"><h3>需求理解与反馈迭代</h3><p>曾集中一周拜访 8 位上海客户，覆盖头部游戏公司及字节系广告代理商，收集产品体验反馈，持续调整提示词和演示案例，并推动 MCP 售卖模式落地。</p><div class="evidence-grid">${evidence('prompt-process','根据客户需求调试 Hook 分析提示词')}${evidence('customer-visits','客户拜访与反馈记录')}</div></section>`},
teaching:{title:'销售 Skill 与内容团队带教',html:`<p class="case-intro">将报告转图文、内容发布和短视频制作的经验，整理成工具、教程与可跟随的实践步骤。</p><div class="case-facts"><div><h3>工具制作</h3><p>独立制作数据提取与图文笔记生成 Skill。</p></div><div><h3>使用培训</h3><p>帮助销售团队开展自媒体内容发布与拓客。</p></div><div><h3>团队带教</h3><p>分配并带教 3 名成员开展内容工作。</p></div></div><section class="case-section"><h3>怎么复用：把步骤交给使用者</h3><p>教程覆盖 Skill 使用、账号主页搭建与内容发布。通过示例和明确步骤，帮助同事把已有报告转化为面向目标客户的内容。</p><div class="resource-list">${resource('documents/sales.html','自媒体拓客教程 · 销售版','PDF · 7 页完整教程')}</div><div class="evidence-grid">${evidence('skill-process','销售拓客 Skill 制作过程')}${evidence('teaching-notes','带教团队：短视频经验分享')}</div></section><section class="case-section"><h3>怎么推广：用带教连接真实产出</h3><p>培训市场部同事制作短视频，孵化有米有数企业号与商务 BD 个人号。带教成员产出的文章阅读量达到 2000+，YouTube 短视频播放量 1 万+、点赞近 200 次。</p><div class="evidence-grid">${evidence('brand-account','带教成果 · 有米有数视频号')}${evidence('bd-account','带教成果 · 商务 BD 个人号')}</div></section><div class="case-callout">这些成果属于团队带教与内容运营经历。工具、教程和案例分别展示了“做出来”与“教会别人用”的过程。</div>`}
};

const caseContainer = document.querySelector('#case-content');
if (caseContainer) {
  const caseId = new URLSearchParams(location.search).get('case');
  const selected = Object.hasOwn(cases, caseId) ? cases[caseId] : null;
  if (selected) {
    document.title = selected.title + ' · 林乐韵作品集';
    const heading = document.createElement('header');
    heading.className = 'case-heading';
    const kicker = document.createElement('p');
    kicker.className = 'eyebrow';
    kicker.textContent = caseId === 'mengniu' ? '品牌需求验证 / 补充实践' : '方法与带教 / 独立实践';
    if (caseId === 'mengniu') {
      const backLink = document.querySelector('.back-link');
      backLink.href = 'index.html#brand-case';
      backLink.textContent = '← 返回 AI 视频作品';
    }
    const h1 = document.createElement('h1');
    h1.textContent = selected.title;
    heading.append(kicker, h1);
    caseContainer.append(heading);
    const body = document.createElement('div');
    body.innerHTML = selected.html;
    caseContainer.append(body);
    const active = document.querySelector('.case-pagination a[href="case.html?case=' + caseId + '"]');
    active?.setAttribute('aria-current', 'page');
  } else {
    caseContainer.innerHTML = '<h1 class="case-heading">未找到这个案例</h1><p>请返回首页，或从下方选择其他作品。</p>';
  }
}
