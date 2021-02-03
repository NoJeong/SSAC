import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Users/Login.vue";
import Profile from "../views/Users/Profile.vue";
import Signup from "../views/Users/Signup.vue";
import Sports from "../views/Tabs/Sports.vue";
import Feed from "../views/Tabs/Feed.vue";
import Search from "../views/Tabs/Search.vue";
import Chat from "../views/Tabs/Chat.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    children: [

    ]
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    children: [

    ]
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports,
    children: [
      {
        path: "",
        name: "SportsSchedule",
        component: () => import("../components/Sports/Schedule.vue")
      },
      {
        path: "ranking",
        name: "SportRanking",
        component: () => import("@/components/Sports/Ranking.vue")
      },
      {
        path: "news",
        name: "SportNews",
        component: () => import("@/components/Sports/News.vue")
      },
    ]
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    children: [

    ]
  },
  {
    path: "/search",
    name: "Seacrh",
    component: Search,
    children: [
      {
        path: "",
        name: "realSearch",
        component: () => import("../components/Search/realSearch.vue")
      },
      {
        path: "friendsteam",
        name: "FriendsTeam",
        component: () => import("@/components/Search/FriendsTeam.vue")
      },
      {
        path: "recommend",
        name: "Recommend",
        component: () => import("@/components/Search/Recommend.vue")
      },
    ]
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    children: [

    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: "",
        name: "Article",
        component: () => import("@/views/Users/Article.vue")
      },
      {
        path: "myteam",
        name: "MyTeam",
        component: () => import("@/views/Users/MyTeam.vue"),
        children: [

          {
            path: "mymyteam",
            name: "MyMyTeam",
            component: () => import("@/views/Users/MyMyTeam.vue")            
          },
          {
            path: "newteam",
            name: "NewTeam",
            component: () => import("@/views/Users/NewTeam.vue"),
            children: [

              {
                path: "newteamfootball",
                name: "NewTeamFootball",
                component: () => import("@/views/Users/NewTeamFootball.vue")            
              },
              {
                path: "newteambaseball",
                name: "NewTeamBaseball",
                component: () => import("@/views/Users/NewTeamBaseball.vue")            
              },
              {
                path: "newteamlol",
                name: "NewTeamLol",
                component: () => import("@/views/Users/NewTeamLol.vue")            
              },
            ]
          }
        ]
      },
      {
        path: "alarm",
        name: "Alarm",
        component: () => import("@/views/Users/Alarm.vue")
      },
    ]
  },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
