import test from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js"; // import fungsi sum dari index.js

// Test case 1: menjumlahkan dua bilangan positif
test("menjumlahkan dua bilangan positif", () => {
  assert.strictEqual(sum(3, 5), 8);
});

// Test case 2: menjumlahkan dua nilai negatif
test("menjumlahkan dua nilai negatif", () => {
  assert.strictEqual(sum(-2, -3), 0);
});

// Test skenario 3: Menjumlahkan bilangan positif dan negatif
test("Menjumlahkan bilangan positif dan negatif", () => {
  assert.strictEqual(sum(2, -3), 0);
});

// Test skenario 4: Menjumlahkan bilangan dengan nol
test("Menjumlahkan bilangan dengan nol", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

// Test skenario 5: Menjumlahkan bilangan desimal
test("Menjumlahkan bilangan desimal", () => {
  assert.strictEqual(sum(2.5, 3.1), 5.6);
});

// Test skenario 6: Menjumlahkan bilangan besar
test("Menjumlahkan bilangan besar", () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});

// Test skenario 7: Menjumlahkan bilangan dengan tipe data yang tidak valid
test("Menjumlahkan bilangan dengan tipe data yang tidak valid", () => {
  assert.strictEqual(sum("3", 5), 0);
  assert.strictEqual(sum(3, "5"), 0);
  assert.strictEqual(sum("3", "5"), 0);
});
