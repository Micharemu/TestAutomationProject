// Playwright script for Healthcare Claim Submission
test('Healthcare: Submit a valid insurance claim', async ({ page }) => {
  await page.goto('https://healthcare-system.com/login');
  await page.fill('#username', 'testUser');
  await page.fill('#password', 'securePass123');
  await page.click('button[type="submit"]');

  await page.goto('https://healthcare-system.com/claims/new');
  await page.fill('#patientName', 'John Doe');
  await page.fill('#policyNumber', 'POL123456');
  await page.selectOption('#treatmentType', 'surgery');
  await page.click('#submitClaim');

  await expect(page.locator('.status')).toHaveText('Submitted');
});
