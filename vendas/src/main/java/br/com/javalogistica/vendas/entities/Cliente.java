package br.com.javalogistica.vendas.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table(name = "Cliente")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_CLIENTE")
	private Long idCliente;
	
	@Column(name = "CODIGO")
	private Long codigo;
	
	@Column(name = "NOME")
	private String nome;
	
	@Column(name = "CNPJ")
	private String cnpj;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_ID_ENDERECO", referencedColumnName = "ID_ENDERECO")
	private Endereco endereco;

}
