package com.estate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.estate.entities.Customer;
import com.estate.entities.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	List<Payment> findByCustomer(Customer customer);
	
	@Query(value = "SELECT * FROM payment WHERE customer_id in(select customer_id from booking where owner_id=:id)",nativeQuery = true)
	List<Payment> findOwnerPayments(int id);
}
