
export function toTitleCase(str) {
  console.log("stringUtils.js dynamically loaded");
  return str.replace(/\w\S*/g, txt =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
