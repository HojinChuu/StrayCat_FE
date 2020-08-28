<template>
  <div>
    <div v-if="this.$route.name == 'Community'">
      <Index />
      <Post />
    </div>
    <div v-else>
      <router-view /> 
    </div>
  </div>
</template>

<script>
import Index from '@/components/Community/Index';
import Post from '@/components/Community/Post';

export default {
  components: { Index, Post }
}
</script>