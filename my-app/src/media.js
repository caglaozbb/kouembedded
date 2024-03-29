import logo from './images/logo.png'
import ders from './images/ders.jpg'
import backg1 from './images/backg1.png'
import backg2 from './images/backg2.png'
import backg3 from './images/backg2.png'
import backg4 from './images/backg4.png'
import backg5 from './images/backg5.png'
import iconeye from './images/iconeye.png'
import proje1 from './images/proje1.png'
import proje2 from './images/proje2.png'
import proje3 from './images/proje3.png'
import proje4 from './images/proje4.png'
import proje5 from './images/proje5.png'
import proje6 from './images/proje6.png'
import iconai from './images/iconai.png'
import iconpc from './images/iconpc.png'
import person1 from './images/person1.png'

import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: '50px',
          },
        },
      },
    },
  });


export { logo, ders, person1, backg1, backg2, backg3, backg4, backg5, 
    proje1, proje2, proje3, proje4, proje5, proje6, 
    iconeye, iconai, iconpc,  
    PeopleOutlinedIcon, CollectionsBookmarkOutlinedIcon, TipsAndUpdatesOutlinedIcon, theme};
