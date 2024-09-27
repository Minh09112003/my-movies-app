import toast from "react-hot-toast";
import Axios from "./Axios";

const uploadImageservice = async (file, setLoading) => {
    try {
        setLoading(true);
        const {data} = await Axios.post('/upload', file)
        setLoading(false)
        toast.success('Ảnh được cập nhật thành công')
        return data
    } catch (error) {
        setLoading(false)
        toast.error('Đã xảy ra sự cố')
    }
}

export {uploadImageservice}