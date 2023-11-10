import "../libs/phoneMask/mask";
import "../libs/phoneMask/mask_list";
import { mask } from "../libs/phoneMask/mask";

mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
