import React, { useState, useEffect, Link } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import CategoryServices from "./Services/CategoryServices";
import CountryServices from "./Services/CountryServices";
import { Button, makeStyles, InputAdornment } from "@material-ui/core";
import UserServices from "./Services/UserServices";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

const UserForm = (props) => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1990-08-19")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date instanceof Date && !isNaN(date)) {
      let dateString =
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
        "/" +
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)) +
        "/" +
        date.getFullYear();
      props.handleChange({ name: "birthdate", value: dateString });
    }
  };

  const handleChange = (event) => {
    props.handleChange(event.target);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await CategoryServices.getCategories();
      setCategories(result.data);
      const countriesResponse = await CountryServices.getCountries();
      console.log(countriesResponse);
      setCountries(countriesResponse.data);
      console.log(props);
      if (props.user && props.user.birthdate) {
        let dateParts = props.user.birthdate.split("/");

        setSelectedDate(
          new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
        );
      }
    }
    fetchData();
  }, [props.user]);

  const { user } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ width: "unset" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={user.firstname}
            onChange={handleChange}
            fullWidth
            autoComplete="given-name"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={user.lastname}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
          <Select
            required
            native
            name="countryid"
            value={user.countryid}
            defaultValue="24"
            id="grouped-native-select"
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {countries.map((country) => (
              <option value={country.id}>{country.name}</option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
          <Select
            required
            native
            name="categoryid"
            value={user.category}
            // defaultValue="1"
            onChange={handleChange}
            id="grouped-native-select"
            style={{ width: "100%" }}
          >
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="eyes"
            name="eyes"
            value={user.eyes}
            label="Eyes"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="weight"
            name="weight"
            value={user.weight}
            label="Weight (Kg)"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="waistcm"
            name="waistcm"
            value={user.waistcm}
            label="Waist(cm)"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="waistinch"
            name="waistinch"
            value={user.waistinch}
            label="Waist(inch)"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="hipscm"
            name="hipscm"
            value={user.hipscm}
            label="Hips(cm)"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="hipsinch"
            name="hipsinch"
            value={user.hipsinch}
            label="Hips(inch)"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="chestcm"
            name="chestcm"
            value={user.chestcm}
            label="Chest(cm)"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="chestinch"
            name="chestinch"
            value={user.chestinch}
            label="Chest(inch)"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="shoeeu"
            name="shoeeu"
            value={user.shoeeu}
            label="Shoe Size(EU)"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="shoeus"
            name="shoeus"
            value={user.shoeus}
            label="Shoe Size(US)"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="hair"
            name="hair"
            value={user.hair}
            label="Hair"
            fullWidth
            autoComplete="shipping address-level2"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="skin"
            name="skin"
            value={user.skin}
            label="Skin"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="heightcm"
            name="heightcm"
            value={user.heightcm}
            label="Height (cm)"
            type="number"
            fullWidth
            autoComplete="shipping postal-code"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="social"
            value={user.social}
            name="social"
            label="Followers (K)"
            type="number"
            fullWidth
            autoComplete="shipping country"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date of birth"
              value={selectedDate}
              onChange={handleDateChange}
              keybo
              KeyboardButtonProps={{
                "aria-label": "change date",
                style: { display: "none" },
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="birthplace"
            value={user.birthplace}
            name="birthplace"
            label="Birth Place"
            fullWidth
            autoComplete="shipping country"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            onChange={handleChange}
            id="bio"
            name="bio"
            value={user.bio}
            label="Bio"
            fullWidth
            autoComplete="shipping country"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
