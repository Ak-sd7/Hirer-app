import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Divider,
  Grid,
  Button,
  Chip,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import GradeIcon from "@mui/icons-material/Grade";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EventIcon from "@mui/icons-material/Event";
import "../Styles/features.css";
import PropTypes from "prop-types";
import { useContextProvider } from "../providers";

const Aprofile = ({ appliedJobs }) => {
  const { user: userData } = useContextProvider();
  // Ensure appliedJobs is always an array
  const applications = Array.isArray(appliedJobs) ? appliedJobs : [];
  
  console.log(userData._id);
  const user = userData || {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNo: "1234567890",
    uniName: "University of Technology",
    uniGpa: 3.8,
    uniPass: 2023,
    linkedInUrl: "https://linkedin.com/in/janedoe",
    resume: "resume.pdf",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    createdAt: new Date().toISOString(),
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="Card">
      <Paper
        elevation={3}
        sx={{
          overflow: "hidden",
          borderRadius: 4,
          transition: "all 0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <Card
          sx={{
            display: "flex",
            minWidth: 345,
            minHeight: 300,
            bgcolor: "white",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "none",
          }}
        >
          {/* Left side - Avatar */}
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#3e4646",
              color: "white",
              p: 3,
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                bgcolor: "#95af29",
                fontSize: 48,
                mb: 3,
                border: "4px solid white",
                boxShadow: 2,
              }}
            >
              {getInitials(user.name)}
            </Avatar>
            <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
              {user.name}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              size="small"
              sx={{
                mt: 2,
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "#95af29",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Edit Profile
            </Button>
          </Box>

          {/* Right side - User Information */}
          <CardContent sx={{ width: "70%", p: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "60%",
                    height: 3,
                    bgcolor: "#95af29",
                    borderRadius: 1,
                  },
                }}
              >
                Profile Information
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              {/* First row */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email Address
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {user.email}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone Number
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {user.phoneNo}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              {/* University in one column */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SchoolIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        University
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {user.uniName}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              {/* Passing year in separate column */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EventIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Graduation Year
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {user.uniPass}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <GradeIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        GPA
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {parseFloat(user.uniGpa.$numberDecimal || user.uniGpa).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        LinkedIn
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: "medium",
                          color: user.linkedInUrl ? "#0077b5" : "text.primary",
                          textDecoration: user.linkedInUrl ? "underline" : "none",
                          cursor: user.linkedInUrl ? "pointer" : "default"
                        }}
                      >
                        {user.linkedInUrl || "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <DescriptionIcon sx={{ mr: 2, color: "#3e4646", fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Resume
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: "medium",
                          color: user.resume ? "#3e4646" : "text.primary",
                          textDecoration: user.resume ? "underline" : "none",
                          cursor: user.resume ? "pointer" : "default"
                        }}
                      >
                        {user.resume ? "View Resume" : "Not uploaded"}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarTodayIcon
                      sx={{ mr: 2, color: "#3e4646", fontSize: 28 }}
                    />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Member Since
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {formatDate(user.createdAt)}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              {/* Skills section takes full width */}
              <Grid item xs={12}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: 3,
                      bgcolor: "#f9f9f9",
                    },
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Skills
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {user.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: "#95af29",
                            color: "white",
                            fontWeight: "medium",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>

      <Paper
        elevation={3}
        sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: "#f5f5f5" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#95af29",
              fontWeight: "bold",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: "60%",
                height: 3,
                bgcolor: "#95af29",
                borderRadius: 1,
              },
            }}
          >
            Applied Jobs
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {applications.length === 0 ? (
  <Card
    sx={{
      p: 4,
      borderRadius: 2,
      textAlign: "center",
      bgcolor: "white",
    }}
  >
    <WorkIcon sx={{ fontSize: 60, color: "#3e4646", opacity: 0.5, mb: 2 }} />
    <Typography variant="h6" color="text.secondary">
      You haven't applied to any jobs yet
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      Start exploring opportunities and track your applications here
    </Typography>
    <Button
      variant="contained"
      sx={{
        mt: 3,
        bgcolor: "#95af29",
        "&:hover": {
          bgcolor: "#7a8f22",
        },
      }}
    >
      Browse Jobs
    </Button>
  </Card>
) : (
  <Grid container spacing={3}>
    {/* First row */}
    <Grid item xs={12} md={12}>
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "medium" }}>
        Recent Applications
      </Typography>
    </Grid>
    
    {/* Two rows of job applications */}
    {applications.slice(0, 4).map((job, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Card
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.2s",
            "&:hover": {
              boxShadow: 3,
              transform: "translateY(-3px)",
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{ bgcolor: "#f0f0f0", color: "#3e4646", mr: 2 }}
              >
                {job.company?.charAt(0) || "C"}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {job.title || "Job Title"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.company || "Company Name"}
                </Typography>
              </Box>
            </Box>
            <Chip
              label={job.status || "Applied"}
              size="small"
              sx={{
                bgcolor: 
                  job.status === "Accepted" ? "#4caf50" :
                  job.status === "Rejected" ? "#f44336" :
                  job.status === "Interviewed" ? "#2196f3" : "#ff9800",
                color: "white",
              }}
            />
          </Box>
          <CardContent>
            <Grid container spacing={2}>
              {/* Two columns in each card */}
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Applied Date
                </Typography>
                <Typography variant="body2">
                  {job.appliedDate ? formatDate(job.appliedDate) : "N/A"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Location
                </Typography>
                <Typography variant="body2">
                  {job.location || "Remote"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box sx={{ p: 2, pt: 0, textAlign: "right" }}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#95af29",
                color: "#95af29",
                "&:hover": {
                  borderColor: "#7a8f22",
                  bgcolor: "rgba(149, 175, 41, 0.1)",
                },
              }}
            >
              View Details
            </Button>
          </Box>
        </Card>
      </Grid>
    ))}
    
    {/* View all applications button */}
    {applications.length > 4 && (
      <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#3e4646",
            color: "#3e4646",
            "&:hover": {
              borderColor: "#95af29",
              color: "#95af29",
            },
          }}
        >
          View All Applications ({applications.length})
        </Button>
      </Grid>
    )}
  </Grid>
)}
      </Paper>
    </div>
  );
};

Aprofile.propTypes = {
  appliedJobs: PropTypes.array,
};

export default Aprofile;