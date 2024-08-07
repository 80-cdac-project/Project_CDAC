import * as Yup from 'yup'

export const  AddApartmentYuup =Yup.object({


    name :Yup.string().trim().min(3).max(35).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            '  Name can only contain Latin letters.'
        ).required("please enter your name"),
    address :Yup.string().trim().max(250).required("please enter address"),    
   
    city:Yup.string().trim().max(30).min(2).matches(
        // /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        //     '  City can only contain Latin letters.'
        ).required("please enter your city"),
    state:Yup.string().trim().max(30).min(2).matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                '  state can only contain Latin letters.'
            ).required("please enter state"),    
    rent :Yup.string().min(0).required("please provide monthly rent."),        
    ebill :Yup.string().min(0).required("please provide electricity bill"),
    extra :Yup.string().min(0).required("please provide extra facility."),
    gender :Yup.string().required("please specify gender requirement"),
    atype :Yup.string().required("please select type"),
    furnish :Yup.string().required(" please select one of the field"),      
     totalbeds :Yup.string().min(1).required("please enter Bed availability")   
    
})