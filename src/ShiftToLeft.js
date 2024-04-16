export const ShiftToLeft = (componentId, isShifted) => {
  const container = document.getElementById(componentId);
  if (container) {
    if (isShifted) {
      container.classList.add('shifted'); 
    } else {
      container.classList.remove('shifted'); 
    }
  }
};

export const ShiftToRight = (componentId, isShifted) => {
  const container = document.getElementById(componentId);
  if (container) {
    if (isShifted) {
      container.classList.add('shifted-right'); 
    } else {
      container.classList.remove('shifted-right'); 
    }
  }
};
