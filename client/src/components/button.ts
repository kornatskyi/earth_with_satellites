export const renderButton = () => {
  const button = document.createElement("button");
  button.style.position = "absolute";
  button.style.top = "20px";
  button.style.left = "20px";
  button.textContent = "Click Me!";
  document.body.append(button);
};
