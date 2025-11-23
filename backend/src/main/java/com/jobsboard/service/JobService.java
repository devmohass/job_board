package com.jobsboard.service;

import com.jobsboard.model.Job;
import java.util.List;

public interface JobService {
    Job createJob(Job job);
    List<Job> getAllJobs();
    Job getJobById(Long id);
    void deleteJob(Long id);
}
