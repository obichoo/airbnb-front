<template>
  <div class="fixed border-t text-sm bg-white border-gray-300 px-20 pt-4 pb-3 bottom-0 w-screen flex z-[10000] justify-between">
    <div class="flex gap-x-2 flex-wrap">
      <span>© 2023 Airbnb, Inc.</span>
      <span>·</span>
      <a href="#">Confidentialité</a>
      <span>·</span>
      <a href="#">Conditions générales</a>
      <span>·</span>
      <a href="#">Plan du site</a>
      <span>·</span>
      <a href="#">Fonctionnement du site</a>
      <span>·</span>
      <a href="#">Infos sur l'entreprise</a>
    </div>

    <div class="flex gap-6 w-1/3 justify-end ml-auto">
      <button class="flex items-center" type="button">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          focusable="false"
          style="display: block; height: 16px; width: 16px; fill: currentcolor"
        >
          <path
            d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"
          ></path>
        </svg>
        <span class="pl-2 font-semibold">Français (FR)</span>
      </button>
      <button class="flex items-center" type="button">
        <span>€</span>
        <span class="pl-2 font-semibold">EUR</span>
      </button>
      <button v-on:click="setIsCollapsed(false)" class="flex items-center" type="button">
        <span class="font-semibold">Assistance et ressources</span>
        <span class="pl-2 font-semibold">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible"
          >
            <g fill="none"><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></g>
          </svg>
        </span>
      </button>
    </div>

    <div>
      <div v-on:click="setIsCollapsed(true)" :class="'fixed top-0 bottom-0 left-0 right-0 transition-all duration-300 ' + collapsibleModalOverlayClasses"></div>

      <div :class="'fixed bottom-0 left-0 w-screen bg-white rounded-tl-xl rounded-tr-xl transition-all duration-500 ' + collapsibleModalClasses">
        <button v-on:click="setIsCollapsed(true)" type="button" class="absolute left-6 top-6">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible"
          >
            <path d="m6 6 20 20"></path>
            <path d="m26 6-20 20"></path>
          </svg>
        </button>

        <div class="pt-12 pb-10 px-20 flex">
          <ul class="w-80 px-2">
            <li class="pb-4"><strong>Assistance</strong></li>
            <li class="pb-4">Centre d'aide</li>
            <li class="pb-4">AirCover</li>
            <li class="pb-4">Soutenir les personnes en situation de handicap</li>
            <li class="pb-4">Options d'annulation</li>
            <li class="pb-4">Nos mesures face au Covid-19</li>
            <li class="pb-4">Signaler un problème de voisinage</li>
          </ul>

          <ul class="w-80 px-2">
            <li class="pb-4"><strong>Communauté</strong></li>
            <li class="pb-4">Airbnb.org : réponse aux catastrophes</li>
            <li class="pb-4">Lutte contre la discrimination</li>
          </ul>

          <ul class="w-80 px-2">
            <li class="pb-4"><strong>Accueil de voyageurs</strong></li>
            <li class="pb-4">Mettez votre logement sur Airbnb</li>
            <li class="pb-4">AirCover pour les hôtes</li>
            <li class="pb-4">Ressources pour les hôtes</li>
            <li class="pb-4">Forum de la communauté</li>
            <li class="pb-4">Accueillir de manière responsable</li>
          </ul>

          <ul class="w-80 px-2">
            <li class="pb-4"><strong>Airbnb</strong></li>
            <li class="pb-4">Newsroom</li>
            <li class="pb-4">En savoir plus sur les nouveautés</li>
            <li class="pb-4">Lettre de nos fondateurs</li>
            <li class="pb-4">Carrières</li>
            <li class="pb-4">Investisseurs</li>
            <li class="pb-4">Cartes cadeaux</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true
    }
  },
  methods: {
    setIsCollapsed(value) {
      this.isCollapsed = value
    }
  },
  computed: {
    collapsibleModalClasses() {
      return !this.isCollapsed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
    },
    collapsibleModalOverlayClasses() {
      return !this.isCollapsed ? 'bg-black opacity-50' : 'bg-transparent opacity-0 pointer-events-none'
    }
  }
}
</script>

<style></style>
