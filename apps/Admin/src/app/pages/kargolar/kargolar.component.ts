import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, resource, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ODataModel } from '../../models/odata.model';
import { FlexiGridModule, FlexiGridService, StateModel } from 'flexi-grid';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { BreadCrumbMoodel } from '../../models/breadcrumb.model';

@Component({
  imports: [RouterLink, FlexiGridModule],
  templateUrl: './kargolar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KargolarComponent {
  result = resource({
    request: () => this.state(),
    loader:async ()=> {
      let endpoint = "https://localhost:7213/odata/kargolar?$count=true";
      const odataEndpoint = this.#grid.getODataEndpoint(this.state());
      endpoint += "&" + odataEndpoint;
      var res = await lastValueFrom(this.#http.get<ODataModel<any[]>>(endpoint));

      return res;
    }
  });
  data = computed(() => this.result.value()?.value ?? []);
  total = computed(() => this.result.value()?.['@odata.count'] ?? 0);
  loading = computed(() => this.result.isLoading());
  state = signal<StateModel>(new StateModel());

  #http = inject(HttpClient);
  #grid = inject(FlexiGridService);
  #breadcrumb = inject(BreadcrumbService)

  constructor(){
    const breadcrumbs : BreadCrumbMoodel[] = [
      {
        name : "Ana Sayfa",
        routerLink: "/",
        icon: "home"
      },
      {
        name : "Kargolar",
        routerLink : "/kargolar",
        icon : "package_2"
      }
    ]

    this.#breadcrumb.data.set(breadcrumbs);
  }

  dataStateChange(event: StateModel){
    this.state.set(event);
  }
}



