package com.jobsboard.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Data
@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String title;
    private String type;       // Full-time, Part-time, Remote, etc.
    private String category;

    private String minSalary;
    private String maxSalary;
    private String period;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String location;   // Onsite, Remote, Hybrid
    private String city;       // e.g., Mogadishu
    private String country;    // e.g., Somalia

    @ElementCollection  // ✅ Important to map TEXT[] to List<String>
    @CollectionTable(name = "job_requirements", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "requirement")
    private List<String> requirements;
}
