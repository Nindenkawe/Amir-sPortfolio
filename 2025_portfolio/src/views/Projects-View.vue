<template>
  <Logo />
  <viz />
  <rackserver />
</template>

<script>
import Logo from '@/components/Lo-go.vue'
import rackserver from '@/components/Rack-server.vue'
import viz from '@/components/Data_visualization.vue'

export default {
  name: 'Projects-View',
  components: {
    Logo,
    viz,
    rackserver,
  },
}
</script>
