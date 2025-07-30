import AddForm from "@/components/AddForm";
import UpdateForm from "@/components/UpdateForm";


const UpdateProductPage = () => {
  return (
      <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
          <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto text-black">
              Update product
          </h2>
          <UpdateForm/>
    </div>
  )
}

export default UpdateProductPage