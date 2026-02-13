import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FirstPage } from './first-page/first-page';
import { Rejection1Page } from './rejection-1-page/rejection-1-page';
import { Rejection2Page } from './rejection-2-page/rejection-2-page';
import { FinalPage } from './final-page/final-page';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        title: 'For My love, Kesya ❤️'
    },
    {
        path: 'Be_My_Valentine',
        component: FirstPage,
        title: 'Will you be my valentine?'
    },
    {
        path: 'I_am_Sad',
        component: Rejection1Page,
        title: 'Why? 🥲'
    },
    {
        path: 'I_am_very_Sad',
        component: Rejection2Page,
        title: 'okay 😞'
    },
    {
        path: 'Yayy',
        component: FinalPage,
        title: 'Hehehe >.<'
    }
];
