import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pool',
      url: '/pool',
      icon: 'cart'
    },
    {
      title: 'Meus pedidos',
      url: '/pedidos',
      icon: 'albums'
    },
    {
      title: 'Minhas ofertas',
      url: '/ofertas',
      icon: 'albums'
    },
    {
      title: 'Meus contratos',
      url: '/contratos',
      icon: 'checkmark'
    },
  ];
  constructor() { }
}
