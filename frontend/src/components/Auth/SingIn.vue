<template>
  <div class="auth-block-container auth-log-slide-in-blurred-top">
    <div class="auth-block auth-log">
      <CloseButton
        :img=AuthClose
      />
      <h1>Войти</h1>
      <div class="auth-input-container">
        <Input
          title="Логин"
        />
        <Input
          title="Пароль"
          type="password"
        />
        <SubmitButton
          title="Войти"
          width="61px"
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
    name: "SingIn",
    components: { Input, SubmitButton, CloseButton },
    data() {
      return {
        AuthClose: AuthClose
      }
    }
  }
</script>
