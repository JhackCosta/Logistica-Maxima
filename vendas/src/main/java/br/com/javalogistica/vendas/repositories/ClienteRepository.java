package br.com.javalogistica.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.javalogistica.vendas.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	@Query(value = "SELECT * FROM CLIENTE WHERE CODIGO = :codigo", nativeQuery=true)
	Cliente findByCodigo(@Param("codigo") Long codigo);
	
	@Transactional
	String deleteByCodigo(Long codigo); 
	
}
