<template>
  <div class="mx-52 pt-10 mb-5 account relative">
    <PageTitle class="mb-20">Mon compte</PageTitle>

    <NuxtLink to="account/bookings" class="absolute right-0 top-10">
      <Button bgColor="white" outline="black" textColor="black">Consulter mes réservations</Button>
    </NuxtLink>

    <div class="grid grid-cols-[600px_350px] gap-20">
      <div>
        <PersonalInformation @updateInfo="updateUser()" :editingOtherInfo="infoEditing" @edit="isEditing($event)">
          <template #label>Nom légal</template>
          <template #value>{{ user.firstName }} {{ user.lastName }}</template>
          <template #editText>C'est le nom qui figure sur votre document de voyage, à savoir votre permis ou votre passeport, par exemple.</template>
          <template #editForm>
            <div class="flex gap-4">
              <Input class="w-full" label="Prénom" v-model="user.firstName"></Input>
              <Input class="w-full" label="Nom" v-model="user.lastName"></Input>
            </div>
          </template>
        </PersonalInformation>

        <PersonalInformation @updateInfo="updateUser()" :editingOtherInfo="infoEditing" @edit="isEditing($event)">
          <template #label>Email</template>
          <template #value>{{ user.email }}</template>
          <template #editText>Utilisez une adresse à laquelle vous aurez toujours accès.</template>
          <template #editForm><Input label="Adresse e-mail" :value="user.email" v-model="user.email"></Input></template>
        </PersonalInformation>

        <PersonalInformation @updateInfo="updateUser()" :editingOtherInfo="infoEditing" @edit="isEditing($event)">
          <template #label>Mot de passe</template>
          <template #value>*********</template>
          <template #editText>Votre mot de passe doit être sécurisé et ne doit être communiqué à personne.</template>
          <template #editForm>
            <Input label="Nouveau mot de passe" :value="user.password" v-model="user.password"></Input>
          </template>
        </PersonalInformation>

        <PersonalInformation @updateInfo="updateUser()" :editingOtherInfo="infoEditing" @edit="isEditing($event)">
          <template #label>Rôle</template>
          <template #value>{{ currentUserRole }}</template>
          <template #editText>Vous pouvez devenir hôte ou client à tout moment.</template>
          <template #editForm>
            <Select @select="updateSelectedRole($event)" :selectOptions="roles" label="Rôle" :value="user.role"></Select>
          </template>
        </PersonalInformation>
      </div>

      <div class="ml-4">
        <SideInfo></SideInfo>
      </div>
    </div>
  </div>
</template>

<script>
import SideInfo from '~/components/SideInfo/SideInfo.vue'
import Input from '~/components/Input/Input.vue'

export default {
  components: {
    SideInfo,
    Input
  },
  data() {
    return {
      infoEditing: false,
      roles: [
        { id: 'CUSTOMER', name: 'Client' },
        { id: 'OWNER', name: 'Hôte' }
      ],
      user: {}
    }
  },
  computed: {
    currentUserRole() {
      if (!this.user.role) return ''

      const role = this.roles.find((x) => x.id === this.user.role)

      if (!role) return ''
      return role.name
    }
  },
  methods: {
    isEditing(value) {
      this.infoEditing = value

      if (!this.infoEditing) this.cancelUpdate()
    },
    getUser() {
      this.user =
        {
          firstName: this.$store.state.user.firstName,
          lastName: this.$store.state.user.lastName,
          email: this.$store.state.user.email,
          password: null,
          role: this.$store.state.user.role
        } || {}
    },
    updateSelectedRole(value) {
      this.user.role = value
    },
    cancelUpdate() {
      this.getUser()
    },
    updateUser() {
      const newValues = {}
      const originalValues = Object.entries(this.$store.state.user)
      originalValues.forEach((value) => {
        if (!this.user[value[0]]) return
        if (value[1] !== this.user[value[0]]) {
          newValues[value[0]] = this.user[value[0]]
        }

        if (value[0] === 'password' && !!value[1]) {
          newValues[value[0]] = this.user[value[0]]
        }
      })

      this.$airbnbApi
        .updateUser(newValues)
        .then((res) => {
          this.infoEditing = false
          this.getUser()
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style></style>
