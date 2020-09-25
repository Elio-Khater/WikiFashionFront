import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import AgenciesServices from "./Services/AgenciesServices";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    //marginTop: theme.spacing(3),
    //marginLeft: theme.spacing(1),
    padding: "20px",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const AddAgencies = (props) => {
  const [addAgency, setAddAgency] = useState("");
  const [agencies, setAgencies] = React.useState([]);
  const [addAgencyLink, setAddAgencyLink] = useState("");

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const result = await AgenciesServices.getAgencies();
      setAgencies(result.data);
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    props.addAgenciesToUser(event.target.value);
  };
  const handleChangeAgency = (event) => {
    if (event.target.name === "agency") {
      setAddAgency(event.target.value);
    } else {
      setAddAgencyLink(event.target.value);
    }
  };

  const handleAdd = async () => {
    console.log(addAgency);
    let response = await AgenciesServices.addAgency(addAgency, addAgencyLink);
    if (response.status === 200) {
      const result = await AgenciesServices.getAgencies();
      setAgencies(result.data);
    }
  };
  const { selectedAgencies } = props;
  console.log(agencies);
  console.log(selectedAgencies);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-mutiple-checkbox-label">
              Select User Agencies
            </InputLabel>

            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={selectedAgencies}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => {
                const string = selected.map((id) => {
                  if (agencies.length > 0) {
                    let obj = agencies.find((x) => x.id === id);
                    console.log(obj);
                    return obj.name;
                  }
                });
                return string.join(",");
              }}
              MenuProps={MenuProps}
            >
              {agencies.map((agency) => (
                <MenuItem key={agency.id} value={agency.id}>
                  <Checkbox
                    checked={selectedAgencies.indexOf(agency.id) > -1}
                  />
                  <ListItemText primary={agency.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="agency"
            name="agency"
            label="Agency"
            onChange={handleChangeAgency}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="link"
            name="link"
            label="Link (always start with https://)"
            onChange={handleChangeAgency}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            onClick={handleAdd}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add New Agency
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAgencies;
