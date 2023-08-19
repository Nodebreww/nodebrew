// cursorAnimation.js

export function setupCursorAnimation() {
  const img1 = document.getElementById("img-1");
  const img2 = document.getElementById("img-2");

  document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const diffX1 = cursorX - centerX;
    const diffY1 = cursorY - centerY;

    const diffX2 = centerX - cursorX;
    const diffY2 = centerY - cursorY;

    const angle1 = Math.atan2(diffY1, diffX1) * (180 / Math.PI);
    const angle2 = Math.atan2(diffY2, diffX2) * (180 / Math.PI);

    img1.style.transform = `translate(${angle1 / 10}px, ${angle2 / 10}px)`;
    img2.style.transform = `translate(${angle2 / 10}px, ${angle1 / 10}px)`;
  });
}
