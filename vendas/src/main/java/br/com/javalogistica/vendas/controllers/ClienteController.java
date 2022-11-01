package br.com.javalogistica.vendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.javalogistica.vendas.entities.Cliente;
import br.com.javalogistica.vendas.services.ClienteService;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@CrossOrigin(origins = "*")
	@PostMapping(value = "/save")
	public ResponseEntity<Cliente> clienteSave(@RequestBody Cliente entity) {
		return new ResponseEntity<Cliente>(service.saveCliente(entity), HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/list")
	public List<Cliente> clienteList(){
		
		return service.buscarall();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/codigo={codigo}")
	public Cliente buscarId(@PathVariable Long codigo) {
		
		
		return service.buscarPorId(codigo);
	}
	
	@CrossOrigin(origins = "*")
	@DeleteMapping(value ="/codigo={codigo}")
	public ResponseEntity<Object> deleteId(@PathVariable Long codigo) {
		service.deletarCLiente(codigo);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

}
