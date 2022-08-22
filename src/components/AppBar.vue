<template>
  <div>
    <v-app-bar
      height="55"
      style="box-shadow: 2px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1) !important"
      elevation="1"
      app
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          class="mr-3"
          gradient="to top left, rgba(100,115,201,.0), rgba(255,255,255,.2)"
          width="55"
          style="position: relative; right: 9px"
          src="../assets/face.png"
          contain
        />
      </div>

      <v-text-field
        solo
        dense
        class="ml-n5"
        style="max-width: 240px"
        flat
        placeholder="Buscar en facebook"
        prepend-inner-icon="mdi-magnify"
        color="#65676b"
        hide-details
        rounded
        background-color="#f0f2f5"
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <v-list flat style="padding: 0px" class="rounded-lg" dense>
        <v-list-item-group class="mr-6">
          <v-list-item
            exact-path
            :ripple="false"
            v-for="(item, i) in items"
            :key="i"
            v-slot="{ active }"
            active-class="border"
            style="
              width: 130px;
              height: 50px;
              text-align: center;
              line-height: 40px;
              display: inline-block;
            "
            :to="{ name: item.name }"
            class="pa-1 ma-1 hover rounded-lg"
          >
            <v-icon
              size="29"
              :color="active ? '#2374e1' : ''"
              v-text="item.icon"
            ></v-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-spacer></v-spacer>
      <div>
        <v-list class="mx-n1">
          <v-list-item style="width: 75px" class="pa-0 rounded-xl" dense link>
            <v-avatar class="mr-2" size="28">
              <v-img src="../assets/perfil-facebook.jpg" />
            </v-avatar>

            <v-list-item-title style="font-size: 13px" class="font-weight-bold">
              Luis
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="no"
        min-width="280"
        offset-y
        left
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn
            style="background-color: #e4e6eb"
            class="ma-2"
            fab
            elevation="0"
            small
            v-on="{ ...menu }"
          >
            <v-icon size="30" color="black">mdi-dots-grid</v-icon>
          </v-btn>
        </template>

        <v-card class="pb-2" flat>
          <div class="caption pl-5 pt-4 pb-0">Cuentas</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items2" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
            </v-list-item>
          </v-list>
          <div class="caption pl-5 pt-4 pb-0">Más opciones</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items3" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
              <v-spacer />
              <v-icon color="black">{{ item.icon }}</v-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="no"
        min-width="280"
        offset-y
        left
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn
            style="background-color: #e4e6eb"
            fab
            elevation="0"
            small
            v-on="{ ...menu }"
          >
            <v-icon size="20" color="black">mdi-facebook-messenger</v-icon>
          </v-btn>
        </template>

        <v-card class="pb-2" flat>
          <div class="caption pl-5 pt-4 pb-0">Cuentas</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items2" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
            </v-list-item>
          </v-list>
          <div class="caption pl-5 pt-4 pb-0">Más opciones</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items3" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
              <v-spacer />
              <v-icon color="black">{{ item.icon }}</v-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="no"
        min-width="280"
        offset-y
        left
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn
            style="background-color: #e4e6eb"
            class="ma-2"
            fab
            elevation="0"
            small
            v-on="{ ...menu }"
          >
            <v-icon size="20" color="black">mdi-bell</v-icon>
          </v-btn>
        </template>

        <v-card class="pb-2" flat>
          <div class="caption pl-5 pt-4 pb-0">Cuentas</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items2" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
            </v-list-item>
          </v-list>
          <div class="caption pl-5 pt-4 pb-0">Más opciones</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items3" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
              <v-spacer />
              <v-icon color="black">{{ item.icon }}</v-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu
        rounded="lg"
        :close-on-content-click="false"
        transition="no"
        max-width="360"
        offset-y
        position-y="10"
        left
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn
            style="background-color: #e4e6eb"
            fab
            elevation="0"
            small
            v-on="{ ...menu }"
          >
            <v-icon size="30" color="black">mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list dense nav class="mx-n1">
          <v-list-item class="pa-2" link>
            <v-avatar class="mt-1 ml-1" size="60">
              <v-img src="../assets/perfil-facebook.jpg" />
            </v-avatar>
            <v-list-item-content class="mx-3">
              <v-list-item-title
                style="font-size: 15px; letter-spacing: 0.5px"
                class="font-weight-medium"
              >
                Luis Angel Uscanga
              </v-list-item-title>
              <v-list-item-subtitle
                style="font-size: 13px !important; letter-spacing: 0.5px"
                class="caption"
              >
                Ver tu perfil
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider class="mt-n1 ml-4 mr-4"></v-divider>
        <v-list dense nav class="mx-n1">
          <v-list-item class="pa-2" link>
            <v-avatar color="#e4e6eb" class="ml-1" size="35">
              <v-icon color="black">mdi-message-alert</v-icon>
            </v-avatar>
            <v-list-item-content class="mx-3">
              <v-list-item-title
                style="font-size: 13px; letter-spacing: 0.5px"
                class="font-weight-bold ma-0"
              >
                Enviar comentarios
              </v-list-item-title>
              <v-list-item-subtitle
                style="font-size: 12px !important; letter-spacing: 0.5px"
                class="caption font-weight-normal ma-0"
              >
                Ayúdanos a mejorar Facebook
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <NavigationDrawer />
  </div>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue";
export default {
  components: {
    NavigationDrawer,
  },
  data: () => ({
    mostrarNavigationDrawer: false,
    items: [
      {
        icon: "mdi-home",
        name: "Home",
        path: "/",
      },
      {
        icon: "mdi-television-play",
        name: "Play",
        path: "/play",
      },
      {
        icon: "mdi-storefront-outline",
        name: "Store",
        path: "/store",
      },
      {
        icon: "mdi-account-group",
        name: "Groups",
        path: "/groups",
      },
      {
        icon: "mdi-facebook-gaming",
        name: "Stream",
        path: "/stream",
      },
    ],
    items2: [
      {
        title: "Agregar cuenta",
      },
      {
        title: "Convertir en cuenta para empresa",
      },
    ],
    items3: [
      {
        title: "Configuración",
      },
      {
        title: "Mejora tu feed de inicio",
      },
      {
        title: "Instalar la aplicación de Windows",
      },
      {
        title: "Obtener ayuda",
        icon: "mdi-arrow-top-right",
      },
      {
        title: "Ver condiciones y privacidad",
        icon: "mdi-arrow-top-right",
      },
      {
        title: "Salir",
      },
    ],
    //
  }),
};
</script>

<style lang="scss" scoped>
.border {
  border-bottom: 3px solid #2374e1;
  border-bottom-left-radius: 1px !important;
  border-bottom-right-radius: 1px !important;
  background-color: transparent;
}
.hover:hover {
  background: rgb(236, 234, 234);
}
</style>