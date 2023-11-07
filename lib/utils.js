export function truncateStr(str, n = 365, disable = false) {
  if (str.length > n && disable != true) {
    return str.substring(0, n) + "...";
  }

  return str;
}
