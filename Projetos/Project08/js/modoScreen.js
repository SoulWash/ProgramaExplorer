
export default function ModeScreen() {
  const Mode = document.querySelector("body");
  const iconSun = document.querySelector("body i.ph-sun");
  const iconMoon = document.querySelector("body i.ph-moon");
  
  iconSun.onclick = () => {
    Mode.classList.add("lightMode");
    iconSun.classList.add("hide");
    iconMoon.classList.remove("hide");
  };

  iconMoon.onclick = () => {
    Mode.classList.remove("lightMode");
    iconSun.classList.remove("hide");
    iconMoon.classList.add("hide");
  };
}


