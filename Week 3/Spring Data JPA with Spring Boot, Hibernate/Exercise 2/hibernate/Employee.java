package hibernate;

public class Employee {
    private int id;
    private String name;
    private String department;

    public Employee() {}

    public Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }

    // getters and setters
}