import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EditComponent } from "./profile/edit/edit.component";
import { UserComponent } from "./profile/user/user.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from '../shared/guards/auth.activate.service';
import { PreventLoggedInAccessService } from "../shared/guards/prevent-logged-in-access.service";



const routes: Routes = [
  {
    path: 'login',
    canActivate: [PreventLoggedInAccessService],
    component: LoginComponent,
  },

  {
    path: 'register',
    canActivate: [PreventLoggedInAccessService],
    component: RegisterComponent,
  },

  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: UserComponent,
  },

  {
    path: 'profile/edit',
    component: EditComponent,
  },
  
];

// const sameRoutes: Routes = [
//   {
//     path: 'auth',
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent
//       },
//       {
//         path: 'register',
//         component: RegisterComponent
//       },
//       {
//         path: 'logout',
//         component: LogoutComponent
//       },
//       {
//         path: 'profile',
//         component: ProfileComponent
//       }
//     ]
//   }
// ];

export const AuthRoutingModule = RouterModule.forChild(routes);
