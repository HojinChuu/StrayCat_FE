<template>
  <div>
    <section class="jumbotron text-center bg-light mb-5">
      <div class="container">
        <h1>Community</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <router-link :to="{ name: 'PostCreate' }" v-show="accessToken"><a class="btn btn-primary my-2 btn-lg">Post Create</a></router-link> 
      </div>
    </section>
    <Post 
      v-for="(post, index) in posts" 
      :key="index" :post="post" 
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Post from './Post';

export default {
  name: 'Index',
  components: { Post },
  created() {
    this.FETCH_POSTS()
  },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['accessToken'])
  },
  methods: {
    ...mapActions(['FETCH_POSTS']),
  }
}
</script>

<style scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
.jumbotron .container {
  max-width: 40rem;
}
</style>