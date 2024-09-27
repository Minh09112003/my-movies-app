import toast from "react-hot-toast";
import { useSelector } from 'react-redux'
import { likeMovieAction } from "../Redux/Actions/userAction"


// check if movie is added to favorites
const IfMovieLiked = (movie) => {
    const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies)
    return likedMovies?.find((likedMovie) => likedMovie?._id === movie?._id) 
}

// like movie functionalty
const LikeMovie = (movie, dispatch, userInfo) => {
    return !userInfo
    ? toast.error("Hãy đăng nhập để add phim vào mục yêu thích")
    : dispatch(
        likeMovieAction({
            movieId: movie._id
        })
    )
}

// download video url fuctionally
// const DownloadVideo = async(videoUrl, setProgress) => {
//     const {data} = await Axios({
//         url: videoUrl,
//         method: "GET",
//         responseType: "blob",
//         onDownloadProgress: (progressEvent) => {
//             const {loaded, total} = progressEvent
//             let percent = Math.floor((loaded * 100) / total)
//             setProgress(percent)
//             if (percent > 0 && percent < 100) {
//                 toast.loading(`Đang tải về... ${percent}%`, {
//                     id: "download",
//                     duration: 100000000,
//                     position: "bottom-right",
//                     style: {
//                         background: "#0B0F29",
//                         color: "#fff",
//                         borderRadius: "10px",
//                         border: ".5px solid #F20000",
//                         padding: "16px"
//                     },
//                     icon: <IoMdCloud className="text-2xl mr-2 text-subMain"/>
//                 })
//             }
//             else {
//                 toast.dismiss("tải xuống")
//             }
//         }
//     })
//     return data
// }

export {IfMovieLiked, LikeMovie}