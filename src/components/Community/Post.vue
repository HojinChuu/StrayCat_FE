<template>
  <div class="container" v-if="post">
    <div class="row p-4">
      <div class="col-md-12">
        <div class="p-3 card mb-3" @click="show" style="cursor:pointer">
          <div class="card-body">
            <img src="http://placehold.it/64x64" class="float-left rounded-circle">
            <div class="message">
              <h5 class="card-title">{{ post.nickName }}</h5>
              <p class="card-subtitle mb-2 text-muted">{{ post.email }}</p>
            </div>
            <h2 class="card-title mt-5">{{ post.title }}</h2>
            <small class="card-title">DATE : {{ post.createdAt }}</small>
            <div class="card-text">{{ post.content }}</div>
          </div>
        </div>
        <small class="ml-1">CATEGORIES : sdfasdf</small>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  methods: {
    show() {
      this.$router.push({name: 'PostDetail', params: {id: this.post.id}})
    }
  }
}
</script>

<style scoped>
.card .card-body .message {
  padding-left: 80px;
}
.card .card-body .actions {
  margin-top: 5px;
}
</style>