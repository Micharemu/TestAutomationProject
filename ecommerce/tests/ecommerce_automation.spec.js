// Playwright script for E-commerce Checkout
test('E-commerce: Checkout with valid credit card', async ({ page }) => {
  await page.goto('https://ecommerce.com');
  await page.click('text="Login"');
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'Pass123!');
  await page.click('text="Submit"');

  await page.fill('input[placeholder="Search"]', 'Wireless Headphones');
  await page.click('text="Add to Cart"');
  await page.goto('/checkout');

  await page.fill('#cardNumber', '4111111111111111');
  await page.fill('#expiry', '12/26');
  await page.fill('#cvv', '123');
  await page.click('text="Pay Now"');

  await expect(page.locator('.order-status')).toHaveText('Order Confirmed');
});
