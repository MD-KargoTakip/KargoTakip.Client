import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { BreadCrumbMoodel } from '../../models/breadcrumb.model';

@Component({
  imports: [],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {

  #breadcrumb = inject(BreadcrumbService)

  constructor(){
    const breadcrumbs : BreadCrumbMoodel[] = [
      {
        name : "Ana Sayfa",
        routerLink: "/",
        icon: "home"
      }
    ]

    this.#breadcrumb.data.set(breadcrumbs);
  }


}
