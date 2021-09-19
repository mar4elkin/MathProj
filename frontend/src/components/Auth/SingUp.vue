<template>
  <div class="auth-block-container auth-reg-slide-in-blurred-top">
    <div class="auth-block auth-reg">
      <CloseButton
        :img=AuthClose
      />
      <h1>Регистрация</h1>
      <div class="auth-input-container">
        <div class="auth-block-container-in-row">
          <Input
            title="Имя"
          />
          <Input
            title="Фамилия"
          />
        </div>
        <Input
          title="Логин"
        />
        <Input
          title="Почта"
        />
        <Input
          title="Пароль"
          type="password"
        />
        <SubmitButton
          title="Зарегестрироваться"
          width="159px"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import CloseButton from "./CloseButton";
  import Input from './Input'
  import AuthClose from '../../assets/AuthClose.png'
  import SubmitButton from '../SubmitButton'

  export default {
    name: "SingUp",
    components: { Input, SubmitButton, CloseButton },
    data() {
      return {
        AuthClose: AuthClose
      }
    }
  }
</script>
