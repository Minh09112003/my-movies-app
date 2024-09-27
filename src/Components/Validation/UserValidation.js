import * as yup from 'yup'

// Login validation
const LoginValidation = yup.object().shape({
    email: yup.string().email().required("Vui lòng nhập email").trim(),
    password: yup.string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải trên 8 ký tự")
    .max(20, "Mật khẩu phải không quá 20 ký tự")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa ít nhất 1 số")
});

// register validation
const RegisterValidation = yup.object().shape({
    email: yup.string().email().required("Vui lòng nhập email").trim(),
    password: yup.string()
    .required('Vui lòng nhập mật khẩu')
    .min(8, "Mật khẩu phải trên 8 ký tự")
    .max(20, "Mật khẩu phải không quá 20 ký tự")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa ít nhất 1 số"),
    fullName: yup.string().required("Vui lòng nhập tên đầy đủ")
    .max(20, "Tên không quá 20 ký tự")
    .matches(/^[\p{L}\s]*$/u, "Tên chỉ được chứa chữ cái và khoảng trắng"),
});

const ProfileValidation = yup.object().shape({
    fullName: yup.string()
        .required("Vui lòng nhập tên đầy đủ")
        .max(20, "Tên đầy đủ phải không quá 20 ký tự")
        .matches(/^[\p{L}\s]*$/u, "Tên chỉ được chứa chữ cái và khoảng trắng"),
    email: yup.string()
        .email("Vui lòng nhập email hợp lệ")
        .required("Vui lòng nhập email")
        .trim(),
});

const PasswordValidation = yup.object().shape({
    oldPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải trên 8 ký tự")
    .max(20, "Mật khẩu phải không quá 20 ký tự")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa ít nhất 1 số"),
    newPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải trên 8 ký tự")
    .max(20, "Mật khẩu phải không quá 20 ký tự")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa ít nhất 1 số"),
    confirmPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải trên 8 ký tự")
    .max(20, "Mật khẩu phải không quá 20 ký tự")
    .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa ít nhất 1 số")
    .oneOf([yup.ref("newPassword"), null], "Mật khẩu phải trùng khớp")
})


export { 
    LoginValidation, 
    RegisterValidation, 
    ProfileValidation,
    PasswordValidation 
  }