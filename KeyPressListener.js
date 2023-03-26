class KeyPressListener {
   constructor(keyCode, callback) {
      let keySafe = true;
      this.keydownFunction = function (event) {
         if (event.code === keyCode) {
            if (keySafe) {
               keySafe = false;
               callback();
            }
         }
      };
      this.keyupFunction = function (event) {
         console.log(keyCode)
         if (event.code === keyCode) {
            keySafe = true;
         }
      };
      console.log('object')
      document.addEventListener("keydown", this.keydownFunction);
      document.addEventListener("keyup", this.keyupFunction);
      // document.querySelector('.len').addEventListener("click", this.keydownFunction);
      // document.querySelector('.len').addEventListener("click", this.keyupFunction);
   }

   unbind() {
      document.removeEventListener("keydown", this.keydownFunction);
      document.removeEventListener("keyup", this.keyupFunction);
   }


}
function hehe() {
   console.log('ehhe')
}
document.addEventListener("keydown", hehe())