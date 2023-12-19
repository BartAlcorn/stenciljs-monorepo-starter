import { newSpecPage } from '@stencil/core/testing';
import { MrsButton } from '../mrs-button';

describe('mrs-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrsButton],
      html: `<mrs-button></mrs-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mrs-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mrs-button>
    `);
  });
});
