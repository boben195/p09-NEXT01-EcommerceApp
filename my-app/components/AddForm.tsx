

const AddForm = () => {
  return (
      <form action="" className="text-black ">
          <div>
              <label htmlFor="">Product Image:</label>
              <input type="file" accept="image/*" name="image" />
          </div>
          <div>
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Enter product name" />
          </div>
          <div>
              <label htmlFor="">Price:</label>
              <input type="number" name="price" placeholder="Enter product price" />
          </div>
          <div>
              <label htmlFor="">Sellers Link:</label>
              <input type="text" name="link" placeholder="Link to where buyers can find you" />
          </div>
          <div>
              <label htmlFor="">Description</label>
              <textarea name="description" placeholder="Enter the product description" rows={4}></textarea>
          </div>
    </form>
  )
}

export default AddForm