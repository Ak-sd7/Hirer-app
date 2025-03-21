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
    Divider 
  } from "@mui/material";
  
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
          <Box sx={{ display: "flex", mt: 1 }}>
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
              label={`₹${jobDetails.salary}`}
              size="small"
              sx={{
                bgcolor: "#95af29",
                color: "white",
                fontWeight: "medium",
              }}
            />
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Job Description
            </Typography>
            <Typography variant="body1" paragraph>
              {jobDetails.description}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Requirements
            </Typography>
            <Typography variant="body1" paragraph>
              {jobDetails.requirements || "No specific requirements mentioned."}
            </Typography>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Posted On
              </Typography>
              <Typography variant="body2">
                {formatDate(jobDetails.createdAt)}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Valid Until
              </Typography>
              <Typography variant="body2" sx={{ color: "#e53935" }}>
                {formatDate(jobDetails.validity)}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Applications
              </Typography>
              <Typography variant="body2">
                {jobDetails.applications || 0}
              </Typography>
            </Box>
          </Box>
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
          >
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default DisplayDetails;