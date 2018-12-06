<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppMenu></AppMenu>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from '@/components/layouts/AppHeader'
  import AppMenu from '@/components/layouts/AppMenu'
  import AppFooter from '@/components/layouts/AppFooter'
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMenu,
      AppFooter
    }
  }
</script>
