export const handleSectionScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetPosition = element.offsetTop - 60;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
