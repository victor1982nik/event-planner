import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { categories, priorities } from "../../assets/options";
import { Field } from "formik";
import InputSelect from "./InputSelect/InputSelect";
import InputDate from "./InputDate/InputDate";
import { API } from "../../api";
import { toast } from "react-toastify";

import {
  StyledForm,
  Container,
  Input,
  Textarea,
  Label,
  Btn,
  Wrapper,
  ErrorText,
} from "./EventForm3.styled";

function EventForm() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    date: "",
    time: "",
    place: "",
    category: "",
    photo: "",
    priority: "",
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required()
      .matches(/^(?! )(?!-)[a-zA-Z\d\s-]+$/, "Invalid input"),
    description: Yup.string().required(),
    date: Yup.date().required(),
    time: Yup.string()
      .required()
      .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid input"),
    place: Yup.string()
      .required()
      .matches(/^(?! )(?!-)[a-zA-Z\d\s-]+$/, "Invalid input"),
    category: Yup.string().required(),
    photo: Yup.string().url().required(),
    priority: Yup.string().required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);

    await API.createEvent(values);
    toast.success("A new event has been created!");
    navigate("/");
    // resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <StyledForm>
          <Container>
            <Wrapper>
              <Label htmlFor="name">Title</Label>
              <Input placeholder="Input" name="name" />

              <FormError name="name" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Input"
                component="textarea"
                name="description"
              />
              <FormError name="description" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="date">Select date</Label>
              <Field id="date" name="date">
                {({ field, form, meta }) => (
                  <InputDate
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Date"}
                  />
                )}
              </Field>
              <FormError name="date" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="time">Select time</Label>
              <Input placeholder="12:00" name="time" />
              <FormError name="time" />
            </Wrapper>

            <Wrapper>
              <Label htmlFor="place">Location</Label>
              <Input placeholder="Input" name="place" />
              <FormError name="place" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="category">Category</Label>
              <Field name="category">
                {({ field, form, meta }) => (
                  <InputSelect
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Category"}
                    options={categories}
                  />
                )}
              </Field>
              <FormError name="category" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="photo">Add picture</Label>
              <Input placeholder="Input" name="photo" />
              <FormError name="photo" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="priority">Priority</Label>
              <Field name="priority">
                {({ field, form, meta }) => (
                  <InputSelect
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Priority"}
                    options={priorities}
                  />
                )}
              </Field>
              <FormError name="priority" />
            </Wrapper>
          </Container>

          <Btn type="submit">Add event</Btn>
        </StyledForm>
      </Form>
    </Formik>
  );
}

export default EventForm;
