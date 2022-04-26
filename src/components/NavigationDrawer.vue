<template>
  <div>
    <v-navigation-drawer
      floating
      style="padding-top: 18px; background-color: #f0f2f5"
      absolute
      permanent
      clipped
      width="352"
    >
      <v-list-item>
        <v-list-item-avatar size="35">
          <v-img src="../assets/perfil-facebook.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      floating
      style="padding-top: 20px; background-color: #f0f2f5;"
      right
      absolute
      permanent
      clipped
      width="352"
    >
      <div
        class="font-weight-medium ml-2 mt-0"
        style="padding: 0px; color: #65676b"
      >
        Publicidad
      </div>
      <v-list dense nav class="mx-n2">
        <v-list-item v-for="(item, i) in itemsAdd" :key="i" link>
          <v-img
            contain
            class="rounded-lg mb-2 ml-0 mr-2 mt-2"
            :height="item.height"
            :max-width="item.width"
            :src="item.img"
          />

          <v-list-item-content class="mx-1">
            <span
              class="font-weight-medium"
              style="
                line-height: 120%;
                font-size: 14px;
                width: 130px !important;
                word-wrap: break-word !important;
              "
            >
              {{ item.text }}
            </span>

            <v-list-item-subtitle class="caption">
              {{ item.subtext }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider style="margin-left: 10px"></v-divider>
      <p class="font-weight-medium ml-2 mt-2" style="color: #65676b">
        Contactos
      </p>

      <v-list nav class="mx-n2 mt-n3">
        <v-list-item
          class="friends mt-n2"
          v-for="(item, i) in itemsFriends"
          :key="i"
          link
        >
          <v-badge
            bordered
            bottom
            color="#00a400"
            dot
            offset-x="10"
            offset-y="10"
          >
            <v-avatar size="35">
              <v-img contain class="" :src="item.img" />
            </v-avatar>
          </v-badge>

          <v-list-item-content class="mx-3">
            <span
              class="font-weight-medium"
              style="
                line-height: 120%;
                font-size: 14px;
                width: 130px !important;
                word-wrap: break-word !important;
              "
            >
              {{ item.name }}
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      itemsAdd: [
        {
          text: "Compra, vende y recibe Bitcoins y otras criptomonedas fácilmente",
          subtext: "bitso.com",
          img: "https://scontent.fntr1-1.fna.fbcdn.net/v/t45.1600-4/264335224_23848865255240622_3335494175165959465_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=109&ccb=1-5&_nc_sid=67cdda&_nc_eui2=AeGG3OmYsPyApcr_wpampq9MlFGd99rxnfuUUZ332vGd-574DhHHGYG6ZfHkBTE9OB7iXZ2V-DimuID0SijQ4_5S&_nc_ohc=6xwIswV-x10AX8tJRfb&_nc_ht=scontent.fntr1-1.fna&oh=00_AT_6_M-syIoIiFeNz5Ppa4U0C_0aSkSl8yrXauBSkLzx3Q&oe=626B23A5",
          height: 69,
          width: 131,
        },
        {
          text: "Ddtech",
          subtext: "ddtech.mx",
          img: "https://scontent.fntr1-1.fna.fbcdn.net/v/t45.1600-4/278457997_6287701558321_4721978922952536412_n.jpg?stp=cp0_dst-jpg_p960x960_q75_spS444&_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_eui2=AeEF8zVZtKs9CHqvN3vHe9RG-OeYncw7LHP455idzDssc75zkbh0t-y4Hibpv32rKGomAoMBHAWVDRhxlUi6615l&_nc_ohc=E6wFv7BdGUEAX9d_xgI&_nc_ht=scontent.fntr1-1.fna&oh=00_AT_lSCIRpLtpxgUA8i5Bj-RZIjQqjK2adciqFAD90z_P6w&oe=626B49AC",
          height: 131,
          width: 131,
        },
      ],
      itemsFriends: [
        {
          name: "Armany Nelux",

          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/277521164_1130807247703579_6181951581901105442_n.jpg?alt=media&token=ac5b9ad2-03e0-43df-8cdb-ea6ef35edb3d",
        },
        {
          name: "Adolfo Sánchez",

          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278119291_5152087508240782_7200905247457025336_n.jpg?alt=media&token=68d95354-25c7-4d79-ad43-06e6ccfdf6cf",
        },
        {
          name: "Gustavo Castillo Nájera",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/275799285_1150970838988207_1472418445176810750_n.jpg?alt=media&token=99d20f33-a117-4ebf-95c0-e01cb0d675e5",
        },

        {
          name: "David Emmanuel Hernandez Ruiz",

          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/258354472_1065022687676802_8616246552741338692_n.jpg?alt=media&token=eacf850d-ece3-4594-b296-35b605e68ba7",
        },
        {
          name: "Gisela Stinson",

          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278820736_1140165696527341_5324238490588925287_n.jpg?alt=media&token=448670ec-66fc-4a8d-acb2-c7e45b1ae3c3",
        },
        {
          name: "Alan David Gonzalez Hernandez",

          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/275112838_3134425460145083_9116925609774067058_n.jpg?alt=media&token=827d6b84-8c39-4260-acd4-f1a696315897",
        },
        {
          name: "PJ Fernando",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/278629980_4957130017727393_2462347052825890467_n.jpg?alt=media&token=135bf500-1cde-4da4-a19a-83b956e8f6dc",
        },
        {
          name: "Kevin Fernaández",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/255567711_4646416518818644_260596169781029629_n.jpg?alt=media&token=a5c39214-9aa4-4a4e-a40b-d03385626947",
        },
        {
          name: "Criz Names",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/241479232_4612214252143605_8247370927670942836_n.jpg?alt=media&token=215a907c-55fe-4bfb-a98a-8a7664f4c288",
        },
        {
          name: "Arturo Alegría Palacios",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/275917400_10228171777104951_2664812130297100184_n.jpg?alt=media&token=9efd7d6a-0430-4e96-b504-62e03fa7e81a",
        },
        {
          name: "Eduardo Ernesto Ramírez",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/276231318_5034328829939725_5020955430085665183_n.jpg?alt=media&token=2e9dd7e1-1555-4feb-ac2a-101d84ec6be8",
        },
        {
          name: "Osy Cruz",
          img: "https://firebasestorage.googleapis.com/v0/b/facebook-clon-b088c.appspot.com/o/277672511_2548955355239020_2038173035834040252_n.jpg?alt=media&token=6cb498c4-042d-4963-ab60-3f208c6df359",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.friends:hover {
  background: rgb(234, 234, 234);
}
</style>