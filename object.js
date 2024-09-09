export function fill(obj, key, replacer) {
  const originalMethod = obj[key];
  obj[key] = replacer(originalMethod);
}
