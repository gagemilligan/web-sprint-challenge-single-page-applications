import * as yup from 'yup'

const formSchema = yup.object().shape({
    Size: yup
    .string()
    .trim()
    .oneOf(["10 inch", "14 inch", "18 inch"], 'Size is required'),
    Crust: yup
    .string()
    .trim()
    .oneOf(["Hand Tossed", "Thin", "Gluten Free", "Stuffed"], 'Crust is required'),
    Sauce: yup
    .string()
    .trim()
    .oneOf(["Classic", "BBQ", "Ranch", "Olive Oil"], 'Sauce is required'),
    Cheese: yup
    .string()
    .trim()
    .oneOf(["House Blend", "Extra Cheese"], 'Cheese is required'),
    
  })

  export default formSchema