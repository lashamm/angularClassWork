import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path: 'home', component: HeaderComponent},
    {path: 'main', component: MainComponent},
];
