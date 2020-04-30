import { html, property, TemplateResult } from 'lit-element';
import { BasisTemplate, TypographyType } from '@domoskanonos/wc-atomic';
import { I18nService } from '@domoskanonos/frontend-basis';

export abstract class PageAbstract extends BasisTemplate {
   @property()
   navigationTitle: string = '';

   getTopContent(): TemplateResult {
      return html`
         <component-top-app-bar>
            ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
         </component-top-app-bar>
      `;
   }

   getTopLeftComponent(): TemplateResult {
      return html`
         <component-icon
            title="${I18nService.getUniqueInstance().getValue('menu')}"
            slot="leftComponents"
            icon="menu"
            clickable="true"
         ></component-icon>
         <component-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
            >${this.navigationTitle}</component-typography
         >
      `;
   }

   getTopMainComponent(): TemplateResult {
      return html``;
   }

   getTopRightComponent(): TemplateResult {
      return html``;
   }

   getLeftNavigationContent(): TemplateResult {
      return html`
         <component-navigation-link
            slot="links"
            icon="arrow_forward_ios"
            text="${I18nService.getUniqueInstance().getValue('dashboard')}"
            href="dashboard"
         ></component-navigation-link>
      `;
   }
}
