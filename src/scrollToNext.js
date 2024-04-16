export const scrollToNext = (componentId) => {
    const nextComponent = document.getElementById(componentId);
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };