import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pool',
        loadChildren: () => import('./pool/pool.module').then(m => m.PoolPageModule),
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./ofertas/ofertas.module').then(m => m.OfertasPageModule)
      },
      {
        path: 'contratos',
        loadChildren: () => import('./contratos/contratos.module').then(m => m.ContratosPageModule)
      },
      {
        path: 'fazeroferta',
        loadChildren: () => import('./fazeroferta/fazeroferta.module').then(m => m.FazerofertaPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
