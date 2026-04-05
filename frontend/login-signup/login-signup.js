function initAuthModal() {
  const authModal = document.getElementById("auth-modal");
  const openAuthModalBtn = document.getElementById("open-auth-modal");
  const closeAuthModalBtn = document.getElementById("close-auth-modal");
  const authBackdrop = document.getElementById("auth-backdrop");
  const authTabsWrap = document.querySelector(".auth-tabs");
  const authTabs = document.querySelectorAll(".auth-tab");
  const authDialog = document.querySelector(".auth-modal__dialog");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (
    !authModal ||
    !openAuthModalBtn ||
    !authTabsWrap ||
    !authDialog ||
    !loginForm ||
    !signupForm
  ) {
    return;
  }

  const playEntering = (form) => {
    form.classList.remove("is-entering");

    form.querySelectorAll(".auth-stagger-item").forEach((item) => {
      item.style.animation = "none";
      item.style.opacity = "0";
      item.style.transform = "translateY(18px) scale(0.985)";
    });

    void form.offsetWidth;

    form.classList.add("is-entering");

    form.querySelectorAll(".auth-stagger-item").forEach((item) => {
      item.style.animation = "";
    });
  };

  const openAuthModal = () => {
    authModal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    authDialog.classList.toggle(
      "is-login",
      authTabsWrap.dataset.active !== "signup",
    );
    authDialog.classList.toggle(
      "is-signup",
      authTabsWrap.dataset.active === "signup",
    );

    const formSide = document.querySelector(".auth-modal__form-side");
    if (formSide) formSide.scrollTop = 0;

    const activeForm =
      authTabsWrap.dataset.active === "signup" ? signupForm : loginForm;
    requestAnimationFrame(() => playEntering(activeForm));
  };

  const closeAuthModal = () => {
    authModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  };

  const switchAuthTab = (tab) => {
    const isLogin = tab === "login";
    const formSide = document.querySelector(".auth-modal__form-side");

    authTabsWrap.dataset.active = tab;
    authDialog.classList.toggle("is-login", isLogin);
    authDialog.classList.toggle("is-signup", !isLogin);

    authTabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.authTab === tab);
    });

    if (isLogin) {
      signupForm.classList.remove("active", "is-entering");
      signupForm.classList.add("to-right");
      signupForm.classList.remove("to-left");

      loginForm.classList.add("active");
      loginForm.classList.remove("to-left", "to-right");
      playEntering(loginForm);
    } else {
      loginForm.classList.remove("active", "is-entering");
      loginForm.classList.add("to-left");
      loginForm.classList.remove("to-right");

      signupForm.classList.add("active");
      signupForm.classList.remove("to-left", "to-right");
      playEntering(signupForm);
    }

    if (formSide) {
      if (window.innerHeight < 860 || window.innerWidth < 980) {
        formSide.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        formSide.scrollTop = 0;
      }
    }
  };

  openAuthModalBtn.addEventListener("click", openAuthModal);

  if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener("click", closeAuthModal);
  }

  if (authBackdrop) {
    authBackdrop.addEventListener("click", closeAuthModal);
  }

  authTabs.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () =>
      switchAuthTab(tabBtn.dataset.authTab),
    );
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !authModal.classList.contains("hidden")) {
      closeAuthModal();
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công! Đây là bản giao diện mẫu.");
    closeAuthModal();
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tạo tài khoản thành công! Đây là bản giao diện mẫu.");
    closeAuthModal();
  });

  document.querySelectorAll("[data-password-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordTarget);
      if (!input) return;

      const iconName = input.type === "password" ? "eye-off" : "eye";
      input.type = input.type === "password" ? "text" : "password";
      button.innerHTML = `<i data-lucide="${iconName}" class="h-4 w-4"></i>`;

      if (window.lucide) lucide.createIcons();
    });
  });

  switchAuthTab("login");
}
