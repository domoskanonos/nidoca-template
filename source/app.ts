import { customElement, html, TemplateResult } from 'lit-element';
import { RouterService } from '@domoskanonos/frontend-basis';
import { I18nService } from '@domoskanonos/frontend-basis/source/i18n-service';
import { AbstractApp } from '@domoskanonos/wc-atomic/source/abstract-app';
import messageDE from './i18n/message-de.json';
import messageEN from './i18n/message-en.json';

import './page/page-dashboard';

@customElement('app-root')
export class App extends AbstractApp {
   async preRender(): Promise<void> {
      I18nService.getUniqueInstance().saveData(messageDE);
      I18nService.getUniqueInstance().saveData(messageEN, 'en-EN');
      return super.preRender();
   }

   renderPage(): TemplateResult {
      let path = RouterService.getUniqueInstance().getCurrentPage();
      console.log('current path: '.concat(path));
      switch (path) {
         case 'imprint':
            return html`
               <page-imprint></page-imprint>
            `;
         case '':
         case 'dashboard':
         default:
            return html`
               <page-dashboard></page-dashboard>
            `;
      }
   }

   getAppTitle(): string {
      return 'Nidoca Template';
   }
}
