import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {LoginApi} from '../../Api/Login/LoginApi';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.directfn.com/en/">
          DirectFN
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  

export default function Login() {
    
    const [nonfill, setnonfill] = useState(false);
    const [invalid, setinvalid] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const user = {
          userName:data.get('uname'),password:data.get('password'),
        }
            if(data.get('uname')!==""&&data.get('password')!=="")
            {
              const response = await LoginApi(user);
              if(response.success === true)
              {
                //console.log("user can sign in")
                window.location.href = '/asset';
              }else
              {
                setinvalid(true);
                
                setTimeout(() => {
                  setinvalid(false);
                }, 2000);
              }
              

                
            }else{
                setnonfill(true);
                setTimeout(() => {
                  setnonfill(false);
                }, 2000);
            }
        
    
      };
  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.thesoftwarereport.com/wp-content/uploads/2020/08/Tech-company-IPO.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            

              <TextField
                margin="normal"
                required
                fullWidth
                id="uname"
                label="User Name"
                name="uname"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't Have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
                  {nonfill?( <Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
                            Please input both user name and password! 
                    </Alert></Stack>):null}
                {invalid?( <Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
                            Invalid Credentials!
                </Alert></Stack>):null}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    
  );
}
