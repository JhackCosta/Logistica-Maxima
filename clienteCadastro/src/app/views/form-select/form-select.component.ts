import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/shared/service/cliente.service';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
 

  public formSelect: FormGroup = this.formBuilde.group({

    codigoSelect:[''],
    nomeSelect:[''],
    cnpjSelect: [''],
    cepSelect: [''],
    enderecoSelect: [''],
    bairroSelect: [''],
    cidadeSelect: [''],
    estadoSelect: [''],
    numeroSelect: [''],
    complementoSelect: [''],
    longitudeSelect: [''],
    latitudeSelect: ['']

  }); 
  private latitude: number | undefined;
  private longitude: number | undefined;
  
  constructor(private service: ClienteService, private formBuilde:FormBuilder) { }

  public buscarClient(){
    
    let codigo: number = this.formSelect.value.codigoSelect; 
    
    if(codigo > 0 && codigo != null && this.formSelect.value.codigoSelect > 0){
      this.service.select(codigo).subscribe(
        (data) => {
          if(data != null){

            this.latitude = data.latitude;
            this.longitude = data.longitude;

            this.formSelect.controls["nomeSelect"].setValue(data.nome);
            this.formSelect.controls["cnpjSelect"].setValue(data.cnpj);
            this.formSelect.controls["cepSelect"].setValue(data.endereco.cep);
            this.formSelect.controls["enderecoSelect"].setValue(data.endereco.cep);
            this.formSelect.controls["bairroSelect"].setValue(data.endereco.bairro);
            this.formSelect.controls["cidadeSelect"].setValue(data.endereco.cidade);
            this.formSelect.controls["estadoSelect"].setValue(data.endereco.estado);
            this.formSelect.controls["numeroSelect"].setValue(data.endereco.numero);
            this.formSelect.controls["complementoSelect"].setValue(data.endereco.complemento);
            this.formSelect.controls["longitudeSelect"].setValue(data.endereco.longitude);
            this.formSelect.controls["latitudeSelect"].setValue(data.endereco.latitude);
          }else{
            alert("Cliente não encontrado!")
          }
        },
        (erro) =>{
          console.log(erro);
        }
      )
    }

  }

  public deletar(){
    let codigo: number = this.formSelect.value.codigoSelect; 

    if(codigo >= 0 && this.formSelect.value.codigoSelect > 0 && confirm("Está ação é irreversivel, deseja exluir? ")){
      this.service.delete(codigo).subscribe(
        (data) => {
          this.formSelect.controls["nomeSelect"].setValue(null);
          this.formSelect.controls["cnpjSelect"].setValue(null);
          this.formSelect.controls["cepSelect"].setValue(null);
          this.formSelect.controls["enderecoSelect"].setValue(null);
          this.formSelect.controls["bairroSelect"].setValue(null);
          this.formSelect.controls["cidadeSelect"].setValue(null);
          this.formSelect.controls["estadoSelect"].setValue(null);
          this.formSelect.controls["numeroSelect"].setValue(null);
          this.formSelect.controls["complementoSelect"].setValue(null);
          this.formSelect.controls["longitudeSelect"].setValue(null);
          this.formSelect.controls["latitudeSelect"].setValue(null);

          alert("Deletado!")
        },
        (erro) =>{
          console.log(erro);
        }
      )
    }
  }

  public getLatitude(){
    return this.latitude;
  }

  public getLongitude(){
    return this.longitude;
  }

  ngOnInit(): void {
  }

}
