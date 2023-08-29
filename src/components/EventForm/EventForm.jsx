import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import { categories, priorities } from "../../assets/options";
import InputSelect from "./InputSelect/InputSelect";
import InputDate from "./InputDate/InputDate";
import { API } from "../../api";
import { validationSchema } from "../schemas";

import {
  StyledForm,
  Container,
  Input,
  Textarea,
  Label,
  Btn,
  Wrapper,
  ErrorText,
  ClearBtn,
  CloseIcon,
} from "./EventForm.styled";
import InputTime from "./InputTime/InputTime";

function EventForm() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
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
      <ErrorMessage name={name}>
        {(message) => <ErrorText>{message}</ErrorText>}
      </ErrorMessage>
    );
  };

  const handleSubmit = async (values) => {
    //console.log(values);

    await API.createEvent(values);
    toast.success("A new event has been created!");
    navigate("/");
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form autoComplete="off">
          <StyledForm>
            <Container>
              <Wrapper>
                <Label htmlFor="title">Title</Label>
                <Input
                  placeholder="Input"
                  name="title"
                  id="title"
                  $error={errors.title && touched.title}
                />
                <ClearBtn
                  type="button"
                  title="clear field"
                  onClick={() =>
                    handleChange({ target: { name: "title", value: "" } })
                  }
                >
                  <CloseIcon
                    $error={errors.title && touched.title}
                    $filled={values.title}
                  />
                </ClearBtn>

                <FormError name="title" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  placeholder="Input"
                  component="textarea"
                  name="description"
                  id="description"
                />
                <ClearBtn
                  type="button"
                  title="clear field"
                  onClick={() =>
                    handleChange({ target: { name: "description", value: "" } })
                  }
                >
                  <CloseIcon
                    $error={errors.description && touched.description}
                    $filled={values.description}
                  />
                </ClearBtn>
                <FormError name="description" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="date">Select date</Label>
                <Field name="date">
                  {({ field, form, meta }) => (
                    <InputDate field={field} form={form} />
                  )}
                </Field>
                <FormError name="date" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="time">Select time</Label>
                <Field name="time">
                  {({ field, form }) => <InputTime field={field} form={form} />}
                </Field>
                <FormError name="time" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="place">Location</Label>
                <Input
                  placeholder="Input"
                  name="place"
                  id="place"
                  $error={!!errors.place && touched.place}
                />
                <ClearBtn
                  type="button"
                  title="clear field"
                  onClick={() =>
                    handleChange({ target: { name: "place", value: "" } })
                  }
                >
                  <CloseIcon
                    $error={errors.place && touched.place}
                    $filled={values.place}
                  />
                </ClearBtn>
                <FormError name="place" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="category">Category</Label>
                <Field name="category" id="category">
                  {({ field, form }) => (
                    <InputSelect
                      field={field}
                      form={form}
                      options={categories}
                    />
                  )}
                </Field>
                <FormError name="category" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="photo">Add picture</Label>
                <Input
                  placeholder="Input"
                  name="photo"
                  id="photo"
                  $error={errors.photo && touched.photo}
                />
                <ClearBtn
                  type="button"
                  title="clear field"
                  onClick={() =>
                    handleChange({ target: { name: "photo", value: "" } })
                  }
                >
                  <CloseIcon
                    $error={errors.photo && touched.photo}
                    $filled={values.photo}
                  />
                </ClearBtn>
                <FormError name="photo" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="priority">Priority</Label>
                <Field id="priority" name="priority">
                  {({ field, form }) => (
                    <InputSelect
                      field={field}
                      form={form}
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
      )}
    </Formik>
  );
}

export default EventForm;
