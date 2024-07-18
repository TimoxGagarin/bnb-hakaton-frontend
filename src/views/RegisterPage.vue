<template>
    <h1 class="mt-6">
        Регистрация
    </h1>
    <form @submit.prevent="submit" class="mt-6">
        <v-card-text>
            <v-text-field
                v-model="surname.value.value"
                :error-messages="surname.errorMessage.value"
                label="Фамилия"
                placeholder="Иванов"
            ></v-text-field>
            
            <v-text-field
                v-model="name.value.value"
                :error-messages="name.errorMessage.value"
                label="Имя"
                placeholder="Иван"
            ></v-text-field>

            <v-text-field
                v-model="second_name.value.value"
                :error-messages="second_name.errorMessage.value"
                label="Отчество"
                placeholder="Иванович"
            ></v-text-field>
    
            <v-text-field
                v-model="phone.value.value"
                :error-messages="phone.errorMessage.value"
                label="Номер телефона"
                v-on:blur="validatePhone"
                placeholder="+375333240396"
            ></v-text-field>

            <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="Почта"
                placeholder="i.ivanov@gmail.com"
            ></v-text-field>

            <v-text-field
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                label="Пароль"
            ></v-text-field>

            <v-text-field
                v-model="confirm_password.value.value"
                :error-messages="confirm_password.errorMessage.value"
                label="Подтвердите пароль"
            ></v-text-field>
        </v-card-text>

        <v-card-text>Уже есть аккаунт? <RouterLink to="/login">Авторизуйтесь</RouterLink></v-card-text>
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
import axios from 'axios';
import { useField, useForm } from 'vee-validate';
import { getCurrentInstance } from 'vue';
import { RouterLink } from 'vue-router';

export default{
    components:{
        RouterLink,
    },
    setup(){
        const { proxy } = getCurrentInstance();
        const { handleSubmit } = useForm({
        validationSchema: {
            surname(value){
                if (value?.length >= 2) return true

                return 'Фамилия должна содержать как минимум 2 символа.'
            },
            name(value){
                if (value?.length >= 2) return true

                return 'Имя должно содержать как минимум 2 символа.'
            },
            second_name(value){
                if (value?.length >= 2) return true

                return 'Отчество должно содержать как минимум 2 символа.'
            },
            phone(value){
                if (/^\+\d{1,3}\d{9}$/.test(value)) return true

                return 'Неправильный формат телефона'
            },
            email(value){
                const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

                if (emailRegex.test(value)) return true

                return 'Неправильный формат почты'
            },
            password(value){
                if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) return true;

                return "Пароль должен содержать как минимум 8 символов, включая 1 заглавную букву, 1 строчную букву, 1 цифру и 1 специальный символ (@$!%*?&).";
            },
            confirm_password(value){
                if (value == password.value.value) return true;

                return "Пароли не соответствуют.";
            }
        }
        })

        const surname = useField('surname')
        const name = useField('name')
        const second_name = useField('second_name')

        const phone = useField('phone')
        const email = useField('email')
        const password = useField('password')
        const confirm_password = useField('confirm_password')

        const submit = handleSubmit(values => {
            proxy.register(values)
        });
        return {
            surname,
            name,
            second_name,
            phone,
            email,
            password,
            confirm_password,
            submit
        }
    },
    methods: {
        register(values){
            axios.post('http://localhost:8000/users/register/', {
                surname: values.surname,
                name: values.name,
                second_name: values.second_name,
                phone_number: values.phone,
                email: values.email,
                password: values.password,
                password_confirm: values.confirm_password
            }).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.response.data)
                alert('Ошибка регистрации: ' + error.response)
            })
            console.log("kek")

            axios.post('http://localhost:8000/users/login/', {
                    phone_number: values.phone,
                    password: values.password,
                }).then(response => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error.response.data)
                    alert('Ошибка регистрации: ' + error.response)
                })
            
            this.$router.push({name: "profile"})
        }
    }
}
</script>