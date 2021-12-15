package com.petshop.Model;

import javax.persistence.*;


@Entity
@Table(name = "breeds")
public class Breed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "breed_name")
    private String breedName;

    @Column(name = "group_name")
    private String group;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private int age;

    @Column(name = "image_one")
    private String image1;

    @Column(name = "image_two")
    private String image2;

    @Column(name = "assigned_staff")
    private String assignedStaff;

    @Column(name = "residents_name")
    private String residentsName;
    //    private String dateAcquired;

    public Breed(){}

    public Breed(String breedName, String group, String gender, int age, String image1, String image2, String residentsName, String assignedStaff) {
        this.breedName = breedName;
        this.group = group;
        this.gender = gender;
        this.age = age;
        this.image1 = image1;
        this.image2 = image2;
        this.residentsName = residentsName;
        this.assignedStaff = assignedStaff;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBreedName() {
        return breedName;
    }

    public void setBreedName(String breedName) {
        this.breedName = breedName;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public String getAssignedStaff() {
        return assignedStaff;
    }

    public void setAssignedStaff(String assignedStaff) {
        this.assignedStaff = assignedStaff;
    }



}
