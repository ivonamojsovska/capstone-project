const AddTask = () => {
  return (
    <>
      <div className="container">
        <div className="add__task-container">
          <h3>Add Task</h3>
          <form>
            <div className="form__input">
              <input
                type="text"
                name="title"
                placeholder="What you need to do?"
                required
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                name="time"
                placeholder="What time?"
                required
              />
            </div>

            <div className="form__input">
              <input type="text" name="place" placeholder="Where?" required />
            </div>
            <div className="form__input">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
