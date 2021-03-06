import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router} from '@angular/router-deprecated';
import {DashboardComponent} from './home/dashboard.component';

declare var componentHandler:any;

@Component({
  selector:'my-app',
  templateUrl:'app/templates/app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives:[DashboardComponent,ROUTER_DIRECTIVES],
  providers:[]
})
@RouteConfig([
  {path:'/dashboard/...',name:'Dashboard',component:DashboardComponent}
])
export class AppComponent implements OnInit{

  constructor(private _router:Router){}

  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }

  appTitle="Github Bucket";

  ButtonText:string;
  isSessionSet:boolean;
  isDashboard:boolean;

  ngOnInit(){
    if(sessionStorage.getItem('login')=='true'){
      this.isSessionSet=true;
      this.appTitle="Hello, "+sessionStorage.getItem('username')+""
      this.ButtonText="Go To My Dashboard";
    }else{
      this.isSessionSet=false;
      this.ButtonText="Connect With GitHub";
    }
  }

  //triggerd after user clicks button
  goToDashboard(){
      this.isDashboard=true;
      this._router.navigate(['Dashboard']);
  }
}
