<template>
  <v-card>
    <v-card-title class="text-h4">
      {{ fio }}
    </v-card-title>
    <v-icon size=200 icon="mdi-account-circle"></v-icon>
    <v-card-text class="text-h6">
      Номер карты: {{ user.card_number }}
    </v-card-text>
    <v-card-text class="text-h6">
      Баланс карты: {{ user.money }}
    </v-card-text>
    <div class="d-flex justify-center flex-column mb-6">
      <v-card-actions class="d-flex flex-column">
        <v-btn color=primary max-width="200" class="text-h6">
          Пополнить баланс
        </v-btn>
        <v-btn color=primary max-width="200" class="text-h6" @click="this.$router.push({name: 'debts'})">
          Список займов
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default{
  data(){
    return {
      user: {
        id: 1,
        surname: "Иванов",
        name: "Иван",
        second_name: "Иванович",
        card_number: "1234 1234 1234 1234",
        money: 10000,

      }
    }
  },
  computed: {
    fio() {
      return this.user.surname + ' ' + this.user.name + ' ' + this.user.second_name
    }
  }
}
</script>