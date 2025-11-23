package com.jobsboard.service.impl;

import com.jobsboard.model.Job;
import com.jobsboard.repository.JobRepository;
import com.jobsboard.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepo;

    @Override
    public Job createJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @Override
    public Job getJobById(Long id) {
        return jobRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteJob(Long id) {
        jobRepo.deleteById(id);
    }
}
