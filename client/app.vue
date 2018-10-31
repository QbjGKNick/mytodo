<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <p>{{textA}} {{textPlus}}</p> -->
    <router-link to="/app/123">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  methods: {
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
  },
  mounted () {
    console.log(this.$store)
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/add']('')
    // let i = 1
    // setInterval(() => {
    //   this.updateCount('updateCount', i++)
    // }, 1000)
  },
  computed: {
    ...mapState({
      counter: state => state.count
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      fullName: 'fullName'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


