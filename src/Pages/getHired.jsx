import {
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useContextProvider } from "../providers";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import DisplayDetails from "../Components/displayDetails";

const GetHire = () => {
  const { type, user, mposts } = useContextProvider();
  const [jobPosts, setJobPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (user && user._id) {
      const fetchAllJobPosts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/v1/musers/jobPost/getAllPost`,
            {
              withCredentials: true,
            }
          );

          // The data comes in the data property of the response
          setJobPosts(response.data.posts);
          console.log("Posts fetched:", response.data);
        } catch (error) {
          console.error("Error fetching job posts:", error);
          toast.error(
            error.response?.data?.message || "Failed to fetch job posts"
          );
        }
      };

      fetchAllJobPosts();
    }
  }, [type, user, mposts]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
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

                <Typography variant="body2" color="text.secondary" paragraph>
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
                    onClick={() => {
                      handleOpenModal(job);
                      <DisplayDetails
                        open={modalOpen}
                        handleClose={handleCloseModal}
                        jobDetails={selectedJob}
                      />;
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
    </div>
  );
};

export default GetHire;
