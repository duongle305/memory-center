<template>
  <section class="bread-crumb">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">{{ getProductName }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    computed:{
      ...mapGetters([
        'getProductName'
      ])
    }
  }
</script>
