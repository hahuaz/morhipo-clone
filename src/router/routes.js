const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Kampanyalar.vue"),
        meta: {
          title: "Kampanyalar - Morhipo"
        }
      },
      {
        path: "bu-sezon",
        component: () => import("pages/BuSezon.vue"),
        meta: {
          title: "Bu sezon - Morhipo"
        }
      }
    ]
  },
  {
    path: "/kayit-ol",
    component: () => import("pages/KayitOl.vue")
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
