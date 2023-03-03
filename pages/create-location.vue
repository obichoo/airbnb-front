<template>
  <div class="pt-9 px-20">
    <PageTitle>Créer une location</PageTitle>

    <div class="mt-10 mb-28 w-full flex gap-6 flex-wrap flex-col">
      <Input v-model="location.location" :value="location.location" label="Lieu" />
      <Input v-model="location.title" :value="location.title" label="Nom" />
      <TextArea v-model="location.description" :value="location.description" label="Renseignez toutes les URL des images en les séparant d'une virgule"></TextArea>
      <Select @select="updateSelectedTarget($event)" :value="location.target" label="Cible" :selectOptions="targets" />
      <Input v-model="location.price" :value="location.price" type="number" label="Prix (par nuit)" />
      <Select @select="updateSelectedCategory($event)" :value="location.category" label="Catégorie" :selectOptions="categories" />
      <Input v-model="location.serviceCharge" :value="location.serviceCharge" type="number" label="Frais de service" />
      <Input v-model="location.caracteristics.travellers" :value="location.caracteristics.travellers" type="number" label="Capacité" />
      <Input v-model="location.caracteristics.rooms" :value="location.caracteristics.rooms" type="number" label="Chambres" />
      <Input v-model="location.caracteristics.beds" :value="location.caracteristics.beds" type="number" label="Lits" />
      <Input v-model="location.caracteristics.bathrooms" :value="location.caracteristics.bathrooms" type="number" label="Salles de bains" />
      <TextArea v-model="imgsField" :value="imgsField" label="Renseignez toutes les URL des images en les séparant d'une virgule"></TextArea>

      <Button bgColor="black" @click.native="createLocation()">Créer une location</Button>
    </div>
  </div>
</template>

<script>
import categories from '@/static/assets/data/icons.json'

export default {
  data() {
    return {
      targets: [
        { id: 'Particulier', name: 'Particulier' },
        { id: 'Professionnels', name: 'Professionnels' }
      ],
      categories: categories || [],
      imgsField: '',
    //   location: {
    //     imgs: [],
    //     title: '',
    //     target: '',
    //     price: null,
    //     category: '',
    //     description: '',
    //     location: '',
    //     serviceCharge: null,
    //     caracteristics: {
    //       travellers: null,
    //       rooms: null,
    //       beds: null,
    //       bathrooms: null
    //     }
    //   },
      location: {
        imgs: [],
        title: '',
        target: '',
        description: '',
        price: null,
        category: '',
        location: '',
        serviceCharge: null,
        caracteristics: {
          travellers: null,
          rooms: null,
          beds: null,
          bathrooms: null
        }
      }
    }
  },
  methods: {
    createLocation() {
      this.location.imgs = this.imgsField.split(',').map((img) => img.trim())

      this.$airbnbApi.createLocation(this.location).then((response) => {
        if (response.status !== 200) {
          return
        }
        this.$userGoTo('/my-locations')
      })
    },
    updateSelectedCategory(category) {
      this.location.category = category
    },
    updateSelectedTarget(target) {
      this.location.target = target
    }
  }
}
</script>

<style></style>
