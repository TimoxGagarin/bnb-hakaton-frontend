<template>
    <v-card class="pt-4 pl-6 pr-6 pb-2">
        <v-card-title>
            <div class="flex-row">
                <span>Card</span>
                <span class="value">{{ maskCardNumber(card.number) }}</span>
            </div>
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
            <v-btn color="primary" @click="pay(card.id)">Pay</v-btn>
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
      pay(cardId) {
        alert(`Paying card with id ${cardId}`);
      },
      maskCardNumber(cardNumber) {
        console.log(cardNumber.s)
        return cardNumber.replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2');
      },
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