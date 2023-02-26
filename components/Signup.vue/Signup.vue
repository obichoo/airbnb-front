<template>
  <div>
    <InputGroup class="mt-4 mb-2">
      <Input label="Prénom" type="text" v-model="user.firstName" />
      <Input label="Nom" type="text" v-model="user.lastName" />
      <Input label="Email" type="email" v-model="user.email" />
      <Input label="Mot de passe" type="password" v-model="user.password" />
    </InputGroup>

    <TextError v-if="error">Veuillez remplir correctement les champs et renseigner un mot de passe sécurisé.</TextError>
    <TextError v-if="emailAlreadyRegistered">Cet email a déjà été utilisé.</TextError>

    <Button class="mt-6" @click.native="signupUser()" :fullWidth="true">M'inscrire</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Aubin2',
        lastName: 'Olivrie2',
        email: 'aubin3@gmail.com',
        password: '!Aubin!77'
      },
      error: false,
      emailAlreadyRegistered: false
    }
  },
  methods: {
    signupUser() {
      this.error = false
      this.emailAlreadyRegistered = false
      this.$airbnbApi
        .register(this.user)
        .catch((err) => {
          console.error(err);
          if (err.error === 'email_registered') return (this.emailAlreadyRegistered = true)
          return (this.error = true)
        })
    }
  }
}
</script>

<style></style>
