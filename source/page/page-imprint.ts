import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { I18nService } from '@domoskanonos/frontend-basis';
import { TypographyType } from '@domoskanonos/wc-atomic';

@customElement('page-imprint')
export class PageImprint extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('imprint');
   }

   getMainComponent(): TemplateResult {
      return html`
         <component-typography .typographyType="${TypographyType.H1}">Imprint Nidoca Template</component-typography>
      `;
   }

}
