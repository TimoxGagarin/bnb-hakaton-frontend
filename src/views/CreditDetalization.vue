<template>
    <v-card class="pt-4 pl-6 pr-6 pb-2">
        <v-card-actions>
            <v-btn icon="mdi-close" @click="this.$router.push({name: 'debts'})"/>
        </v-card-actions>

        <v-card-title>
            Детализация
        </v-card-title>

        <v-card-text>
        <div class="flex-row">
            <span>Номер карты:</span>
            <span class="value">${{ card.amount }}</span>
        </div>
        <div class="flex-row">
            <span>Сумма:</span>
            <span class="value">{{ card.amount }} BYN</span>
        </div>
        <div class="flex-row">
            <span>Дата займа:</span>
            <span class="value">{{ card.debtDate }}</span>
        </div>
        <div class="flex-row">
            <span>Дата возвращения:</span>
            <span class="value">{{ card.returnDate }}</span>
        </div>

        </v-card-text>

        <v-card-actions class="d-flex flex-column">
            <v-btn class="mt-2" color="primary" @click="this.$router.push({name: 'agreement'})">Скачать копию договора</v-btn>
            <v-btn class="mt-2" color="primary" @click="this.$router.push({name: 'extract'})">Скачать выписку</v-btn>
            <v-btn class="mt-2" color="primary" @click="deny">Оплатить</v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script>
  export default {
    data() {
      return {
        card:   { 
            id: 1,
            number: '1234 5678 9012 3456',
            amount: 100,
            debtDate: "2024.07.20",
            returnDate: '2024.07.20',
        },
      };
    },
  };
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.value {
  margin-left: auto;
}
</style>