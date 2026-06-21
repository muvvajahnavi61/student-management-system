package com.student.studentmanagement.service;

import java.util.List;

import com.student.studentmanagement.entity.Student;

public interface StudentService {

    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(Integer id);

    Student updateStudent(Student student);

    void deleteStudent(Integer id);
}