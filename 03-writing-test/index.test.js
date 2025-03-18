import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "./index.js"; // Import fungsi sum dari index.js

// Test case 1: menjumlahkan dua bilangan poitif
test("menjumlahkan dua bilangan positif", () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5); // harus menghasilkan 5
});

// Test case 2: menjumlahkan dua biangan positif dan negatif
test("menjumlahkan dua bilangan positif dan negatif", () => {
  const result = sum(5, -3);
  assert.strictEqual(result, 2); // harus menghasilkan 2
});

// Test case 3: menjumlahkan dua biangan negatif
test("menjumlahkan dua bilangan negatif", () => {
  const result = sum(-5, -3);
  assert.strictEqual(result, -8); // harus menghasilkan -8
});

// Test case 4: menjumlahkan bilanga dengan 0
test("menjumlahkan dengan bilanga nol", () => {
  const result = sum(9, 0);
  assert.strictEqual(result, 9); // harus menghasilkan 9
});
