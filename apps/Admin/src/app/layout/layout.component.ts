import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export default class LayoutComponent {
  breadcrumbs = computed(() => this.#breadcrumb.data());

  #breadcrumb = inject(BreadcrumbService);
}
