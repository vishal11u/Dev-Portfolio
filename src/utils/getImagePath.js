const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "").split(".")[0]] = r(item);
  });
  return images;
};

export const skillIcons = importAll(
  require.context("../public/assets/logos", false, /\.(png|jpe?g|svg|webp)$/)
);
