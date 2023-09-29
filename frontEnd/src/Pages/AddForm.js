import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  age: yup
    .number()
    .required('Age is required')
    .min(0, 'Age must be a positive number'),
  dob: yup
    .date()
    .required('Date of Birth is required')
    .max(new Date(), 'DOB cannot be in the future'),
  maritalStatus: yup.string().required('Marital Status is required'),
  locationPreference: yup.boolean(),
  hobbies: yup.array().min(1, 'Select at least one hobby'),
});

const FormComponent = () => {

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
    maritalStatus: 'single',
    locationPreference: false,
    hobbies: [],
    locationPreferences: [], // Initialize the array here
  },
  validationSchema,
  onSubmit: (values) => {
    // Handle form submission here
    console.log(values);
  },
});

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} padding= "100px">
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            variant="outlined"
            {...formik.getFieldProps('firstName')}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            variant="outlined"
            {...formik.getFieldProps('lastName')}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="age"
            name="age"
            label="Age"
            fullWidth
            variant="outlined"
            type="number"
            {...formik.getFieldProps('age')}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dob"
            name="dob"
            label="Date of Birth"
            fullWidth
            variant="outlined"
            type="date"
            {...formik.getFieldProps('dob')}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              id="maritalStatus"
              name="maritalStatus"
              {...formik.getFieldProps('maritalStatus')}
              row
            >
              <FormControlLabel value="single" control={<Radio />} label="Single" />
              <FormControlLabel value="married" control={<Radio />} label="Married" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                id="locationPreference"
                name="locationPreference"
                {...formik.getFieldProps('locationPreference')}
                color="primary"
              />
            }
            label="Location Preference"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Select
              id="hobbies"
              name="hobbies"
              label="Hobbies"
              multiple
              value={formik.values.hobbies}
              onChange={formik.handleChange}
              error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
              fullWidth
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="reading">Reading</MenuItem>
              <MenuItem value="gardening">Gardening</MenuItem>
              <MenuItem value="cooking">Cooking</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormGroup>
  <FormControlLabel
    control={
      <Checkbox
        id="indore"
        name="locationPreferences"
        value="Indore"
        onChange={formik.handleChange}
        checked={formik.values.locationPreferences.includes('Indore')}
        color="primary"
      />
    }
    label="Indore"
  />
  <FormControlLabel
    control={
      <Checkbox
        id="bhopal"
        name="locationPreferences"
        value="Bhopal"
        onChange={formik.handleChange}
        checked={formik.values.locationPreferences.includes('Bhopal')}
        color="primary"
      />
    }
    label="Bhopal"
  />
  <FormControlLabel
    control={
      <Checkbox
        id="ujjain"
        name="locationPreferences"
        value="Ujjain"
        onChange={formik.handleChange}
        checked={formik.values.locationPreferences.includes('Ujjain')}
        color="primary"
      />
    }
    label="Ujjain"
  />
  <FormControlLabel
    control={
      <Checkbox
        id="dewas"
        name="locationPreferences"
        value="Dewas"
        onChange={formik.handleChange}
        checked={formik.values.locationPreferences.includes('Dewas')}
        color="primary"
      />
    }
    label="Dewas"
  />
</FormGroup>
          </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
