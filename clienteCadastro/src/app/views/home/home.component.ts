import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Cliente } from 'src/app/shared/model/cliente.model';
import { Endereco } from 'src/app/shared/model/endereco.model';
import { isCep, isCnpj } from "validator-brazil";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form: FormGroup = this.formBuilde.group({
    codigo:[''],
    nome:[''],
    cnpj: [''],
    cep: ['', Validators.required],
    endereco: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
    numero: [''],
    complemento: [''],
    longitude: [''],
    latitude: ['']
  }); 

  constructor(private service: ClienteService, private formBuilde:FormBuilder) {}

  public buscarCep(){
    let cep: string = this.form.value.cep
    

    if(cep.includes("-") || cep.includes("_") || cep.includes(".") ){
      cep = cep.replace("-","");
      cep = cep.replace("_","");
      cep = cep.replace("-","");
    }

    if(cep.length === 8){
      this.service.buscarCep(this.form.value.cep).subscribe(
        (data) => {

          this.form.controls["endereco"].setValue(data.logradouro);
          this.form.controls["bairro"].setValue(data.bairro);
          this.form.controls["cidade"].setValue(data.localidade);
          this.form.controls["estado"].setValue(data.uf);

        },
        (erro) =>{
          console.log(erro);
        }
      )
    }
  }

  public buscarLatAndLong(){

    const end: string = this.form.value.endereco;
    const numero: number = this.form.value.numero;

    this.service.longLat(numero, end).subscribe(
      (data)=>{

        if(this.verificar()){
          this.salvarEntity(data[0].lat, data[0].lon);
        }
      },
      (erro)=>{
        console.log(erro);
          
      }
    );
  }

  public salvarEntity(lat: string, lon: string){

    const ende: Endereco = new Endereco(this.form.value.cep, this.form.value.endereco, this.form.value.numero, this.form.value.bairro, this.form.value.cidade, this.form.value.estado,this.form.value.complemento, lon, lat );
    const entity: Cliente = new Cliente(this.form.value.codigo, this.form.value.nome, this.form.value.cnpj,ende);
    
    this.service.select(this.form.value.codigo).subscribe(
      (data) =>{

        if(data == null){
          this.service.apiMain(entity).subscribe(
            (data) =>{
              alert("Salvo!")
            },
            (erro)=>{
              console.log(erro);
            }
          )
        }else{
          alert("Código do Cliente já cadastrado!")
        }
        
      },
      (erro)=>{
        console.log(erro);
      }

    )

    
  }

  public verificar(){

    if(this.form.value.codigo <= 0  || this.form.value.codigo === null || this.form.value.codigo === " " || this.form.value.codigo === ""){
      alert("Código inválido!")
      return false
    }else if(this.form.value.nome.toString() == null || this.form.value.nome.toString() === " " || this.form.value.nome.toString() == ""){
      alert("Nome inválido!")
      return false
    }else if(!isCnpj(this.form.value.cnpj)){
      alert("Formato do CNPJ inválido!")
      return false;
    }else if(!isCep(this.form.value.cep)){
      alert("Formato do CEP inválido!")
      return false;
    }else if(this.form.value.cidade.toString() == null || this.form.value.cidade.toString() === " " || this.form.value.cidade.toString() == ""){
      alert("Cidade é Obrigatório!")
      return false;
    }else if(this.form.value.estado.toString() == null || this.form.value.estado.toString() === " " || this.form.value.estado.toString() == ""){
      alert("Estado é Obrigatório!")
      return false;
    }else if(this.form.value.numero <= 0){
      alert("Número inválido!")
      return false;
    }else{
      return true;
    }
    
  }

  ngOnInit(): void {
   // this.form.valueChanges.subscribe(data => console.log(data)); 
    
  }

}
