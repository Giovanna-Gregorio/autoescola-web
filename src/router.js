import Vue from 'vue'
import VueRouter from 'vue-router'

import CadastroAluno from './components/Aluno/CadastroAluno';
import ListaAluno from './components/Aluno/ListaAluno';
import CadastroInstrutor from './components/Instrutor/CadastroInstrutor';
import CadastroFrota from './components/Frota/CadastroFrota';
import AlterarSenha from './components/Senha/AlterarSenha';
import MyCalendario from './components/Agenda/MyCalendario';
import MyHome from './components/MyHome';
import MyLogin from './components/MyLogin';
const routes = [
    {
        path: '/MyLogin',
        name: 'Myogin',
        component: MyLogin
    },
   {
        path: '/alunos/novo',
        name: 'CadastroAluno',
        component: CadastroAluno
    },
    {
        path: 'alunos',
        name: 'ListaAluno',
        component: ListaAluno
    },
    {
        path: '/instrutores/novo',
        name: 'CadastroInstrutor',
        component: CadastroInstrutor
    },

    {
        path: '/frota/novo',
        name: 'CadastroFrota',
        component: CadastroFrota
    },
    {
        path: '/AlterarSenha',
        name: 'AlterarSenha',
        component: AlterarSenha
    },
    {
        path: '/MyCalendario',
        name: 'MyCalendario',
        component: MyCalendario
    },
    {
        path: '/MyHome',
        name: 'MyHome',
        component: MyHome
    }

];

const router = new VueRouter
({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

export default router;