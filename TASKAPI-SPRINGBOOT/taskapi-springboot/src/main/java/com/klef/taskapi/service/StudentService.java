package com.klef.taskapi.service;

import com.klef.taskapi.entity.Student;
import com.klef.taskapi.repository.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {
    private final StudentRepository repo;

    public StudentService(StudentRepository repo) { this.repo = repo; }

    public Student saveStudent(Student student) { return repo.save(student); }

    public List<Student> getAllStudents() { return repo.findAll(); }

    public Student updateStudent(Long id, Student studentDetails) {
        Student student = repo.findById(id).orElseThrow();
        student.setName(studentDetails.getName());
        student.setEmail(studentDetails.getEmail());
        student.setCourse(studentDetails.getCourse());
        student.setAge(studentDetails.getAge());
        return repo.save(student);
    }

    public void deleteStudent(Long id) { repo.deleteById(id); }
}
