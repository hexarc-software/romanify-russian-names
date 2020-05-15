import * as mid_order_4271 from "./mid_order_4271";


export type TransliterationMethod = "MID_ORDER_4271";

export type TransliterationTable = { [letter: string]: string };

export function romanify(value: string, method: TransliterationMethod = "MID_ORDER_4271"): string {
  let table = pickTable(method);
  let transliterate = transliterateLetter(table);
  let result = "";
  for (let letter of value) {
    result += transliterate(letter);
  }
  return result;
}

function pickTable(method: TransliterationMethod): TransliterationTable {
  switch (method) {
    case "MID_ORDER_4271": return mid_order_4271.table;
    default: throw new Error(`unsupported transliteration ${method}`);
  }
}

function transliterateLetter(table: TransliterationTable) {
  return function(letter: string): string {
    let result = table[letter];
    return result ?? letter;
  }
}