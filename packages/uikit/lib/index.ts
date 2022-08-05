import plugin from "tailwindcss/plugin";
import defaultConfig from "tailwindcss/defaultConfig";
import { PluginCreator } from "tailwindcss/types/config";
import base from "../output/base";
import components from "../output/components";
import utilities from "../output/utilities";
import themeExtends from "./theme";

const mainFunc: PluginCreator = ({ addBase, addComponents, addUtilities }) => {
  addBase(base);
  addComponents(components as any);
  addUtilities(utilities);
};

export default plugin(mainFunc, {
  ...defaultConfig,
  theme: {
    extends: themeExtends,
  },
});

export const THSUIKITThemeExtends = themeExtends;
