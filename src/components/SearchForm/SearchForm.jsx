import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form, FormInput, SearchButton } from './SearchForm.styled';
import { FaSearch } from "react-icons/fa";

function SearchForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      searchValue: '',
    },
    onSubmit: values => {
      onSubmit(values.searchValue);
      formik.resetForm();
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="searchValue"
        onChange={handleChange}
        value={values.searchValue}
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <FaSearch></FaSearch>
      </SearchButton>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;