

export const MENUITEMS = [
  {
    menutitle: 'Dashboard',
  },

  { path: `${import.meta.env.BASE_URL}dashboard/analytics`, type: 'link', active: false, selected: false, dirchange: false, title: 'Analytics' },
  { path: `${import.meta.env.BASE_URL}dashboard/domain`, type: 'link', active: false, selected: false, dirchange: false, badge: '', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Domain' },
  { path: `${import.meta.env.BASE_URL}dashboard/theme`, type: 'link', active: false, selected: false, dirchange: false, badge: '', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Theme' },
  { path: `https://store.riwam.com`, type: 'link', active: false, selected: false, dirchange: false, badge: '', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Landing Page' },

  {
    menutitle: 'Products',
  },
  { path: `${import.meta.env.BASE_URL}dashboard/products/new`, type: 'link', active: false, selected: false, dirchange: false, title: 'Add Product' },
  { path: `${import.meta.env.BASE_URL}dashboard/products/list`, type: 'link', active: false, selected: false, dirchange: false, title: 'Products List' },
  { path: `${import.meta.env.BASE_URL}dashboard/products/orders`, type: 'link', active: false, selected: true, dirchange: false, badge: '', badgetxt: '21', class: 'badge !bg-primary/10 !text-primary !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Orders' },
  { path: `${import.meta.env.BASE_URL}dashboard/products/track`, type: 'link', active: false, selected: true, dirchange: false, badge: '', badgetxt: '3', class: 'badge !bg-success/10 !text-success !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Traking Orders' },
  { path: `${import.meta.env.BASE_URL}dashboard/products/files`, type: 'link', active: false, selected: false, dirchange: false, title: 'File Manager' },
  /* { path: `${import.meta.env.BASE_URL}dashboard/products/inventory`, type: 'link', active: false, selected: false, dirchange: false, title: 'Inventory' }, */

  {
    menutitle: 'APIs',
  },
  { path: `${import.meta.env.BASE_URL}api/notification`, type: 'link', active: false, selected: false, dirchange: false, title: 'Notification' },
  { path: `${import.meta.env.BASE_URL}api/delivery`, type: 'link', active: false, selected: false, dirchange: false, title: 'Delivery' },
  { path: `${import.meta.env.BASE_URL}api/google-sheets`, type: 'link', active: false, selected: false, dirchange: false, title: 'Google Sheets' },


  {
    menutitle: 'Extra',
  },
  { path: `${import.meta.env.BASE_URL}extra/email`, type: 'link', active: false, selected: true, dirchange: false, badge: '', badgetxt: '5', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Email Box' },
  { path: `${import.meta.env.BASE_URL}extra/riwam-app`, type: 'link', active: false, selected: false, dirchange: false, title: 'RIWAM App' },


  /* export const MENUITEMS = [
    {
      menutitle: 'Dashboard',
    },
  
    { path: `${import.meta.env.BASE_URL}dashboard/crm`, type: 'link', active: false, selected: true, dirchange: false, badge: '', badgetxt: '4', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Analytics' },
    { path: `${import.meta.env.BASE_URL}dashboard/domain`, type: 'link', active: false, selected: false, dirchange: false, badge: '', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Domain' },
    { path: `${import.meta.env.BASE_URL}dashboard/theme`, type: 'link', active: false, selected: false, dirchange: false, badge: '', class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Theme' },
    {
      type: 'sub', active: true, selected: false, dirchange: false, title: 'Products', children: [
        { path: `${import.meta.env.BASE_URL}dashboard/products/new`, type: 'link', active: false, selected: false, dirchange: false, title: 'Add Product' },
        { path: `${import.meta.env.BASE_URL}dashboard/products/list`, type: 'link', active: false, selected: false, dirchange: false, title: 'Products List' },
        { path: `${import.meta.env.BASE_URL}dashboard/products/orders`, type: 'link', active: false, selected: false, dirchange: false, title: 'Orders' },
        { path: `${import.meta.env.BASE_URL}dashboard/products/track`, type: 'link', active: false, selected: false, dirchange: false, title: 'Traking Orders' },
        { path: `${import.meta.env.BASE_URL}dashboard/products/files`, type: 'link', active: false, selected: false, dirchange: false, title: 'File Manager' },
        { path: `${import.meta.env.BASE_URL}dashboard/products/inventory`, type: 'link', active: false, selected: false, dirchange: false, title: 'Inventory' },
      ]
    },
  
    {
      type: 'sub', active: true, selected: false, dirchange: false, title: 'API', children: [
        { path: `${import.meta.env.BASE_URL}api/whatsapp`, type: 'link', active: false, selected: false, dirchange: false, title: 'WhatsApp' },
        { path: `${import.meta.env.BASE_URL}api/telegram`, type: 'link', active: false, selected: false, dirchange: false, title: 'Telegram' },
        { path: `${import.meta.env.BASE_URL}api/googledocs`, type: 'link', active: false, selected: false, dirchange: false, title: 'Google Docs' },
      ]
    }, */
  /*   {
      menutitle: "APPS",
    }, */
  /* {
    icon: (<i className="side-menu__icon bx bx-home"></i>),
    type: 'sub',
    Name: '',
    active: false,
    selected: false,
    dirchange: false,
    title: 'Gestion de Stock',
    badge: '',
    badgetxt: '1',
    class: 'badge !bg-secondary/10 !text-secondary !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',
    children: [
      { path: `${import.meta.env.BASE_URL}sm/database`, type: 'link', active: false, selected: false, dirchange: false, badge: '', badgetxt: '1', class: 'badge !bg-secondary/10 !text-secondary !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2', title: 'Bases de données' },
      { path: `${import.meta.env.BASE_URL}sm/pos`, type: 'link', active: false, selected: false, dirchange: false, title: 'Système Point de Vente' },
      { path: `${import.meta.env.BASE_URL}sm/servers`, type: 'link', active: false, selected: false, dirchange: false, title: 'Serveurs' },
    ]
  },
  {
    icon: (<i className="side-menu__icon bx bx-home"></i>),
    type: 'sub',
    Name: '',
    active: false,
    selected: false,
    dirchange: false,
    title: 'Mobile',
    badge: '',
    class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',
    children: [
      { path: `${import.meta.env.BASE_URL}mobile`, type: 'link', active: false, selected: false, dirchange: false, title: 'Application' },
    ]
  }, */
  /* {
    title: "API",
    icon: (
      <i className="bx bx-layer side-menu__icon"></i>
    ),
    type: "sub",
    selected: false,
    dirchange: false,
    active: false,
    children: [
      {
        path: import.meta.env.BASE_URL + 'apis/sheets',
        title: "Google Sheets",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
      },
      {
        title: "Réseaux Sociaux",
        type: "sub",
        selected: false,
        dirchange: false,
        active: false,
        children: [
          {
            path: import.meta.env.BASE_URL + 'apis/social/telegram',
            title: "Telegram",
            type: "link",
            active: false,
            selected: false,
            dirchange: false,
          },
          {
            path: import.meta.env.BASE_URL + 'apis/social/whatsapp',
            title: "Whatsapp",
            type: "link",
            active: false,
            selected: false,
            dirchange: false,
          },

        ],
      },
      {
        path: import.meta.env.BASE_URL + 'apis/delivery',
        title: "Livraison",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
      },
    ],
  }, */

];
