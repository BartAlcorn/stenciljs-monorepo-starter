import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { inlineSvg } from 'stencil-inline-svg';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'core',
  plugins: [inlineSvg(), sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
        type: 'docs-vscode',
        file: 'vscode-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'core',
      outputType: 'component',
      directivesProxyFile: '../angular/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/components/src/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage: 'core',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'core',
      proxiesFile: '../vue/lib/components.ts',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
