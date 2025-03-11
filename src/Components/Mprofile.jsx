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
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import JobPost from "../subComponents/jobPost";
import "../Styles/features.css";
import { useState } from "react";
import { useContextProvider } from "../providers";

const Mprofile = ({ jobPosts }) => {
  const { user: userData } = useContextProvider();
  console.log(userData._id);
  const user = userData || {
    name: "John Doe",
    email: "john.doe@example.com",
    companyName: "Acme Corporation",
    phoneNo: "1234567890",
    createdAt: new Date().toISOString(),
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      {/* Profile Information Section with improved styling */}
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BusinessIcon
                      sx={{ mr: 2, color: "#3e4646", fontSize: 28 }}
                    />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Company
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {user.companyName}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

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
            Job Postings
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#95af29",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              padding: "10px 20px",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: "#7a9124",
                transform: "translateY(-2px)",
                boxShadow: 3,
              },
            }}
            onClick={handleOpen}
          >
            Create New Job
          </Button>

          <JobPost open={open} handleClose={handleClose} />
        </Box>

        <Divider sx={{ mb: 3 }} />

        {jobPosts.length === 0 ? (
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 4,
              },
            }}
          >
            <WorkIcon sx={{ fontSize: 80, color: "#95af29", mb: 2 }} />
            <Typography
              variant="h5"
              color="#3e4646"
              gutterBottom
              fontWeight="bold"
            >
              No Job Postings Yet
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Create your first job posting to start receiving applications.
            </Typography>
          </Card>
        ) : (
          <Grid container spacing={3}>
            {jobPosts.map((job, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {job.title}
                    </Typography>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <Chip
                        label={job.employmentType}
                        size="small"
                        sx={{
                          mr: 1,
                          bgcolor: "#3e4646",
                          color: "white",
                          fontWeight: "medium",
                        }}
                      />
                      <Chip
                        label={`₹${job.salary}`}
                        size="small"
                        sx={{
                          bgcolor: "#95af29",
                          color: "white",
                          fontWeight: "medium",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {job.description?.substring(0, 100)}...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: "medium", color: "#3e4646" }}
                      >
                        Posted: {formatDate(job.createdAt)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: "medium", color: "#e53935" }}
                      >
                        Expires: {formatDate(job.validity)}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Button
                        size="small"
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
                        View Details
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          bgcolor: "#95af29",
                          "&:hover": {
                            bgcolor: "#7a9124",
                          },
                        }}
                      >
                        Applications ({job.applications || 0})
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </div>
  );
};

export default Mprofile;
