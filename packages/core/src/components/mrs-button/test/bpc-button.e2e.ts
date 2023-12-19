import { newE2EPage } from '@stencil/core/testing';

describe('mrs-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mrs-button></mrs-button>');

    const element = await page.find('mrs-button');
    expect(element).toHaveClass('hydrated');
  });
});
