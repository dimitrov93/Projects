import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EditComponent } from "./profile/edit/edit.component";
import { UserComponent } from "./profile/user/user.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'profile',
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
