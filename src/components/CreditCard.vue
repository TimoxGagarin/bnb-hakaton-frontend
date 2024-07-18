<template>
<v-card class="pt-4 pl-6 pr-6 pb-2" color="lime-darken-4">
    <v-card-title>
      Пользователь желает взять в долг
    </v-card-title>

    <v-card-text>
      <div class="flex-row">
        <span>Return Date:</span>
        <span class="value">{{ card.returnDate }}</span>
      </div>
      <div class="flex-row">
        <span>Amount:</span>
        <span class="value">${{ card.amount }}</span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green" @click="accept">Accept</v-btn>
      <v-btn color="red" @click="deny">Deny</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        accept(){

        },
        deny(){

        }
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
  