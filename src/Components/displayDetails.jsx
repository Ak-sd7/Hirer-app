/* eslint-disable react/prop-types */
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button, 
    Typography, 
    Box, 
    Chip, 
    Divider,
    Grid,
    Paper
  } from "@mui/material";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import BusinessIcon from "@mui/icons-material/Business";
  import WorkIcon from "@mui/icons-material/Work";
  import PaymentsIcon from "@mui/icons-material/Payments";
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
  import SchoolIcon from "@mui/icons-material/School";
  import { application } from "../providers";
  import axios from "axios";
import toast from "react-hot-toast";

  
  const DisplayDetails = ({ open, handleClose, jobDetails }) => {
    if (!jobDetails) return null;
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const ApplyHandler = async() => {
      try{
        const {data} = await axios.post(`${application}/addApplicant/${jobDetails._id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success(data.message || "Application submitted successfully");
      }
      catch(error){
        const errorMessage = error.response?.data?.message || 
                             "Failed to submit application. Please try again.";
        
        toast.error(errorMessage);
        console.error("Application submission error:", error);
      }
    }
  
    return (
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 1
          }
        }}
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold">
            {jobDetails.title}
          </Typography>
          
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <BusinessIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              {jobDetails.company || "Company not specified"}
            </Typography>
            
            <LocationOnIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
            <Typography variant="subtitle1">
              {jobDetails.location || "Location not specified"}
            </Typography>
          </Box>
          
          <Box sx={{ display: "flex", mt: 2, mb: 1 }}>
            <Chip
              label={jobDetails.employmentType}
              size="small"
              sx={{
                mr: 1,
                bgcolor: "#3e4646",
                color: "white",
                fontWeight: "medium",
              }}
            />
            <Chip
              label={`₹${jobDetails.salary} p.a`}
              size="small"
              sx={{
                mr: 1,
                bgcolor: "#95af29",
                color: "white",
                fontWeight: "medium",
              }}
            />
            {jobDetails.experience && (
              <Chip
                label={`${jobDetails.experience} yrs Experience`}
                size="small"
                sx={{
                  bgcolor: "#607d8b",
                  color: "white",
                  fontWeight: "medium",
                }}
              />
            )}
          </Box>
        </DialogTitle>
        
        <DialogContent>
          {/* Key Details */}
          <Paper elevation={0} sx={{ p: 2, mb: 3, bgcolor: "#f8f9fa", borderRadius: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WorkIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Employment Type
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {jobDetails.employmentType}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SchoolIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Experience
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {jobDetails.experience || "Not specified"} years
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PaymentsIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Salary
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      ₹{jobDetails.salary} p.a
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Posted On
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {formatDate(jobDetails.createdAt)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon fontSize="small" sx={{ color: "#e53935", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Valid Until
                    </Typography>
                    <Typography variant="body2" fontWeight="medium" sx={{ color: "#e53935" }}>
                      {formatDate(jobDetails.validity)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WorkIcon fontSize="small" sx={{ color: "#3e4646", mr: 1 }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Applications
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {jobDetails.applications || 0}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          
          {/* Description */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Job Description
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {jobDetails.description || "No description provided."}
            </Typography>
          </Box>
          
          {/* Requirements */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Requirements
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {jobDetails.requirements || "No specific requirements mentioned."}
            </Typography>
          </Box>
          
          {/* Benefits */}
          {jobDetails.benefits && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {jobDetails.benefits}
              </Typography>
            </Box>
          )}
          
          <Divider sx={{ my: 2 }} />
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleClose} 
            variant="outlined"
            sx={{
              borderColor: "#3e4646",
              color: "#3e4646",
              "&:hover": {
                borderColor: "#1e2424",
                bgcolor: "rgba(62, 70, 70, 0.1)",
              },
            }}
          >
            Close
          </Button>
          <Button 
            variant="contained"
            sx={{
              bgcolor: "#95af29",
              "&:hover": {
                bgcolor: "#7a9124",
              },
            }}
            onClick={ApplyHandler}
          >
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default DisplayDetails;