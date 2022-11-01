package br.com.javalogistica.vendas.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "ENDERECO")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Endereco {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_ENDERECO")
	private Long idEndereco;
	
	@Column(name = "ENDERECO")
	private String endereco;
	
	@Column(name = "ESTADO")
	private String estado;
	
	@Column(name = "CIDADE")
	private String cidade;
	
	@Column(name = "BAIRRO")
	private String bairro;
	
	@Column(name = "NUMERO")
	private Long numero;
	
	@Column(name = "COMPLEMENTO")
	private String complemento;
	
	@Column(name = "CEP")
	private String cep;
	
	@Column(name = "LONGITUDE")
	private String longitude;
	
	@Column(name = "LATITUDE")
	private String latitude;
	
}
