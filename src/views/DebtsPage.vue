<template>
  <h1 class="mt-8 mb-4">Долговые обязательства</h1>
  <v-container>
    <v-row>
    <v-col>
        <template v-for="(item, index) in paginatedCards" :key="index">
          <CreditCard
          :card="item"
          v-if="item.type === 'credit'"
          />
          <DebtCard
          :card="item"
          v-else-if="item.type === 'debt'"
          />
      </template>
    </v-col>
  </v-row>

    <v-pagination
      v-model="page"
      :length="totalPages"
      class="mt-4"
    ></v-pagination>
  </v-container>
  <v-btn class="mt-16" color="primary" @click="this.$router.push({name: 'credit'})">Взять долг</v-btn>
</template>

<script>
import CreditCard from '../components/CreditCard.vue';
import DebtCard from '../components/DebtCard.vue';
export default {
  components: {
    DebtCard,
    CreditCard
  },
  data() {
    return {
      credit_cards: [
        { id: 1, number: '1234 5678 9012 3456', returnDate: '2024-07-20', amount: 100, type: 'credit' },
        ],
      debts_cards: [
        { id: 1, number: '1234 5678 9012 3456', returnDate: '2024-07-20', amount: 100, type: 'debt' },
        { id: 2, number: '2345 6789 0123 4567', returnDate: '2024-08-15', amount: 200, type: 'debt' },
        { id: 3, number: '3456 7890 1234 5678', returnDate: '2024-09-10', amount: 300, type: 'debt' },
        ],
      page: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    total_cards(){
      return this.credit_cards.concat(this.debts_cards)
    },
    paginatedCards() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = this.page * this.itemsPerPage;
      return this.total_cards.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.total_cards.length / this.itemsPerPage);
    },
  },
};
</script>