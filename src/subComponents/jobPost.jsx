import { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useContextProvider } from "../providers";
import axios from "axios";
import toast from "react-hot-toast";
import { application } from "../providers";

// eslint-disable-next-line react/prop-types
const JobPost = ({ open, handleClose }) => {
  const { user: userId, server, setLoading, setMposts } = useContextProvider();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    employmentType: "Full-time",
    experience: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
    validity: "",
    person: userId?._id || "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const requestData = {
      title: formData.title,
      company: formData.company,
      location: formData.location,
      employmentType: formData.employmentType,
      experience: parseInt(formData.experience) || 0,
      salary: parseInt(formData.salary) || 0,
      description: formData.description,
      requirements: formData.requirements,
      benefits: formData.benefits,
      validity: formData.validity,
      person: formData.person,
    };
    setLoading(true);
    
    try {
        const {data} = await axios.post(`${server}/jobPost/create`, 
            requestData,
            {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        // console.log(data);
        try {
          const res = await axios.post(`${application}/create/${data.post._id}`, {
              jobId: data.post._id,
              recruiterId: userId?._id,
              applicantIds: [],
          }, {
              headers: {
                  "Content-Type": "application/json",
              },
              withCredentials: true,
          });
  
          console.log(res);
        } catch (error) {
          toast.error(error.response?.data?.message || error.message || "Failed to create job post");
          setLoading(false);
        }

        // fetch all posts
        if (userId && userId._id) {
            try {
                const response = await axios.get(`${server}/jobPost/getPostsById/${userId._id}`, {
                    withCredentials: true,
                });
                
                // setting an array
                if (response.data && response.data.posts) {
                    const postsArray = Array.isArray(response.data.posts) 
                        ? response.data.posts 
                        : [];
                    setMposts(postsArray);
                }
            } catch (fetchError) {
                console.error("Error fetching updated posts:", fetchError);
            }
        }
        
        toast.success(data.message);
        setLoading(false);
        handleClose();
        
        // Reset form data
        setFormData({
            title: "",
            company: "",
            location: "",
            employmentType: "Full-time",
            experience: "",
            salary: "",
            description: "",
            requirements: "",
            benefits: "",
            validity: "",
            person: userId?._id || "",
        });
    } catch (error) {
        toast.error(error.response?.data?.message || error.message || "Failed to create job post");
        setLoading(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Temporary",
    "Internship",
    "Remote",
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="job-post-modal-title"
    >
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            id="job-post-modal-title"
            variant="h5"
            component="h2"
            fontWeight="bold"
          >
            Create New Job Posting
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Job Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter job post title"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State or Remote"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Employment Type</InputLabel>
                <Select
                  name="employmentType"
                  value={formData.employmentType}
                  label="Employment Type"
                  onChange={handleChange}
                >
                  {employmentTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Experience Required (Years)"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 3"
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Annual salary amount"
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Job Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of the job role and responsibilities"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="List the key qualifications and skills required"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Benefits"
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                placeholder="Describe the benefits offered with this position"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="date"
                label="Validity (Expiration Date)"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#95af29",
                    "&:hover": {
                      bgcolor: "#7a9124",
                    },
                  }}
                >
                  Submit Job Posting
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default JobPost;