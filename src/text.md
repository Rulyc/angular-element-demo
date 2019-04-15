环境搭建说明：
1、全局安装angluar脚手架
    npm install -g @angular/cli
    
2、初始化项目（支持scss）
    ng new 项目名称 --style=scss
    // 进入项目
    cd 项目名称
    运行代码可以是：serve或者 npm install(安装依赖)  npm start（运行）
    
3、安装element
    npm i --save element-angular
    a、在跟模快app/app.module.ts文件中引入
        import { NgModule } from '@angular/core'
        import { BrowserModule } from '@angular/platform-browser'
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
        import { RouterModule } from '@angular/router'
        import { AppComponent } from './app.component'
        import { ElModule } from 'element-angular'
        @NgModule({
           declarations: [
              ExAppComponent,
           ],
           imports: [
              BrowserModule,
              BrowserAnimationsModule,
              ElModule.forRoot(),
           ],
           providers: [],
           bootstrap: [ExAppComponent],
        })
        export class AppModule {
        }
        
    b、在src/style.scss文件下添加一行代码
       @import "~element-angular/theme/index.css"; （引入element样式）
       
4、安装路由
    npm i --save @angular/router
    a、在跟模快app/app.module.ts文件中引入
    import { RouterModule, Routes } from '@angular/router';
    import { Demo01Component } from './demo01/demo01.component';
    const appRoutes: Routes = [
      { path: 'demo', component: Demo01Component },
    @NgModule({
      imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        ),
        其他的模块写入
      ]
    })
    
    b、去模块下进行调用路由
        <nav>
          <a routerLink="/demo" routerLinkActive="active">Crisis Center</a>
        </nav>
        <router-outlet></router-outlet>
    

