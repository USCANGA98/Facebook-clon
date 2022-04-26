<template>
  <div class="mt-3 mx-2">
    <v-row>
      <v-card
        elevation="1"
        class="ma-1 card mt-6 rounded-lg"
        height="189"
        width="106"
      >
        <v-img src="../assets/perfil-facebook.jpg" class="imgStyle"> </v-img>
        <div class="divCircle pa-1">
          <v-btn elevation="0" class="btnHistory" fab>
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </div>
        <p class="caption txtCaption">Crear historia</p>
      </v-card>

      <v-card
        v-for="(item, i) in itemsHistories"
        :key="i"
        elevation="1"
        class="ma-1 card mt-6 rounded-lg"
        height="189"
        width="106"
      >
        <v-img :src="item.foto" class="imgStyle2"> </v-img>
        <div class="divCircle2 pa-1">
          <v-btn elevation="0" class="btnHistory2" fab>
            <v-avatar :color="item.color" :size="item.sizeAvatar">
              <v-img
                :max-height="item.maxHeightImg"
                :max-width="item.maxWidthImg"
                :src="item.fotoProfile"
              >
              </v-img>
            </v-avatar>
          </v-btn>
        </div>
        <p class="caption txtCaption2">{{ item.nameProfile }}</p>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      itemsHistories: [
        {
          foto: "https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          nameProfile: "Tu historia",
          fotoProfile:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/perfil-facebook.jpg?alt=media&token=0266aa15-b61d-436b-a601-39ece37bd830",
          sizeAvatar: 40,
          maxWidthImg: 32,
          maxHeightImg: 32,
          color: "#1876f2",
        },
        {
          foto: "https://images.unsplash.com/photo-1623418601068-8638211937fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          nameProfile: "Odemaris Calix",
          fotoProfile:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278397445_1849850121878334_2244041466133908538_n.jpg?alt=media&token=3585a5f5-2442-4609-b8e3-6256be3e7426",
          sizeAvatar: 40,
          maxWidthImg: 32,
          maxHeightImg: 32,
          color: "#1876f2",
        },
        {
          foto: "https://images.unsplash.com/photo-1534391672642-71200b2b8f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          nameProfile: "Gisela Stinson",
          fotoProfile:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278820736_1140165696527341_5324238490588925287_n.jpg?alt=media&token=448670ec-66fc-4a8d-acb2-c7e45b1ae3c3",
          sizeAvatar: 40,
          maxWidthImg: 32,
          maxHeightImg: 32,
          color: "#1876f2",
        },
        {
          foto: "https://images.unsplash.com/photo-1641146436668-ec36dc51fd71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          nameProfile: "Juan José Ur...",
          fotoProfile:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/245486433_6257197817686621_1623074293267496790_n.jpg?alt=media&token=d5fd0bd9-add1-42b7-afc8-8294efc9bc7b",
          sizeAvatar: 40,
          maxWidthImg: 32,
          maxHeightImg: 32,
          color: "#1876f2",
        },
        {
          foto: "https://images.unsplash.com/photo-1494332850333-b45d576992e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          nameProfile: "Adolfo Sánchez",
          fotoProfile:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278119291_5152087508240782_7200905247457025336_n.jpg?alt=media&token=68d95354-25c7-4d79-ad43-06e6ccfdf6cf",
          sizeAvatar: 40,
          maxWidthImg: 32,
          maxHeightImg: 32,
          color: "#1876f2",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.imgStyle {
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  height: 145px;
  filter: brightness(85%);
}
.imgStyle2 {
  height: 190px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
}
.card:hover {
  filter: brightness(90%);
  cursor: pointer;
}
.txtCaption {
  font-weight: 500;
  position: relative;
  top: 20px;
  text-align: center;
  font-family: inherit;
  letter-spacing: 0px !important;
}
.txtCaption2 {
  font-weight: 500;
  position: relative;
  top: -66px;
  color: #fff;
  text-align: left;
  padding-left: 12px;
  font-family: inherit;
  letter-spacing: 0px !important;
}
.btnHistory {
  height: 33px;
  width: 33px;
  background-color: #1876f2 !important;
  position: relative;
  right: 0px;
  left: 1px;
  bottom: 0px;
  top: 0px;
}
.divCircle {
  background-color: white;
  height: 42px;
  width: 42px;
  position: absolute;
  top: 123px;
  left: 33px;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
}

.btnHistory2 {
  height: 33px;
  width: 33px;

  position: relative;
  right: 0px;
  left: 10px;
  bottom: 0px;
  top: -178px;
}
</style>