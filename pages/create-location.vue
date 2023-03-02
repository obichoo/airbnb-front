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
      imgsField: 'https://loremflickr.com/cache/resized/65535_52626058135_28d0289a84_h_1280_720_nofilter.jpg,https://loremflickr.com/cache/resized/65535_52691101566_d5f69b5af1_h_1280_720_nofilter.jpg , https://loremflickr.com/cache/resized/65535_52295363701_471b2c0717_h_1280_720_nofilter.jpg, https://loremflickr.com/cache/resized/65535_52214085447_ec2bf04bd7_h_1280_720_nofilter.jpg',
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
        title: 'Les chardons bleus',
        target: 'Professionnels',
        description: 'Petite maison tranquille avec jardin et piscine et vue sur la mer et le port de plaisance. A 5 minutes à pied du centre ville et de la plage. A 10 minutes en voiture de la gare et de l aéroport. Son emplacement est idéal pour découvrir la région.',
        price: 10,
        category: 'wow',
        location: 'Pontault-combault',
        serviceCharge: 1,
        caracteristics: {
          travellers: 10,
          rooms: 1,
          beds: 1,
          bathrooms: 10
        }
      }
    }
  },
  methods: {
    createLocation() {
      this.location.imgs = this.imgsField.split(',').map((img) => img.trim())

      this.$airbnbApi.createLocation(this.location).then((response) => {
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
