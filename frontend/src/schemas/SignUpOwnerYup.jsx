import * as Yup from 'yup'

export const  SignUpOwner =Yup.object({

    name :Yup.string().min(2).max(30).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            '  Name can only contain Latin letters.'
        ).required("please enter your name."),
    email :Yup.string().trim().email().required("please enter your email id."),
    gender :Yup.string().required("Gender Not selected"),
    contactno :Yup.number()
    .required()
    .min(7000000000, '  Enter valid 10 Digit Number')
    .max(9999999999, '  Enter valid 10 digit Number')
    .label("mobile no"),
     password :Yup.string().trim().min(6).max(20).required("please enter password."),
     address :Yup.string().max(200).required("please enter your address."),
    
     question :Yup.string().required("please select one of the field."),
     answer :Yup.string().trim().max(50).required("please fill your answer."),

})