<template>
  <div>
    <Section />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Section from '@/components/Home/Section'
import Body from '@/components/Home/Body'
import Footer from '@/components/Home/Footer'

export default {
  name: "Home",
  components: { Section, Body, Footer }
}
</script>