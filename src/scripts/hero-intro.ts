// Animation d'entrée du hero (« L'armoire du cabinet »), importée par Hero.astro.
// Spécification complète : docs/animation-hero.md

import { gsap } from "gsap";

const root = document.documentElement;

// L'interrupteur posé par le mini-script : s'il est éteint, on ne fait rien
if (root.classList.contains("intro")) {
  const cabinet = document.querySelector(".cabinet");

  if (cabinet instanceof HTMLElement) {
    cabinet.style.animation = "none";
  }

  try {
    sessionStorage.setItem("hero-intro-seen", "1");
  } catch (error) {
    // sessionStorage bloqué : l'intro se rejouera à la page suivante, ce n'est pas grave
  }

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline();

    const hero = document.querySelector(".hero");
    if (hero instanceof HTMLElement) {
      for (let i = 0; i < 45; i++) {
        const dust = document.createElement("span");
        dust.classList.add("hero__dust");
        const left = gsap.utils.random(15, 85);
        dust.style.left = left + "%";
        const top = gsap.utils.random(10, 90);
        dust.style.top = top + "%";
        const size = gsap.utils.random(1, 2);
        dust.style.width = size + "px";
        dust.style.height = size + "px";
        hero.append(dust);

        // Même heure de départ pour les deux tweens du grain
        const start = gsap.utils.random(0.9, 1.3);

        // Mouvement : une dérive lente et courte, dans tous les sens, sur toute sa vie
        tl.to(
          dust,
          {
            x: gsap.utils.random(-25, 25),
            y: gsap.utils.random(-30, 10),
            duration: 1.6,
            ease: "sine.inOut",
          },
          start,
        );

        // Lumière : il s'allume puis s'éteint en même temps que le halo
        tl.to(
          dust,
          {
            keyframes: [
              {
                opacity: gsap.utils.random(0.2, 0.5),
                duration: 0.4,
                ease: "sine.out",
              },
              { opacity: 0, duration: 1.2, ease: "sine.in" },
            ],
          },
          start,
        );
      }
    }

    const lastLine = document.querySelector(".hero__eyebrow-line:last-child");
    if (lastLine instanceof HTMLElement) {
      const cursor = document.createElement("span");
      cursor.classList.add("hero__cursor");
      lastLine.append(cursor);

      tl.to(
        cursor,
        {
          opacity: 1,
          duration: 0.25,
          ease: "steps(1)",
          repeat: 5,
          yoyo: true,
        },
        3.03,
      );
    }

    tl.to(
      ".cabinet__knob",
      { rotation: 90, ease: "power2.inOut", duration: 0.3 },
      0.2,
    );

    tl.to(
      ".cabinet__door--left",
      {
        keyframes: [
          { rotationY: -10, duration: 0.18, ease: "power2.out" },
          { rotationY: -8, duration: 0.18, ease: "sine.inOut" },
          { rotationY: -100, duration: 0.66, ease: "power3.inOut" },
          { rotationY: -106, opacity: 0, duration: 0.18, ease: "power2.out" },
        ],
      },
      0.5,
    );

    tl.to(
      ".cabinet__door--right",
      {
        keyframes: [
          { rotationY: 10, duration: 0.18, ease: "power2.out" },
          { rotationY: 8, duration: 0.18, ease: "sine.inOut" },
          { rotationY: 100, duration: 0.66, ease: "power3.inOut" },
          { rotationY: 106, opacity: 0, duration: 0.18, ease: "power2.out" },
        ],
      },
      0.5,
    );

    tl.fromTo(
      ".cabinet__shadow",
      { opacity: 0.8 },
      { opacity: 0, duration: 1.2, ease: "power2.in" },
      0.5,
    );

    tl.set(".cabinet__slit", { opacity: 0, scaleX: 0.3 }, 0.5);

    tl.to(
      ".cabinet__slit",
      {
        keyframes: [
          { opacity: 0.9, scaleX: 1, duration: 0.144, ease: "sine.inOut" },
          { opacity: 0.6, duration: 0.12, ease: "sine.inOut" },
          { opacity: 1, scaleX: 1.2, duration: 0.096, ease: "sine.inOut" },
          { opacity: 0.7, scaleX: 5, duration: 0.48, ease: "sine.inOut" },
          { opacity: 0, scaleX: 8, duration: 0.36, ease: "sine.inOut" },
        ],
      },
      0.5,
    );

    tl.set(".hero__halo", { opacity: 0, scale: 0.85 }, 0.6);

    tl.to(
      ".hero__halo",
      {
        keyframes: [
          { opacity: 1, scale: 1, duration: 0.57, ease: "sine.inOut" },
          { opacity: 0.85, scale: 1.05, duration: 0.475, ease: "sine.inOut" },
          { opacity: 0, scale: 1.1, duration: 0.855, ease: "sine.inOut" },
        ],
      },
      0.6,
    );

    tl.fromTo(
      ".hero__medallion",
      { rotation: -14, transformOrigin: "50% 4px" },
      { rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" },
      1,
    );

    tl.from(
      ".hero__tag-hang",
      {
        rotation: 10,
        duration: 1.8,
        ease: "elastic.out(1, 0.35)",
      },
      1.1,
    );

    tl.fromTo(
      ".hero__eyebrow-line:first-child",
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 0.48, ease: "steps(16)" },
      1.5,
    );

    tl.fromTo(
      ".hero__eyebrow-sep",
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 0.09, ease: "steps(3)" },
      1.98,
    );

    tl.fromTo(
      ".hero__eyebrow-line:last-child",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.96,
        ease: "steps(32)",
        clearProps: "clipPath",
      },
      2.07,
    );

    tl.from(
      ".hero__title, .hero__subtitle, .hero__actions a",
      {
        autoAlpha: 0,
        y: 12,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      },
      2.8,
    );

    tl.from(
      ".hero__handle",
      { autoAlpha: 0, y: 12, duration: 0.5, ease: "power2.out" },
      3.3,
    );

    tl.to(
      ".hero__handle",
      { y: 5, ease: "sine.inOut", duration: 1.2, repeat: 5, yoyo: true },
      3.8,
    );

    tl.call(() => root.classList.remove("intro"), [], 1.7);

    const skipIntro = () => {
      tl.progress(1);
    };
    document.addEventListener("click", skipIntro);

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        skipIntro();
      }
    };
    document.addEventListener("keydown", onKeydown);

    const removeSkipListeners = () => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("click", skipIntro);
    };

    tl.eventCallback("onComplete", removeSkipListeners);

    return () => {
      root.classList.remove("intro");
      removeSkipListeners();
    };
  });
}
