import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { ICountry } from '../../../models/Country';
import { IState } from '../../../store';
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CancelButton,
  SaveButton,
} from './styles';
import Input from '../../../components/Input';
import getValidationErrors from '../../../utils/getValidationErrors';
import countryActions from '../../../store/modules/country/actions';

interface FormData {
  name: string;
  capital: string;
  area: string;
  population: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Enter the name of the country'),
  capital: Yup.string().required('Enter the capital of the country'),
  area: Yup.string().required('Enter the area of the country'),
  population: Yup.string().required('Enter the population of the country'),
});

const EditCountry: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const country = useSelector<IState, ICountry | undefined>(state =>
    state.country.list.find(c => c._id === id),
  );

  const handleOnSubmit = useCallback(
    async (data: FormData) => {
      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(countryActions.updateCountry({ id, data }));

        toast.success('Saved successfully!');
        history.push(`/country/${id}`);
      } catch (err) {
        if (err instanceof Yup.ValidationError && formRef.current) {
          const errors = getValidationErrors(err);
          formRef.current.setErrors(errors);
        } else {
          toast.error('Woops! An unnespected error ocourred');
        }
      }
    },
    [dispatch, id, history],
  );

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>Edit Country</h1>
        </CardHeader>

        <CardBody>
          <Form ref={formRef} onSubmit={handleOnSubmit} initialData={country}>
            <Input name="name" label="Country Name" />
            <Input name="capital" label="Capital" />
            <Input name="area" label="Area" type="number" />
            <Input name="population" label="Population" type="number" />
          </Form>
        </CardBody>

        <CardFooter>
          <CancelButton type="button" onClick={() => history.goBack()}>
            Cancel
          </CancelButton>

          <SaveButton
            type="button"
            onClick={() => formRef.current?.submitForm()}
          >
            Save
          </SaveButton>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default EditCountry;
