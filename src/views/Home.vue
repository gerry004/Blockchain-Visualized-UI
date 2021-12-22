<template>
  <v-card
    class="mx-auto mt-4"
    max-width="600"
    flat
    outlined
  >
    <v-card-title>
      Blockchain
    </v-card-title>
    <v-divider/>
    <v-card-text class="py-0">
      <v-timeline dense>
        <v-slide-x-reverse-transition
          group
          hide-on-leave
        >
          <v-timeline-item
            v-for="(block, i) in blocks"
            :key="i"
            :color="block.color"
            small
            fill-dot
          >
            <v-card class="pa-4">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    v-model="block.next"
                    label="Next Hash"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="block.data"
                    label="Data"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="block.previous"
                    label="Previous Hash"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    blocks: [
      {
        previous: "hash of block 1",
        data: 'data',
        next: 'hash of block 2',
        color: 'error'
      },
      {
        previous: "0000000000",
        data: 'data',
        next: 'hash of block 1',
        color: 'success'
      },
    ]
  })
}
</script>
