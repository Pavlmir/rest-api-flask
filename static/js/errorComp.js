Vue.component('error', {
   template: `<div>
             <div class="error" v-show="$root.showErrorName && (this.$attrs.id=='name')"> Имя должно содержать только буквы! </div>
             <div class="error" v-show="$root.showErrorPhone && (this.$attrs.id=='phone')">Телефон имеет вид +7(000)000-0000! </div>
             <div class="error" v-show="$root.showErrorEmail && (this.$attrs.id=='email')">
                E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru!</div>
             </div>`,

})
