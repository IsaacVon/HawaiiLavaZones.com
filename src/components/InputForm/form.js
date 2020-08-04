import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PriceSlider from "../contact/priceSlider";
import TimeSlider from "../contact/timeSlider";
import Slider from "@material-ui/core/Slider";

export const Form = (props) => {
  const {
    values: {
      investmentAddress,
      questions,
      name,
      email,
      This, // Phone verification package does now allow custom error messages
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
    handlePriceDrag, // Having a hard time passing non standard props..
    handleTimeDrag
    
    
  } = props;
  
  console.log("props render2: ", handleSubmit)
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };


  return (
    <form
      onSubmit={handleSubmit}
    >
      <TextField
        variant="outlined"
        id="investmentAddress"
        name="investmentAddress"
        helperText={touched.investmentAddress ? errors.investmentAddress : ""}
        error={touched.investmentAddress && Boolean(errors.investmentAddress)}
        label="Investment Property Address"
        value={investmentAddress}
        onChange={change.bind(null, "investmentAddress")}
        fullWidth
        autoFocus
      />
      <TextField
        variant="outlined"
        id="questions"
        name="questions"
        helperText={touched.questions ? errors.questions : ""}
        error={touched.questions && Boolean(errors.questions)}
        label="Questions"
        value={questions}
        onChange={change.bind(null, "questions")}
        fullWidth
      />

      <PriceSlider 
      handlePriceDrag={handlePriceDrag} 
      />
      <TimeSlider 
      handleTimeDrag={handleTimeDrag} 
      />

      <TextField
        variant="outlined"
        id="name"
        name="name"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="Name"
        value={name}
        onChange={change.bind(null, "name")}
        fullWidth
      />
      <TextField
        variant="outlined"
        id="email"
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="Email"
        fullWidth
        value={email}
        onChange={change.bind(null, "email")}
      />      
      <TextField
        variant="outlined"
        id="This"
        name="This"
        helperText={touched.This ? errors.This : ""}
        error={touched.This && Boolean(errors.This)}
        label="Phone"
        fullWidth
        value={This}
        onChange={change.bind(null, "This")}
      />


      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
