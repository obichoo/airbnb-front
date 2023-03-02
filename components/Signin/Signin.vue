<template>
  <div>
    <InputGroup class="mt-4 mb-2">
      <Input label="Email" type="email" v-model="user.email" />
      <Input label="Mot de passe" type="password" v-model="user.password" />
    </InputGroup>

    <TextError v-if="error">La combinaison de l'email et du mot de passe est inconnue.</TextError>

    <Button class="mt-6" @click.native="signinUser()" :fullWidth="true">Continuer</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    signinUser() {
      this.error = false
      this.$airbnbApi
        .login(this.user)
        .catch((err) => {
          console.error(err);
          return (this.error = true)
        })
    },
  }
}
</script>

<style></style>
