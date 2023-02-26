<template>
  <div class="pt-[19px] mb-20" v-if="location" :id="`location-${locationId}`">
    <PageTitle>{{ location.title }}</PageTitle>

    <div class="flex justify-between mt-[3px] mb-6">
      <div class="flex text-sm font-semibold">
        <p class="flex items-center gap-1">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; height: 14px; width: 14px; fill: currentcolor"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          {{ location.rate }}
        </p>
        <div class="mx-1 pt-[2px]">·</div>
        <p class="font-normal items-center leading-none flex" v-if="author?.isSuperHote">
          <span class="text-base mr-2 mb-[2px]" style="font-family: Airmojix">󰀃</span>
          <span class="block">Superhôte</span>
        </p>
        <div class="mx-2 pt-[2px]" v-if="author?.isSuperHote">·</div>
        <p class="underline leading-[1.7rem]">{{ location.location }}</p>
      </div>

      <div class="flex font-semibold text-sm underline gap-5">
        <p class="flex items-center gap-2">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible"
          >
            <g fill="none">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
              <path d="M16 3v23V3z"></path>
              <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
            </g>
          </svg>

          Partager
        </p>

        <p @click="toggleFavourite()" class="flex items-center gap-2">
          <svg
            viewBox="0 0 32 32"
            class="pointer-events-none"
            :style="
              'display: block; fill: ' +
              (isFavourite ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)') +
              '; height: 20px; width: 20px; stroke: rgba(0, 0, 0, 0.5); stroke-width: 3; overflow: visible'
            "
          >
            <path
              d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
            ></path>
          </svg>

          Enregistrer
        </p>
      </div>
    </div>

    <div class="h-[440px] grid grid-cols-2 rounded-xl overflow-hidden">
      <div>
        <div class="h-[440px] flex items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[0]" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-2 ml-2">
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[1]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[2]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[3]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[4]" alt="" />
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="w-[58.333%] pt-[42px]">
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold text-[22px] flex">
              {{ getCategoryName(location.category) }}
              <div class="pt-[2px] -mt-1 mx-2">·</div>
              Chez
              <span class="capitalize ml-[6px]">{{ author?.firstName }}</span>
            </h2>

            <div class="flex mt-1">
              <p>{{ location.caracteristics.travellers }} voyageurs</p>
              <div class="pt-[2px] -mt-[2px] mx-1">·</div>
              <p>{{ location.caracteristics.rooms }} chambres</p>
              <div class="pt-[2px] -mt-[2px] mx-1">·</div>
              <p>{{ location.caracteristics.beds }} lits</p>
              <div class="pt-[2px] -mt-[2px] mx-1">·</div>
              <p>{{ location.caracteristics.bathrooms }} salles de bain</p>
            </div>
          </div>

          <div>
            <svg viewBox="0 0 32 32" class="block h-14 w-14 mt-1 ml-1 fill-gray-500">
              <path
                d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="border-t border-[#DDDDDD] mt-6"></div>

        <div class="pt-7">
          <div class="flex gap-4 mb-5">
            <div>
              <svg
                class="mt-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 24px; width: 24px; fill: currentcolor"
              >
                <path
                  d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                ></path>
              </svg>
            </div>

            <div>
              <h4 class="text-base font-semibold">Idéalement situé</h4>
              <small class="text-sm text-[#717171]">100&nbsp;% des voyageurs ont attribué 5&nbsp;étoiles à l'emplacement du logement.</small>
            </div>
          </div>

          <div class="flex gap-4 mb-5">
            <div>
              <svg
                class="mt-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 24px; width: 24px; fill: currentcolor"
              >
                <path
                  d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-base font-semibold">Procédure d'arrivée irréprochable</h4>
              <small class="text-sm text-[#717171]">100&nbsp;% des voyageurs ont attribué 5&nbsp;étoiles à la procédure d'arrivée.</small>
            </div>
          </div>

          <div class="flex gap-4 mb-5">
            <div>
              <svg
                class="mt-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 24px; width: 24px; fill: currentcolor"
              >
                <path
                  d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-base font-semibold">Annulation gratuite pendant 48&nbsp;heures.</h4>
            </div>
          </div>
        </div>

        <div class="border-t border-[#DDDDDD] mt-6"></div>

        <div class="pt-7">
          <p>
            {{ location.description }}
          </p>
        </div>
      </div>

      <div class="ml-auto mt-11 w-[372px] custom-shadow-2 border border-[#DDDDDD] p-6 rounded-xl">
        <div class="flex justify-between">
          <p>
            <span class="font-semibold text-[22px]">{{ location.price }} €</span>
            par nuit
          </p>

          <p class="flex items-center gap-1 text-sm">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; height: 14px; width: 14px; fill: currentcolor"
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
            {{ location.rate }}
          </p>
        </div>

        <div class="mt-5">
          <div class="text-sm flex">
            <div class="py-[10px] px-3 rounded-tl-lg border-[#B0B0B0] border-t border-l w-1/2">
              <label class="uppercase text-[10px] font-extrabold block" for="arrivee">Arrivée</label>
              <input @change="getJourneyPrice()" class="-mt-[1px] outline-none" ref="date_arrivee" type="date" name="arrivee" v-model="dateArrivee" />
            </div>
            <div class="py-[10px] px-3 rounded-tr-lg border-[#B0B0B0] border-t border-x w-1/2">
              <label class="uppercase text-[10px] font-extrabold block" for="depart">Départ</label>
              <input @change="getJourneyPrice()" class="-mt-[1px] outline-none" ref="date_depart" type="date" name="depart" v-model="dateDepart" />
            </div>
          </div>
          <div class="border border-[#B0B0B0] py-[10px] px-3 rounded-b-lg">
            <label class="uppercase text-[10px] font-extrabold block" for="voyageurs">Voyageurs</label>
            <p>
              <input @change="getJourneyPrice()" class="w-8 outline-none" type="number" value="2" name="voyageurs" />
              voyageurs
            </p>
          </div>
        </div>

        <button class="mt-4 bg-[#E61E4D] text-white w-full outline-none border-none rounded-lg py-[14px]" disabled>Réserver</button>

        <p class="text-sm text-center mt-4">Aucun montant ne vous sera débité pour le moment</p>

        <div class="flex justify-between mt-6">
          <p class="underline">{{ location.price }} x {{ nbNights }} nuits</p>
          <p>{{ totalPrice }} €</p>
        </div>

        <div class="flex justify-between pt-4">
          <p class="underline">Frais de service</p>
          <p>{{ location.serviceCharge }} €</p>
        </div>

        <div class="border-t-2 border-[#DDDDDD] my-5"></div>

        <div class="flex justify-between font-semibold">
          <p>Total</p>
          <p>{{ totalPrice + location.serviceCharge }} €</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '@/static/assets/data/icons.json'
export default {
  layout: 'location',
  data() {
    return {
      locationId: null,
      location: null,
      author: null,
      totalPrice: null,
      nbNights: null,
      dateArrivee: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0],
      dateDepart: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString().split('T')[0]
    }
  },
  head() {
    return {
      title: this.location ? this.location.title : null
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    },
    isFavourite() {
      return this.user?.favouriteLocations?.includes(this.location._id) || false
    }
  },
  methods: {
    getCategoryName(id) {
      const category = icons.find((category) => category.id == id)
      return category.name
    },
    getLocation() {
      this.locationId = this.$route.params.locationId
      this.$axios.get('locations/' + this.locationId).then((res) => {
        this.location = res.data

        this.getAuthor()
      })
    },
    getAuthor() {
      this.$axios.get('users/' + this.location.authorId).then((res) => {
        this.author = res.data
      })
    },
    getJourneyPrice() {
      if (this.dateArrivee >= this.dateDepart) {
        const newDate = new Date(this.dateDepart).setDate(new Date(this.dateDepart).getDate() - 1)
        this.dateArrivee = new Date(newDate).toISOString().split('T')[0]
      }
      if (this.dateDepart <= this.dateArrivee) {
        const newDate = new Date(this.dateArrivee).setDate(new Date(this.dateArrivee).getDate() + 1)
        this.dateDepart = new Date(newDate).toISOString().split('T')[0]
      }

      const daysDiff = new Date(this.dateDepart).getTime() - new Date(this.dateArrivee).getTime()
      this.nbNights = daysDiff / 1000 / 60 / 60 / 24

      this.totalPrice = this.nbNights * this.location.price
    },
    toggleFavourite() {
      if (this.$forceConnected()) {
        if (this.isFavourite) {
          this.$airbnbApi.deleteFavourite(this.location._id)
        } else {
          this.$airbnbApi.addFavourite(this.location._id)
        }
      }
    }
  },
  mounted() {
    this.getLocation()

    window.addEventListener('load', () => this.getJourneyPrice())
  }
}
</script>

<style></style>
