const root = document.documentElement;

document.querySelectorAll<HTMLDialogElement>("dialog[data-project-details]").forEach((dialog) => {
  const trigger = document.querySelector<HTMLButtonElement>(`[data-project-open="${dialog.id}"]`);
  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-project-close]");
  const initialFocus = dialog.querySelector<HTMLElement>("[data-project-initial-focus]");
  const content = dialog.querySelector<HTMLElement>(".project-details__body");

  if (!trigger || !closeButton) return;

  let previousOverflow = "";
  let previousPadding = "";
  let pointerStartedOutside = false;

  trigger.addEventListener("click", () => {
    if (dialog.open) return;

    previousOverflow = root.style.overflow;
    previousPadding = root.style.paddingRight;

    // Compense la disparition de la barre de défilement pour garder la page en place.
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const currentPadding = parseFloat(getComputedStyle(root).paddingRight) || 0;

    dialog.showModal();
    root.style.overflow = "hidden";
    root.style.paddingRight = `${currentPadding + scrollbarWidth}px`;

    if (content) content.scrollTop = 0;
    initialFocus?.focus({ preventScroll: true });
  });

  closeButton.addEventListener("click", () => dialog.close());

  // L'événement close couvre aussi la fermeture native avec Échap.
  dialog.addEventListener("close", () => {
    root.style.overflow = previousOverflow;
    root.style.paddingRight = previousPadding;
    trigger.focus({ preventScroll: true });
    pointerStartedOutside = false;
  });

  const isOutside = (event: MouseEvent): boolean => {
    const bounds = dialog.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom;
  };

  // Une sélection de texte commencée dans la fiche ne doit pas la fermer au relâchement.
  dialog.addEventListener("pointerdown", (event) => {
    pointerStartedOutside = event.target === dialog && isOutside(event);
  });

  dialog.addEventListener("click", (event) => {
    if (pointerStartedOutside && event.target === dialog && isOutside(event)) {
      dialog.close();
    }
    pointerStartedOutside = false;
  });
});
