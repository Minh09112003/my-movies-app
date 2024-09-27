import * as yup from "yup"

const ReviewValidation = yup.object().shape({
    comment: yup
    .string()
    .required("Hãy nhập bình luận")
    .max(150, "Comment không được dài quá 150 ký tự"),
    rating: yup.number().required("Chọn đánh giá")
})

const movieValidation = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên phim")
    .max(50, "Tên phim phải ít hơn 50 ký tự"),
    time: yup.number().required("Vui lòng nhập thời lượng phim"),
    language: yup.string().required("Vui lòng nhập ngôn ngữ của phim"),
    year: yup.number().required("Vui lòng nhập năm sản xuất phim"),
    category: yup.string().required("Vui lòng chọn thể loại của phim")
    .max(300, "Mô tả của phim không được quá 300 ký tự"),
    desc: yup
    .string()
    .required("Vui lòng viết mô tả cho phim")
    .max(300, "Mô tả của phim không được dài quá 300 ký tự")
})


export {
    ReviewValidation,
    movieValidation
}