import { Component, OnInit } from '@angular/core';
import { ConsultaApiService } from 'src/app/services/consulta-api.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title = 'calculadora_sac_price';
  value = 'Clear me';

  constructor(private consultaApi: ConsultaApiService) { }

  ngOnInit(): void {
  }

  pesquisar(){
    //alert("Clicou")
    this.consultaApi.ListarOpcoesFinanciamento(120000.00, 49).subscribe(retorno => {
      debugger
      console.log(retorno)
    })
  }

}
