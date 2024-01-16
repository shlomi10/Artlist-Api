import { test, expect } from '@playwright/test';

test('has currency', async ({ request }) => {
  const response = await request.get('api/User/GetCurrency');
  expect(response.ok()).toBeTruthy();
  const currency = await response.json();
  expect(currency.length).toBeGreaterThan(0);
  expect(currency).toEqual("USD")
  console.log(currency);
  console.log("Now test of other currency");
  expect(currency, "the currency is not the expected one").toEqual("ILS")
});