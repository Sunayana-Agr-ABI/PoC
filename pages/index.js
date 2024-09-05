import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  FormHelperText
} from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });

      if (response.status === 200) {
        router.push('/dashboard'); // Redirect to the dashboard after successful login
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container
      maxWidth="100vw"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f0f0f0',
        padding: "0px !important",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ padding: 0 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ padding: 0 }}
        >
          <img
            src="https://www.theforage.com/blog/wp-content/uploads/2023/01/working-at-walmart.jpg"
            alt="Walmart"
            style={{ width: '60vw', height: '99vh' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ padding: 0 }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '80vh',
              maxWidth: '34vw',
              marginLeft: '13vw',
              
            }}
          >
            <img
              src="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png"
              width="250px"
              height="150px"
              alt="Walmart Logo"
            />
            <Divider sx={{ width: '85%', my: 2 }} />
            <Typography variant="h5" color="#9f9f9f">
              Sign in to your account
            </Typography>
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && (
                <FormHelperText error sx={{ mb: 2 }}>
                  {error}
                </FormHelperText>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
