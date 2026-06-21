package com.student.studentmanagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.student.studentmanagement.entity.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {

}