const deepEqual = (firstValue, secondValue) => {
  if (firstValue === secondValue) return true;
  if (typeof firstValue != "object" || typeof secondValue != "object" || firstValue == null || secondValue == null) return false;

  let firstKeys = Object.keys(firstValue);
  let secondKeys = Object.keys(secondValue);

  if (firstKeys.length != secondKeys.length) return false;

  for (let key of firstKeys) {
    if (!secondKeys.includes(key) || !deepEqual(firstValue[key], secondValue[key])) return false;
  }

  return true;
}
