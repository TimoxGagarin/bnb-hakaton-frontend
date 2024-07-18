<template>
    <v-card>
    <v-card-actions>
        <v-btn icon="mdi-close" @click="this.$router.push({name: 'debts'})"/>
    </v-card-actions>
    <h1 class="mt-6 mb-6">Взять долг</h1>
    <form @submit.prevent="submit">
        <v-col>
            <v-text-field
                v-model="phone.value.value"
                :error-messages="phone.errorMessage.value"
                label="Номер телефона"
                placeholder="+375111111111"
            ></v-text-field>

            <v-text-field
                v-model="money.value.value"
                :error-messages="money.errorMessage.value"
                label="Сумма (BYN)"
                placeholder="100"
            ></v-text-field>

            <v-dialog>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-text-field
                    v-bind="activatorProps"
                    label="Дата возврата"
                    v-model="date.value.value"
                    :error-messages="date.errorMessage.value"
                    ></v-text-field>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-row justify="center">
                            <v-date-picker v-model="sel_date" class="mt-10"></v-date-picker>
                        </v-row>
                        <v-card-actions>
                            <v-btn
                                text="Выбрать"
                                @click="select_date(isActive)"
                                color="green"
                            ></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
            <v-checkbox v-model="agreement.value.value" :error-messages="agreement.errorMessage.value" :label="label">
                <template v-slot:label>
                    <p>Настоящим условием подтверждаю, что я ознакомлен с <RouterLink to="/agreement">данным документом</RouterLink></p>
                </template>
            </v-checkbox>
        </v-col>
        <v-btn
            class="mt-6 mb-6"
            type="submit"
            color="primary"
        >
            Продолжить
        </v-btn>
    </form>
</v-card>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { getCurrentInstance } from 'vue';
export default {
    setup() {
        const { proxy } = getCurrentInstance()
        const { handleSubmit } = useForm({
        validationSchema: {
            phone(value){
                if (/^\+\d{1,3}\d{9}$/.test(value)) return true

                return 'Неправильный формат телефона'
            },
            money(value){
                const amount = Number(value)
                if (!isNaN(amount) && amount >= 5 && amount <= 3000) return true;

                return "Долг может быть от 5 до 3000 BYN";
            },
            date(value){
                const date = proxy.parseDate(value)
                console.log(date > new Date())
                console.log(!date.toLocaleString().localeCompare("Invalid Date"))
                if (date.toLocaleString().localeCompare("Invalid Date") != 0 && date > new Date()) return true;

                return "Дата возврата долга должна быть позже сегодняшнего дня.";
            },
            agreement(value){
                if(value == true) return true;

                return "Прочитайте договор и поставьте галочку."
            }
        }
        })

        const phone = useField('phone');
        const money = useField('money');
        const date = useField('date');
        const agreement = useField('agreement');

        const submit = handleSubmit(values => {
            proxy.get_credit(values)
        });

        return {
            phone,
            money,
            date,
            agreement,
            submit,
        };
    },
    data(){
        return {
            sel_date: new Date()
        }
    },
    methods: {
        select_date(isActive){
            isActive.value = false
            this.date.value.value = this.formatDate(this.sel_date)
        },
        formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();

            return `${day}.${month}.${year}`;
        },
        parseDate(dateString) {
            if(!dateString)
                return "Invalid Date"
            const parts = dateString.split('.');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        },
        get_credit(){
            // TODO: get credit
            this.$router.push("/credit/detalization")
        }
    },
    computed: {
        transformed_selected_date(){
            return this.formatDate(this.selected_date)
        }
    }
};
</script>