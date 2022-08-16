/**
 * функция склоняет слова в зависимости от числа
 * @param number - число по которому склоняем
 * @param titles - массив склоняемых(3 слова)
 * @returns - возвращаем просклоняемую строку
 */
export function getDeclensionWordFromNumber(
  number: number,
  titles: [string, string, string],
) {
  const decCache: [number] | [] = [];

  function decOfNum(numb: number, name: [string, string, string]) {
    const decCases = [2, 0, 1, 1, 1, 2];

    if (!decCache[numb])
      decCache[numb] =
        numb % 100 > 4 && numb % 100 < 20
          ? 2
          : decCases[Math.min(numb % 10, 5)];
    return name[decCache[numb]];
  }

  return decOfNum(number, titles);
}
