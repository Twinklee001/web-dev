/**
 * script.js — Agri-Track Frontend
 * Renders all dynamic data sections from the JSX component.
 * Data arrays match the original JSX source exactly.
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==================== DATA ====================

  const topNav = [
    { label: "Quản lý lô trồng", icon: "square-chart-gantt", active: true },
    { label: "Nhật ký canh tác", icon: "file-text" },
    { label: "Gợi ý chăm sóc", icon: "sparkles" },
    { label: "Dữ liệu thời tiết", icon: "cloud-sun" },
    { label: "AI Chatbox hỗ trợ", icon: "message-circle" },
    { label: "Nhận diện bệnh cây", icon: "scan-search" },
    { label: "QR truy xuất", icon: "qr-code" },
    { label: "Chứng nhận sản phẩm", icon: "bookmark" },
    { label: "Dashboard tổng quan", icon: "trending-up" },
  ];

  const shortcuts = [
    "Quản lý lô trồng",
    "Nhật ký canh tác",
    "Gợi ý chăm sóc",
    "Tích hợp dữ liệu thời tiết",
    "AI Chatbox hỗ trợ",
    "Nhận diện sơ bộ bệnh cây",
  ];

  const plotStatus = [
    ["Lô Cà chua A1", "Ra hoa", "Ổn định", "Lâm Đồng"],
    ["Lô Dưa leo B2", "Sinh trưởng", "Cần theo dõi", "Tiền Giang"],
    ["Lô Xà lách C3", "Thu hoạch", "Sẵn sàng", "Đà Lạt"],
    ["Lô Ớt D4", "Ra trái", "Độ ẩm thấp", "Đồng Tháp"],
    ["Lô Dưa hấu E5", "Ươm cây", "Mưa nhẹ", "Long An"],
  ];

  const quickStats = [
    {
      label: "Số lượng lô trồng",
      value: "24 lô",
      hint: "06 lô đang ra hoa",
      icon: "leaf",
    },
    {
      label: "Hoạt động gần đây",
      value: "128 hoạt động",
      hint: "Cập nhật trong 7 ngày",
      icon: "file-text",
    },
    {
      label: "Trạng thái canh tác",
      value: "08 cần chú ý",
      hint: "Ưu tiên kiểm tra độ ẩm",
      icon: "trending-up",
    },
  ];

  const plotInsights = [
    {
      name: "Lô A1",
      status: "Ra hoa",
      tone: "emerald",
      detail: "Ổn định • AI khuyến nghị hoãn tưới",
    },
    {
      name: "Lô B2",
      status: "Sinh trưởng",
      tone: "amber",
      detail: "Cần theo dõi lá non • Độ ẩm cao",
    },
    {
      name: "Lô D4",
      status: "Ra trái",
      tone: "cyan",
      detail: "Nhiệt độ cao • Kiểm tra đất lúc 05:30",
    },
  ];

  const timelineActions = [
    { label: "Tưới nước", icon: "droplets", color: "text-cyan-700 bg-cyan-50" },
    {
      label: "Bón phân",
      icon: "leaf",
      color: "text-emerald-700 bg-emerald-50",
    },
    {
      label: "Phun thuốc",
      icon: "spray-can",
      color: "text-amber-700 bg-amber-50",
    },
  ];

  const activityTimeline = [
    {
      time: "06:30",
      title: "Tưới nước lô A1",
      desc: "Hoàn thành theo lịch buổi sáng",
      icon: "droplets",
    },
    {
      time: "09:10",
      title: "Bón phân lô B2",
      desc: "Đã lưu nhật ký và ảnh hiện trường",
      icon: "leaf",
    },
    {
      time: "11:45",
      title: "AI quét ảnh bệnh lá",
      desc: "Phát hiện sơ bộ vùng lá cần kiểm tra",
      icon: "scan-search",
    },
  ];

  const posts = [
    {
      author: "Anh Tâm Miền Tây",
      meta: "Nông dân trồng cà chua • 2 giờ trước",
      badge: "Nông dân thường",
      title:
        "Ra cành ngoài hỗ trợ mắt cua khi thời tiết bất lợi có ảnh hưởng thế nào?",
      body: "Trong điều kiện khí hậu bất thường, việc canh tác cần ưu tiên giữ ổn định độ ẩm và tránh can thiệp mạnh vào giai đoạn cây đang chuyển pha. Nếu xử lý sai thời điểm, cây dễ bị stress, giảm khả năng phát triển mầm và ảnh hưởng đến tỉ lệ đậu trái.",
      stats: ["1.2k", "96", "24"],
    },
    {
      author: "Hợp tác xã An Phú",
      meta: "Cập nhật vùng trồng • 4 giờ trước",
      badge: "Đã xác minh",
      title: "Lô A1 đã hoàn thành ghi nhật ký tưới và bón dinh dưỡng tuần này",
      body: "Hệ thống đã đồng bộ dữ liệu cảm biến, ảnh chụp hiện trường và đề xuất AI. Bà con có thể quét QR để kiểm tra toàn bộ lịch sử chăm sóc của lô trồng.",
      stats: ["860", "52", "18"],
    },
  ];

  const news = [
    {
      title: "Hoãn tưới cho lô A1 vì dự báo có mưa vào cuối chiều",
      tag: "Gợi ý chăm sóc",
      image: "../images/ai_rain_forecast.png",
    },
    {
      title: "Kiểm tra độ ẩm đất cho lô D4 do nhiệt độ tăng cao vào buổi trưa",
      tag: "Dữ liệu thời tiết",
      image: "../images/ai_soil_moisture.png",
    },
    {
      title: "Ưu tiên quan sát lá non ở lô B2 để phát hiện sớm dấu hiệu bệnh",
      tag: "Nhận diện bệnh cây",
      image: "../images/ai_leaf_inspection.png",
    },
  ];

  const certifications = [
    {
      name: "VietGAP - Lô B2",
      status: "Còn hiệu lực",
      date: "Hết hạn sau 28 ngày",
    },
    {
      name: "Nhật ký nội bộ - Lô A1",
      status: "Đã đồng bộ",
      date: "Cập nhật 2 giờ trước",
    },
  ];

  // ==================== RENDER FUNCTIONS ====================

  // --- Top Navigation ---
  const topNavContainer = document.getElementById("top-nav-container");
  topNavContainer.innerHTML = topNav
    .map(
      (item) => `
    <button class="inline-flex h-12 items-center gap-2 rounded-[16px] border px-4 text-[15px] font-medium shadow-sm transition duration-200 ${
      item.active
        ? "border-emerald-300 bg-[#f4fffa] text-emerald-700 shadow-[0_4px_14px_rgba(16,185,129,0.10)]"
        : "border-[#dfe7e3] bg-[#f7f9f8] text-slate-600 hover:border-emerald-200 hover:bg-white hover:text-emerald-700"
    }">
      <i data-lucide="${item.icon}" class="h-[16px] w-[16px] ${item.active ? "text-emerald-700" : "text-slate-500"}"></i>
      <span class="whitespace-nowrap">${item.label}</span>
    </button>
  `,
    )
    .join("");

  // --- Shortcuts (Quản lý lô trồng) ---
  const shortcutsContainer = document.getElementById("shortcuts-container");
  shortcutsContainer.innerHTML = shortcuts
    .map(
      (item) => `
    <button class="flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-left text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-sm">
      <span>${item}</span>
      <i data-lucide="plus" class="h-4 w-4 text-emerald-600"></i>
    </button>
  `,
    )
    .join("");

  // --- Plot Status (Tích hợp dữ liệu thời tiết) ---
  const plotStatusContainer = document.getElementById("plot-status-container");
  plotStatusContainer.innerHTML = plotStatus
    .map(
      ([name, stage, status, region]) => `
    <button class="grid w-full grid-cols-[1fr_auto] items-center gap-3 px-6 py-4 text-left text-sm transition duration-300 hover:bg-emerald-50/70">
      <div>
        <div class="font-semibold text-slate-800">${name}</div>
        <div class="mt-1 text-xs text-slate-400">${region}</div>
        <div class="mt-1 text-xs font-semibold text-emerald-600">${stage}</div>
        <div class="mt-1 text-xs text-slate-500">${status}</div>
      </div>
      <div class="text-right font-bold text-slate-900 transition duration-300 hover:text-emerald-700">23°C</div>
    </button>
  `,
    )
    .join("");

  // --- Quick Stats (Dashboard tổng quan) ---
  const quickStatsContainer = document.getElementById("quick-stats-container");
  quickStatsContainer.innerHTML = quickStats
    .map(
      (item) => `
    <div class="group rounded-[24px] border border-white/70 bg-white/82 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_36px_rgba(16,185,129,0.10)]">
      <div class="flex items-start justify-between gap-3">
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
          <i data-lucide="${item.icon}" class="h-5 w-5"></i>
        </div>
        <i data-lucide="chevron-right" class="h-4 w-4 text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-600"></i>
      </div>
      <div class="mt-5 text-sm text-slate-500">${item.label}</div>
      <div class="mt-1 text-2xl font-black tracking-tight text-slate-900">${item.value}</div>
      <div class="mt-2 text-xs text-slate-400">${item.hint}</div>
    </div>
  `,
    )
    .join("");

  // --- Plot Insights ---
  const plotInsightsContainer = document.getElementById(
    "plot-insights-container",
  );
  plotInsightsContainer.innerHTML = plotInsights
    .map((item) => {
      let colorClass = "bg-emerald-50 text-emerald-700";
      if (item.tone === "amber") colorClass = "bg-amber-50 text-amber-700";
      if (item.tone === "cyan") colorClass = "bg-cyan-50 text-cyan-700";

      return `
      <div class="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-[0_16px_28px_rgba(16,185,129,0.08)]">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="font-bold text-slate-900">${item.name}</div>
            <div class="mt-1 text-sm text-slate-500">${item.detail}</div>
          </div>
          <div class="rounded-full px-3 py-1 text-xs font-semibold ${colorClass}">
            ${item.status}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // --- Timeline Actions (Nhật ký canh tác) ---
  const timelineActionsContainer = document.getElementById(
    "timeline-actions-container",
  );
  timelineActionsContainer.innerHTML = timelineActions
    .map(
      (action) => `
    <div class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${action.color}">
      <i data-lucide="${action.icon}" class="h-4 w-4"></i>
      ${action.label}
    </div>
  `,
    )
    .join("");

  // --- Activity Timeline (Hoạt động gần đây) ---
  const activityTimelineContainer = document.getElementById(
    "activity-timeline-container",
  );
  activityTimelineContainer.innerHTML = activityTimeline
    .map(
      (item) => `
    <div class="anim-timeline-item flex gap-4 rounded-[24px] border border-white/70 bg-white/82 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
      <div class="w-14 shrink-0 text-sm font-bold text-emerald-700">${item.time}</div>
      <div class="flex-1">
        <div class="flex items-center gap-3">
          <div class="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
            <i data-lucide="${item.icon}" class="h-4 w-4"></i>
          </div>
          <div>
            <div class="font-bold text-slate-900">${item.title}</div>
            <div class="mt-1 text-sm text-slate-500">${item.desc}</div>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // --- Posts (Bài viết cộng đồng) ---
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = posts
    .map(
      (post) => `
    <div class="anim-post">
      <div class="group glass-perf relative overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-[0_18px_60px_rgba(16,24,40,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,24,40,0.12)]">
        <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,255,255,0.35))]"></div>
        <div class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%)]"></div>
        <div class="relative p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
              ${post.author.charAt(0)}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="font-bold text-slate-900">${post.author}</div>
                  <div class="mt-1 text-sm text-slate-500">${post.meta}</div>
                </div>
                <div class="rounded-full px-3 py-1 text-xs font-semibold ${
          post.badge === "Đã xác minh"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-amber-200 bg-amber-50 text-amber-700"
      }">
                  ${post.badge}
                </div>
              </div>

              <h3 class="mt-5 text-[26px] font-bold leading-tight text-slate-900">${post.title}</h3>
              <p class="mt-4 text-[15px] leading-8 text-slate-600">${post.body}</p>

              <div class="mt-5 rounded-[24px] border border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 transition duration-300 hover:-translate-y-0.5">
                <div class="group/image mb-3 relative h-56 overflow-hidden rounded-[20px] bg-slate-100">
                  <img src="../images/ai_smart_insight.png" alt="Smart insight map" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover/image:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div class="absolute inset-x-4 bottom-4 rounded-[18px] border border-white/40 bg-white/70 p-3 backdrop-blur-md text-slate-900">
                    <div class="text-sm font-bold">Mô phỏng vùng lô trồng và phân tích điều kiện canh tác</div>
                    <div class="mt-1 text-xs text-slate-700 font-medium">Kết hợp thời tiết, độ ẩm và ảnh hiện trường để đưa ra đề xuất.</div>
                  </div>
                </div>
                <div class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <i data-lucide="sparkles" class="h-4 w-4"></i> AI gợi ý
                </div>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Nên kết hợp dữ liệu thời tiết, độ ẩm và ảnh lá cây trước khi can thiệp mạnh vào giai đoạn ra hoa để tránh giảm tỉ lệ đậu trái.
                </p>
              </div>

              <div class="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm text-slate-500">
                <div class="flex items-center gap-5">
                  <button class="inline-flex items-center gap-2 transition duration-300 hover:text-emerald-700">
                    <i data-lucide="eye" class="h-4 w-4"></i> ${post.stats[0]}
                  </button>
                  <button class="inline-flex items-center gap-2 transition duration-300 hover:text-rose-500">
                    <i data-lucide="heart" class="h-4 w-4"></i> ${post.stats[1]}
                  </button>
                  <button class="inline-flex items-center gap-2 transition duration-300 hover:text-cyan-700">
                    <i data-lucide="message-circle" class="h-4 w-4"></i> ${post.stats[2]}
                  </button>
                </div>
                <button class="transition duration-300 hover:text-emerald-700">
                  <i data-lucide="bookmark" class="h-4 w-4 text-slate-400"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // --- News / Gợi ý chăm sóc ---
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = news
    .map(
      (item) => `
    <div class="anim-news group overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-[0_22px_38px_rgba(16,185,129,0.12)]">
      <div class="relative h-36 overflow-hidden bg-slate-100">
        <img src="${item.image}" alt="${item.title}" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      <div class="p-4">
        <div class="mb-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          ${item.tag}
        </div>
        <div class="text-[16px] font-bold leading-7 text-slate-800">${item.title}</div>
        <div class="mt-3 text-sm text-slate-500">Cập nhật theo loại cây • giai đoạn • thời tiết</div>
      </div>
    </div>
  `,
    )
    .join("");

  // --- Certifications (Chứng nhận sản phẩm) ---
  const certificationsContainer = document.getElementById(
    "certifications-container",
  );
  certificationsContainer.innerHTML = certifications
    .map(
      (cert) => `
    <div class="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-[0_16px_28px_rgba(16,185,129,0.08)]">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="font-bold text-slate-800">${cert.name}</div>
          <div class="mt-1 text-sm text-slate-500">${cert.date}</div>
          <div class="mt-2 inline-flex items-center gap-2 text-xs text-slate-400">
            <i data-lucide="map-pin" class="h-3.5 w-3.5"></i> Hiển thị trong hệ thống truy xuất
          </div>
        </div>
        <div class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          ${cert.status}
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // ==================== INITIALIZE LUCIDE ICONS ====================
  lucide.createIcons();

  // ==================== SCROLL REVEAL ====================

  // Apply scroll-reveal classes to all major sections
  const mainGrid = document.querySelector("main");
  if (mainGrid) {
    const columns = mainGrid.querySelectorAll(":scope > div");

    columns.forEach((column, colIndex) => {
      // Left column → slide from left, Middle → slide up, Right → slide from right
      const revealClass =
        colIndex === 0
          ? "scroll-reveal-left"
          : colIndex === 2
            ? "scroll-reveal-right"
            : "scroll-reveal";

      const cards = column.querySelectorAll(
        ":scope > .group, :scope > div > .group, :scope > div > .anim-post",
      );
      cards.forEach((card, i) => {
        card.classList.add(revealClass);
        // Stagger delay (max 5)
        const delayClass = `scroll-delay-${Math.min(i + 1, 5)}`;
        card.classList.add(delayClass);
      });
    });

    // Also apply to standalone containers that JS rendered into
    document
      .querySelectorAll("#posts-container > .anim-post")
      .forEach((el, i) => {
        if (!el.classList.contains("scroll-reveal")) {
          el.classList.add("scroll-reveal");
          el.classList.add(`scroll-delay-${Math.min(i + 1, 5)}`);
        }
      });
  }

  // Sub-nav tabs — scale up
  const navButtons = document.querySelectorAll("#top-nav-container > button");
  navButtons.forEach((btn, i) => {
    btn.classList.add("scroll-reveal-scale");
    btn.classList.add(`scroll-delay-${Math.min(i + 1, 5)}`);
  });

  // Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.12,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  document
    .querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
    )
    .forEach((el) => revealObserver.observe(el));
});
//form-login-signup
function loadAuthModal() {
  const root = document.getElementById("auth-modal-root");
  if (!root) return;

  // Inject modal HTML directly — no fetch delay
  root.innerHTML = `
<div id="auth-modal" class="auth-modal hidden">
  <div class="auth-modal__backdrop" id="auth-backdrop"></div>
  <div class="auth-modal__dialog is-login" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
    <button id="close-auth-modal" class="auth-modal__close" aria-label="Đóng form">
      <i data-lucide="x" class="h-5 w-5"></i>
    </button>
    <div class="auth-modal__visual">
      <div class="auth-hero-glow auth-hero-glow--one"></div>
      <div class="auth-hero-glow auth-hero-glow--two"></div>
      <div class="auth-visual-content">
        <div class="auth-badge">
          <i data-lucide="leaf" class="h-4 w-4"></i> Agri - Track
        </div>
        <h2 class="auth-visual-title">Canh tác thông minh, quản lý dễ dàng</h2>
        <p class="auth-visual-text">Theo dõi lô trồng, nhật ký canh tác, thời tiết và truy xuất nguồn gốc trên một nền tảng hiện đại.</p>
        <div class="auth-visual-cards">
          <div class="auth-mini-card"><i data-lucide="sprout" class="h-5 w-5"></i><span>Quản lý lô trồng</span></div>
          <div class="auth-mini-card"><i data-lucide="cloud-sun" class="h-5 w-5"></i><span>Dữ liệu thời tiết</span></div>
          <div class="auth-mini-card"><i data-lucide="qr-code" class="h-5 w-5"></i><span>QR truy xuất</span></div>
        </div>
      </div>
    </div>
    <div class="auth-modal__form-side">
      <div class="auth-form-side-glow auth-form-side-glow--top"></div>
      <div class="auth-form-side-glow auth-form-side-glow--bottom"></div>
      <div class="auth-tabs" data-active="login">
        <span class="auth-tab-indicator"></span>
        <button class="auth-tab active" type="button" data-auth-tab="login">Đăng nhập</button>
        <button class="auth-tab" type="button" data-auth-tab="signup">Đăng ký</button>
      </div>
      <div class="auth-forms">
        <form id="login-form" class="auth-form active">
          <div class="auth-form__header">
            <p class="auth-form__eyebrow">Chào mừng quay lại</p>
            <h3 id="auth-modal-title" class="auth-form__title">Đăng nhập vào Agri - Track</h3>
            <p class="auth-form__desc">Truy cập dữ liệu lô trồng, nhật ký và các đề xuất AI của bạn.</p>
          </div>
          <div class="auth-field auth-stagger-item">
            <label>Email hoặc số điện thoại</label>
            <div class="auth-input-wrap"><i data-lucide="mail" class="h-4 w-4"></i><input type="text" placeholder="Nhập email hoặc số điện thoại" /></div>
          </div>
          <div class="auth-field auth-stagger-item">
            <label>Mật khẩu</label>
            <div class="auth-input-wrap">
              <i data-lucide="lock" class="h-4 w-4"></i>
              <input id="login-password-input" type="password" placeholder="Nhập mật khẩu" />
              <button type="button" class="auth-password-toggle" data-password-target="login-password-input" aria-label="Hiện mật khẩu"><i data-lucide="eye" class="h-4 w-4"></i></button>
            </div>
          </div>
          <div class="auth-row auth-stagger-item">
            <label class="auth-checkbox"><input type="checkbox" /><span>Ghi nhớ đăng nhập</span></label>
            <button type="button" class="auth-link-btn">Quên mật khẩu?</button>
          </div>
          <button type="submit" class="auth-submit-btn auth-stagger-item"><i data-lucide="log-in" class="h-4 w-4"></i> Đăng nhập</button>
          <div class="auth-divider auth-stagger-item"><span>hoặc tiếp tục với</span></div>
          <div class="auth-socials auth-stagger-item">
            <button type="button" class="auth-social-btn"><i data-lucide="mail" class="h-4 w-4"></i> Gmail</button>
            <button type="button" class="auth-social-btn"><i data-lucide="smartphone" class="h-4 w-4"></i> Số điện thoại</button>
          </div>
        </form>
        <form id="signup-form" class="auth-form to-right">
          <div class="auth-form__header">
            <p class="auth-form__eyebrow">Bắt đầu cùng Agri - Track</p>
            <h3 class="auth-form__title">Tạo tài khoản mới</h3>
            <p class="auth-form__desc">Đăng ký để số hóa vùng trồng, hoạt động canh tác và quản lý chứng nhận dễ hơn.</p>
          </div>
          <div class="auth-field auth-stagger-item">
            <label>Họ và tên</label>
            <div class="auth-input-wrap"><i data-lucide="user" class="h-4 w-4"></i><input type="text" placeholder="Nhập họ và tên" /></div>
          </div>
          <div class="auth-field auth-stagger-item">
            <label>Email</label>
            <div class="auth-input-wrap"><i data-lucide="mail" class="h-4 w-4"></i><input type="email" placeholder="Nhập địa chỉ email" /></div>
          </div>
          <div class="auth-field auth-stagger-item">
            <label>Số điện thoại</label>
            <div class="auth-input-wrap"><i data-lucide="phone" class="h-4 w-4"></i><input type="tel" placeholder="Nhập số điện thoại đăng ký" /></div>
          </div>
          <div class="auth-field auth-grid-2 auth-stagger-item">
            <div>
              <label>Mật khẩu</label>
              <div class="auth-input-wrap">
                <i data-lucide="lock" class="h-4 w-4"></i>
                <input id="signup-password-input" type="password" placeholder="Tạo mật khẩu" />
                <button type="button" class="auth-password-toggle" data-password-target="signup-password-input" aria-label="Hiện mật khẩu"><i data-lucide="eye" class="h-4 w-4"></i></button>
              </div>
            </div>
            <div>
              <label>Xác nhận</label>
              <div class="auth-input-wrap">
                <i data-lucide="shield-check" class="h-4 w-4"></i>
                <input id="signup-confirm-input" type="password" placeholder="Nhập lại mật khẩu" />
                <button type="button" class="auth-password-toggle" data-password-target="signup-confirm-input" aria-label="Hiện mật khẩu"><i data-lucide="eye" class="h-4 w-4"></i></button>
              </div>
            </div>
          </div>
          <label class="auth-checkbox auth-checkbox--terms auth-stagger-item">
            <input type="checkbox" /><span>Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật.</span>
          </label>
          <button type="submit" class="auth-submit-btn auth-stagger-item"><i data-lucide="user-plus" class="h-4 w-4"></i> Tạo tài khoản</button>
        </form>
      </div>
    </div>
  </div>
</div>`;

  // Pre-render icons for the modal so they're ready instantly
  if (window.lucide) lucide.createIcons({ node: root });

  // Initialize modal event listeners
  if (typeof initAuthModal === "function") {
    initAuthModal();
  }
}

document.addEventListener("DOMContentLoaded", loadAuthModal);
