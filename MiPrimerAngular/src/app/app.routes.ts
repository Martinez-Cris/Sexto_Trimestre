import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Ejercicio } from './pages/ejercicio/ejercicio';
import { Contacto } from './pages/contacto/contacto';
import { FormularioComponent } from './forms/formulario/formulario';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }
];