<template>
  <div class="product-detail__tab__item tab-1" style="height: unset;">
    <div class="tab-flur" style="display: none;"></div>
    <h5 class="tab-1__header text-center">Thông số kĩ thuật</h5>
    <table class="tab-1__table">
      <tbody>
      <tr v-if="load" v-for="attribute in getAttributes">
        <td><b>{{ attribute.title }}</b></td>
        <td>{{ attribute.value }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="load" v-html="getDescription" style="margin-top: 20px"></div>
    <div id="toggle-tab" class="tab-expand text-center">Thu gọn</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    props:['isLoaded'],
    computed:{
      ...mapGetters([
        'getAttributes',
        'getDescription'
      ]),
      load(){
        if(this.isLoaded){
          let toggle_tab = 0;
          let tab1 = document.getElementsByClassName('tab-1');
          let tabFlur = document.getElementsByClassName('tab-flur');

          let toggleTab = document.getElementById('toggle-tab');

          $(tab1).css("height", "250px");
          $(tabFlur).show();
          $(toggleTab).text("Xem đầy đủ");

          $(toggleTab).click(event=>{
            console.log(toggle_tab);
            if (toggle_tab===0) {
              $(tab1).css("height", "unset");
              $(tabFlur).hide();
              toggle_tab = 1;
              $(event.target).text("Thu gọn");
              return false;
            }else {
              $(tab1).css("height", "250px");
              $(tabFlur).show();
              toggle_tab = 0;
              $(event.target).text("Xem đầy đủ");
              return false;
            }
          });
        }
        return this.isLoaded
      }
    }
  }
</script>
