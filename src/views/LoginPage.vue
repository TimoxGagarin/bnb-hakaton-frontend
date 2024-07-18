<template>
    <h1 class="mt-6">Логин</h1>
    <form @submit.prevent="submit" class="mt-6">
        <v-card-text>
        <v-text-field
            v-model="phone.value.value"
            label="Номер телефона"
            placeholder="+375333240396"
        ></v-text-field>
        <v-text-field
            v-model="password.value.value"
            label="Пароль"
        ></v-text-field>
    </v-card-text>

        <v-card-text>Нет аккаунта? <RouterLink to="/register">Зарегистрируйтесь</RouterLink></v-card-text>
  
        <v-btn
            class="mt-6"
            type="submit"
            color="primary"
        >
            Продолжить
        </v-btn>

    </form>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { getCurrentInstance } from 'vue';

export default{
    setup() {
        const { proxy } = getCurrentInstance();
        const { handleSubmit } = useForm();

        const phone = useField('phone');
        const password = useField('password')

        const submit = handleSubmit(values => {
            proxy.login(values)
        });

        return {
            phone,
            password,
            submit
        };
    },
    methods: {
        login(values){
            console.log(values)
            // TODO: login user
            this.$router.push({name: 'profile'})
        }
    }
}
</script>