package com.jobsboard.controller;

import com.jobsboard.model.Job;
import com.jobsboard.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepo;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        Optional<Job> job = jobRepo.findById(id);
        return job.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        // Ensure requirements is never null
        if (job.getRequirements() == null) {
            job.setRequirements(List.of());
        }

        Job savedJob = jobRepo.save(job);
        return ResponseEntity.ok(savedJob);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody Job jobDetails) {
        return jobRepo.findById(id).map(job -> {
            job.setCompany(jobDetails.getCompany());
            job.setTitle(jobDetails.getTitle());
            job.setType(jobDetails.getType());
            job.setCategory(jobDetails.getCategory());
            job.setMaxSalary(jobDetails.getMaxSalary());
            job.setMinSalary(jobDetails.getMinSalary());
            job.setPeriod(jobDetails.getPeriod());
            job.setDescription(jobDetails.getDescription());
            job.setLocation(jobDetails.getLocation());
            job.setCity(jobDetails.getCity());
            job.setCountry(jobDetails.getCountry());

            // Update requirements list properly
            job.setRequirements(jobDetails.getRequirements() != null ? jobDetails.getRequirements() : List.of());

            return ResponseEntity.ok(jobRepo.save(job));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        if (jobRepo.existsById(id)) {
            jobRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
