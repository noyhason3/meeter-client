import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import './Personalpage.scss'
import { useForm } from 'react-hook-form';
import { submitForm } from '../../store/features/personal-form/personalFormActions';

type PersonalFormData = {
    firstName: string;
    lastName: string;
};

export const Personalpage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PersonalFormData>();
    const dispatch = useDispatch();
    const userActiveId = useSelector((state: RootState) => state.personalForm.userActiveId);
    const formValues = useSelector((state: RootState) => state.personalForm.values);

    const isLoading = useSelector((state: RootState) => state.personalForm.isLoading);

    const onSubmit = handleSubmit((data: PersonalFormData) => {
        dispatch(submitForm({ id: userActiveId, data }) as any);
    });


    return (
        <section className='personalpage'>Personalpage

            <form onSubmit={onSubmit}>
                <input {...register('firstName', { required: true })} />
                {errors.firstName && <span>This field is required</span>}

                <input {...register('lastName', { required: true })} />
                {errors.lastName && <span>This field is required</span>}

                <button type="submit">Submit</button>
            </form>



        </section>
    )
}