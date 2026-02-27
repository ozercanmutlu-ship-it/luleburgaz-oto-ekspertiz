const PROMO_WHATSAPP_NUMBER = "+905376438798";
const PROMO_STORAGE_KEY = "loePromoDismissed";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector("#mobileMenuBtn") || document.querySelector(".nav-toggle");
  const nav = document.querySelector("#mobileMenu") || document.querySelector(".site-nav");
  const body = document.body;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      const isOpen = !expanded;
      navToggle.setAttribute("aria-expanded", String(isOpen));
      nav.classList.toggle("is-open", isOpen);
      body.classList.toggle("nav-open", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      nav.classList.remove("is-open");
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("active");
        const btn = faq.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("active", !isActive);
      button.setAttribute("aria-expanded", String(!isActive));
    });
  });

  const promoPopup = document.querySelector("#promo-popup");
  if (promoPopup) {
    const openPopup = () => {
      if (localStorage.getItem(PROMO_STORAGE_KEY)) return;
      promoPopup.classList.add("active");
      promoPopup.setAttribute("aria-hidden", "false");
      body.classList.add("promo-open");
    };

    const closePopup = () => {
      promoPopup.classList.remove("active");
      promoPopup.setAttribute("aria-hidden", "true");
      body.classList.remove("promo-open");
      localStorage.setItem(PROMO_STORAGE_KEY, "1");
    };

    const cta = promoPopup.querySelector(".promo-cta");
    if (cta) {
      const normalized = PROMO_WHATSAPP_NUMBER.replace(/\D/g, "");
      cta.href = `https://wa.me/${normalized}`;
    }

    const closeBtn = promoPopup.querySelector(".promo-close");
    const backdrop = promoPopup.querySelector(".promo-backdrop");

    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }

    if (backdrop) {
      backdrop.addEventListener("click", closePopup);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && promoPopup.classList.contains("active")) {
        closePopup();
      }
    });

    setTimeout(openPopup, 150);
  }

  const loadHeroContent = async () => {
    const heroTitle = document.querySelector("#hero-title");
    const heroSubtitle = document.querySelector("#hero-subtitle");
    const heroBadge = document.querySelector("#hero-badge");
    const heroImage = document.querySelector("#hero-image");

    if (!heroTitle && !heroSubtitle && !heroBadge && !heroImage) return;

    try {
      const response = await fetch("/content/hero.json");
      if (!response.ok) {
        console.warn("Hero içeriği yüklenemedi.");
        return;
      }
      const data = await response.json();

      if (heroBadge && data.badge_text) {
        heroBadge.textContent = data.badge_text;
      }
      if (heroTitle && data.title) {
        heroTitle.textContent = data.title;
      }
      if (heroSubtitle && data.subtitle) {
        heroSubtitle.textContent = data.subtitle;
      }
      if (heroImage && data.hero_image) {
        heroImage.src = data.hero_image;
      }
    } catch (error) {
      console.warn("Hero içeriği yüklenemedi.");
    }
  };

  loadHeroContent();

  const loadSiteSettings = async () => {
    const hasTargets = document.querySelector(
      "[data-site-phone-link], [data-site-phone-text], [data-site-whatsapp-link], [data-site-address], [data-site-working-hours-line]"
    );
    if (!hasTargets) return;

    try {
      const response = await fetch("/content/site-settings.json");
      if (!response.ok) {
        console.warn("Site ayarları yüklenemedi.");
        return;
      }
      const data = await response.json();

      if (data.phone) {
        const phoneHref = `tel:${String(data.phone).replace(/\s+/g, "")}`;
        document.querySelectorAll("[data-site-phone-link]").forEach((el) => {
          el.setAttribute("href", phoneHref);
        });
        document.querySelectorAll("[data-site-phone-text]").forEach((el) => {
          el.textContent = data.phone;
        });
      }

      if (data.whatsapp) {
        const whatsappNumber = String(data.whatsapp).replace(/\D/g, "");
        if (whatsappNumber) {
          const whatsappHref = `https://wa.me/${whatsappNumber}`;
          document.querySelectorAll("[data-site-whatsapp-link]").forEach((el) => {
            el.setAttribute("href", whatsappHref);
          });
        }
      }

      if (data.address) {
        document.querySelectorAll("[data-site-address]").forEach((el) => {
          el.textContent = data.address;
        });
      }

      if (data.working_hours) {
        const lines = String(data.working_hours)
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        document.querySelectorAll("[data-site-working-hours-line]").forEach((el) => {
          const index = Number(el.getAttribute("data-site-working-hours-line"));
          if (!Number.isNaN(index) && lines[index]) {
            el.textContent = lines[index];
          }
        });
      }
    } catch (error) {
      console.warn("Site ayarları yüklenemedi.");
    }
  };

  const loadServices = async () => {
    const container = document.querySelector("[data-services]");
    if (!container) return;

    try {
      const response = await fetch("/content/services.json");
      if (!response.ok) {
        console.warn("Hizmet içerikleri yüklenemedi.");
        return;
      }
      const data = await response.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) return;

      const existingCards = Array.from(container.querySelectorAll(".service-detail"));
      if (!existingCards.length) return;

      items.forEach((item, index) => {
        const card = existingCards[index] || existingCards[0].cloneNode(true);
        if (!existingCards[index]) container.appendChild(card);

        const titleEl = card.querySelector("h2");
        if (titleEl && item.title) titleEl.textContent = item.title;

        const imgEl = card.querySelector("img");
        if (imgEl && item.image) {
          imgEl.src = item.image;
          if (item.title) imgEl.alt = item.title;
        }

        const paragraphs = card.querySelectorAll("p");
        if (paragraphs[0] && item.description) {
          paragraphs[0].textContent = item.description;
        }
        if (paragraphs[1]) {
          paragraphs[1].textContent = "";
        }
      });

      existingCards.slice(items.length).forEach((card) => card.remove());
    } catch (error) {
      console.warn("Hizmet içerikleri yüklenemedi.");
    }
  };

  const loadPackages = async () => {
    const container = document.querySelector("[data-packages]");
    if (!container) return;

    try {
      const response = await fetch("/content/packages.json");
      if (!response.ok) {
        console.warn("Paket içerikleri yüklenemedi.");
        return;
      }
      const data = await response.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) return;

      const existingCards = Array.from(container.querySelectorAll(".pricing-card"));
      if (!existingCards.length) return;

      items.forEach((item, index) => {
        const card = existingCards[index] || existingCards[0].cloneNode(true);
        if (!existingCards[index]) container.appendChild(card);

        const titleEl = card.querySelector("h2, h3");
        if (titleEl && item.name) titleEl.textContent = item.name;

        const priceEl = card.querySelector("p");
        if (priceEl && item.price) priceEl.textContent = item.price;

        const listEl = card.querySelector("ul");
        if (listEl && Array.isArray(item.features)) {
          listEl.innerHTML = "";
          item.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature;
            listEl.appendChild(li);
          });
        }

        card.classList.toggle("featured", Boolean(item.recommended));
        const buttonEl = card.querySelector("a.btn");
        if (buttonEl) {
          buttonEl.classList.toggle("btn-primary", Boolean(item.recommended));
          buttonEl.classList.toggle("btn-outline", !item.recommended);
        }
      });

      existingCards.slice(items.length).forEach((card) => card.remove());
    } catch (error) {
      console.warn("Paket içerikleri yüklenemedi.");
    }
  };

  const loadTestimonials = async () => {
    const container = document.querySelector("[data-testimonials]");
    if (!container) return;

    try {
      const response = await fetch("/content/testimonials.json");
      if (!response.ok) {
        console.warn("Referans içerikleri yüklenemedi.");
        return;
      }
      const data = await response.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) return;

      const existingCards = Array.from(container.querySelectorAll(".review-card"));
      if (!existingCards.length) return;

      items.forEach((item, index) => {
        const card = existingCards[index] || existingCards[0].cloneNode(true);
        if (!existingCards[index]) container.appendChild(card);

        const imgEl = card.querySelector("img");
        if (imgEl && item.photo) {
          imgEl.src = item.photo;
          if (item.name) imgEl.alt = item.name;
        }

        const quoteEl = card.querySelector("blockquote");
        if (quoteEl && item.comment) quoteEl.textContent = item.comment;

        const captionEl = card.querySelector("figcaption");
        if (captionEl && item.name) {
          const ratingText = item.rating ? ` · ${item.rating}/5` : "";
          captionEl.textContent = `${item.name}${ratingText}`;
        }
      });

      existingCards.slice(items.length).forEach((card) => card.remove());
    } catch (error) {
      console.warn("Referans içerikleri yüklenemedi.");
    }
  };

  const getTextExcerpt = (html, length = 160) => {
    const temp = document.createElement("div");
    temp.innerHTML = html || "";
    const text = (temp.textContent || "").replace(/\s+/g, " ").trim();
    if (text.length <= length) return text;
    return `${text.slice(0, length).trim()}…`;
  };

  const loadBlogList = async () => {
    const container = document.querySelector("[data-blog-list]");
    if (!container) return;

    const sources = container.getAttribute("data-blog-sources");
    if (!sources) return;

    const slugs = sources.split(",").map((slug) => slug.trim()).filter(Boolean);
    if (!slugs.length) return;

    try {
      const responses = await Promise.all(
        slugs.map(async (slug) => {
          try {
            const response = await fetch(`/content/blog/${slug}.json`);
            if (!response.ok) return null;
            const data = await response.json();
            return { ...data, slug: data.slug || slug };
          } catch (error) {
            return null;
          }
        })
      );

      const items = responses.filter(Boolean);
      if (!items.length) return;

      const existingCards = Array.from(container.querySelectorAll(".blog-card"));
      if (!existingCards.length) return;

      items.forEach((item, index) => {
        const card = existingCards[index] || existingCards[0].cloneNode(true);
        if (!existingCards[index]) container.appendChild(card);

        const imgEl = card.querySelector("img");
        if (imgEl && item.cover_image) {
          imgEl.src = item.cover_image;
          imgEl.alt = item.title || imgEl.alt;
        }

        const eyebrowEl = card.querySelector(".eyebrow");
        if (eyebrowEl) eyebrowEl.textContent = "Blog";

        const titleEl = card.querySelector("h2");
        if (titleEl && item.title) titleEl.textContent = item.title;

        const paragraphEl = card.querySelector("p:not(.eyebrow)");
        if (paragraphEl) paragraphEl.textContent = getTextExcerpt(item.content, 180);

        const linkEl = card.querySelector("a");
        if (linkEl) {
          linkEl.href = `blog-detay.html?slug=${encodeURIComponent(item.slug || "")}`;
        }
      });

      existingCards.slice(items.length).forEach((card) => card.remove());
    } catch (error) {
      console.warn("Blog içerikleri yüklenemedi.");
    }
  };

  const loadBlogDetail = async () => {
    const contentContainer = document.querySelector("[data-blog-content]");
    if (!contentContainer) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    try {
      const response = await fetch(`/content/blog/${slug}.json`);
      if (!response.ok) {
        if (response.status === 404) {
          contentContainer.innerHTML = "<p>Aradığınız içerik bulunamadı.</p>";
          const titleEl = document.querySelector("[data-blog-title]");
          if (titleEl) titleEl.textContent = "İçerik bulunamadı";
          const excerptEl = document.querySelector("[data-blog-excerpt]");
          if (excerptEl) excerptEl.textContent = "Aradığınız yazı bulunamadı.";
        } else {
          console.warn("Blog detayı yüklenemedi.");
        }
        return;
      }
      const data = await response.json();

      const titleEl = document.querySelector("[data-blog-title]");
      if (titleEl && data.title) titleEl.textContent = data.title;

      const excerptEl = document.querySelector("[data-blog-excerpt]");
      if (excerptEl) excerptEl.textContent = getTextExcerpt(data.content, 180);

      const heroImageEl = document.querySelector("[data-blog-hero-image]");
      if (heroImageEl && data.cover_image) {
        heroImageEl.src = data.cover_image;
        heroImageEl.alt = data.title || heroImageEl.alt;
      }

      if (data.content) {
        contentContainer.innerHTML = data.content;
      }
    } catch (error) {
      console.warn("Blog detayı yüklenemedi.");
    }
  };

  const revealOnScroll = () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  };
  revealOnScroll();

  loadSiteSettings();
  loadServices();
  loadPackages();
  loadTestimonials();
  loadBlogList();
  loadBlogDetail();

});
