package br.com.javalogistica.vendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.javalogistica.vendas.entities.Cliente;
import br.com.javalogistica.vendas.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	public Cliente saveCliente(Cliente entity) {
		return repository.save(entity);
	}
	
	public Cliente buscarPorId(Long codigo) {
		return repository.findByCodigo(codigo);
	}

	public List<Cliente> buscarall(){
		return repository.findAll();
	}
	
	public void deletarCLiente(Long codigo) {
		repository.deleteByCodigo(codigo);
	}
	
}
