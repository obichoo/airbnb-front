<template>
  <div class="border border-[color:rgb(221,221,221)] rounded-xl p-6">
    <Info>
      <template #icon>
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; height: 48px; width: 48px; fill: #e31c5f; stroke: currentColor"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <g>
            <g stroke="none">
              <path
                d="M27 5l.585.005c4.29.076 8.837.984 13.645 2.737l.77.288V35.4l-.008.13a1 1 0 0 1-.47.724l-.116.06L27 42.716V25a1 1 0 0 0-.883-.993L26 24H12V8.029l.77-.286c4.797-1.75 9.336-2.658 13.62-2.737L27 5z"
                fill-opacity=".2"
              ></path>
              <path
                d="M27 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L46 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097-15.594 6.93L27 47l-2.461-1h2.451a.01.01 0 0 0 .007-.003L27 45.99v-1.085l15.218-6.763a3 3 0 0 0 1.757-2.351l.019-.194.006-.196V6.669l-.692-.278C37.557 4.128 32.121 3 27 3S16.443 4.128 10.692 6.391L10 6.67 9.999 24H8V6.669a2 2 0 0 1 1.098-1.786l.147-.067C15.483 2.275 21.401 1 27 1z"
              ></path>
            </g>
            <g fill="none" stroke-width="2">
              <path d="M4 24h22a1 1 0 0 1 1 1v20.99a.01.01 0 0 1-.01.01H4a1 1 0 0 1-1-1V25a1 1 0 0 1 1-1z"></path>
              <path d="M21 25v-5a6 6 0 1 0-12 0v5"></path>
              <circle cx="15" cy="35" r="2"></circle>
            </g>
          </g>
        </svg>
      </template>
      <template #title>Pourquoi mes informations se sont-elles pas affichées ici ?</template>
      <template #text>Nous masquons certains détails de votre compte afin de protéger votre identité.</template>
    </Info>

    <div class="my-8 border-b border-[color:rgb(221,221,221)]"></div>

    <Info>
      <template #icon>
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; height: 48px; width: 48px; fill: #e31c5f; stroke: currentColor"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <g stroke="none">
            <path d="m39 15.999v28.001h-30v-28.001z" fill-opacity=".2"></path>
            <path
              d="m24 0c5.4292399 0 9.8479317 4.32667079 9.9961582 9.72009516l.0038418.27990484v2h7c1.0543618 0 1.9181651.8158778 1.9945143 1.8507377l.0054857.1492623v32c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-34c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623v-32c0-1.0543618.81587779-1.9181651 1.85073766-1.9945143l.14926234-.0054857h7v-2c0-5.5228475 4.4771525-10 10-10zm17 14h-34v32h34zm-17 14c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3-3-1.3431458-3-3 1.3431458-3 3-3zm0 2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm0-28c-4.3349143 0-7.8645429 3.44783777-7.9961932 7.75082067l-.0038068.24917933v2h16v-2c0-4.418278-3.581722-8-8-8z"
            ></path>
          </g>
        </svg>
      </template>
      <template #title>Quelles informations peuvent être modifiées ?</template>
      <template #text>
        Les informations utilisées par Airbnb pour vérifier votre identité ne peuvent être modifiées. Les coordonnées et certaines données personnelles peuvent
        être modifiées, mais nous pourrions vous demander de vérifier votre identité la prochaine fois que vous réservez une location ou créez une annonce.
      </template>
    </Info>

    <div class="my-8 border-b border-[color:rgb(221,221,221)]"></div>

    <Info>
      <template #icon>
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; height: 48px; width: 48px; fill: #e31c5f; stroke: currentColor"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <g stroke="none">
            <path d="m39 15.999v28.001h-30v-28.001z" fill-opacity=".2"></path>
            <path
              d="m24 0c5.4292399 0 9.8479317 4.32667079 9.9961582 9.72009516l.0038418.27990484v2h7c1.0543618 0 1.9181651.8158778 1.9945143 1.8507377l.0054857.1492623v32c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-34c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623v-32c0-1.0543618.81587779-1.9181651 1.85073766-1.9945143l.14926234-.0054857h7v-2c0-5.5228475 4.4771525-10 10-10zm17 14h-34v32h34zm-17 14c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3-3-1.3431458-3-3 1.3431458-3 3-3zm0 2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm0-28c-4.3349143 0-7.8645429 3.44783777-7.9961932 7.75082067l-.0038068.24917933v2h16v-2c0-4.418278-3.581722-8-8-8z"
            ></path>
          </g>
        </svg>
      </template>
      <template #title>Lesquelles de mes informations sont communiquées à des tiers ?</template>
      <template #text>Airbnb ne communique les coordonnées aux hôtes et aux voyageurs qu'après la confirmation d'une réservation.</template>
    </Info>
  </div>
</template>

<script>
import Info from './Info/Info.vue'

export default {
  components: { Info }
}
</script>

<style></style>
