

const AddForm = () => {
  return (
      <form action="" className="text-black w-full max-w-xl mx-auto flex flex-col justify-center
       items-center space-y-4 mt-3 md:mt-5">
          <div className="flex flex-col w-full">
              <label htmlFor="">Product Image:</label>
              <input type="file" accept="image/*" name="image" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Enter product name" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Price:</label>
              <input type="number" name="price" placeholder="Enter product price" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Sellers Link:</label>
              <input type="text" name="link" placeholder="Link to where buyers can find you" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Description</label>
              <textarea name="description" placeholder="Enter the product description" rows={4} className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer">Add Product</button>
    </form>
  )
}

export default AddForm