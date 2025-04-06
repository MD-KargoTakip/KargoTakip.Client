import { Injectable, signal } from '@angular/core';
import { BreadCrumbMoodel } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  data = signal<BreadCrumbMoodel[]>([]);
}
