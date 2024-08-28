import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { ServiceService } from './service/service.service';
import { APIResponse } from './service/interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyNewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent 
implements OnInit {
res: any;
  async ngOnInit() {
   this.res = await this.result
  //  console.log("Prix " +this.res);

  }
  title = 'appBitcoin2.0';

  isHidden: boolean = false

  result = inject (ServiceService).prixBTC()

async  prixBTC() {
  this.isHidden =! this.isHidden
    this.res = await this.result
  }



}
  




//   async getBTCPrice() {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       },
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       this.price = data.bitcoin.usd;
//     } catch (err) {
//       console.error('Erreur lors de la récupération du prix du Bitcoin :', err);
      
//     }
//   };

// }



// let btn = document.querySelector('#prix');
// // let para = document.querySelector('#para');
// let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"



// if (btn) {
//   btn.addEventListener('click', async () => {
//     const btcPrice = await getBTCPrice();
//     if (btcPrice) {
//       btn.innerHTML = `<p>Le prix actuel de Bitcoin est : $${btcPrice}</p>`;
//     } else {
//       btn.innerHTML = `<p>Impossible de récupérer le prix du Bitcoin.</p>`;
//     }
//   });
// } else {
//   console.error('Bouton non trouvé');
// }

// const getBTCPrice = async () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data.bitcoin.usd;
//   } catch (err) {
//     console.error('Erreur lors de la récupération du prix du Bitcoin :', err);
//     return null; 
//   }
