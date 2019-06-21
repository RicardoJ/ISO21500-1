import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ConstitutionComponent } from '../features/integration/components/constitution/constitution.component';
import { ProvidersComponent } from '../features/acquisitions/components/providers/providers.component';
import { GuardsService } from './guards.service';
import { IntegrationComponent } from '../features/integration/integration.component';
import { PlanningComponent } from '../features/integration/components/planning/planning.component';
import { ConfigOneComponent } from '../features/integration/components/config-one/config-one.component';
import { ConfigTwoComponent } from '../features/integration/components/config-two/config-two.component';
import { ChangesComponent } from '../features/integration/components/changes/changes.component';
import { LessonsComponent } from '../features/integration/components/lessons/lessons.component';

const routes: Routes = [
  {
    path: 'projects/:projectId',
    component: ProjectDashboardComponent,
    canActivate: [GuardsService],
    children: [
      {
        path: 'integration',
        component: IntegrationComponent,
        children: [
          {
            path: 'constitution',
            component: ConstitutionComponent,
            pathMatch: 'full'
          },
          {
            path: 'planning',
            component: PlanningComponent,
            pathMatch: 'full'
          },
          {
            path: 'configone',
            component: ConfigOneComponent,
            pathMatch: 'full'
          },
          {
            path: 'configtwo',
            component: ConfigTwoComponent,
            pathMatch: 'full'
          },
          {
            path: 'changes',
            component: ChangesComponent,
            pathMatch: 'full'
          },
          {
            path: 'lessons',
            component: LessonsComponent,
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'providers',
        component: ProvidersComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'integration/constitution',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
