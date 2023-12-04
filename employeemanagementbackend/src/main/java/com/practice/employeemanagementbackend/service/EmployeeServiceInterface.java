package com.practice.employeemanagementbackend.service;

import com.practice.employeemanagementbackend.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServiceInterface {
    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(int id);
    List<Employee> getALLEmployee();
    Employee updateEmployee(int id, Employee employee);
    void deleteEmployee(int id);
}
