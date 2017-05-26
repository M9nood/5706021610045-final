<template lang="html">
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1 bann">
          <h1>โปรแกรมคำนวณเกรด @KMUTNB</h1><br>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-1 is-3">
            <div class="field">
              <label class="label">เกรดสะสมล่าสุด</label>
              <p class="control">
                <input class="input" type="text" placeholder="Gpa" v-model="previousGpa">
              </p><br><br>
              <h2 v-if="showgrade"> เกรดเทอมนี้คุณ คือ {{gpa}} </h2>
              <h2 v-if="showgrade"> เกรดสะสม คือ {{(parseFloat(gpa)+parseFloat(previousGpa))/2}} </h2>
            </div>
        </div>
        <div class="column is-6">
          เทอมปัจจุบันเรียน<br>
          <a   class="button is-info is-small" @click="createTb(subject)">ตกลง</a><br><br><br>
          <table v-if="showtb"  class="table is-striped is-narrow">
            <thead>
              <th>#</th><th>ชื่อวิชา</th><th>หน่วยกิต</th><th>เกรด</th>
            </thead>
            <tr>
              <td>1</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits1"></td>
              <td><input class="input" type="text"  v-model="grades1"></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits2"></td>
              <td><input class="input" type="text"  v-model="grades2"></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits3"></td>
              <td><input class="input" type="text"  v-model="grades3"></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits4"></td>
              <td><input class="input" type="text"  v-model="grades4"></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits5"></td>
              <td><input class="input" type="text"  v-model="grades5"></td>
            </tr>
            <tr>
              <td>6</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits6"></td>
              <td><input class="input" type="text"  v-model="grades6"></td>
            </tr>
            <tr>
              <td>7</td>
              <td><input class="input" type="text" ></td>
              <td><input class="input" type="text" v-model="credits7"></td>
              <td><input class="input" type="text"  v-model="grades7"></td>
            </tr>
            <tr>
              <td><a  class="button is-info is-small" @click="cal">คำนวณ</a></td>
            </tr>
          </table>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      previousGpa: '',
      subject : '',
      showtb : false,
      credits1: '',
      credits2: '',
      credits3: '',
      credits4: '',
      credits5: '',
      credits6: '',
      credits7: '',
      grades1: '',
      grades2: '',
      grades3: '',
      grades4: '',
      grades5: '',
      grades6: '',
      grades7: '',
      gpa: '',
      showgrade:false
    }
  },
  methods : {
    createTb(sub) {
      this.showtb = !this.showtb
    },
    cal(sub) {
      let vm = this
      let crt =(parseInt(vm.credits1)+parseInt(vm.credits2)+parseInt(vm.credits3)+parseInt(vm.credits4)+parseInt(vm.credits5)+parseInt(vm.credits6)+parseInt(vm.credits7))
      vm.gpa=((vm.credits1*vm.grades1)+(vm.credits2*vm.grades2)+(vm.credits3*vm.grades3)+(vm.credits4*vm.grades4)+(vm.credits5*vm.grades5)+(vm.credits6*vm.grades6)+(vm.credits7*vm.grades7))
      console.log(crt)
      vm.gpa = (vm.gpa / crt).toFixed(2)
      console.log(vm.gpa)
      vm.showgrade = true
    }
  }
}
</script>

<style lang="css">
.bann{
  background: rgba(248,80,50,1);
background: -moz-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(52,69,247,1) 0%, rgba(47,12,245,1) 8%, rgba(24,164,240,1) 97%, rgba(207,190,188,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(248,80,50,1)), color-stop(0%, rgba(52,69,247,1)), color-stop(8%, rgba(47,12,245,1)), color-stop(97%, rgba(24,164,240,1)), color-stop(100%, rgba(207,190,188,1)));
background: -webkit-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(52,69,247,1) 0%, rgba(47,12,245,1) 8%, rgba(24,164,240,1) 97%, rgba(207,190,188,1) 100%);
background: -o-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(52,69,247,1) 0%, rgba(47,12,245,1) 8%, rgba(24,164,240,1) 97%, rgba(207,190,188,1) 100%);
background: -ms-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(52,69,247,1) 0%, rgba(47,12,245,1) 8%, rgba(24,164,240,1) 97%, rgba(207,190,188,1) 100%);
background: linear-gradient(to right, rgba(248,80,50,1) 0%, rgba(52,69,247,1) 0%, rgba(47,12,245,1) 8%, rgba(24,164,240,1) 97%, rgba(207,190,188,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#cfbebc', GradientType=1 );
}
.home{
  margin-top: 40PX;
  font-family: RSU;
}
</style>
