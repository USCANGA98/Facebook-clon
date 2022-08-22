<template>
  <div class="ma-auto" style="width: 680px">
    <histories />
    <br />
    <br />
    <v-card elevation="1" class="mt-n3 rounded-lg" height="122" width="auto">
      <v-row>
        <v-col cols="1">
          <div>
            <v-avatar class="img imgHover" size="40">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/perfil-facebook.jpg?alt=media&token=0266aa15-b61d-436b-a601-39ece37bd830"
              >
              </v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col>
          <v-text-field
            style="width: 600px; margin-left: 5px"
            solo
            dense
            flat
            placeholder="¿Qué estás pensando, Luis?"
            color="#65676b"
            rounded
            background-color="#f0f2f5"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-divider
        style="max-width: 650px; position: relative; left: 15px; bottom: 15px"
      ></v-divider>
      <div class="mt-n2 ml-5 mr-3">
        <v-btn class="text-capitalize" max-width="216" min-height="40" text>
          <svg
            style="
              position: relative;
              top: 0px;
              max-width: 120px;
              max-height: 20px;
            "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
              fill="#f3425f"
            ></path>
            <path
              d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
              fill="#f3425f"
            ></path>
          </svg>
          <span
            style="
              letter-spacing: 0px;
              font-size: 14px;
              color: #65676b;
              margin-right: 100px;
            "
            >Video en vivo</span
          >
        </v-btn>
        <v-btn class="text-capitalize" max-width="216" min-height="40" text>
          <svg
            style="
              position: relative;
              top: 0px;
              max-width: 120px;
              max-height: 23px;
            "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
              fill="#45bd62"
            ></path>
            <path
              d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
              fill="#45bd62"
            ></path>
          </svg>
          <span
            style="
              letter-spacing: 0px;
              font-size: 14px;
              color: #65676b;
              margin-right: 100px;
            "
            >Foto/video</span
          >
        </v-btn>
        <v-btn class="text-capitalize" max-width="216" min-height="40" text>
          <svg
            style="
              cursor: disabled;
              position: relative;
              top: 0px;
              max-width: 120px;
              max-height: 23px;
            "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
              fill="#f7b928"
            ></path>
            <path
              d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
              fill="#f7b928"
            ></path>
            <path
              d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
              fill="#f7b928"
            ></path>
          </svg>
          <span
            style="
              letter-spacing: 0px;
              font-size: 14px !important;
              color: #65676b;
              margin-right: 100px;
            "
            >Sentimiento/actividad</span
          >
        </v-btn>
      </div>
    </v-card>
    <v-card elevation="1" class="mt-7 rounded-lg" height="63" width="auto">
      <v-row justify="space-around">
        <v-col>
          <v-slide-group
            style="min-width: 750px; position: relative; right: 35px"
            class=""
            multiple
          >
            <v-btn
              style="border: 2px solid #e7f3ff"
              rounded
              class="text-capitalize"
              max-width="122"
              min-height="40"
              text
            >
              <v-img
                style="
                  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png?_nc_eui2=AeHJ5KVaawPVpMreS1BHOFsHBQyVXafYdJoFDJVdp9h0mqjQJ2dK0ERCKvf2bttg1bHL7gNBZ53vcVG0QtbzPy0K');
                  background-position: 0 -219px;
                  background-size: auto;
                  width: 24px;
                  height: 24px;
                  background-repeat: no-repeat;
                  display: inline-block;
                "
              >
              </v-img>
              <span
                class="ml-2"
                style="
                  letter-spacing: 0px;
                  font-size: 14px !important;
                  color: #216fdb;
                "
                >Crear sala</span
              >
            </v-btn>
            <v-slide-item v-for="(item, i) in itemProfiles" :key="i">
              <v-badge
                bordered
                bottom
                color="#00a400"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-tooltip
                  transition="fade-transition"
                  color="#1c1e21"
                  open-delay="300"
                  bottom
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-avatar
                      style="cursor: pointer"
                      v-bind="attrs"
                      v-on="on"
                      class="ml-4"
                      size="40"
                    >
                      <v-img :src="item.img"> </v-img>
                    </v-avatar>
                  </template>
                  <p style="color: #ecf3ff" class="font-weight-medium text-center ma-0">
                    {{ item.name }}
                  </p>
                  <p class="caption text-center ma-0">Saludar</p>
                </v-tooltip>
              </v-badge>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Histories from "../components/Histories.vue";
export default {
  components: { Histories },
  data: () => ({
    itemProfiles: [
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/facebook_2.jpg?alt=media&token=2a16f6ab-fbf8-4cca-846d-4dae218cbd3e",
        name: "Kokoro Mistes",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278397445_1849850121878334_2244041466133908538_n.jpg?alt=media&token=3585a5f5-2442-4609-b8e3-6256be3e7426",
        name: "Odemaris Calix",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278820736_1140165696527341_5324238490588925287_n.jpg?alt=media&token=448670ec-66fc-4a8d-acb2-c7e45b1ae3c3",
        name: "Gisela Stinson",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/245486433_6257197817686621_1623074293267496790_n.jpg?alt=media&token=d5fd0bd9-add1-42b7-afc8-8294efc9bc7b",
        name: "Juan José Urbina",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278119291_5152087508240782_7200905247457025336_n.jpg?alt=media&token=68d95354-25c7-4d79-ad43-06e6ccfdf6cf",
        name: "Adolfo Sánchez",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/277521164_1130807247703579_6181951581901105442_n.jpg?alt=media&token=ac5b9ad2-03e0-43df-8cdb-ea6ef35edb3d",
        name: "Armany Nelux",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/275799285_1150970838988207_1472418445176810750_n.jpg?alt=media&token=99d20f33-a117-4ebf-95c0-e01cb0d675e5",
        name: "Gustavo Castillo Nájera",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/258354472_1065022687676802_8616246552741338692_n.jpg?alt=media&token=eacf850d-ece3-4594-b296-35b605e68ba7",
        name: "David Emmanuel Hernandez Ruiz",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278629980_4957130017727393_2462347052825890467_n.jpg?alt=media&token=135bf500-1cde-4da4-a19a-83b956e8f6dc",
        name: "PJ Fernando",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/275917400_10228171777104951_2664812130297100184_n.jpg?alt=media&token=9efd7d6a-0430-4e96-b504-62e03fa7e81a",
        name: "Arturo Alegría Palacios",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/276231318_5034328829939725_5020955430085665183_n.jpg?alt=media&token=2e9dd7e1-1555-4feb-ac2a-101d84ec6be8",
        name: "Eduardo Ernesto Ramírez",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/277672511_2548955355239020_2038173035834040252_n.jpg?alt=media&token=6cb498c4-042d-4963-ab60-3f208c6df359",
        name: "Osy Cruz",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/perfil-facebook.jpg?alt=media&token=0266aa15-b61d-436b-a601-39ece37bd830",
        name: "Luis Angel Uscanga",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.img {
  position: relative;

  left: 16px;
}
.imgHover:hover {
  filter: brightness(95%);
  cursor: pointer;
}
</style>