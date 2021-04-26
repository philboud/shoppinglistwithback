import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import ListeCreat from '@/components/ListeCreat'
import ManageList from '@/components/ManageList'
import Epicerie from '@/components/Epiceries'
import ProdMenag from '@/components/ProdMenag'
import FruitLeg from '@/components/LegumesFruits'
import Viandes from '@/components/Viandes'
import Poissonnerie from '@/components/Poissonnerie'
import Liste from '@/components/Liste'
import ListeFast from '@/components/ListeFast'
import Help from '@/components/Help'
import FreeList from '@/components/FreeList'
import HygieneCorps from '@/components/HygieneCorps'
import Linge from '@/components/Linge'
import Puericulture from '@/components/Puericulture'
import Pets from '@/components/Pets'
import EssentielList from '@/components/ListeEssentiels'
import ModeCourses from '@/components/ModeCourses'
import ModeFastCourse from '@/components/ModeCoursesRapide'
import Parametrages from '@/components/Parametrages'
import ParamAppear from '@/components/ParamAppearence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/listecreat',
      name: 'ListeCreat',
      component: ListeCreat
    },
    {
      path: '/gestionliste',
      name: 'ManageList',
      component: ManageList
    },
    {
      path: '/modecourses',
      name: 'ModeCourses',
      component: ModeCourses
    },
    {
      path: '/modecoursesrapide',
      name: 'ModeFastCourse',
      component: ModeFastCourse
    },
    {
      path: '/epicerie',
      name: 'Epicerie',
      component: Epicerie
    },
    {
      path: '/prodmenag',
      name: 'ProdMenag',
      component: ProdMenag
    },
    {
      path: '/fruitleg',
      name: 'FruitLeg',
      component: FruitLeg
    },
    {
      path: '/viandes',
      name: 'Viandes',
      component: Viandes
    },
    {
      path: '/liste',
      name: 'Liste',
      component: Liste
    },
    {
      path: '/fastlist',
      name: 'ListeFast',
      component: ListeFast
    },
    {
      path: '/poissonnerie',
      name: 'Poissonnerie',
      component: Poissonnerie
    },
    {
      path: '/hygienecorps',
      name: 'HygieneCorps',
      component: HygieneCorps
    },
    {
      path: '/linge',
      name: 'Linge',
      component: Linge
    },
    {
      path: '/puericulture',
      name: 'Puericulture',
      component: Puericulture
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/freelist',
      name: 'FreeList',
      component: FreeList
    },
    {
      path: '/essentiel',
      name: 'EssentielList',
      component: EssentielList
    },
    {
      path: '/parametrages',
      name: 'Parametrages',
      component: Parametrages
    },
    {
      path: '/paramappear',
      name: 'ParamAppear',
      component: ParamAppear
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
