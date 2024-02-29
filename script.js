"use strict"


/*
   ++-----------------------------------------------++
   ++-----------------------------------------------++
   ||     TATU UF 941-23 GURUH TALABASI             ||
   ||        Azimboyev Elnurbek                     ||
   ++-----------------------------------------------++
   ++-----------------------------------------------++

*/
const qoshish_btn = document.querySelector('.qoshish_btn'),
   numbering = +document.querySelectorAll('.numbering')[1].innerHTML,
   table = document.querySelector('.table tbody'),
   toldirilganmi = document.querySelector('.toldirilganmi'),
   info = document.querySelector('.info'),
   addElementButton = document.querySelector('#fillButton');

   var inputs = document.querySelectorAll('input[type="number"]');


var boolInfo = false,
   count = 0,
   newNumbering = 2,
   previousT1Values = [],
   previousT2Values = [];

const solved = () => {
   inputs = document.querySelectorAll('input[type="number"]');
   let allInputsFilled = true;
   function checkAllItems() {
      inputs.forEach(input => {
         if (input.value.trim() === '' || input.value.trim() == 0) {
            allInputsFilled = false;
            return;
         }
      });
   }
   checkAllItems();
   if (allInputsFilled) {
      toldirilganmi.style.cssText = `opacity: 0; z-index: -10`;
      const ip_uzunligi = document.querySelectorAll('.data__l');
      const uzunliklarBasa = [];
      ip_uzunligi.forEach(element => {
         const tempUzunlik = +element.value;
         uzunliklarBasa.push(tempUzunlik);
      });
      const t1Inputs = document.querySelectorAll('.data__t1');
      const t2Inputs = document.querySelectorAll('.data__t2');
      const t1Values = [];
      const t2Values = [];
      t1Inputs.forEach(input => {
         t1Values.push(parseFloat(input.value));
      });
      t2Inputs.forEach(input => {
         t2Values.push(parseFloat(input.value));
      });

      const ortachaQiymatElements = document.querySelectorAll('.ortacha_qiymat');
      const ortacha_qiymatBasa = [];
      ortachaQiymatElements.forEach((element, index) => {
         const sum = +((t1Values[index] + t2Values[index]) / 2);
         ortacha_qiymatBasa.push(sum);
         ortachaQiymatElements[index].textContent = sum;
      });

      const davr_kvadrati = document.querySelectorAll('.davr_kvadrati');
      const davr_kvadratiBasa = [];
      davr_kvadrati.forEach((element, index) => {
         const ortachaQiymat = parseFloat(ortachaQiymatElements[index].textContent);
         if (!isNaN(ortachaQiymat)) {
            const sum = Math.pow((ortachaQiymat / 50), 2).toFixed(4);
            davr_kvadratiBasa.push(sum);
            davr_kvadrati[index].textContent = sum;
         } else {
            davr_kvadratiBasa.push("NaN");
            davr_kvadrati[index].textContent = "NaN";
         }
      });

      const gravitation_gort = document.querySelector('.gravitation_gort');
      const gravitation_gi = document.querySelectorAll('.gravitation_gi');
      const gravitation_giBasa = [];
      var g_ortacha = 0;
      gravitation_gi.forEach((element, index) => {
         if (index < uzunliklarBasa.length / 2) {
            const sum = +(((4 * Math.pow(3.14159, 2) * (uzunliklarBasa[2 * index] - uzunliklarBasa[2 * index + 1]))
               / (davr_kvadratiBasa[2 * index] - davr_kvadratiBasa[2 * index + 1]) / 100).toFixed(4));
            gravitation_giBasa.push(sum);
            gravitation_gi[index].textContent = sum;
            g_ortacha += gravitation_giBasa[index];
         }
      });
      const temp_G_ort = (g_ortacha / gravitation_giBasa.length).toFixed(4);
      gravitation_gort.textContent = temp_G_ort;

      const gravitation_delta_g_i = document.querySelectorAll('.gravitation_delta_g_i');
      const gravitation_delta_g_i_BASA = [];
      gravitation_delta_g_i.forEach((element, item) => {
         const sum = +Math.abs(+(gravitation_gort.innerHTML) - gravitation_giBasa[item]).toFixed(4);
         gravitation_delta_g_i_BASA.push(sum);
         element.textContent = sum;
      });

      const gravitation_delta_g_ort = document.querySelector('.gravitation_delta_g_ort');
      var gravitation_delta_g_ort_TEMP = 0;
      gravitation_delta_g_i.forEach((element, item) => {
         gravitation_delta_g_ort_TEMP += +(gravitation_delta_g_i_BASA[item] / gravitation_delta_g_i.length).toFixed(4);
      })
      gravitation_delta_g_ort.textContent = gravitation_delta_g_ort_TEMP;

      const efsilon = document.querySelector('.efsilon');
      const tempEfsilon = +(+gravitation_delta_g_ort.innerHTML * 100 / +gravitation_gort.innerHTML).toFixed(8);
      efsilon.textContent = tempEfsilon;

      const gravitation_last_g = document.querySelectorAll('.gravitation_last_g');
      console.log(gravitation_last_g);
      const gravitation_last_g_item = gravitation_last_g[gravitation_last_g.length - 1];
      const gravitation_last_g_basa = [];
      gravitation_last_g.forEach((element, index) => {
         const sum = +(((4 * Math.pow(3.14159, 2) * (uzunliklarBasa[index + 1] - uzunliklarBasa[index])) / (davr_kvadratiBasa[index + 1] - davr_kvadratiBasa[index]) / 100).toFixed(5));
         gravitation_last_g_basa.push(sum);
         gravitation_last_g[index].textContent = sum;
      });
      gravitation_last_g_item.innerHTML = +((4 * Math.pow(3.14159, 2) * (uzunliklarBasa[uzunliklarBasa.length - 1]) / (davr_kvadratiBasa[davr_kvadratiBasa.length - 1]) / 100).toFixed(5));
      console.log(gravitation_last_g_item);
   } else {
      toldirilganmi.style.cssText = `opacity: 1; z-index: 10`;
   }
}

let InputElementsValuesBasa = [];
addElementButton.addEventListener('click', function () {
   const inputs = document.querySelectorAll('input[type="number"]');
   inputs.forEach((item, index) => {
      InputElementsValuesBasa[index] = item.value;
   })
   console.log(InputElementsValuesBasa);
   newNumbering++;
   if (newNumbering < 6) {
      table.innerHTML += `
        <tr>
            <td class="numbering">${newNumbering}</td>
            <td><input type="number" placeholder="0" class="data__l"></td>
            <td><input type="number" placeholder="0" class="data__t1"></td>
            <td><input type="number" placeholder="0" class="data__t2"></td>
            <td class="ortacha_qiymat"></td>
            <td class="davr_kvadrati"></td>
            <td class="gravitation_gi" rowspan="2"></td>
            <td class="gravitation_delta_g_i" rowspan="2"></td>
            <td class="gravitation_last_g"></td>
        </tr>`
      newNumbering++;
      table.innerHTML += `
            <tr>
            <td class="numbering">${newNumbering}</td>
            <td><input type="number" placeholder="0" class="data__l"></td>
            <td><input type="number" placeholder="0" class="data__t1"></td>
            <td><input type="number" placeholder="0" class="data__t2"></td>
            <td class="ortacha_qiymat"></td>
            <td class="davr_kvadrati"></td>
            <td class="gravitation_last_g"></td>
    </tr>`

      
   } else
      info.style.cssText = `opacity: 10; z-index: 10;`
});


function autoFillUp() {
   const inputs = document.querySelectorAll('input[type="number"]');
   inputs.forEach((item, index) => {
      if (InputElementsValuesBasa[index] !== undefined) {
         item.value = InputElementsValuesBasa[index];
      }
   });
}
autoFillUp();

const tugma = document.querySelector('.tugma-id');
tugma.addEventListener('click', tugmaBosilganda);
let bosishSoni = 0;
function tugmaBosilganda() {
   bosishSoni++;
   if (bosishSoni === 3) {
      info.style.cssText = `opacity: 0; z-index: -10`;
      bosishSoni = 0;
   }
}